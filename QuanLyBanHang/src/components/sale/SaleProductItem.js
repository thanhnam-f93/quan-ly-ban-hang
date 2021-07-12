import React, { useContext, useEffect, useState } from "react";
import { SalerContext } from "src/context/JwtContext";
import SaleProductOption from "./SaleProductOption";
import "./scss/SaleProductItem.scss";
const SaleProductItem = ({item,index, listProductOption}) => {
 const {getAmounts,productOption,setProductOption,setAmountChange, amountChange, setIsShowTableProduct} = useContext(SalerContext);
 const [itemValue,setItemValue] = useState(0);
// -------------------delete list product option---------------------
  const deleteItem =()=>{
    let list = productOption;
    list = list.filter(items =>items != item );
    setProductOption(list);
  }
  // -----------------------get input amount---------------------------
 const getAmount =(e)=>{
   let val = e.target.value;
   console.log("get value:",val);
   setItemValue(val);
   setAmountChange(!amountChange);
   getAmounts(val,item);

 }
//  ----------------press button increment amount--------------------
const incrementAmount =()=>{
  if (item.numberProduct>itemValue){
    let val= itemValue;
    item['amount']=val+1;
    setItemValue(val+1);
    setAmountChange(!amountChange);
  }
 
}

const decrementAmount =()=>{
  if(itemValue>1){
    let val = itemValue;
    item['amount']=val-1;
    setItemValue(val-1);
  }
 
}


 useEffect(() => {
   let val = item.amount;
   setItemValue(val);
 }, [item.amount,amountChange]);
  return (
    <tr style = {{backgroundColor :index%2!=0? "#f2f7fd": "white"}} className="table-row" >
      <th scope="row" className="h-3">
        {index+1}
      </th>
      <td className="h-3">{item.code}</td>
      <td className="h-3">{item.name}</td>
      <td className="h-4 h-4-4">
      <span className = 's-2'><i className="fas fa-arrow-up" onClick = {incrementAmount}></i></span>
      <span><input type = 'text' value = {itemValue}  maxLength = "5" onChange = {(e)=>getAmount(e)}/></span>
      <span className = 's-2'><i className="fas fa-arrow-down" onClick = {decrementAmount}></i></span>
      </td>
      <td className="h-5">{item.price}</td>
      <td className="h-5">{item.price*itemValue}</td>
      <td className="h-4" onClick = {deleteItem}><i className="far fa-trash-alt fa-lg" /></td>
    </tr>
  
  );
};

export default SaleProductItem;
