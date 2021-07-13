import React, { useContext, useEffect, useState } from "react";
import { callApi, callApiNotJwt } from "src/apis/ApiCaller";
import { JwtContext } from "src/context/JwtContext";
import ChartDashBoard from "./ChartDashBoard";
import "./scss/DashBoard.css";

const Dashboard = () => {
  // const { jwt } = useContext(JwtContext);
  const [accColumn, setAccColumn] = useState(0);
  const [dto, setDto] = useState({
    optionTime: "LAST_WEEK",
    dashBoardItems: [],
    price: 0,
    orderNumber: 0,
    billNumber: 0,
    totalPrice: 0,
  });
  // console.log("jwt", jwt);
  useEffect(() => {
    // callApi("dashboard", "post", dto, jwt).then((response) => {
      callApi("dashboard", "post", dto, localStorage.getItem("token")).then((response) => {
      if (response.status !== 200) {
        alert("thao tác thất bại");
        return;
      }
      response.json().then((data) => {
        console.log("doanh thu:", data);
        setDto(data);
        setAccColumn(data.length);
        console.log("length:", data.dashBoardItems.length);
      });
    });
  }, [dto.optionTime]);

  const getDate = (e) => {
    // console.log("thời gian lựa chọn:",e.target.options);
    var ops = e.target.options;
    var value = ops[ops.selectedIndex].value;
    console.log("tg:", value);
    setDto({
      ...dto,
      optionTime: value,
    });
  };

  const { dashBoardItems } = dto;
  var elm = "";
  if (dashBoardItems.length == 0) {
    elm = "";
  } else {
    elm = <ChartDashBoard list = {dashBoardItems} />
  }
  return (
    <div className="dash-board">
      <div className="row ">
        <div className="board-1">
          <div className="sale-per-one">
            <div className="label">
              <p>KẾT QUẢ KINH DOANH TRONG NGÀY</p>
            </div>
            <div className="content">
              <div className="content-x">
                <div className="content-1">
                  <div className="icon">
                    <i class="fas fa-hand-holding-usd fa-3x"></i>
                  </div>
                  <div className="text">
                    <p>Doanh thu</p>
                    <p>{dto.price}</p>
                  </div>
                </div>
              </div>

              <div className="content-x">
                <div className="content-1">
                  <div className="icon-1">
                    <i className="fas fa-cart-plus fa-3x"></i>
                  </div>
                  <div className="text-1">
                    <p>Đơn hàng mới</p>
                    <p>{dto.orderNumber}</p>
                  </div>
                </div>
              </div>

              <div className="content-x">
                <div className="content-1">
                  <div className="icon-2">
                    <i class="fas fa-cart-arrow-down fa-3x"></i>
                  </div>
                  <div className="text-2">
                    <p>Đơn trả hàng</p>
                    <p>{dto.billNumber}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chart">
            <div className="label">
              <span>Doanh thu bán hàng</span>
              <div>
                <select onClick={getDate} id="ddlViewBy">
                  <option value="TODAY">Hôm nay </option>
                  <option value="YESTERDAY">hôm qua</option>
                  <option value="LAST_WEEK" selected="selected">
                    7 ngày trước
                  </option>
                  <option value="THIS_MONTH">Tháng này </option>
                  <option value="LAST_MONTH">Tháng trước </option>
                </select>
              </div>
            </div>
            <div className="content">
              <div className="char-layout">{elm}</div>
              <div className="count">
                <span>Tổng doanh thu:</span>
                <spa>{dto.totalPrice}</spa>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
