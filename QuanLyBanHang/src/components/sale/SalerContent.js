import React, { useContext } from "react";
import { SalerContext } from "src/context/JwtContext";
import FirstContent from "./FirstContent";
import SalePayment from "./SalePayment";
import SaleTableProduct from "./SaleTableProduct";
import "./scss/SalerContent.scss";
const SalerContent = ({productOption}) => {
const {isShowTableProduct} = useContext(SalerContext);
const {setIsShowProducts} = useContext(SalerContext);
  const IsCheckShowProductList = ()=>{
    setIsShowProducts(false);
  }
  return (
    <div className="wrap-content"
    onClick ={IsCheckShowProductList}>
      <div className="content-left">
       {/* <FirstContent /> */}
       {(isShowTableProduct )?  <SaleTableProduct productOption = {productOption} /> :""}
      
      </div>
      <div className="content-right">
        <SalePayment />
      </div>
    </div>
  );
};
export default SalerContent;
