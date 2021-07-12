import React, { useContext, useEffect, useState } from "react";
import SaleAddCustomer from "./SaleAddCustomer";
import "./scss/SalePayment.scss";
import { Modal } from "react-bootstrap";
import ModalDialog from "react-bootstrap/ModalDialog";
import { CButton } from "@coreui/react";
import { JwtContext, SalerContext } from "src/context/JwtContext";
import { FormatMoney } from "src/helpers/FormatMoney";
import { callApiNotJwt } from "src/apis/ApiCaller";
import List from "./List";
import SaleSearchCustomer from "./SaleSearchCustomer";
const SalePayment = () => {
  const {jwt} = useContext(JwtContext);
  const [isShow, setIsShow] = useState(false);
  const { productOption, amountChange } = useContext(SalerContext);
  const handleClose = () => setIsShow(false);
  const [total, setTotal] = useState(0);
  const [MoneyOfCustomer, setMoneyOfCustomer] = useState(0);
  const [dismount, setDismount] = useState(0);
  const [givedMoney, setGivedMoney] = useState(0);
  const [lessMoney, setLessMoney] = useState(0);
  const [listCustomer, setCustomer] = useState([]);
  const addCustomer = () => {
    setIsShow(true);
  };

  useEffect(() => {
    let val = 0;
    for (const ob of productOption) {
      val += ob["amount"] * ob["price"];
    }
    setTotal(val);
    console.log("tổng :", val);
    console.log("sale payment product:", productOption);
    setGivedMoney(val-(val*dismount/100));
    setLessMoney(MoneyOfCustomer-givedMoney);
    if(productOption.length==0){
      setDismount(0);
      setMoneyOfCustomer(0);
    }

  }, [productOption, total, amountChange,dismount]);

  const getMoneyOfCustomer = (e)=>{
    let val = e.target.value;
    setMoneyOfCustomer(val);
    setLessMoney(val-givedMoney); 
   
  }

  const getDismount = (e)=>{
    let val = e.target.value;
    setDismount(val);
    setGivedMoney(total-(total*val/100));
  }

  const getCustomer = ()=>{
    callApiNotJwt("customers/page", "GET", jwt).then((response) => {
      if (response.status !== 200) {
        alert("thao tác thất bại");
        return;
      }
      response.json().then((data) => {
        console.log(data);
        setCustomer(data.content);
      });
    });
  }
  return (
    <div className="sale-payment">
      <div className="customer">
        <div className="customer-infor">
          <spa>
            <i className="fas fa-search i-1" />
          </spa>
          <input type="text" placeholder="Thêm khách hàng vào đơn" onClick = {getCustomer}/>
        </div>
        {
          listCustomer.length!= 0 ? <div className = "search-customer">
          <List data = {listCustomer} render = {(item,index)=> <SaleSearchCustomer item = {item} />} /> 
        </div>
        : ""
        }
       
        <span onClick={addCustomer}>
          <i className="fas fa-plus" />
        </span>
      </div>
      <div className="payment-1">
        <div className="payment-1-1 p-1-1">
          <span>Tổng tiền</span>
          <span>{FormatMoney(total)}</span>
        </div>
        <div className="payment-1-2 p-1-1">
          <span>Chiết khấu(%)</span>
          <input type="text" placeholder="%" onChange = {getDismount}/>
        </div>
        <div className="payment-1-3 p-1-1">
          <span>Khách phải trả</span>
          <span> {FormatMoney(givedMoney)}</span>
        </div>
        <div className="payment-1-4 p-1-1">
          <span> Tiền khách đưa</span>
          <input type="text" value={FormatMoney(MoneyOfCustomer)} onChange = {getMoneyOfCustomer} />
        </div>
        <div className="payment-1-5 p-1-1">
          <span>Tiền thừa</span>
          <span style = {{color: lessMoney < 0 ?"red":"blue"}}>{FormatMoney(lessMoney)}</span>
        </div>
      </div>
      <div className="payment-2">
        <div className="btn-payment">
          <span>Thanh Toán</span>
        </div>
      </div>
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
          <SaleAddCustomer />
        </Modal.Body>
        <Modal.Footer>
          <CButton color="secondary" onClick={handleClose}>
            Thoát{" "}
          </CButton>
          <CButton color="primary">Thêm</CButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SalePayment;
