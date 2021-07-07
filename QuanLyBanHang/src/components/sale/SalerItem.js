import React, { useContext, useState } from "react";
import { ProductContext } from "src/context/JwtContext";
import "./scss/SaleItem.css";
const SalerItem = (props) => {
  const { deleteItemOfList, getCount } = useContext(ProductContext);
  const [total,setTotal]= useState(0);
  const { item } = props;


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
          id="countId"
          type="number"
          defaultValue={item.amount}
          min="0"
          max={item.numberProduct}
          onChange={(e)=>getCount(e,item)}
        />
      </td>
      <td>{item.price}</td>
      <td>{item['amount']*item['price']}</td>
    </tr>
  );
};

export default SalerItem;
