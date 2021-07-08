import React from 'react';
import BillItem from './BillItem';

const BillTable = (props) => {
    let tasks = props.lists;
    //    console.log(tasks);
    const elm = tasks.map((item, index) => {
      return (
        <BillItem
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
            <th scope="col">Mã đơn trả về </th>
              <th scope="col">Mã đơn hàng </th>
              <th scope="col">Tên khách hàng</th>
              <th scope="col">khách phải trả</th>
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

export default BillTable;