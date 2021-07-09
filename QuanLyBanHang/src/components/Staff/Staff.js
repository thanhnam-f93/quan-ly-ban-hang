
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiStaff } from '../../apis/Apis';
import StaffItem from './StaffItem/StaffItem';
import Search from './Search/Search';
import { Link } from 'react-router-dom';
import {
  CPagination,
  CInput,
  CButton,
  CCard,
  CCardHeader,
  CNavbar,
  CForm,
  CCardBody
} from '@coreui/react'


const Staff = () => {


  const [clickSearch, setClickSearch] = useState(0);

  const [keySearch, setKeySearch] = useState("");

  const getKeySearch = (e) => {
      const value = e.target.value;
      setKeySearch(value);
      console.log("keySearch ", keySearch);
  }

//   const searchStaffByName = () => {
//     axios(apiSeachStaff)
//       .then(response => {
//           setStaffSearch(response.data.content);
//           console.log('data search ', response.data)
//       })
//       .catch(error => console.log('error'))
// }

const searchStaffByName = () => {
    setClickSearch(clickSearch + 1);
  }


  const [staffs, setStaffs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0);


  var URL = ""
  if(clickSearch > 0) {
    URL = `http://localhost:8080/admin/staffs/search?name=${keySearch}`
  }else {
    URL = `http://localhost:8080/admin/staffs/?page=${currentPage - 1}`
  }

  const ApiStaff = {
    method: 'get',
    url: URL,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/json'
    }
  };

  useEffect(() => {
    axios(ApiStaff)
      .then(response => {
        setStaffs(response.data.content);
        setTotalPages(response.data.totalPages);
      })
      .catch(error => console.log('error'))
  }, [currentPage, clickSearch]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div >
          <h3>Quản lý nhân viên</h3>
        </div>
    
    {/* Search */}
        <div style={{ marginLeft: "500px", marginRight: "10px" }}>
                <input onChange={getKeySearch} 
                    type="text" placeholder="Search" style={{ height: "34px", width: "289px", padding: "10px 15px 10px 15px", border: "none" }} />
                <button onClick={searchStaffByName}
                    style={{ padding: "1px 10px 0px 10px", height: "34px", border: "none", backgroundColor: "white" }}>
                    <i class="fas fa-search" style={{ color: "green", fontSize: "19px" }}></i>
                </button>
            </div>
    
    {/*End -  Search */}

        <div style={{ margin: "0px" }} >
          <Link to='/settings/staffs/new-staff'>
            <button
              style={{ marginLeft: "10px" }}
              className="btn btn-success"
            >
              Thêm mới nhân viên
            </button>
          </Link>
          {/* <button
            style={{ marginLeft: "10px" }}
            className="btn btn-secondary"
          >
            Trợ giúp
          </button> */}
        </div>
      </div>
      <hr />
      <table className=" table table-striped table-bordered" style={{ backgroundColor: "white" }}>
        <thead>
          <tr>
            <th>Họ và tên</th>
            <th>Trạng thái</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Vai trò</th>
            <th>Cập nhật</th>
          </tr>
        </thead>
        <tbody>
          {staffs.map((item) => {
            return (
              <StaffItem staff={item} key={item.id}></StaffItem>
            )
          })}

        </tbody>
      </table>

      <CPagination
        activePage={currentPage}
        pages={totalPages}
        onActivePageChange={setCurrentPage}
      />
      <br></br>
    </div>
  )
}

export default Staff


