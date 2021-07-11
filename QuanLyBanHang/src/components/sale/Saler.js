import React, { useContext, useEffect, useState } from 'react';
import { callApi, callApiNotJwt } from 'src/apis/ApiCaller';
import { JwtContext, SalerContext } from 'src/context/JwtContext';
import SaleProductOption from './SaleProductOption';
import SalerContent from './SalerContent';
import SalerHeader from "./SalerHeader"

const Saler = () => {
// ------------------------------- useState-------------------------------------------
const [products, setProducts] = useState([]);
const {jwt} = useContext(JwtContext);
const [isShowProducts,setIsShowProducts] = useState(false);
const orderPageable = {
  page:1,
  limit:7,
};
//--------------------------------useEffect-------------------------------------------
useEffect(() => {
  callApi("api/v1/find-all", "POST", orderPageable ,jwt).then((response) => {
    if (response.status !== 200) {
      alert("thao tác thất bại");
      return;
    }
    response.json().then((data) => {
      console.log("products:",data);

    });
  });
}, [isShowProducts,products]);
  return (
    <div>
      <SalerContext.Provider value = {{setProducts, setIsShowProducts, products ,isShowProducts}}>
      <div className = "header">
          <SalerHeader />
      </div>
      <div className = "body">
        {isShowProducts ?   <SaleProductOption products = {products}  /> : ""}
        <SalerContent />
      </div>
      </SalerContext.Provider>
    </div>
  );
}

export default Saler;
