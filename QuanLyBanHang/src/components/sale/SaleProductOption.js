import React, { useContext, useEffect, useState } from "react";
import { SalerContext } from "src/context/JwtContext";
import List from "./List";
import SaleProductOptionItem from "./SaleProductOptionItem";
import "./scss/SaleProductOption.scss";

const SaleProductOption = ({products}) => {
  console.log("saleProductOption:",products);
  // ---------------------------use state-----------------------
  // const { products, isShowProducts } = useContext(SalerContext);
  const [listProducts,setListProducts] = useState();
 
  useEffect(() => {
    setListProducts(products);
    console.log("listProduct:",listProducts);
  }, [listProducts]);
  console.log("saleProductOption", products);
  return (
    <div className="wrap-sale-product-option">      
    <List data = {products} render = {item =><SaleProductOptionItem />}/>
    <div>hello</div>
    </div>
    
  );
};

export default SaleProductOption;
