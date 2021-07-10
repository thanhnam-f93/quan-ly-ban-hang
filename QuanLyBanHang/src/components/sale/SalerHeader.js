import React from "react";
import "./scss/SalerHeader.scss";

const OrderHeader = () => {
  return (
    <div className="wrapper-header">
      <div className="header-left">
        <div className = 'header-left-input'>
            <div className = "icon">
            <i className="fas fa-search" />
            </div>
            <input type = "text"
            placeholder = "Thêm sản phẩm vào đơn" />
        </div>   
      </div>
      <div className = "header-right">
          <div className = "header-right-staff">
          <i class="far fa-user"></i>
          <span>Nguyễn Quang Phúc</span>
          </div>
          <div className = "header-right-utils">
          <div className = "header-right-utils-1">
              <div className = "utils-full-screen">
              <i class="fas fa-expand-arrows-alt fa-lg"></i>
              <i class="fas fa-home fa-lg"></i>
              <button> Phím tắt </button>
              </div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default OrderHeader;
