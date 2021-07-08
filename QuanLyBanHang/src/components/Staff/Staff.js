
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiStaff } from '../../apis/Apis';
import StaffItem from './StaffItem/StaffItem';
import { Link } from 'react-router-dom';
import {
  CPagination
} from '@coreui/react'


const Staff = () => {

  const [staffs, setStaffs] = useState([]);
  const [currentPage, setCurrentPage] = useState(2)

  useEffect(() => {
    axios(ApiStaff)
      .then(response => { setStaffs(response.data.content); console.log('data bình ', response); })
      .catch(error => console.log('error'))
  }, []);

  return (
    <div>

      <div style={{ display: "flex" }}>
        <div >
          <h3>Quản lý nhân viên</h3>
        </div>
        <div style={{ marginLeft: "720px" }}>
          <Link to='/settings/staffs/new-staff'>
            <button
              style={{ marginLeft: "10px" }}
              className="btn btn-success"
            >
              Thêm mới nhân viên
            </button>
          </Link>
          <button
            style={{ marginLeft: "10px" }}
            className="btn btn-secondary"
          >
            Trợ giúp
          </button>
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
            pages={10}
            onActivePageChange={setCurrentPage}
          />
          <br></br>

    </div>
  )
}

export default Staff


