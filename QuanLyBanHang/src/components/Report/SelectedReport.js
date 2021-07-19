import React from "react";
import "./scss/SelectedReport.scss";
const SelectedReport = () => {
  return (
    <div className="selected-report">
      <div className="selected-report-label">
        <span>Báo cáo doanh thu bán hàng</span>
        <span>Theo dõi thu nhập doanh thu dựa theo</span>
      </div>
      <div className="selected-report-content">
        <div className="selected-report-time">
          <div className="selected-report-time-1">
            <div className="selected-report-time-1-icon">
              <span><i className="far fa-calendar-minus fa-3x"></i></span>
            </div>
            <div className="selected-report-time-1-character">
              <span>Thời gian</span>
            </div>
          </div>
        </div>
        <div className="selected-report-product">
          <div className="selected-report-product-1">
            <div className="selected-report-product-1-icon">
              <i className="fas fa-shopping-basket fa-3x"></i>
            </div>
            <div className="selected-report-product-1-character">
                <span>Sản phẩm</span>
            </div>
          </div>
        </div>
        <div className="selected-report-order">
          <div className="selected-report-order-1">
            <div className="selected-report-order-1-icon">
              <i className="far fa-envelope fa-3x"></i>
            </div>
            <div className="selected-report-order-1-character">
              <span>Đơn hàng</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedReport;
