import React from 'react';
import OrderInforItem from '../OrderDetail/OrderInforItem';
import BillInforItem from './BillInforItem';

const BillInfor = (props) => {
    const products = props.order;
  console.log("productssss:", products);
  const elm = products.map((item, index) => {
    return (
      <BillInforItem
        key = {index}
        item = {item}
      />
    );
  });
  return (
    <div className="order-infor-1">
      <div class="label-order">Thông tin sản phẩm</div>
      <div className="list-item">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">mã sản phẩm</th>
              <th scope="col">tên sản phẩm</th>
              <th scope="col">số lượng </th>
              <th scope="col">giá hàng trả</th>
              <th scope="col">Thành tiền</th>
            </tr>
          </thead>
          <tbody>{elm}</tbody>
        </table>
      </div>
    </div>
  );
}

export default BillInfor;
