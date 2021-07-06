import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Select from "react-select";
import axios from "axios";
import {
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CLabel,
  CInput,
} from "@coreui/react";
function CustomerDetail() {
  const genders = [
    { value: "Nam", label: "Nam" },
    { value: "Nu", label: "Nu" },
  ];
  const location = useLocation();
  var customer = location.state.customer;
  console.log("cus:  ", customer);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    customer = { ...customer, [name]: value };
    console.log("customerUpdate:   ", customer);
  };
  const updateCustomer = () => {
    console.log("this", customer);
    const API = `http://localhost:8080/customers/${customer.id}`;
    axios
      .put(API, customer)
      .then((resp) => {
        if (resp.status === 200) {
          alert("Update Succeed");
        } else {
          console.log("Status not 200", resp);
        }
      })
      .catch((error) => {
        alert("Update Failure!");
      });
  };
  function resetForm() {
    const inputs = document.getElementsByTagName("input");
    console.log("input", inputs);
    for (const input of inputs) {
      input.value = "";
    }
  }
  return (
    <div>
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
                    label: genders[0].label,
                    value: genders[0].value,
                  }}
                  onChange={handleChange}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="phone">Số điện thoại</CLabel>
                <CInput
                  name="phone"
                  placeholder="Phone Number"
                  defaultValue={customer.phone}
                  onChange={handleChange}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="vat">Địa chỉ</CLabel>
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
                  placeholder="Ngày sinh"
                  defaultValue={customer.dateOfBirth}
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
                  placeholder="Ngày tạo"
                  defaultValue={new Date(
                    customer.createdDate
                  ).toLocaleDateString()}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="createBy">Người tạo</CLabel>
                <CInput
                  name="createBy"
                  placeholder="Người tạo"
                  defaultValue={customer.createBy}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="modifiedDate">Ngày chỉnh sửa gần nhất</CLabel>
                <CInput
                  name="modifiedDate"
                  type="date"
                  placeholder="UpdateTime"
                  defaultValue={new Date(
                    customer.modifiedDate
                  ).toLocaleDateString()}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="modifiedBy">Người chỉnh sửa gần nhất</CLabel>
                <CInput
                  name="modifiedBy"
                  placeholder="modifiedBy"
                  defaultValue={customer.modifiedBy}
                />
              </CFormGroup>
            </CCardBody>
          </CCard>
        </div>
      </div>
      <CCard>
        <CCardHeader>Ghi chú</CCardHeader>
        <CCardBody>
          <CFormGroup row className="my-0">
            <CCol xs="12">
              <CFormGroup>
                <CLabel htmlFor="note">Thông tin bổ sung về khách hàng</CLabel>
                <CInput
                  id="note"
                  placeholder="Ghi chú thông tin Khách hàng"
                  defaultValue={customer.note}
                />
              </CFormGroup>
            </CCol>
          </CFormGroup>
        </CCardBody>
      </CCard>
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
