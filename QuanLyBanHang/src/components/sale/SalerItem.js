import React, { useContext, useState } from "react";
import { ProductContext } from "src/context/JwtContext";
import "./scss/SaleItem.scss";
const SalerItem = (props) => {
  const { deleteItemOfList, getCount } = useContext(ProductContext);
  const [total,setTotal]= useState(0);
  const { item,index } = props;
  console.log("key",item);

const checkNavigation =(e) =>{
  let val = e.target.value;
  let exp = /^\d+$/;
  if(exp.test(val) && val<item.numberProduct){
    getCount(val,item);
    console.log("value:",exp.test(val));
  }else{
    getCount(0,item);
     let x = document.getElementById(index);
     x.value = 0;

  }
 
}
  return (
    <tr className="table-row">
      <th scope="row">
      {item.code}
      </th>
      <td>{item.name}</td>
      <td>
        <input
          id={index}
          // type="number"
          defaultValue= "1"
          min="0"
          max={item.numberProduct}
          onChange={(e)=>checkNavigation(e)}
          // onKeyUp = {(e)=>checkNavigation(e)}
        />
      </td>
      <td>{item.price}</td>
      <td>{item['amount']*item['price']}</td>
      <td>  <button onClick={() => deleteItemOfList(item.id)}>
        <i class="far fa-trash-alt"></i>
        </button> </td>
    </tr>
  );
};

export default SalerItem;
