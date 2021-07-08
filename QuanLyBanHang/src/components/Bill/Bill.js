import React, { useContext, useEffect, useState } from "react";
import { callApi, callApiNotJwt } from "src/apis/ApiCaller";
import OrderHeader from "../Order/OrderHeader";
import BillTable from "./BillTable";
import "./../Order/scss/order.css";
import { JwtContext } from "src/context/JwtContext";
import { Dropdown, Modal } from "react-bootstrap";
import Login from "src/views/pages/login/Login";
import Order from "../Order/Order";
import Logins from "../Login/Logins";
import OrderModal from "../Order/OrderModal";
import { CPagination } from "@coreui/react";

const Bill = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { jwt } = useContext(JwtContext);
  const [totalPage, setTotalPage] = useState(6);
  const [orderPageable, setOrderPageAble] = useState({
    page: 1,
    limit: 10,
    inputOrder: "",
    orderTime: "",
  });

  const getDate = (op, da) => {
    setOrderPageAble({
      ...orderPageable,
      optionTime: op,
    });
  };

  const [listOrder, setListOrder] = useState([]);

  useEffect(() => {
    console.log("useeffect:" + orderPageable);

    callApi("bill", "post", orderPageable, jwt).then((response) => {
      if (response.status !== 200) {
        alert("thao tác thất bại");
        return;
      }
      response.json().then((data) => {
        console.log(data.length);
        setListOrder(data);
        if(data.length<7){
          var page = orderPageable.page;
          setTotalPage({page});
        }
        // alert("thao tác thành công");
      });
    });
  }, [orderPageable]);

  /**
   * filter and search order
   */

  const getInput = (e) => {
    let { name, value } = e.target;
    console.log(name + value);
    setOrderPageAble({ ...orderPageable, [name]: value });
    console.log(orderPageable);
  };

  const getPage = (page) =>{
    console.log("trang:",page);
    setOrderPageAble({...orderPageable, page:page});
  }

  return (
    <div className="list-order">
      <div className="order-1 ">
        <OrderHeader inputs={getInput} getDate={getDate} />
        <div className="btn-create">
          <button onClick={handleShow}>
            Trả hàng
          </button>
        </div>
      </div>
      <BillTable lists={listOrder} />
      <CPagination
            doubleArrows = {false}
            activePage={orderPageable.page}
            pages={6}
            onActivePageChange={getPage}
          />  
      <Modal show={show}
      scrollable = "true"
       onHide={handleClose}
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered>
        <Modal.Header closeButton>
          <Modal.Title>Chọn đơn để trả hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OrderModal />
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Bill;
