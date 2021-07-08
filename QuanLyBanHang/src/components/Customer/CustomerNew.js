import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import Swal from "sweetalert2";
import { reactLocalStorage } from "reactjs-localstorage";
import { dataGender } from "./dataGender";
import {
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CLabel,
  CInput,
  CTextarea,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
function CustomerNew() {
  const headers = {
    Authorization: "Bearer " + reactLocalStorage.get("token"),
  };
  const history = useHistory();
  const APIPost = "http://localhost:8080/customers";

  const [customer, setCustomer] = useState({
    createdDate: new Date(),
    modifiedDate: null,
    createBy: reactLocalStorage.get("name"),
    modifiedBy: "",
    status: "on",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCustomer({ ...customer, [name]: value });
    console.log(customer);
  };
  function getGender(e) {
    const value = e.value;
    setCustomer({ ...customer, gender: value });
  }
  function ResetForm() {
    const inputs = document.getElementsByTagName("input");
    console.log("input", inputs);
    for (const input of inputs) {
      input.value = "";
    }
  }
  const Save = async (e) => {
    e.preventDefault();
    console.log("this is cate", customer);
    axios
      .post(
        APIPost,
        customer,
        { headers }
      )
      .then(
        (response) => {
          console.log("resp", response);
          const inputs = document.getElementsByTagName("input");

          for (const input of inputs) {
            input.value = "";
          }
          Swal.fire("Good job!", "Delete Complete!", "success");
          Swal.fire("Good job!", "Thêm mới thành công", "success");
        },
        (error) => {
          console.log("error:  ", error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tạo mơi không thành công, vui lòng thử lại!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        }
      );
  };
  return (
    <div>
      <div className="row">
        <div className=" card col-lg-8 align-center">
          <CCard>
            <CCardHeader>Thêm mới Khách hàng</CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="vat">Tên</CLabel>
                <CInput
                  name="name"
                  placeholder="Tên khách hàng"
                  onChange={handleChange}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="gender">Giới tính</CLabel>
                <Select
                  name="gender"
                  options={dataGender}
                  placeholder="Chọn Giới tính"
                  defaultValue={{ value: "Nam", label: "Nam" }}
                  onChange={getGender}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="phone">Số điện thoại</CLabel>
                <CInput
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="phone">Email</CLabel>
                <CInput
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="phone">Email</CLabel>
                <CInput
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="vat">Địa chỉ</CLabel>
                <CInput
                  name="address"
                  placeholder="Địa chỉ"
                  onChange={handleChange}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="birthday">Ngày sinh</CLabel>
                <CInput
                  name="dateOfBirth"
                  type="date"
                  placeholder="Ngày sinh"
                  onChange={handleChange}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="note">Thông tin bổ sung về khách hàng</CLabel>
                <CTextarea
                  style={{ height: "100px" }}
                  name="note"
                  placeholder="Ghi chú thông tin Khách hàng"
                />
              </CFormGroup>
            </CCardBody>
          </CCard>
        </div>
        <div className=" card col-lg-6 mx-auto"></div>
      </div>
      <button
        className="btn btn-danger"
        onClick={ResetForm}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
      <button
        className="btn btn-danger"
        onClick={() => history.goBack()}
        style={{ marginLeft: "10px" }}
      >
        Back
      </button>
      <button
        className="btn btn-success"
        onClick={Save}
        style={{ marginLeft: "10px" }}
      >
        Thêm Mới
      </button>
    </div>
  );
}

export default CustomerNew;
