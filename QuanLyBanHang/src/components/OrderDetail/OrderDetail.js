import React, { useContext, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import {  callApiNotJwt } from "src/apis/ApiCaller";
import { JwtContext } from "src/context/JwtContext";
import CustomerInfor from "./CustomerInfor";
import OrderInfor from "./OrderInfor";
import "./scss/OrderDetail.scss";

const OrderDetail = () => {
  const {jwt} = useContext(JwtContext);
  const customerInfor = reactLocalStorage.getObject('infor');
  const [orderDto, setOrderDto] = useState([]);
  const param = useParams();
  const {id,type} = param;
  console.log("orderDetail:"+id+"/"+type);
  useEffect(() => {
      console.log("types:"+param.id);
      callApiNotJwt(`order-details/${id}`,"GET",jwt)
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
