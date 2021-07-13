import React from 'react';
import { FormatMoney } from 'src/helpers/FormatMoney';

const OrderReturnCustomerItem = ({item}) => {
    return (
        <tr className = "table-row" > 
        <th scope="row">{item.codeOrder}</th>
        <td>{item.productName}</td>
        <td>Số lượng trả</td>
        <td className = "td-2">{FormatMoney(item.discount)}</td>
        <td>Tiền</td>
      </tr>
    );
}

export default OrderReturnCustomerItem;
