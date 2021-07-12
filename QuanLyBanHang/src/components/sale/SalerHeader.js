import React, { useContext, useEffect, useState } from "react";
import { callApi, callApiNotJwt } from "src/apis/ApiCaller";
import { JwtContext, SalerContext } from "src/context/JwtContext";
import SalerContent from "./SalerContent";
import "./scss/SalerHeader.scss";

const OrderHeader = () => {
  // ------------------------------- useState-------------------------------------------

  const { jwt } = useContext(JwtContext);
  const { setProducts, setIsShowProducts } = useContext(SalerContext);
  const orderPageable = {
    page:1,
    limit:7,
  };

  //--------------------------------useEffect-------------------------------------------
  useEffect(() => {
    callApi(`api/v1/find-all`, "POST",orderPageable, jwt).then(
      (response) => {
        if (response.status !== 200) {
          alert("thao tác thất bại");
          return;
        }
        response.json().then((data) => {
          console.log(data);
          setProducts(data);
        });
      }
    );
  }, []);
  // ----------------------------------functions----------------------------------------------
  /**
   *
   * @param {*} e
   * get character from input form
   */
  const getInputKey = (e) => {
    let val = e.target.value;
    // console.log("order-header-value input form:", val);
    callApiNotJwt(`api/v1/productSearchByKey?keyword=${val}`, "Get", jwt).then(
      (response) => {
        if (response.status !== 200) {
          alert("thao tác thất bại");
          return;
        }
        response.json().then((data) => {
          console.log(data);
          setProducts(data);
        });
      }
    );
  };

  const IsShowProduct = ()=>{
    callApi("api/v1/find-all", "POST", orderPageable ,jwt).then((response) => {
      if (response.status !== 200) {
        alert("thao tác thất bại");
        return;
      }
      response.json().then((data) => {
        console.log("products:",data);
        setProducts(data);
      });
    });
    setIsShowProducts(true);
    console.log("ishow:");
  }
  

  return (
    <div className="wrapper-header">
      <div className="header-left">
        <div className="header-left-input">
          <div className="icon">
            <i className="fas fa-search" />
          </div>
          <input
            type="text"
            onFocus = {IsShowProduct}
            onChange={(e) => getInputKey(e)}
            placeholder="Thêm sản phẩm vào đơn"
          />
        </div>
      </div>
      <div className="header-right">
        <div className="header-right-staff">
          <div className="header-right-staff-1">
            <span>
              <i className="far fa-user"></i>
            </span>
            <span>Nguyễn Quang Phúc</span>
          </div>
        </div>
        <div className="header-right-utils">
          <div className="header-right-utils-1">
            <div className="utils-full-screen">
              <i className="fas fa-expand-arrows-alt fa-lg"></i>
              <i className="fas fa-home fa-lg"></i>
              <button> Phím tắt </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHeader;
