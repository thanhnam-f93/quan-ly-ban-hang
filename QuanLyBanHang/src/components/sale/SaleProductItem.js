import React, { useContext } from "react";
import { SalerContext } from "src/context/JwtContext";
import SaleProductOption from "./SaleProductOption";
import "./scss/SaleProductItem.scss";
const SaleProductItem = ({item,index}) => {
 const {productOption,setProductOption, setIsShowTableProduct} = useContext(SalerContext);
// -------------------delete list product option---------------------
  const deleteItem =()=>{
    let list = productOption;
    list = list.filter(items =>items != item );
    setProductOption(list);
  }
  // -----------------------show table product---------------------------
 
  return (
    <tr style = {{backgroundColor :index%2!=0? "#f2f7fd": "white"}} className="table-row" >
      <th scope="row" className="h-3">
        {index+1}
      </th>
      <td className="h-3">{item.code}</td>
      <td className="h-3">{item.name}</td>
      <td className="h-4 h-4-4">
      <span className = 's-2'><i className="fas fa-arrow-up"></i></span>
      <span><input type = 'text' maxLength = "5"/></span>
      <span className = 's-2'><i className="fas fa-arrow-down"></i></span>
      </td>
      <td className="h-5">{item.price}</td>
      <td className="h-5">{item.price*item.amount}</td>
      <td className="h-4" onClick = {deleteItem}><i className="far fa-trash-alt fa-lg" /></td>
    </tr>
  
  );
};

export default SaleProductItem;
