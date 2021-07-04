import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import { callApi } from "src/apis/ApiCaller";
import CustomerInfor from "./CustomerInfor";
import OrderInfor from "./OrderInfor";
import "./scss/OrderDetail.css";

const OrderDetail = () => {
  const customerInfor = reactLocalStorage.getObject('infor');
  const [orderDto, setOrderDto] = useState([]);
  const param = useParams();
  const id = param.id;
  console.log("orderDetail:"+id);
  useEffect(() => {
      console.log("types:"+param.id);
      callApi(`order-details/${id}`,"GET")
      .then(response=>{
        if (response.status !== 200) {
          alert("thao tác thất bại");
          return;
        }
        response.json().then((data) => {     
          console.log("orderDetail:",data);
          setOrderDto(data);                
        });
      });
    
}, [])

 
  return (
    <div>
      <div className="order-detail">
        <div className="row">
          <div className = "col-lg-8 order-infor">
              <OrderInfor order = {orderDto} />
          </div>
          <div className = "col-lg-4 customer-infor">
          <CustomerInfor list = {customerInfor} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
