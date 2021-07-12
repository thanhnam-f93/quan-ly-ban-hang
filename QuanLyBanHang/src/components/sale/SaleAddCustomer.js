import { CInput } from "@coreui/react";
import React, { useContext, useState } from "react";
import "./scss/SaleAddCustomer.scss"
const SaleAddCustomer = () => {
    const [isShow, setIsShow] = useState(true);
    const handleClose =()=>setIsShow(false);
  return (
    <div className = "add-customer">
        <div className = 'h-1 h-1-2 '>
            <p>Tên khách hàng</p>
            <CInput type="text"  />
        </div>
        <div className = 'h-1 h-1-2 '>
            <p>Số điện thoại</p>
            <CInput type="text"   />
        </div>
        <div className = 'h-1 '>
            <p>Email</p>
            <CInput type="email"  placeholder="jane.doe@example.com" required />
        </div>
        
        <div className = 'h-1 '>
            <p>Ngày sinh</p>
            <CInput type="date" name="date-input" placeholder="date" />
        </div>

        <div className = "h-1 h-1-1">
            <p>Địa chỉ</p>
            <CInput type="text"  />
        </div>
    </div>
  );
};

export default SaleAddCustomer;
