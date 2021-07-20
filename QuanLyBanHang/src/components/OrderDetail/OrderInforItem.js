import React from "react";
import "./scss/OrderInfor.scss"

const OrderInforItem = (props) => {
    const item = props.item;
  return (
      <tr className = "order-infor-row">
        <th scope="row">{item.codeProduct}</th>
        <td>{item.productName}</td>
        <td>{item.quanlity}</td>
        <td>{item.priceProduct}</td>
        <td>{item.price}</td>
      </tr>
  );
};

export default OrderInforItem;
