import React, { useContext, useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { callApi } from "src/apis/ApiCaller";
import { JwtContext } from "src/context/JwtContext";
import ModalHeaders from "./ModalHeaders";
import OrderTable from "./OrderTable";
import { CPagination } from "@coreui/react";
import { Modal } from "react-bootstrap";
import ReturnOrder from "../OrderReturn/ReturnOrder";
const OrderModal = ({show, setShow}) => {
  const [isShow, setIsShow] = useState(true);
  const { jwt } = useContext(JwtContext);
  const acc = reactLocalStorage.getObject("acc");
  console.log(acc);
  const [orderPageable, setOrderPageAble] = useState({
    page: 1,
    limit: 10,
    inputOrder: "",
    orderTime: "",
  });
  const handleClose = () => {
    setIsShow(false);
    setShow(false);
  }

  const [listOrder, setListOrder] = useState([]);

  useEffect(() => {
    console.log("useeffect:" + orderPageable);
    console.log(acc.token);
    callApi("order", "post", orderPageable, jwt).then((response) => {
      if (response.status !== 200) {
        alert("thao tác thất bại");
        return;
      }
      response.json().then((data) => {
        console.log(data);
        setListOrder(data.resultItem);
        // alert("thao tác thành công");
        console.log("list order", data);
      });
    });
  }, [orderPageable,show]);

  /**
   * filter and search order
   */

  const getInput = (e) => {
    let { name, value } = e.target;
    console.log(name + value);
    setOrderPageAble({ ...orderPageable, [name]: value });
    console.log(orderPageable);
  };

  const getDate = (op, da) => {
    setOrderPageAble({
      ...orderPageable,
      optionTime: op,
    });
  };
  console.log();

  return (
    <div className="list-order">
      <Modal 
        show={isShow}
        scrollable="auto"
        onHide={handleClose}
        // backdrop="static"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Chọn đơn để trả hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalHeaders inputs={getInput} getDate={getDate} />
          <OrderTable type = "return "lists={listOrder} />
         
        </Modal.Body>
        <Modal.Footer>
          {/* <CPagination
            doubleArrows={true}
            activePage={orderPageable.page}
            pages={totalPage}
            onActivePageChange={getPage}
          /> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderModal;
