import React, { useContext } from "react";
import { SalerContext } from "src/context/JwtContext";
import SaleProductOptionItem from "./SaleProductOptionItem";
import "./scss/SaleProductOption.scss";

const SaleProductOption = () => {
  // ---------------------------use state-----------------------
  const { products, isShowProducts } = useContext(SalerContext);
  const elm = products.map((item, index) => {
      console.log("item:",item);
    return <SaleProductOptionItem  key={index} item={item} />;
  });
  console.log("saleProductOption", products);
  return (
    <div className="wrap-sale-product-option">      
        {elm}
    <div>hello</div>
    </div>
    
  );
};

export default SaleProductOption;
