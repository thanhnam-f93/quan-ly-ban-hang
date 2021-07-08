import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Select from "react-select";
import Swal from "sweetalert2";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CLabel,
  CInput,
  CTextarea,
} from "@coreui/react";
function CustomerDetail() {
  const location = useLocation();
  var customer = location.state.customer;
  const headers = {
    Authorization: "Bearer " + reactLocalStorage.get("token"),
  };
  const genders = [
    { value: "Nam", label: "Nam" },
    { value: "Nu", label: "Nu" },
  ];

  var customerUpdate = {
    createdDate: customer.createdDate,
    modifiedDate: new Date().toISOString(),
    createBy: customer.createBy,
    modifiedBy: reactLocalStorage.get("name"),
    status: customer.status,
  };
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    customerUpdate = { ...customerUpdate, [name]: value };
    console.log("customerUpdate", customerUpdate);
  }
  function handleChangeGender(e) {
    alert("dddd");
    const value = e.value;
    customerUpdate = { ...customerUpdate, gender: value };
    console.log("customerUpdate", customerUpdate);
  }
  function updateCustomer() {
    const API = `http://localhost:8080/customers/${customer.id}`;
    console.log("this", customer);
    console.log("objectApI: ", API);
    axios
      .put(API, customerUpdate, { headers })
      .then((resp) => {
        if (resp.status === 200) {
          Swal.fire("Good job!", "Cập nhập thông tin thành công!", "success");
        } else {
          console.log("Status not 200", resp);
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Cập nhập thất bại!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  }
  function resetForm() {
    const inputs = document.getElementsByTagName("input");
    const textare = document.getElementsByTagName("textarea");
    textare.item.value = "";
    console.log("input", textare);
    for (const input of inputs) {
      input.value = "";
    }
  }
  return (
    <div>
      <div className="row">
        <CCardHeader style={{ fontWeight: "bolder" }}>
          Thông tin Khách hàng
        </CCardHeader>
      </div>
      <div className="row">
        <div className=" card col-lg-6">
          <CCard>
            <CCardHeader>Thông tin Khách hàng</CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="vat">Tên</CLabel>
                <CInput
                  name="name"
                  placeholder="Tên khách hàng"
                  defaultValue={customer.name}
                  onChange={handleChange}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="gender">Giới tính</CLabel>
                <Select
                  name="gender"
                  options={genders}
                  defaultValue={{
                    label: "Select Gender",
                    value: "",
                  }}
                  onClick={handleChangeGender}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="phone">Số điện thoại</CLabel>
                <CInput
                  name="phone"
                  type="tel"
                  pattern="[0]{1}[0-9]{9}"
                  placeholder="Phone Number"
                  defaultValue={customer.phone}
                  onChange={handleChange}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="vat">Email</CLabel>
                <CInput
                  name="email"
                  type="mail"
                  placeholder="Email"
                  defaultValue={customer.email}
                  onChange={handleChange}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="address">Địa chỉ</CLabel>
                <CInput
                  name="address"
                  placeholder="Địa chỉ"
                  defaultValue={customer.address}
                  onChange={handleChange}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="birthday">Ngày sinh</CLabel>
                <CInput
                  name="dateOfBirth"
                  type="date"
                  max={new Date().toISOString()}
                  placeholder="Ngày sinh"
                  defaultValue={new Date(customer.dateOfBirth)
                    .toISOString()
                    .slice(0, 10)}
                  onChange={handleChange}
                />
              </CFormGroup>
            </CCardBody>
          </CCard>
        </div>
        <div className=" card col-lg-6 mx-auto">
          <CCard>
            <CCardHeader>Lịch sử</CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="createdDate">Ngày tạo</CLabel>
                <CInput
                  name="createdDate"
                  type="date"
                  disabled
                  placeholder="Ngày tạo"
                  defaultValue={new Date(customer.createdDate)
                    .toISOString()
                    .slice(0, 10)}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="createBy">Người tạo</CLabel>
                <CInput
                  name="createBy"
                  disabled
                  placeholder="Người tạo"
                  defaultValue={customer.createBy}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="modifiedDate">Ngày chỉnh sửa gần nhất</CLabel>
                <CInput
                  name="modifiedDate"
                  type="date"
                  disabled
                  placeholder="UpdateTime"
                  defaultValue={new Date(customer.modifiedDate)
                    .toISOString()
                    .slice(0, 10)}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="modifiedBy">Người chỉnh sửa gần nhất</CLabel>
                <CInput
                  name="modifiedBy"
                  disabled
                  placeholder="modifiedBy"
                  defaultValue={customer.modifiedBy}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="note">Thông tin bổ sung về khách hàng</CLabel>
                <CTextarea
                  style={{ height: "120px" }}
                  name="note"
                  placeholder="Ghi chú thông tin Khách hàng"
                  defaultValue={customer.note}
                  onChange={handleChange}
                />
              </CFormGroup>
            </CCardBody>
          </CCard>
        </div>
      </div>
      <button
        className="btn btn-danger"
        onClick={resetForm}
        style={{ marginLeft: "10px" }}
      >
        Hủy
      </button>
      <button
        className="btn btn-success"
        onClick={updateCustomer}
        style={{ marginLeft: "10px" }}
      >
        Cập nhật
      </button>
    </div>
  );
}

export default CustomerDetail;
