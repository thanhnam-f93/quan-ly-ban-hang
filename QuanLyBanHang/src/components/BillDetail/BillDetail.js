import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';
import { callApi } from 'src/apis/ApiCaller';
import CustomerInfor from '../OrderDetail/CustomerInfor';
import BillInfor from './BillInfor';

const BillDetail = () => {
  const [orderDto, setOrderDto] = useState([]);
  const customerInfor = reactLocalStorage.getObject("infor");
  const param = useParams();
  const id = param.id;
  console.log("orderDetail:"+id);
  useEffect(() => {
      console.log("types:"+param.id);
      callApi(`bill-details/${id}`,"GET")
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
              <BillInfor order = {orderDto} />
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

export default BillDetail;
