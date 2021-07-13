import React, { useContext, useEffect, useState } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import { callApi } from 'src/apis/ApiCaller';
import { JwtContext } from 'src/context/JwtContext';
import OrderHeader from './OrderHeader';
import OrderTable from './OrderTable';
import './scss/order.css'
import {
  CPagination
} from '@coreui/react'

const Order = () => {
  const [orderDto,setOrderDto] = useState({});
  const [totalPage,setTotalPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
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
        console.log("size data:",data.length);
        setOrderDto(data);  
        console.log("order give:",data);
        setTotalPage(Math.ceil(data.totalItem/orderPageable.limit));
        setListOrder(data.resultItem);
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
  if(page==0){
   
    page = 1;
  }
  setOrderPageAble({...orderPageable, page:page});
}

    return (
        <div className = "list-order">
          <OrderHeader inputs  = {getInput} getDate = {getDate} />   
         <OrderTable  type = "order" lists = {listOrder}/>
         <CPagination
            doubleArrows = {true}
            activePage={orderPageable.page}
            pages={totalPage}
            onActivePageChange={getPage}
          />  
          
        </div>

    );
};


export default Order;
