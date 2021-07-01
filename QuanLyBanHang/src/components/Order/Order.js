import React, { useEffect, useState } from 'react';
import { callApi } from 'src/apis/ApiCaller';

import OrderHeader from './OrderHeader';
import OrderTable from './OrderTable';
import './scss/order.css'


const Order = () => {

  const [orderPageable, setOrderPageAble] = useState({
    page:1,
    limit:5,
    inputOrder:"",
    orderTime:""
  });

  const [listOrder, setListOrder] = useState([]);

  useEffect(() => {
    console.log(orderPageable);
    
    callApi("order","POST",orderPageable)
    .then(response=>{
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
 
}, [])
 
    return (
        <div className = "list-order">
          <OrderHeader />   
         <OrderTable lists = {listOrder}/>
        </div>
    );
};


export default Order;
