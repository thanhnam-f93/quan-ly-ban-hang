import React from 'react';

const ReturnOrderDetailItem = (props) => {
    const item = props.item;
  return (
      <tr className = "order-infor-row">
        <th scope="row">{item.productCode}</th>
        <td>{item.productName}</td>
        <td>{item.quanlity}</td>
        <td>{item.priceProduct}</td>
        <td>{item.price}</td>
      </tr>
  );
}

export default ReturnOrderDetailItem;
