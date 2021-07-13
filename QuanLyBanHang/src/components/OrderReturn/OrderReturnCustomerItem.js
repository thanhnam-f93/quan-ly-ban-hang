import React from 'react';
import { FormatMoney } from 'src/helpers/FormatMoney';
import "./scss/OrderReturnCustomerItem.scss"
const OrderReturnCustomerItem = ({item}) => {
    return (
        <tr className = "table-row" > 
        <th scope="row">{item.codeOrder}</th>
        <td>{item.productName}</td>
        <td className = "td-1">
            <span><input type ="text" defaultValue ="0" /></span>
            <span>  /{item.remainAmount}</span>
        </td>
        <td className = "td-2">{FormatMoney(item.discount)}</td>
        <td>Tiền</td>
      </tr>
    );
}

export default OrderReturnCustomerItem;
