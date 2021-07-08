import React, { useContext, useState } from "react";
import { ProductContext } from "src/context/JwtContext";
import "./scss/SaleItem.css";
const SalerItem = (props) => {
  const { deleteItemOfList, getCount } = useContext(ProductContext);
  const [total,setTotal]= useState(0);
  const { item,index } = props;
  console.log("key",index);

const checkNavigation =(e) =>{
  var x=e.keyCode;
  console.log("giá trị:",x);
  if(x==189){
    var c = document.getElementById(index);
    c.value = 0;
  }
}
  return (
    <tr className="table-row">
      <th scope="row">
        <button onClick={() => deleteItemOfList(item.id)}>
        <i class="far fa-trash-alt"></i>
        </button> 
      </th>
      <td>{item.code}</td>
      <td>{item.name}</td>
      <td>
        <input
          id={index}
          type="number"
          defaultValue= "1"
          min="0"
          max={item.numberProduct}
          onChange={(e)=>getCount(e,item)}
          onKeyUp = {(e)=>checkNavigation(e)}
          pattern ="\d+"
        />
      </td>
      <td>{item.price}</td>
      <td>{item['amount']*item['price']}</td>
    </tr>
  );
};

export default SalerItem;
