import React, { useEffect, useState } from "react";
import { callApi } from "src/apis/ApiCaller";
import OrderHeader from "../Order/OrderHeader";
import BillTable from "./BillTable";
import "./../Order/scss/order.css";


const Bill = () => {
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

    callApi("bill", "post", orderPageable).then((response) => {
      if (response.status !== 200) {
        alert("thao tác thất bại");
        return;
      }
      response.json().then((data) => {
        console.log(data);
        setListOrder(data);
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

  return (
    <div className="list-order">
      <div className="order-1 ">
        <OrderHeader inputs={getInput} getDate={getDate} />
        <div className = "btn-create">
          <button  data-toggle="modal" data-target="#btn-modal">Trả hàng</button>
        </div>
      </div>
      <BillTable lists={listOrder} />
      <div className="modal fade bd-example-modal-lg" id = "btn-modal" tabIndex="-1" role="dialog"  aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      ...
    </div>
  </div>
</div>
    </div>
  );
};

export default Bill;
