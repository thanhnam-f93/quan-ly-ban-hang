import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { FormatMoney } from "src/helpers/FormatMoney";
import "./scss/OrderReturnCustomerItem.scss";
const OrderReturnCustomerItem = ({ item, dismount,getOrderDetail }) => {
  const [quantity, setQuantity] = useState(0);
  const [total,setTotal] = useState(0);
  const getQuantity = (e) => {
   let val = parseInt(e.target.value);
    console.log(val);
    let exp = /^\d+$/;
    if (exp.test(val)) {
      if (val > item.remainAmount) {
          console.log("ok");
        val = item.remainAmount;
      } else {
          console.log("no");
      }
    }else{
       val = 0;
    }
    setQuantity(val);
    item['amountPay'] = val;
    getOrderDetail(item);
    setTotal(val*(item.price*dismount/100));
  };

  useEffect(() => {
    
  }, [quantity]);
  return (
    <tr className="table-row">
      <th scope="row">{item.codeOrder}</th>
      <td>{item.productName}</td>
      <td className="td-1">
        <div className = "input-1">
          <input
            type="text"
            value={FormatMoney(quantity)}
            onChange={getQuantity}
          />
        </div>
        <span> /{item.remainAmount}</span>
      </td>
      <td className="td-2">{FormatMoney(item.discount)}</td>
      <td> {FormatMoney((item.discount * dismount) / 100)}</td>
      <td>{total}</td>
    </tr>
  );
};

export default OrderReturnCustomerItem;
