import React, { useContext } from "react";
import { SalerContext } from "src/context/JwtContext";
import "./scss/SaleProductOptionItem.scss";
const SaleProductOptionItem = ({item}) => {
    console.log("item:hello",item);
  return (
    <div className="Sale-product-option-item">
           <div className="option-item-left">
            </div>
      <div className="option-item-content">
        <div className="option-item-right">
          <div className="item-1">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
          <div className="item-1">
            <span>{item.code}</span>
            <span>Có thể bán: {item.numberProduct}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleProductOptionItem;
