import { CInput } from "@coreui/react";
import React, { useContext, useState } from "react";
import { removeAscent } from "src/helpers/RemoveAscent";
import "./scss/SaleAddCustomer.scss"
import ModalDialog from "react-bootstrap/ModalDialog";
import { CButton } from "@coreui/react";
import { Modal } from "react-bootstrap";
import { callApi } from "src/apis/ApiCaller";
import { JwtContext, SalerContext } from "src/context/JwtContext";
import axios from "axios";
import Swal from "sweetalert2";
import { reactLocalStorage } from "reactjs-localstorage";
const APIPost = "http://localhost:8080/customers";
const headers = {
    Authorization: "Bearer " + reactLocalStorage.get("token"),
  };
const SaleAddCustomer = ({isShow,setIsShow, setInforBtn}) => {
    const [isName,setName]= useState(false);
    const [isPhone,setPhone] = useState(false);
    const [customerDto, setCustomer] = useState({});
    const {jwt} = useContext(JwtContext);
    const {getNews} = useContext(SalerContext);
// --------------------------validate input--------------------------


const validateName = (e)=>{
    let val =  e.target.value;
    var regexName = /^[a-zA-Z ]{2,}$/g;
    if(!regexName.test(removeAscent(val))){
        setName(true);
    }else{
       setName(false);
       setCustomer({...customerDto,name:val});
    }
}

const validatePhone= (e)=>{
    let val = e.target.value;
    let exp = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if(exp.test(val)){
        setPhone(false);
        setCustomer({...customerDto,phone:val});
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
    }else{

        console.log("customerccccc",customerDto);
        callApi("customers", "POST", customerDto, jwt).then((response) => {
            if (response.status !== 200) {
              alert("t???o th???t b???i");
              return;
            }else{              
              response.text().then((data) => {
                setInforBtn(data);      
                getNews("Th??m kh??ch h??ng th??nh c??ng");  
                setIsShow(false);
              });
        
            }
                  
          });
    }

}

    const handleClose =()=>setIsShow(false);
    const getDateOfBirth = (e)=>{
        let val = e.target.value;
        console.log(val);
        setCustomer({...customerDto,dateOfBirth:val});
    }

    const getEmail = (e)=>{
        let val = e.target.value;
        setCustomer({...customerDto,email:val});
    }

    const getAddress = (e)=>{
        let val = e.target.value;
        setCustomer({...customerDto,address:val});
    }

    
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
      <Modal.Title>Th??m kh??ch h??ng m???i</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div className = "add-customer">
        <div className = 'h-1 h-1-2 '>
            <p style ={{color:isName ?"red":"#768192"}} id = "p-1">T??n kh??ch h??ng</p>
            <CInput style = {{borderColor:isName ?"red":"#768192"}} id = "input-name" type="text" onChange = {validateName}   />
            {isName ?<span style = {{color:"red",fontSize:"12px"}}>T??n kh??ng ???????c ????? tr???ng</span>:""}
        </div>
        <div className = 'h-1 h-1-2 '>
            <p id = "p-2" style ={{color:isPhone ?"red": "#768192"}}>S??? ??i???n tho???i</p>
            <CInput id = "input-phone"  style = {{borderColor:isPhone ?"red":"#768192"}} type="text" onChange= {validatePhone}  />
            {isPhone ?<span style = {{color:"red",fontSize:"12px"}}>S??? ??i???n tho???i kh??ng ????ng</span>:""}
        </div>
        <div className = 'h-1 '>
            <p>Email</p>
            <CInput type="email"  placeholder="jane.doe@example.com" onChange = {getEmail} />
        </div>
        
        <div className = 'h-1 '>
            <p>Ng??y sinh</p>
            <CInput type="date" name="date-input" placeholder="date" onChange = {getDateOfBirth} />
        </div>

        <div className = "h-1 h-1-1">
            <p>?????a ch???</p>
            <CInput type="text" onChange = {getAddress} />
        </div>
    </div>
    </Modal.Body>
    <Modal.Footer>
      <CButton color="secondary" onClick={handleClose}>
        Tho??t{" "}
      </CButton>
      <CButton color="primary" onClick = {submit}>Th??m</CButton>
    </Modal.Footer>
  </Modal>
    
  );
};

export default SaleAddCustomer;
