import React from 'react';
import {useHistory} from 'react-router-dom'
import { reactLocalStorage } from 'reactjs-localstorage';

const TableItem = (props) => {  
 
  const history = useHistory();

    // const {id,code, name, price, createdDate}= props;
    const item = props.item;
    const d = new Date(item.createdDate);
    var option = {day:"numeric",month:"2-digit",year:'numeric', hour:'2-digit',minute:'2-digit'};
    console.log( );
    const times=d.toLocaleDateString("ja-JP", option);
    var customerInfor = {
      customerName: item.customerName,
      customerPhone:item.customerPhone,
      customerEmail:item.customerEmail
    }
    console.log("customInf:",customerInfor);
    const redirectDetail = ()=>{
      const location = {
        pathname: `/order-detail/${item.id}`, 
        state:{item:item}  
      }
    history.push (location);
    reactLocalStorage.setObject('infor', customerInfor);
    }
    return (   
         <tr className = "table-row" onClick ={redirectDetail}> 
            <th scope="row">{item.code}</th>
            <td>{item.customerName}</td>
            <td>{item.price}</td>
            <td>{times}</td>
          </tr>
    );
};




export default TableItem;
