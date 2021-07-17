import React, { useContext, useEffect, useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "./scss/DropDown.scss";
import "react-day-picker/lib/style.css";
import { CInput } from "@coreui/react";
import DatePicker from "react-datepicker"
import "react-datepicker/src/stylesheets/datepicker.scss";
import "./scss/CustomRangePicker.scss"
import { callApiNotJwt } from "src/apis/ApiCaller";
import { JwtContext } from "src/context/JwtContext";

const DropDown = (props) => {
  const [optionTime, setOptionTime] = useState();
  const [orderTime, setOrderTime] = useState();
  const opDate = props.opDate;
  const [status, setStatus] = useState(false);
  const [datePicker, setDatePicker] = useState(false);
  const [startedDate, setStartedDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const {jwt} = useContext(JwtContext);
  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());
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

  const getStartedDate = (date)=>{
    setStartedDate(date);
  }

  const getEndDate = (date)=>{
    setEndDate(date);
  }

  const clickStartDate = ()=>{
    console.log("click start date");
  }

  const clickEndDate = ()=>{
    console.log("click end date");
  }

  useEffect(()=>{
    callApiNotJwt ("orders/start-time","GET",jwt)
    .then(response=>{
      if (response.status !== 200) {
       
      }else{
        response.json().then((data) => {     
          console.log("size data:",data); 
          setMinDate(data.timeDate);
        });
      }
    
    });
   
  },[])
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
        {
          datePicker?
          <div className="date-picker">  
         <DatePicker 
         minDate = {new Date(minDate)}
         maxDate = {new Date()}
          dateFormat = "dd/MM/yyyy"
          selected = {startedDate}
          onChange = {getStartedDate}
          onClick = {clickStartDate}
          isClearable
          />
         <DatePicker 
         minDate = {startedDate}
         maxDate = {new Date()}
         dateFormat = "dd/MM/yyyy"
         selected = {endDate}
         onChange = {getEndDate}
         onClick = {clickEndDate}
         isClearable
          />
      </div>
      :
      ""
        }
       
        <div className="h-5" onClick={onShow}>
          <button onClick={() => opDate(optionTime, orderTime)}>Lọc</button>
        </div>
    
      </div>
    </div>
  );
};

export default DropDown;
