import React, { useContext, useState } from "react";
import { ProductContext } from "src/context/JwtContext";
import "./scss/SaleItem.css";
const SalerItem = (props) => {
  const { deleteItemOfList } = useContext(ProductContext);
  const { item } = props;
  var total = item.amount * item.price;
  var [state, setState] = useState(item.amount);
  const getCount = (e) => {
    if (e.target.value > item.numberProduct) {
    }
    console.log("giá trị :", e.target.value);
  };
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
          value={item.amount}
          min="0"
          max={item.numberProduct}
          onChange={getCount}
        />
      </td>
      <td>{item.price}</td>
      <td>{total}</td>
    </tr>
  );
};

export default SalerItem;
