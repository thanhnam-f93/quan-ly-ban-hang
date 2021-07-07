import React, { useContext, useEffect, useState } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import { callApi } from 'src/apis/ApiCaller';
import { JwtContext } from 'src/context/JwtContext';
import ModalHeaders from './ModalHeaders';
import OrderTable from './OrderTable';

const OrderModal = () => {
    const {jwt}= useContext(JwtContext);
  const acc= reactLocalStorage.getObject("acc");
  console.log(acc);
  const [orderPageable, setOrderPageAble] = useState({
    page:1,
    limit:10,
    inputOrder:"",
    orderTime:""
  });

  const [listOrder, setListOrder] = useState([]);

  useEffect(() => {
    console.log("useeffect:"+orderPageable);
    console.log(acc.token);
    callApi("order","post",orderPageable,jwt)
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
          <ModalHeaders inputs  = {getInput} getDate = {getDate} />   
         <OrderTable lists = {listOrder}/>
        </div>
    );
};

export default OrderModal;
