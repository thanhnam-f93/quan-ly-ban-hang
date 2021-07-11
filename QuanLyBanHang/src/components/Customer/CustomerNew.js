import React, { useState, useRef } from "react";
import Select from "react-select";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { reactLocalStorage } from "reactjs-localstorage";
import { dataGender } from "./dataGender";
import "./st.css";
import {
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
    //  handleSubmit(onSubmit);
    console.log("this is cate", customer);
    axios.post(APIPost, customer, { headers }).then(
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
          icon: "error",
          title: "Oops...",
          text: "Tạo mơi không thành công, vui lòng thử lại!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    );
  };
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   alert("Hahahhahah");
  //   //alert(JSON.stringify(data));
  // };

  // console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <div>
      <div className="row">
        <div className=" card col-lg-8 offset-2 align-center">
          <CCard>
            <CCardHeader style={{ fontWeight: "bold" }}>
              Thêm mới Khách hàng
            </CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="name">Tên</CLabel>
                <CInput
                  name="name"
                  placeholder="Tên khách hàng"
                  onChange={handleChange}
                  // {...register("name", {
                  //   required: true,
                  //   maxLength: 20,
                  //   minLength: 3,
                  //   //    pattern: /^[A-Za-z]+$/i,
                  // })}
                />
                {/* {errors?.name?.type === "required" && (
                  <p>Không được để trống</p>
                )}
                {errors?.name?.type === "maxLength" && (
                  <p>Độ dài không được vượt quá 20 kí tự</p>
                )}
                {errors?.name?.type === "minLength" && (
                  <p>Độ dài không được ít hơn 3 kí tự</p>
                )} */}
                {/* {errors?.name?.type === "pattern" && <p>Tên phải là chữ</p>} */}
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
                  type="tel"
                  placeholder="Phone Number"
                  pattern="0[0-9]{9}"
                  onChange={handleChange}
                  // {...register("phone", {
                  //   // required: true,
                  //   maxLength: 11,
                  //   minLength: 10,
                  //   valueAsNumber: true,
                  // })}
                />
                {/* {errors?.phone?.type === "required" && (
                  <p>Không được để trống</p> */}

                {/* {errors?.phone?.type === "maxLength" && (
                  <p>Độ dài không được vượt quá 11 kí tự</p>
                )}
                {errors?.phone?.type === "minLength" && (
                  <p>Độ dài không được ít hơn 10 kí tự</p>
                )}
                {errors?.phone?.type === "valueAsNumber" && (
                  <p>Yêu cầu phải nhập vào là số</p>
                )} */}
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="email">Email</CLabel>
                <CInput
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  // {...register("email", {
                  //   required: true,
                  //   maxLength: 50,
                  //   minLength: 5,
                  //   pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  // })}
                />
                {/* {errors?.email?.type === "required" && (
                  <p>Không được để trống</p>
                )}
                {errors?.email?.type === "maxLength" && (
                  <p>Độ dài không được vượt quá 50 kí tự</p>
                )}
                {errors?.email?.type === "minLength" && (
                  <p>Độ dài không được ít hơn 5 kí tự</p>
                )}
                {errors?.email?.type === "pattern" && (
                  <p>Email Không đúng định dạng</p>
                )} */}
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="vat">Địa chỉ</CLabel>
                <CInput
                  name="address"
                  placeholder="Địa chỉ"
                  onChange={handleChange}
                  // {...register("address", {
                  //   required: true,
                  //   maxLength: 50,
                  //   minLength: 5,
                  // })}
                />
                {/* {errors?.address?.type === "required" && (
                  <p>Không được để trống</p>
                )}
                {errors?.address?.type === "maxLength" && (
                  <p>Độ dài không được vượt quá 50 kí tự</p>
                )}
                {errors?.address?.type === "minLength" && (
                  <p>Độ dài không được ít hơn 5 kí tự</p>
                )} */}
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="birthday">Ngày sinh</CLabel>
                <CInput
                  name="dateOfBirth"
                  type="date"
                  max={new Date().toISOString()}
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
                  // {...register("phone", {
                  //   required: true,
                  //   maxLength: 250,
                  //   minLength: 5,
                  // })}
                />
                {/* {errors?.name?.type === "required" && (
                  <p>Không được để trống</p>
                )}
                {errors?.name?.type === "maxLength" && (
                  <p>Độ dài không được vượt quá 250 kí tự</p>
                )}
                {errors?.name?.type === "minLength" && (
                  <p>Độ dài không được ít hơn 5 kí tự</p>
                )} */}
              </CFormGroup>
            </CCardBody>
          </CCard>
        </div>
      </div>
      <div className="row">
        <div
          className=" card col-lg-3 offset-4 mx-auto d-inline-block justify-content-center"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
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
            type="submit"
            className="btn btn-success"
            onClick={Save}
            style={{ marginLeft: "10px" }}
          >
            Thêm Mới
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerNew;
