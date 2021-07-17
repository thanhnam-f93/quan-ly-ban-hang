import { CInput } from "@coreui/react";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import CustomRangePicker from "./CustomRangePicker";
import "./scss/ModalHeader.scss";
const ModalHeaders = (props) => {
  const [status, setStatus] = useState(true);
  let inputs = props.inputs;
  let opDate = props.getDate;
  const [datePicker, setDatePicker] = useState(false);
  const onShows = () => {
    setStatus(!status);
  };

  const showDatePicker = () => {
    setDatePicker(!datePicker);
  };

  const onChange = (e) => {
    console.log(e.target.value);
    // setOrderTime("");
    // setOptionTime(e.target.value);
  };
  return (
    <div className="header-order">
      <div className="drop-down-1">
        <div className="btn-change">
          <button onClick={onShows}>Ngày tạo</button>
          <i className="fas fa-caret-down"></i>
        </div>
        {!status ? (
          <div className="content_dropdown" id="drop-down">
            <div className="h-1">
              <button onClick={onChange} value="TODAY">
                Hôm nay
              </button>
              <button onClick={onChange} value="YESTERDAY">
                Hôm qua{" "}
              </button>
            </div>
            <div className="h-1">
              <button onClick={onChange} value="THIS_WEEK">
                Tuần này
              </button>
              <button onClick={onChange} value="LAST_WEEK">
                tuần trước
              </button>
            </div>
            <div className="h-1">
              <button onClick={onChange} value="THIS_MONTH">
                Tháng này
              </button>
              <button onClick={onChange} value="LAST_WEEK">
                Tháng trước
              </button>
            </div>
            <div className="h-4">
              <button onClick={showDatePicker}>Tùy chọn</button>
            </div>
            {
              datePicker? 
              <div className="date-picker">
             <CustomRangePicker />
              </div>
              :
              ""
            }
           
            <div className="h-5" onClick={onShows}>
              <button>Lọc</button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="input-data-1">
        <button type="button">
          <span>
            <i className="fas fa-search"></i>
          </span>
        </button>
        <input
          onChange={(e) => inputs(e)}
          type="text"
          name="inputOrder"
          id="userName"
          placeholder="Tìm kiếm theo mã đơn hàng, tên, SĐT khách hàng"
        />
      </div>
    </div>
  );
};

export default ModalHeaders;
