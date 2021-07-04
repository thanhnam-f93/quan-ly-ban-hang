import React, { useEffect, useState } from 'react';
import { callApi } from 'src/apis/ApiCaller';

import OrderHeader from './OrderHeader';
import OrderTable from './OrderTable';
import './scss/order.css'



const Order = () => {

  const [orderPageable, setOrderPageAble] = useState({
    page:1,
    limit:10,
    inputOrder:"",
    orderTime:""
  });

  const [listOrder, setListOrder] = useState([]);

  useEffect(() => {
    console.log("useeffect:"+orderPageable);
    
    callApi("order","post",orderPageable)
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
 
}, [orderPageable])

/**
 * filter and search order
 */

const getInput = (e)=>{
  let {name,value}= e.target;
  console.log(name+value);
    setOrderPageAble({...orderPageable,[name]:value});
  console.log(orderPageable);

}

const getDate = (op, da) =>{
  setOrderPageAble({
    ...orderPageable,optionTime:op
  })

}
console.log()
 
    return (
        <div className = "list-order">
          <OrderHeader inputs  = {getInput} getDate = {getDate} />   
         <OrderTable lists = {listOrder}/>
        </div>
    );
};


export default Order;
