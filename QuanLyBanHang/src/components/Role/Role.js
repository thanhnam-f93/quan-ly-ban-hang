
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiRole } from 'src/apis/Apis';
import RoleItem from './RoleItem/RoleItem';
import {Link} from 'react-router-dom';

const Role = () => {

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios(ApiRole)
      .then(response => { setRoles(response.data); console.log('data role ', response); })
      .catch(error => console.log('error'))
  }, []);

  return (
    <div>
      <div style = {{ display: "flex"}}>
        <div >
          <h3>Danh sách vai trò</h3>
        </div>
          <div style = {{ marginLeft: "720px"}}>
          <Link to= '/settings/roles/new-role'>
        <button
          style={{ marginLeft: "10px" }}
          className="btn btn-success"
        >
          Thêm mới vai trò
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

      <table className=" table table-striped table-bordered" style = {{backgroundColor: "white"}}>
        <thead>
          <tr>
            <th>Mã vai trò</th>
            <th>Vai trò</th>
            <th>Ghi chú</th>
            <th>Ngày tạo</th>
            <th>Cập nhật</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((item) => {
            return (
              <RoleItem role={item}></RoleItem>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Role


