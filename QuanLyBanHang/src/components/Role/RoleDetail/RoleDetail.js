
import React, { useState } from 'react'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CTextarea
} from '@coreui/react'
import axios from 'axios';

const RoleDetail = (props) => {

const roleDetail = props.location.state.role;

const [role, setRole] = useState({
    id: roleDetail.id,
    name: roleDetail.name,
    notes: roleDetail.notes,
    createDate: roleDetail.createDate,
    createBy: roleDetail.createBy,
    modifiedDate: new Date(),
    modifiedBy: localStorage.getItem('user')
});

const onHandleChange = (e) => {
    const {name, value} = e.target;
    setRole({ ...role, [name] : value });
}


var data = JSON.stringify(role);
var config = {
  method: 'put',
  url: `http://localhost:8080/admin/roles/${roleDetail.id}`,
  headers: {
    // 'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
    'Content-Type': 'application/json'
  },
  data: data
};

const updateRole = () => {
    axios(config)
    .then(response => {console.log(response)})
    .catch(error => {console.log(error)})
}

  return (
    <div>
 <div>
    <h3>Chỉnh sửa vai trò</h3>
    <hr />
        <div className="row">
          <div className="col-lg-6">
            <CCard>
              <CCardBody> 
                  <form action = "" >
                <CFormGroup>
                  <CLabel>Tên vai trò</CLabel>
                  <CInput
                    defaultValue = {roleDetail.name}
                    name="name"
                    placeholder="Nhập vai trò"
                    onChange={onHandleChange}
                  />
                </CFormGroup>
          
                <CFormGroup>
                  <CLabel htmlFor="vat">Ghi chú</CLabel>
                  <CTextarea
                    defaultValue = {roleDetail.notes}
                    name = "notes"       
                    placeholder="Nhập ghi chú"
                    onChange={onHandleChange}
                  />
                </CFormGroup>
                <button className="btn btn-danger btn-light" type="reset" style={{ marginLeft: "10px" }}>Hủy</button>
                <button className="btn btn-success"  style={{ marginLeft: "10px" }} onClick = {updateRole}>Lưu</button>
                </form>
              </CCardBody>
            </CCard>
         </div>
        </div>  
        </div>
    </div>
   
  )
}

export default RoleDetail
