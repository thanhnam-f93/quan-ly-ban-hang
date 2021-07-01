import React from "react";
import "./scss/order.css";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import {
  CButton,
  CForm,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
  CFormGroup,
  CLabel,
  CInput,
  CInputCheckbox,
} from "@coreui/react";

const OrderHeader = () => {
  return (
    <div className="header-order">
      <div className="input-data">
        <button type="button">
          <span>
            <i className="fas fa-search"></i>
          </span>
        </button>
        <input
          type="text"
          // className="form-control"
          name="userName"
          id="userName"
          placeholder="Tìm kiếm theo mã đơn hàng, tên, SĐT khách hàng"
        />
      </div>
      <div className="btn-data">
        <CDropdown className="m-1" size="lg">
          <CDropdownToggle color="white">Ngày tạo</CDropdownToggle>
          <CDropdownMenu>
            <div className="btn-dropdown">
              <CDropdownItem header>
                <Link to="#">About</Link>
              </CDropdownItem>
              <CDropdownItem>Action Disabled</CDropdownItem>
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem>Another Action</CDropdownItem>
            </div>
          </CDropdownMenu>
        </CDropdown>
      </div>
    </div>
  );
};

export default OrderHeader;
