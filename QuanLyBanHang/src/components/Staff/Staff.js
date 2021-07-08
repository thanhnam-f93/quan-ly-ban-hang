
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiStaff } from '../../apis/Apis';
import StaffItem from './StaffItem/StaffItem';
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

  const [staffs, setStaffs] = useState([]);
  const [currentPage, setCurrentPage] = useState(7)
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios(ApiStaff)
      .then(response => { setStaffs(response.data.content);
         setTotalPages(response.data.totalPages); 
        //  setCurrentPage(response.data.pageable.pageSize)
        console.log('data bình ', response); console.log("totalPages ", totalPages) })
      .catch(error => console.log('error'))
  }, []);
  console.log("totalPages lần 2 ", totalPages)
  return (
    <div>

      <div style={{ display: "flex" }}>
        <div >
          <h3>Quản lý nhân viên</h3>
        </div>

        
          {/* <CNavbar light color="light"> */}
            {/* <CForm inline>
              <CInput
                className="mr-sm-2"
                placeholder="Search"
                size="md"
              />
              <CButton color="outline-success" className="my-2 my-sm-0" type="submit">Search</CButton>
            </CForm> */}
          {/* </CNavbar> */}
     
          <div style = {{marginLeft: "505px", marginRight: "20px"}}>
          <input type="text" placeholder ="Search" style = {{height: "34px", width:"289px", padding: "10px 15px 10px 15px", border: "none"}} />
          <button style = {{padding: "1px 10px 0px 10px", height: "34px", border: "none", backgroundColor: "white"}}><i class="fas fa-search" style = {{ color: "green", fontSize: "19px"}}></i></button>
        </div>
     
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


