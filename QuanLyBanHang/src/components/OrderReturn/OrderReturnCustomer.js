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
const OrderReturnCustomer = () => {
    const {jwt} = useContext(JwtContext);
    const customerInfor = reactLocalStorage.getObject('infor');
    const [orderDto, setOrderDto] = useState([]);
    const param = useParams();
    const {id} = param;

    useEffect(() => {
        console.log("types:"+param.id);
        callApiNotJwt(`order-details/${id}`,"GET",jwt)
        .then(response=>{
          if (response.status !== 200) {
            alert("thao tác thất bại");
            return;
          }
          response.json().then((data) => {     
            console.log("orderDetail:",data);
            setOrderDto(data);                
          });
        });
      
  }, [])
  return (
    <div className="create-return-order">
      <div className="lable">
        <span>Tạo đơn trả hàng</span>
      </div>
      <div className="order-return-content">
        <div className="row">
          <div className="col-lg-8">
            <div className="content-right">
              <div className="label-product">
                <span>Thông tin sản phẩm</span>
              </div>
              <div className="table-product">
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">Mã sản phẩm</th>
                      <th scope="col">Tên sản phẩm</th>
                      <th className="th-3" scope="col">
                        Giá sản phẩm
                      </th>
                      <th scope="col">Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    <List data = {orderDto} render = {(item,index) =><OrderReturnCustomerItem key = {index} item= {item} index = {index} />}/>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="content-left">
                {/* <CustomerInfor /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReturnCustomer;
