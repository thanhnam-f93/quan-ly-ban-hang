import React from "react";
import "./scss/Report.scss";
import SelectedReport from "./SelectedReport";
import "react-day-picker/lib/style.css";
import DatePicker from "react-datepicker";
import ReportTableOfTime from "./reportTable/ReportTableOfTime";
const Report = () => {
  return (
    <div className="report-wrap">
      <div className="report-option">
        <SelectedReport />
      </div>
      <div className="report-content-wrap">
        <div className="report-content-header">
          <div className="header-label">
            <span>Doanh thu theo thời gian</span>
          </div>
          <div className="header-input-timer">
            <div className="header-input-timer-1">
                <span>Ngày bắt đầu</span>
              <DatePicker 
              selected = {new Date()}
              />
            </div>
            <div className="header-input-timer-2">
                <span>Ngày kết thúc</span>
              <DatePicker
                selected = {new Date()}
              />
            </div>
          </div>
        </div>
        <div className="report-content-body">
          <div className="report-content-body-chart"></div>
          <div className="report-content-body-table">
              <ReportTableOfTime />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
