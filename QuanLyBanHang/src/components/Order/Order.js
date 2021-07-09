import React, { useContext, useEffect, useState } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import { callApi } from 'src/apis/ApiCaller';
import { JwtContext } from 'src/context/JwtContext';
import OrderHeader from './OrderHeader';
import OrderTable from './OrderTable';
import './scss/order.scss'
import {
  CPagination
} from '@coreui/react'




const Order = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {jwt}= useContext(JwtContext);
  const acc= reactLocalStorage.getObject("acc");
  console.log(acc);
  const [orderPageable, setOrderPageAble] = useState({
    page:1,
    limit:7,
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
        console.log("size data:",data.length);
        setListOrder(data);  
      });
    });
 
}, [orderPageable])

/**-------------------------------------------------
 * filter and search order
 */

const getInput = (e)=>{
  let {name,value}= e.target;
  console.log(name+value);
    setOrderPageAble({...orderPageable,[name]:value});
  console.log(orderPageable);

}

const getDate = (op, da) =>{
  console.log("kiểu:",typeof(op));
  setOrderPageAble({
    ...orderPageable,optionTime:op
  })

}

const getPage = (page) =>{
  console.log("trang:",page);
  setOrderPageAble({...orderPageable, page:page});
}

    return (
        <div className = "list-order">
          <OrderHeader inputs  = {getInput} getDate = {getDate} />   
         <OrderTable lists = {listOrder}/>
         <CPagination
            doubleArrows = {false}
            activePage={orderPageable.page}
            pages={10}
            onActivePageChange={getPage}
          />  
          
        </div>

    );
};


export default Order;
