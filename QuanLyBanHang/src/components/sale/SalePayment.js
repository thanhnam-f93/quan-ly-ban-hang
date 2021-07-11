import React from "react";
import "./scss/SalePayment.scss";
const SalePayment = () => {
  return (
    <div className="sale-payment">
      <div className="customer">
        <div className="customer-infor">
          <spa>
            <i className="fas fa-search i-1" />
          </spa>
          <input type="text" placeholder="Thêm khách hàng vào đơn" />
        </div>
        <span>
            <i className="fas fa-plus" />
          </span>
      </div>
      <div className = 'payment-1'>
          <div className = 'payment-1-1 p-1-1'>
              <span>Tổng tiền</span>
              <span>5000</span>
          </div>
          <div className ='payment-1-2 p-1-1'>
              <span>Chiết khấu</span>
              <input type = 'text'/>
          </div>
          <div className = 'payment-1-3 p-1-1'>
              <span>Khách phải trả</span>
              <span> 9999999</span>
          </div>
          <div className ='payment-1-4 p-1-1'>
              <span> Tiền khách đưa</span>
              <input type = 'text'/>
          </div>
          <div className = 'payment-1-5 p-1-1'>
              <span>Tiền thừa</span>
              <span>50000</span>
          </div>
      </div>
      <div className = 'payment-2'>
          <div className = 'btn-payment'>
              <span>Thanh Toán</span>
          </div>
      </div>
    </div>
  );
};

export default SalePayment;
