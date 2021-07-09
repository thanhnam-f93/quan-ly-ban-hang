import React, { useContext } from "react";
import { ProductContext } from "src/context/JwtContext";
import "./scss/ProductItem.css"

const ProductItem = (props) => {
    const {item,list} = props;
    const {getListProduct} = useContext(ProductContext);
  return (
    <div className="product-item"

        // onClick = { ()=> list(item)}
              onClick = {()=>getListProduct(item)}
     >
      <div className="image">
          <div className ="image-size">
          <i class="fas fa-address-book fa-2x"></i>
          </div>
      </div>
      <div className="content">
        <div className="content-1">
          <span> {item.name}</span>
          <span>{item.price}</span>
        </div>
        <div className="content-2">
          <span>{item.code}</span>
          <span>Có thể bán: {item.numberProduct}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
