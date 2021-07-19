import React from "react";
import "./scss/ReportTableOfTime.scss";
const ReportTableOfTime = () => {
  return (
    <div className="report-table-time">
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Tháng </th>
            <th scope="col">SL đơn hàng</th>
            <th scope="col">Tổng chiết khấu</th>
            <th className="th-3" scope="col">
              SL hàng trả lại
            </th>
            <th scope="col">Tiền hàng trả lại</th>
            <th scope="col">SL hàng bán ra</th>
            <th scope="col">Doanh thu</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default ReportTableOfTime;
