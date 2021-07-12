import React, { useContext, useState } from "react";
import "./scss/SaleAddCustomer.scss"
const SaleAddCustomer = () => {
    const [isShow, setIsShow] = useState(true);
    const handleClose =()=>setIsShow(false);
  return (
    <div className = "add-customer">
        <div className = 'h-1 h-1-2 '>
            <p>Tên khách hàng</p>
            <input type= "type" ></input>
        </div>
        <div className = 'h-1 h-1-2 '>
            <p>Số điện thoại</p>
            <input type= "type" ></input>
        </div>
        <div className = 'h-1 '>
            <p>Email</p>
            <input type= "type" ></input>
        </div>
        
        <div className = 'h-1 '>
            <p>Ngày sinh</p>
            <input type= "type" ></input>
        </div>

        <div className = "h-1 h-1-1">
            <p>Địa chỉ</p>
            <input type= "text" />
        </div>
     
    </div>
  );
};

export default SaleAddCustomer;
