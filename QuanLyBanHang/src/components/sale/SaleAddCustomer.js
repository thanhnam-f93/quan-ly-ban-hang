import { CInput } from "@coreui/react";
import React, { useContext, useState } from "react";
import { removeAscent } from "src/helpers/RemoveAscent";
import "./scss/SaleAddCustomer.scss"
import ModalDialog from "react-bootstrap/ModalDialog";
import { CButton } from "@coreui/react";
import { Modal } from "react-bootstrap";
const SaleAddCustomer = ({isShow,setIsShow}) => {
    const [isName,setName]= useState(false);
    const [isPhone,setPhone] = useState(false);
// --------------------------validate input--------------------------


const validateName = (e)=>{
    let val =  e.target.value;
    var regexName = /^[a-zA-Z ]{2,}$/g;
    if(!regexName.test(removeAscent(val))){
        setName(true);
    }else{
       setName(false);
    }
}

const validatePhone= (e)=>{
    let val = e.target.value;
    let exp = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if(exp.test(val)){
        setPhone(false);
    }else{
        console.log("no ok");
        setPhone(true);
    }

}
// ------------------submit-------------------------
const submit = ()=>{
    let val1 = document.getElementById("input-name").value;
    let val2 = document.getElementById("input-phone").value;
    if(val1=="" ||isName==true){
        document.getElementById("input-name").focus();
        setName(true);
    }else if(val2=="" || isPhone ==true){
        document.getElementById("input-phone").focus();
        setPhone(true);
    }
}

    const handleClose =()=>setIsShow(false);
  return (
    <Modal
    dialogClassName="modal-90w"
    show={isShow}
    scrollable="true"
    onHide={handleClose}
    backdrop="static"
    dialogClassName="modal-90w"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title>Thêm khách hàng mới</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div className = "add-customer">
        <div className = 'h-1 h-1-2 '>
            <span style ={{color:isName ?"red":"#768192"}} id = "p-1">Tên khách hàng</span>
            <CInput style = {{borderColor:isName ?"red":"#768192"}} id = "input-name" type="text" onChange = {validateName} required  />
            {isName ?<span style = {{color:"red",fontSize:"12px"}}>Tên không được để trống</span>:""}
        </div>
        <div className = 'h-1 h-1-2 '>
            <p id = "p-2" style ={{color:isPhone ?"red": "#768192"}}>Số điện thoại</p>
            <CInput id = "input-phone"  style = {{borderColor:isPhone ?"red":"#768192"}} type="text" onChange= {validatePhone}  />
            {isPhone ?<span style = {{color:"red",fontSize:"12px"}}>Số điện thoại không đúng</span>:""}
        </div>
        <div className = 'h-1 '>
            <p>Email</p>
            <CInput type="email"  placeholder="jane.doe@example.com" required />
        </div>
        
        <div className = 'h-1 '>
            <p>Ngày sinh</p>
            <CInput type="date" name="date-input" placeholder="date" />
        </div>

        <div className = "h-1 h-1-1">
            <p>Địa chỉ</p>
            <CInput type="text"  />
        </div>
    </div>
    </Modal.Body>
    <Modal.Footer>
      <CButton color="secondary" onClick={handleClose}>
        Thoát{" "}
      </CButton>
      <CButton color="primary" onClick = {submit}>Thêm</CButton>
    </Modal.Footer>
  </Modal>
    
  );
};

export default SaleAddCustomer;
