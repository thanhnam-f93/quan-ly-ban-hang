import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { dataGender } from "./dataGender";
import {
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CLabel,
  CInput,
} from "@coreui/react";
function CustomerNew() {
  const APIPost = "http://localhost:8080/customers";

  const [customer, setCustomer] = useState({
    createdDate: new Date(),
    modifiedDate: null,
    createBy: "Thanh Nam",
    modifiedBy: "",
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
        customer
        // , {
        // headers: {
        //   Authorization: "Bearer " + context.jwt,
        // },}
      )
      .then(
        (response) => {
          console.log("resp", response);
          const inputs = document.getElementsByTagName("input");

          for (const input of inputs) {
            input.value = "";
          }
          alert("Tao moi thanh cong");
        },
        (error) => {
          console.log("error:  ", error);
          alert("Tao moi that bai");
        }
      );
  };
  return (
    <div>
      <div className="row">
        <div className=" card col-lg-6">
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
            </CCardBody>
          </CCard>
        </div>
        <div className=" card col-lg-6 mx-auto">
          {/* <CCard>
            <CCardHeader>Lịch sử</CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="createdDate">Ngày tạo</CLabel>
                <CInput name="createdDate" type="date" placeholder="Ngày tạo" />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="createBy">Người tạo</CLabel>
                <CInput name="createBy" placeholder="Người tạo" />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="modifiedDate">Ngày chỉnh sửa gần nhất</CLabel>
                <CInput
                  name="modifiedDate"
                  type="date"
                  placeholder="UpdateTime"
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="modifiedBy">Người chỉnh sửa gần nhất</CLabel>
                <CInput
                  name="modifiedBy"
                  type="date"
                  placeholder="modifiedBy"
                />
              </CFormGroup>
            </CCardBody>
          </CCard> */}
        </div>
      </div>
      <CCard>
        <CCardHeader>Ghi chú</CCardHeader>
        <CCardBody>
          <CFormGroup row className="my-0">
            <CCol xs="12">
              <CFormGroup>
                <CLabel htmlFor="note">Thông tin bổ sung về khách hàng</CLabel>
                <CInput id="note" placeholder="Ghi chú thông tin Khách hàng" />
              </CFormGroup>
            </CCol>
          </CFormGroup>
        </CCardBody>
      </CCard>
      <button
        className="btn btn-danger"
        onClick={ResetForm}
        style={{ marginLeft: "10px" }}
      >
        Hủy
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
