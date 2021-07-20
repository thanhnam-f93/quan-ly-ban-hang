import React from 'react';
import { useHistory } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';

const ReturnOrderItem = (props) => {
    const history = useHistory();
    const item = props.item;
    const d = new Date(item.createdDate);
    var option = {day:"numeric",month:"2-digit",year:'numeric', hour:'2-digit',minute:'2-digit'};
    const times=d.toLocaleDateString("ja-JP", option)
    var customerInfor = {
      customerName: item.customerName,
      customerPhone:item.customerPhone,
      customerEmail:item.customerEmail
    }
    const redirectDetail = ()=>{
      const location = {
        pathname: `/return/return-order-detail/${item.id}`, 
        state:{item:item}  
      }
    history.push (location);
    reactLocalStorage.set("bPrice",item.price);
    reactLocalStorage.setObject("cInfor",customerInfor);
    }
    return (   
         <tr className = "table-row" onClick ={redirectDetail}> 
            <th scope="row">{item.codeOrder}</th>
            <th scope="row">{item.code}</th>
            <td>{item.customerName}</td>
            <td>{item.price}</td>
            <td>{times}</td>
          </tr>
    );
}

export default ReturnOrderItem;
