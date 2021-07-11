import React, { useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "./scss/DropDown.scss";
import "react-day-picker/lib/style.css";

const DropDown = (props) => {
  const [optionTime, setOptionTime] = useState();
  const [orderTime, setOrderTime] = useState();
  const opDate = props.opDate;
  const [status, setStatus] = useState(false);
  const [datePicker, setDatePicker] = useState(false);
  const onShow = () => {
    var dropDown = document.getElementById("drop-down");
    status
      ? (dropDown.style.visibility = "hidden")
      : (dropDown.style.visibility = "visible");
    setStatus(!status);
  
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setOrderTime("");
    setOptionTime(e.target.value);
  };

  const onDayChange = (e) => {
    var option = {day:"2-digit",month:"2-digit",year:'numeric', hour:'2-digit',minute:'2-digit'};
    var date = new Date(e);
    const times=date.toLocaleDateString("ja-JP", option)
    setOrderTime('2021-06-28');
    setOptionTime("");
    console.log(times);

  };

  const showDatePicker = () =>{
    setDatePicker(!datePicker);
  }
  return (
    <div className="drop-down">
      <div className="btn-change">
        <button onClick={onShow}>Ngày tạo</button>
        <i className="fas fa-caret-down"></i>
      </div>
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
        <div className="h-4" onClick = {showDatePicker}>
          <button onClick={onChange} value="">
            Tùy chọn
          </button>
        </div>
        <div className="date-picker">
          {
            datePicker ?<DayPickerInput
            selected = {new Date()}
            placeholder="YYYY/MM/DD"
            format="YYYY/MM/DD"
            onDayChange={onDayChange}
          />:<div />
          }   
        </div>
        <div className="h-5" onClick={onShow}>
          <button onClick={() => opDate(optionTime, orderTime)}>Lọc</button>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
