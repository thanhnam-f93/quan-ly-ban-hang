import React, { useState } from 'react'
import { callApi } from 'src/apis/Apis';
import {
    CCardBody,
    CFormGroup,
    CLabel,
    CInput,
    CTextarea
  } from '@coreui/react'
import { useHistory } from 'react-router-dom';

const AddRole = () => {

    let history = useHistory();

    const [role, setRole] = useState({createdDate: new Date(), createBy: localStorage.getItem('user')})

    const onHandleChange = (e) => {
        const {name, value} = e.target;
        setRole({...role, [name] : value});
    }

    const addRole = (e) => {
      e.preventDefault();
      callApi('post', 'roles', role)
      .then(response => {history.goBack()})
  }

  return (
    <div>
      <h3>Thêm mới vai trò</h3>
      <hr />
        <div className="row">
          <div className="card col-lg-6" style = {{marginLeft: "14px"}}>
            {/* <CCard>            */}
              <CCardBody> 
                  <form action = "" >
                <CFormGroup>
                  <CLabel>Tên vai trò</CLabel>
                  <CInput
                  type = "text"
                    name="name"
                    placeholder="Nhập vai trò"
                    onChange={onHandleChange}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Ghi chú</CLabel>
                  <CTextarea
                  type = "text"
                    name = "notes"       
                    placeholder="Nhập ghi chú"
                    onChange={onHandleChange}
                  />
                </CFormGroup>
                <button className="btn btn-danger btn-light" type="reset" style={{ marginLeft: "10px" }}>Hủy</button>
                <button className="btn btn-success"  style={{ marginLeft: "10px" }} type = "submit" onClick = {addRole}>Thêm</button>
                </form>
              </CCardBody>
            {/* </CCard> */}
         </div>
        </div>  
    </div>
  )
}

export default AddRole
