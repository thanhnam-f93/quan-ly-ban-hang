import React, { useContext, useEffect, useState } from "react";
import "./scss/DropDown.scss";
import "react-day-picker/lib/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/src/stylesheets/datepicker.scss";
import "./scss/CustomRangePicker.scss";
import { callApiNotJwt } from "src/apis/ApiCaller";
import { JwtContext, OrderContext } from "src/context/JwtContext";
import { IsValidateDate } from "src/helpers/IsValidateDate";

const DropDown = (props) => {

  const opDate = props.opDate;
  const [status, setStatus] = useState(false);
  const [datePicker, setDatePicker] = useState(false);
  const [startedDate, setStartedDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { jwt } = useContext(JwtContext);
  const [minDate, setMinDate] = useState(new Date());
  const [timerStartSearch, setTimeStartSearch] = useState(new Date());
  const [timeEndSearch, setTimeEndSearch] = useState(new Date());
  const onShow = () => {
    var dropDown = document.getElementById("drop-down");
    status
      ? (dropDown.style.visibility = "hidden")
      : (dropDown.style.visibility = "visible");
    setStatus(!status);
  };
  var option = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const onChange = (e) => {
    let val = e.target.value;
    let startNow = new Date();
    let endNow = new Date();
    console.log(startNow);
    if (val == "TODAY") {
      console.log("TODAY");
    } else if (val == "YESTERDAY") {
      startNow.setDate(startNow.getDate() - 1);
      endNow.setDate(endNow.getDate() - 1);
      console.log("YESTERDAY", endNow);
    } else if (val == "THIS_WEEK") {
      let weekOffset = startNow.getDay();
      console.log("startnow :", startNow.getDay());
      startNow.setDate(startNow.getDate() - weekOffset);
      console.log("THIS_WEEK ", startNow);
    } else if (val == "LAST_WEEK") {
      startNow.setDate(startNow.getDate() - 7);
      let weekOffset = startNow.getDay();
      let weekOffset1 = 6 - weekOffset;
      startNow.setDate(startNow.getDate() - weekOffset);
      endNow.setDate(endNow.getDate() - 7 + weekOffset1);
      console.log("LAST_WEEK", endNow);
    } else if (val == "THIS_MONTH") {
      startNow = new Date(startNow.getFullYear(), startNow.getMonth(), 1);
      console.log("THIS_MONTH", startNow);
    } else if (val == "LAST_MONTH") {
      let _month = startNow.getMonth();
      let _year = 0;
      if (_month == 0) {
        _year = startNow.getFullYear() - 1;
        _month = 11;
      } else {
        _year = startNow.getFullYear();
        _month = _month - 1;
      }
      startNow = new Date(_year, _month, 1);
      endNow = new Date(_year, _month + 1, 0);
      console.log("LAST_MONTH", endNow);
    } else {
      console.log("differrent");
    }
    setTimeStartSearch(startNow.toLocaleDateString('ja-JP',option));
    setTimeEndSearch(endNow.toLocaleDateString('ja-JP',option));
    console.log("timeStrat", startNow.toLocaleDateString("ja-JP", option));
    console.log("timeEnd:", endNow.toLocaleDateString("ja-JP", option));
  };

  const showDatePicker = () => {
    setDatePicker(!datePicker);
  };

  const getStartedDate = (date) => {
    if (date != null) {
      console.log("ng??y ?????u :", date.toLocaleDateString("ja-JP", option));
      setStartedDate(date);
      setTimeStartSearch(date.toLocaleDateString("ja-JP", option));
    }
  };

  const getEndDate = (date) => {
    if (date != null) {
      setTimeEndSearch(date.toLocaleDateString("ja-JP", option));
      setEndDate(date);
    }
  };

  const clickStartDate = () => {
    console.log("click start date");
  };

  const clickEndDate = () => {
    console.log("click end date");
  };

  const validateDateStart = (e) => {
    let now = new Date();
    let val = e.target.value;
    console.log("on change raw:", val);
    let isCheck = IsValidateDate(val);
    if (isCheck) {
      console.log("nh???p ????ng");
      setTimeStartSearch(val);
      setStartedDate(val.toLocaleDateString());
    } else {
      setTimeStartSearch(now.toLocaleDateString('vn-VN'));
      console.log("nh???p sai");
    }
  };

  const validateDateEnd = (e) => {
    let val = e.target.value;
    let now = new Date();
    let isCheck = IsValidateDate(val);
    if (isCheck) {
      console.log("nh???p ????ng");
      setTimeEndSearch(val.toLocaleDateString());
      setEndDate(val.toLocaleDateString);
    } else {
      setTimeEndSearch(now.toLocaleDateString());
      console.log("nh???p sai");
    }
  };

  const filterDate = () => {
    console.log("ng??y ?????u ch???n:", timerStartSearch);
    console.log("ng??y ch???n k???t th??c:", timeEndSearch);
    opDate(timerStartSearch,timeEndSearch );
  };
  useEffect(() => {
    callApiNotJwt("orders/start-time", "GET", jwt).then((response) => {
      if (response.status !== 200) {
      } else {
        response.json().then((data) => {
          console.log("size data:", data);
          setMinDate(data.timeDate);
        });
      }
    });
  }, []);
  return (
    <div className="drop-down">
      <div className="btn-change">
        <button onClick={onShow}>Ng??y t???o</button>
        <i className="fas fa-caret-down"></i>
      </div>
      <div className="content_dropdown" id="drop-down">
        <div className="h-1">
          <button onClick={onChange} value="TODAY">
            H??m nay
          </button>
          <button onClick={onChange} value="YESTERDAY">
            H??m qua{" "}
          </button>
        </div>
        <div className="h-1">
          <button onClick={onChange} value="THIS_WEEK">
            Tu???n n??y
          </button>
          <button onClick={onChange} value="LAST_WEEK">
            tu???n tr?????c
          </button>
        </div>
        <div className="h-1">
          <button onClick={onChange} value="THIS_MONTH">
            Th??ng n??y
          </button>
          <button onClick={onChange} value="LAST_MONTH">
            Th??ng tr?????c
          </button>
        </div>
        <div className="h-4" onClick={showDatePicker}>
          <button value="">T??y ch???n</button>
        </div>
        {datePicker ? (
          <div className="date-picker">
            <DatePicker
              minDate={new Date(minDate)}
              maxDate={new Date()}
              dateFormat="yyyy-MM-dd"
              selected={startedDate}
              onChange={getStartedDate}
              onClick={clickStartDate}
              onChangeRaw={validateDateStart}
              // isClearable
            />
            <DatePicker
              onChangeRaw={validateDateEnd}
              minDate={startedDate}
              maxDate={new Date()}
              dateFormat="yyyy-MM-dd"
              selected={endDate}
              onChange={getEndDate}
              onClick={clickEndDate}
              // isClearable
            />
          </div>
        ) : (
          ""
        )}

        <div className="h-5" onClick={onShow}>
          <button onClick={filterDate}>L???c</button>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
