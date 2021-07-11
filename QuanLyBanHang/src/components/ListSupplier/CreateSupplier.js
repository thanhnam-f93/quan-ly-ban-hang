import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CTextarea,
  CInputFile,
  CValidFeedback,
} from "@coreui/react";
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
import { createCategory, createSupplier, getSupplier } from "src/apis/Product";

function Create(props) {
  const [message, setMesage] = useState({
    code: "",
    name: "",
    numberProduct: "",
    price: "",
  });
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [createdDate, setCreateDate] = useState("");

  const saveSupplier = (e) => {
    e.preventDefault();
    let supplier = {
      code: code,
      name: name,
      email: email,
      address: address,
      phone: phone,
      createdDate: createdDate,
      description: description,
    };
  
    createSupplier(supplier).then((item) => {
      
    Swal.fire({
      icon: 'success',
      title: 'đã đạo thêm nhà cung cấp',
      showConfirmButton: false,
      timer: 1500
    })
      props.history.push("/supplier");
    });
  };

  const cancel = () => {
    props.history.push("/supplier");
  };

  //   const changeonBlur = (event)=>{
  //   if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
  //       setMesage({
  //         code:" * Mã không được để trống"
  //       })
  //     }
  //     else{
  //       setMesage({
  //         code:""
  //       })
  //     }
  //   }

  //   const changeonBlurName = (event)=>{
  //    if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
  //       setMesage({
  //         name:" Tên sản phẩm không được để trống"
  //       })
  //     }
  //     else{
  //       setMesage({
  //         name:""
  //       })
  //     }
  //   }

  //   const changeonBlurNumber = (event)=>{
  //     var a = new RegExp("^[0-9]*$")

  //     if((a.test(event.target.value)==false)){
  //       setMesage({
  //         numberProduct:"Số lượng không được nhập kí tự"
  //       })
  //     }
  //     else if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
  //       setMesage({
  //         numberProduct:" Số lượng sản phẩm không được để trống"
  //       })
  //     }
  //     else{
  //       setMesage({
  //         numberProduct:""
  //       })
  //     }
  //   }

  //   const changeonBlurPrice = (event)=>{
  //     var a = new RegExp("^[0-9]*$")

  //     if((a.test(event.target.value)==false)){
  //       setMesage({
  //         price:"Số lượng không được nhập kí tự"
  //       })
  //     }
  //     else if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
  //       setMesage({
  //         price:" Số lượng sản phẩm không được để trống"
  //       })
  //     }
  //     else{
  //       setMesage({
  //         price:""
  //       })
  //     }
  //   }

  const changeCode = (event) => {
    setCode(event.target.value);
  };

  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changeAddress = (event) => {
    setAddress(event.target.value);
  };
  const changePhone = (event) => {
    setPhone(event.target.value);
  };

  const changeCreateDate = (event) => {
    setCreateDate(event.target.value);
  };

  const changeDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <div>
        <CRow>
          <CCol xs="7">
            <CCard>
              <CCardHeader>Nhà phân phối</CCardHeader>
              <CCardBody>
                <CFormGroup>
                  <CLabel htmlFor="company">Mã</CLabel>
                  <CInput
                    name="code"
                    placeholder="Nhập Mã"
                    onChange={changeCode}
                    //   onBlur={changeonBlur}
                  />
                  {/* <span style={{color:"red"}}> {message.code}</span> */}
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Tên</CLabel>
                  <CInput
                    name="name"
                    placeholder="Nhập tên"
                    onChange={changeName}
                    //   onBlur={changeonBlurName}
                  />
                  {/* <span style={{color:"red"}}> {message.name}</span> */}
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Số điện thoại</CLabel>
                  <CInput
                    id="vat"
                    placeholder="Số điện thoại"
                    onChange={changePhone}
                  />

                  {/* <span style={{color:"red"}}> {message.numberProduct}</span> */}
                </CFormGroup>
                {/* <CFormGroup>
                    <CLabel htmlFor="vat">Mô tả</CLabel>
                    <CInput
                      id="vat"
                      placeholder="mô tả"
                      onChange={changeDescription}
                    />
                  </CFormGroup> */}

                <CFormGroup>
                  <CLabel htmlFor="vat">Địa chỉ</CLabel>
                  <CInput
                    id="vat"
                    placeholder="nhập giá"
                    onChange={changeAddress}
                  />
                  {/* <span style={{color:"red"}}> {message.price}</span> */}
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Email</CLabel>
                  <CInput
                    id="vat"
                    placeholder="nhập giá"
                    onChange={changeEmail}
                  />
                  {/* <span style={{color:"red"}}> {message.price}</span> */}
                </CFormGroup>
              </CCardBody>
            </CCard>
            <CCol xs="7">
              {" "}
              <button
                className="btn btn-secondary"
                onClick={cancel}
                style={{ marginLeft: "10px" }}
              >
                Quay lại
              </button>
              <button
                className="btn btn-success"
                onClick={saveSupplier}
                style={{ marginLeft: "10px" }}
              >
                Thêm
              </button>
            </CCol>
          </CCol>
          <CCol xs="5">
            <CCard>
              <CCardHeader>Mô tả</CCardHeader>
              <CCardBody>
                <CFormGroup>
                  <CTextarea
                    name="textarea-input"
                    id="textarea-input"
                    rows="9"
                    placeholder="mô tả"
                    onChange={changeDescription}
                  />
                </CFormGroup>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      
      </div>
    </div>
  );
}
export default Create;
