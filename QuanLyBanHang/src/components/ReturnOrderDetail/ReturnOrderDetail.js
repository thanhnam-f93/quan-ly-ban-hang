import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';
import { callApi, callApiNotJwt } from 'src/apis/ApiCaller';
import { JwtContext } from 'src/context/JwtContext';
import CustomerInfor from '../OrderDetail/CustomerInfor';
import ReturnOrderDetailInfor from './ReturnOrderDetailInfor';

const ReturnOrderDetail = () => {
  const {jwt}=useContext(JwtContext);
  const [orderDto, setOrderDto] = useState([]);
  const customerInfor = reactLocalStorage.getObject("cInfor");
  const param = useParams();
  const id = param.id;
  console.log("orderDetail:"+id);
  useEffect(() => {
      console.log("types:"+param.id);
      callApiNotJwt(`bill-details/${id}`,"GET",jwt)
      .then(response=>{
        if (response.status !== 200) {
          alert("thao tác thất bại");
          return;
        }
        response.json().then((data) => {     
          setOrderDto(data);     
          console.log(data);           
        });
      });
    
}, [])

 
  return (
    <div>
      <div className="order-detail">
        <div className="row">
          <div className = "col-lg-8 order-infor">
              <ReturnOrderDetailInfor order = {orderDto} />
              <div className = "total-bill"> 
              
              </div>
          </div>
          <div className = "col-lg-4 customer-infor">
          <CustomerInfor list = {customerInfor} />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ReturnOrderDetail;
