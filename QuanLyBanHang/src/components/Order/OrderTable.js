import React from "react";
import TableItem from "./TableItem";
import"./scss/OrderTable.scss"
const OrderTable = (props) => {
  let tasks = props.lists;
  var type = props.type;
     console.log("type:",type);
  const elm = tasks.map((item, index) => {
    
    return (
      <TableItem
      type = {type}
        key = {index}
        item = {item}
      />
    );
  });
  return (
    <div className = "order-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Mã đơn hàng </th>
            <th  scope="col">Tên khách hàng</th>
            <th  scope="col">Chiết khấu</th>
            <th className = 'th-3' scope="col">khách phải trả</th>
            <th scope="col">Ngày tạo đơn</th>
          </tr>
        </thead>
        <tbody>
        {elm}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
