import React, { useContext, useEffect, useState } from "react";
import SaleAddCustomer from "./SaleAddCustomer";
import "./scss/SalePayment.scss";
import { Modal } from "react-bootstrap";
import ModalDialog from 'react-bootstrap/ModalDialog'
import { CButton } from "@coreui/react";
import { SalerContext } from "src/context/JwtContext";
import { FormatMoney } from "src/helpers/FormatMoney";
const SalePayment = () => {
const [isShow, setIsShow] = useState(false);
const {productOption,  amountChange} = useContext(SalerContext);
const handleClose =()=>setIsShow(false);
const  [total, setTotal] = useState(0);
  const addCustomer= ()=>{
    setIsShow(true);
  }

  useEffect(() => {
    let val = 0;
    for (const ob of productOption) {    
      val += ob['amount']*ob['price'];
    }
    setTotal(val);
    console.log("tổng :",val);
  console.log("sale payment product:",productOption);
}, [productOption,total,amountChange]);

  return (
    <div className="sale-payment">
      <div className="customer">
        <div className="customer-infor">
          <spa>
            <i className="fas fa-search i-1" />
          </spa>
          <input type="text" placeholder="Thêm khách hàng vào đơn" />
        </div>
        <span onClick = {addCustomer}> 
            <i className="fas fa-plus" />
          </span>
      </div>
      <div className = 'payment-1'>
          <div className = 'payment-1-1 p-1-1'>
              <span>Tổng tiền</span>
              <span>{FormatMoney(total)}</span>
          </div>
          <div className ='payment-1-2 p-1-1'>
              <span>Chiết khấu</span>
              <input type = 'text' placeholder= "%"/>
          </div>
          <div className = 'payment-1-3 p-1-1'>
              <span>Khách phải trả</span>
              <span> 9999999</span>
          </div>
          <div className ='payment-1-4 p-1-1'>
              <span> Tiền khách đưa</span>
              <input  type = 'text' value ={FormatMoney(total)}/>
          </div>
          <div className = 'payment-1-5 p-1-1'>
              <span>Tiền thừa</span>
              <span>50000</span>
          </div>
      </div>
      <div className = 'payment-2'>
          <div className = 'btn-payment'>
              <span>Thanh Toán</span>
          </div>
      </div>
      <Modal  dialogClassName="modal-90w"
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
        <Modal.Body><SaleAddCustomer /></Modal.Body>
        <Modal.Footer>
        <CButton color="secondary" onClick={handleClose}>Thoát </CButton>
        <CButton color="primary">Thêm</CButton>
        </Modal.Footer>
      </Modal>
     
    </div>
  );
};

export default SalePayment;
