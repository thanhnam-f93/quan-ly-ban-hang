import React, { useContext } from "react";
import { SalerContext } from "src/context/JwtContext";
import FirstContent from "./FirstContent";
import SalePayment from "./SalePayment";
import SaleTableProduct from "./SaleTableProduct";
import "./scss/SalerContent.scss";
const SalerContent = ({productOption, setIsShowProducts,total}) => {
// const {setIsShowProducts} = useContext(SalerContext);
const isCheck = false;
  const IsCheckShowProductList = ()=>{
    setIsShowProducts(false);
  }
  return (
    <div className="wrap-content"
    onClick ={IsCheckShowProductList}>
      <div className="content-left">
       {productOption.length ==0 ?<FirstContent setIsShowProducts ={setIsShowProducts} />:<SaleTableProduct productOption = {productOption} />}
      
      </div>
      <div className="content-right">
        <SalePayment total = {total} />
      </div>
    </div>
  );
};
export default SalerContent;
