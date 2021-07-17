
import React from 'react'
import { useState, useEffect } from 'react';
import { callApi } from 'src/apis/Apis';
import RoleItem from './RoleItem/RoleItem';
import {Link} from 'react-router-dom';

const Role = () => {

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    callApi('get', 'roles')
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
          className="btn btn-success"
          style={{ marginLeft: "10px", backgroundColor: "#0089ff" }}     
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

       {/* Chi tiết vai trò */}
       <div className="row" style={{ marginTop: "15px" }}>

<div className="col-lg-4">
  <div style={{ width: "360px" }}>
    <h5 style={{ marginTop: "12px" }}>Quản lý vai trò và phân quyền</h5>
    <p></p>
    <p>Hỗ trợ thêm mới, phân quyền và quản lý sửa các vai trò của cửa hàng</p>
  </div>
</div>

<div className="col-lg-8">
  <div style={{ padding: "13px 20px" }}>
    <div className="row">
    <table className=" table table-striped table-bordered" style = {{backgroundColor: "white"}}>
        <thead>
          <tr>
            <th>Vai trò</th>
            <th>Ghi chú</th>
            <th>Ngày tạo</th>
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
  </div>
</div>
</div>
{/* End - Chi tiết vai trò */}


    </div>
  )
}

export default Role


