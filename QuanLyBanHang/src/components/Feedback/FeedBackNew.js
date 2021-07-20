import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { reactLocalStorage } from "reactjs-localstorage";
import { dataSlove } from "./../Customer/data";
import "./../Customer/st.css";
//import DateTimePicker from 'react-datetime-picker';
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
import Modal from "./Modal";
import { useHistory } from "react-router-dom";
function FeedBackNew() {
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [customers, setCustomers] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [name, setName] = useState("");
  const [sw, setSw] = useState(false);
  const typingTimeoutRef = useRef(null);
  const headers = {
    Authorization: "Bearer " + reactLocalStorage.get("token"),
  };
  const history = useHistory();
  const getData = async () => {
    setCustomers([]);
    const URL = `http://localhost:8080/customers/search?input=${search}&pageNo=${
      page - 1
    }&limit=${limit}`;
    console.log("this URL: ", URL);
    await axios
      .get(URL, { headers })
      .then((response) => {
        const result = response.data;
        setTotalPage(response.data.totalPages);
        console.log("totalPage: ", totalPage);
        setTotalElements(response.data.totalElements);
        console.log("totalElement", totalElements);
        const cus = result.content;
        setCustomers(cus);
        console.log("customer:  ", customers);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const APIPost = "http://localhost:8080/feedbacks";
  const [feedback, setFeedback] = useState({
    createdDate: new Date(),
    modifiedDate: new Date(),
    createdBy: reactLocalStorage.get("name"),
    modifiedBy: "",
    slove: "pendding",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFeedback({ ...feedback, [name]: value });
    console.log(feedback);
  };
  //
  function ResetForm() {
    const inputs = document.getElementsByTagName("input");
    console.log("input", inputs);
    for (const input of inputs) {
      input.value = "";
    }
    document.getElementsByTagName("textarea")[0].value = "";
  }
  //
  const Save = async () => {
    axios
      .post(APIPost, feedback, { headers })
      .then((response) => {
        //  ResetForm();
        Swal.fire("Good job!", "Thêm mới thành công", "success");
        history.push({
          pathname: "/feedback",
        });
        setFeedback({
          createdDate: new Date(),
          modifiedDate: new Date(),
          createdBy: reactLocalStorage.get("name"),
          modifiedBy: "",
          slove: "pendding",
        });
      })
      .catch(function (error) {
        if (error.response) {
          Swal.fire({
            icon: "error",
            title: "Warning",
            text: "Bạn chưa chọn khách hàng !",
          });
        }
      });
  };
  //
  const handleChangeName = (e) => {
    // if (e.key === "Enter") {
    const vl = e.target.value;
    setName(vl);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      setModal(true);
      setPage(1);
      setSearch(vl);
    }, 1000);
    // }
  };
  //
  const handleChangeSlove = () => {
    setSw(!sw);
    const s = sw ? "done" : "pendding";
    setFeedback({ ...feedback, slove: s });
    console.log(feedback);
  };
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  useEffect(() => {
    getData();
  }, [page, search, limit, name]);

  return (
    <div>
      <div className="row">
        <div className=" card col-lg-8 offset-2 align-center">
          <CCard style={{ border: "none" }}>
            <CCardHeader style={{ fontWeight: "bold" }}>
              Thêm mới Nhận xét
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CFormGroup className="col-5">
                  <CLabel htmlFor="name" className="font-weight-bolder">
                    Tên Khách hàng
                  </CLabel>
                  <CInput
                    id="customerName"
                    name="search"
                    placeholder="Tìm kiếm thông tin Khách hàng"
                    value={name}
                    onChange={handleChangeName}
                    //  onChange={setIsName}
                  />
                  {/* <div className="search-customer">
                    <i class="bi bi-search"></i>
                  </div> */}
                  <Modal
                    modal={modal}
                    setModal={setModal}
                    setPage={setPage}
                    totalPage={totalPage}
                    limit={limit}
                    customers={customers}
                    feedback={feedback}
                    setFeedback={setFeedback}
                    setSearch={setSearch}
                    setName={setName}
                  ></Modal>
                </CFormGroup>

                <CFormGroup className="col-5">
                  <CLabel htmlFor="tittle" className="font-weight-bolder">
                    Tiêu đề
                  </CLabel>
                  <CInput
                    name="tittle"
                    type="text"
                    placeholder="Tiêu đề"
                    defaultValue={feedback.tittle}
                    onChange={handleChange}
                  />
                </CFormGroup>
                <CFormGroup className="col-2">
                  <CLabel htmlFor="tittle" className="font-weight-bolder">
                    Trạng thái
                  </CLabel>
                  <CSwitch
                    className={"mx-1"}
                    shape={"pill"}
                    color={"info"}
                    size="lg"
                    labelOn={"\u2713"}
                    labelOff={"\u2715"}
                    onChange={handleChangeSlove}
                    defaultChecked={sw}
                  />
                </CFormGroup>
              </CRow>
              <CFormGroup>
                <CLabel htmlFor="note" className="font-weight-bolder">
                  Ý kiến Khách hàng
                </CLabel>
                <CTextarea
                  // {...register("note", {
                  //   required: true,
                  //   maxLength: 250,
                  // })}
                  style={{ height: "120px" }}
                  name="content"
                  placeholder="Ý kiến Khách hàng"
                  defaultValue={feedback.content}
                  onChange={handleChange}
                />
                {/* {errors?.note?.type === "maxLength" && (
                  <p>Độ dài không được vượt quá 250 kí tự</p>
                )} */}
              </CFormGroup>
            </CCardBody>
          </CCard>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <button
            className="btn btn-danger"
            onClick={ResetForm}
            style={{
              marginLeft: "10px",
              float: "right",
              backgroundColor: "#0089ff",
            }}
          >
            Hủy bỏ
          </button>
        </div>
        <div className="col-6">
          <button
            type="submit"
            className="btn btn-success"
            onClick={Save}
            style={{ marginLeft: "10px", backgroundColor: "#0089ff" }}
          >
            Thêm mới
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedBackNew;
