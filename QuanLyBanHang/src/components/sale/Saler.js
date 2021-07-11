import React, { useContext, useEffect, useState } from "react";
import { callApi, callApiNotJwt } from "src/apis/ApiCaller";
import { JwtContext, SalerContext } from "src/context/JwtContext";
import SaleProductOption from "./SaleProductOption";
import SalerContent from "./SalerContent";
import SalerHeader from "./SalerHeader";
import "./scss/Sale.scss"

const Saler = () => {
  // ------------------------------- useState-------------------------------------------
  const [products, setProducts] = useState([]);
  const { jwt } = useContext(JwtContext);
  const [isShowProducts, setIsShowProducts] = useState(false);
  const [productOption, setProductOption] = useState([]);
  const [isShowTableProduct, setIsShowTableProduct] = useState(false);
  const orderPageable = {
    page: 1,
    limit: 20,
  };
  //--------------------------------useEffect-------------------------------------------
  useEffect(() => {}, [products, isShowProducts]);
  return (
    <div>
      <SalerContext.Provider
        value={{isShowTableProduct, setIsShowTableProduct, setProducts, setIsShowProducts, products, isShowProducts, setProductOption,productOption }}
      >
        <div className="header">
          <SalerHeader />
        </div>
        <div className="body">
          {isShowProducts ? <SaleProductOption products={products} /> : ""}
          <SalerContent productOption = {productOption} />
        </div>
      </SalerContext.Provider>
    </div>
  );
};

export default Saler;
