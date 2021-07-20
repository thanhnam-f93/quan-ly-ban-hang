import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Select from "react-select";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";
import { dataSlove } from "./../Customer/data";
import { reactLocalStorage } from "reactjs-localstorage";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CLabel,
  CInput,
  CTextarea,
  CRow,
  CSwitch,
} from "@coreui/react";
function FeedbackDetail(props) {
  //const history = useHistory();
  var fb = props.location.state.feedback;
  const [feedback, setFeedback] = useState(fb);
  const headers = {
    Authorization: "Bearer " + reactLocalStorage.get("token"),
  };
  const [sw, setSw] = useState(false);
  const handleChangeSlove = () => {
    setSw(!sw);
    const s = sw ? "done" : "pendding";
    setFeedback({ ...feedback, slove: s });
    console.log(feedback);
  };
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    // feedback = { ...feedback, [name]: value };
    setFeedback({ ...feedback, [name]: value });
    console.log("feedbackUpdate", feedback);
  }
  function handleChangeGender(e) {
    const value = e.value;
    // feedback = { ...feedback, gender: value };
    setFeedback({ ...feedback, gender: value });
    console.log("feedbackUpdate", feedback);
  }
  function updatefeedback() {
    // feedback = {
    //   ...feedback,
    //   modifiedDate: new Date().toISOString(),
    //   modifiedBy: reactLocalStorage.get("name"),
    // };
    setFeedback({
      ...feedback,
      modifiedDate: new Date().toISOString(),
      modifiedBy: reactLocalStorage.get("name"),
    });
    const API = `http://localhost:8080/feedback/${feedback.id}`;
    console.log("Object Update:   ", feedback);
    console.log("Url_ApI: ", API);
    axios
      .put(API, feedback, { headers })
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
          title: "Warning",
          text: "Error:",
          // footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  }
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // function deletefeedback(id) {
  //   const API = `http://localhost:8080/feedbacks/off/${id}`;
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axios
  //         .get(API, { headers })
  //         .then(function (response) {
  //           Swal.fire("Good job!", "Delete Complete!", "success");
  //           history.goBack();
  //         })
  //         .catch(function (error) {
  //           Swal.fire({
  //             icon: "error",
  //             title: "Error",
  //             text: "Delete Failure: " + error.response.data,
  //           });
  //           console.log(error.response);
  //         });
  //       Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //     }
  //   });
  // }
  function ResetForm() {
    const inputs = document.getElementsByTagName("input");
    console.log("input", inputs);
    for (const input of inputs) {
      input.value = "";
    }
    document.getElementsByTagName("textarea")[0].value = "";
  }

  useEffect(() => {
    // effect
    // return () => {
    //   cleanup
    // }
  }, [sw]);
  return (
    <div>
      <div className="row">
        <CCardHeader style={{ fontWeight: "bolder" }}>
          Thông tin Khách hàng
        </CCardHeader>
      </div>
      <div className="row">
        <div className=" card col-lg-6">
          <CCard style={{ border: "none" }}>
            <CCardHeader>Thông tin Khách hàng</CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="name">
                  Tên{" "}
                  <span style={{ color: "red", fontWeight: "bolder" }}>*</span>
                </CLabel>
                <CInput
                  name="name"
                  disabled
                  placeholder="Tên khách hàng"
                  defaultValue={feedback.customerName}
                  onChange={handleChange}
                />
              </CFormGroup>
              <CRow>
                <CFormGroup className="col-6">
                  <CLabel htmlFor="tittle">Tiêu đề</CLabel>
                  <CInput
                    name="tittle"
                    type="text"
                    disabled
                    placeholder="Tiêu đề"
                    defaultValue={feedback.tittle}
                    onChange={handleChange}
                  />
                </CFormGroup>
                <CFormGroup className="col-6">
                  <CRow style={{ paddingTop: "30px", paddingLeft: "50px" }}>
                    <CLabel
                      htmlFor="status"
                      style={{ paddingTop: "5px", fontWeight: "bold" }}
                    >
                      Trạng thái
                    </CLabel>
                    {/* <Select
                    name="gender"
                    options={dataSlove}
                    defaultValue={{
                      label: feedback.slove,
                      value: feedback.slove,
                    }}
                    onChange={handleChangeGender}
                  /> */}
                    <CSwitch
                      name="status"
                      className={"mx-1"}
                      size="lg"
                      shape={"pill"}
                      color={"info"}
                      labelOn={"\u2713"}
                      labelOff={"\u2715"}
                      onChange={handleChangeSlove}
                      defaultChecked={sw}
                    />
                  </CRow>
                </CFormGroup>
              </CRow>

              <CFormGroup>
                <CLabel htmlFor="note">Ý kiến Khách hàng</CLabel>
                <CTextarea
                  style={{ height: "120px" }}
                  name="content"
                  disabled
                  placeholder="Ý kiến Khách hàng"
                  defaultValue={feedback.content}
                  onChange={handleChange}
                />
              </CFormGroup>
            </CCardBody>
          </CCard>
        </div>
        <div className=" card col-lg-6 mx-auto">
          <CCard style={{ border: "none" }}>
            <CCardHeader>Lịch sử</CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="createdDate">Ngày tạo</CLabel>
                <CInput
                  name="createdDate"
                  type="date"
                  disabled
                  placeholder="Ngày tạo"
                  defaultValue={new Date(feedback.createdDate)
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
                  defaultValue={feedback.createdBy}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="modifiedDate">Ngày chỉnh sửa gần nhất</CLabel>
                <CInput
                  name="modifiedDate"
                  type="date"
                  disabled
                  placeholder="UpdateTime"
                  defaultValue={new Date(feedback.modifiedDate)
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
                  defaultValue={feedback.modifiedBy}
                />
              </CFormGroup>
            </CCardBody>
          </CCard>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          {/* <button
            className="btn btn-primary"
            onClick={ResetForm}
            style={{ marginLeft: "10px", backgroundColor: "#0089ff" }}
          >
            Hủy
          </button> */}
          <button
            className="btn btn-primary"
            // onClick={handleSubmit(updatefeedback)}
            onClick={updatefeedback}
            style={{ marginLeft: "10px", backgroundColor: "#0089ff" }}
          >
            Cập nhật
          </button>
        </div>
        {/* <div className="col-6">
          <button
            style={{
              marginLeft: "10px",
              width: "55px",
              backgroundColor: "#0089ff",
            }}
            className="btn btn-primary  float-right"
          >
            Xóa
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default FeedbackDetail;
