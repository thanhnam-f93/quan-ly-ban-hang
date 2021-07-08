
import React, { useState, useEffect } from 'react'
import { ApiRole } from 'src/apis/Apis';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CLabel,
  CInput,

} from '@coreui/react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddStaff = () => {

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios(ApiRole)
      .then(response => { setRoles(response.data) })
      .catch(error => console.log('error'))
  }, []);

  let history = useHistory();

  const [staff, setStaff] = useState({ createdDate: new Date(), createBy: localStorage.getItem("user"), roleId: [1], status: "Đang làm việc" })

  const getValueSelect = () => {
    var select = document.getElementById('select')
    setStaff({ ...staff, roleId: [Number(select.value)] })
    console.log('select ', select.value)
    console.log('staff ở selct ', staff)
  }

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setStaff({ ...staff, [name]: value });
    console.log('data ', staff)
  }

  var data = JSON.stringify(staff);
  var config = {
    method: 'post',
    url: `http://localhost:8080/admin/staffs`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/json'
    },
    data: data
  };

  const createStaff = () => {
    axios(config)
      .then(response => { history.goBack() })
      .catch(error => { console.log(error) })
  }

  return (
    <div>
      <h3>Thêm mới nhân viên</h3>
      <hr />
      <div className="" style={{ backgroundColor: "white" }}>
        <div className="row">
          <div className=" col-lg-6">
            <CCard>
              <CCardBody>
                <CFormGroup>
                  <CLabel>Họ và tên</CLabel>
                  <CInput
                    name="fullName"
                    placeholder="Nhập họ và tên"
                    onChange={onHandleChange}
                  />
                </CFormGroup>

                <CFormGroup>
                  <CLabel htmlFor="company">Ngày sinh</CLabel>
                  <CInput
                    type="date"
                    name="dateOfBirth"
                    placeholder="Nhập ngày sinh"
                    onChange={onHandleChange}
                  />
                </CFormGroup>

                <CFormGroup>
                  <CLabel>Address</CLabel>
                  <CInput
                    name="address"
                    placeholder="Nhập địa chỉ"
                    onChange={onHandleChange}
                  />
                </CFormGroup>

                <CFormGroup>
                  <CLabel htmlFor="vat">Email</CLabel>
                  <CInput
                    name="mail"
                    placeholder="Nhập email"
                    onChange={onHandleChange}
                  />
                </CFormGroup>


              </CCardBody>
            </CCard>
          </div>

          <div className=" col-lg-6">
            <CCard>
              <CCardBody>
                <CFormGroup>
                  <CLabel htmlFor="vat">Số điện thoại</CLabel>
                  <CInput
                    name="phone"
                    placeholder="Nhập số điện thoại"
                    onChange={onHandleChange}
                  />
                </CFormGroup>

                <CFormGroup>
                  <CLabel htmlFor="vat">Mật khẩu</CLabel>
                  <CInput
                    name="passWord"
                    placeholder="Nhập mật khẩu"
                    onChange={onHandleChange}
                  />
                </CFormGroup>

                <CFormGroup>
                  <CLabel htmlFor="vat">Vai trò</CLabel>
                  <select className="custom-select" id="select" onClick={getValueSelect} >
                    {roles.map(item => {
                      return (
                        <option value={item.id} >{item.name}</option>
                      )
                    })}
                  </select>
                </CFormGroup>

              </CCardBody>
            </CCard>
          </div>
        </div>
        <div style={{ marginLeft: "950px", padding: "20px 0px" }}>
          <button
            type="reset"
            className="btn btn-light"
            style={{ marginLeft: "10px", padding: "7px 20px" }}
          >
            Hủy
          </button>
          <button
            className="btn btn-success"
            onClick={createStaff}
            style={{ marginLeft: "10px", padding: "7px 20px" }}
          >
            Thêm
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddStaff
