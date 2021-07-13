import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import { callApiNotJwt } from "src/apis/ApiCaller";
import { JwtContext } from "src/context/JwtContext";
import CustomerInfor from "../OrderDetail/CustomerInfor";
import List from "../sale/List";
import OrderReturnCustomerItem from "./OrderReturnCustomerItem";
import "./scss/OrderReturnCustomer.scss";
const OrderReturnCustomer = ({ item }) => {
  const { jwt } = useContext(JwtContext);
  const customerInfor = reactLocalStorage.getObject("infor");
  const [orderDto, setOrderDto] = useState([]);
  const param = useParams();
  const { id, code } = param;

  useEffect(() => {
    console.log("types:" + param.id);
    callApiNotJwt(`order-details/${id}`, "GET", jwt).then((response) => {
      if (response.status !== 200) {
        alert("thao tác thất bại");
        return;
      }
      response.json().then((data) => {
        console.log("orderDetail:", data);
        setOrderDto(data);
      });
    });
  }, []);
  return (
    <div className="create-return-order">
      <div className="lable">
        <p>Tạo đơn trả hàng</p>
      </div>
      <div className="order-return-content">
        <div className="row">
          <div className="col-lg-8">
            <div className="content-right">
              <div className="label-product">
                <span>Thông tin sản phẩm-đơn hàng</span>
                <span>({code})</span>
              </div>
              <div className="table-product">
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">Mã sản phẩm</th>
                      <th scope="col">Tên sản phẩm</th>
                      <th scope="col">Số lượng trả</th>
                      <th className="th-3" scope="col">
                        Giá hàng trả
                      </th>
                      <th scope="col">Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    <List
                      data={orderDto}
                      render={(item, index) => (
                        <OrderReturnCustomerItem
                          key={index}
                          item={item}
                          index={index}
                        />
                      )}
                    />
                  </tbody>
                </table>
              </div>
              <div className="content-end">
                <div className="row">
                  <div className="col-lg-5"></div>
                  <div className="col-lg-7">
                    <div className="amount">
                      <span>Số lượng</span>
                      <span>amount</span>
                    </div>
                    <div className="total-money">
                      <span>Tổng số tiền trả khách</span>
                      <span>money</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="content-left">
              <CustomerInfor list={customerInfor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReturnCustomer;
