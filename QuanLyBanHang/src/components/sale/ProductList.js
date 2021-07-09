import React from "react";
import ProductItem from "./ProductItem";
import "./scss/ProductList.scss"

const ProductList = (props) => {
  
  const { listProduct,list } = props;
  const elm = listProduct.map((item, index) => {
    return <ProductItem list = {list} key={index} item={item}  />;
  });
  return <div className="product-list"  >{elm}</div>;
};

export default ProductList;
