import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CNavbarNav,
  CNavbarBrand,
  CToggler,
  CNavLink,
  CDropdown,
  CForm,
  CInput,
  CButton,
} from "@coreui/react";
import { DocsLink } from "src/reusable";
import { useHistory } from "react-router-dom";
function NavBar({ setGender, setAge, setSearch }) {
  const history = useHistory();
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <CCard>
        <CCardHeader>
          CNavbar
          <DocsLink name="CNavbar" />
        </CCardHeader>
        <CCardBody>
          <CNavbar expandable="sm" color="info">
            <CToggler inNavbar />
            <CNavbarBrand>NavbarBrand</CNavbarBrand>
            <CCollapse navbar>
              <CNavbarNav>
                <CNavLink>Home</CNavLink>
                <CNavLink>Link</CNavLink>
              </CNavbarNav>
              <CNavbarNav className="m-auto">
                <CForm inline>
                  <CInput
                    className="mr-sm-6"
                    placeholder="Tìm kiếm theo tên, email, SĐT khách hàng..."
                    size="md"
                    onKeyPress={handleChange}
                  />
                </CForm>
                <CDropdown inNav>
                  <CDropdownToggle>Giới tính</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem onClick={() => setGender("")}>
                      All
                    </CDropdownItem>
                    <CDropdownItem onClick={() => setGender("Nam")} color>
                      Nam
                    </CDropdownItem>
                    <CDropdownItem onClick={() => setGender("Nu")}>
                      Nu
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown inNav>
                  <CDropdownToggle>Độ tuổi</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem
                      // key={1}
                      onClick={() => setAge("")}
                    >
                      All
                    </CDropdownItem>
                    <CDropdownItem
                      // key={1}
                      onClick={() => setAge("under")}
                    >
                      Dưới 18
                    </CDropdownItem>
                    <CDropdownItem
                      // key={2}
                      onClick={() => setAge("between")}
                    >
                      18 đến 35
                    </CDropdownItem>
                    <CDropdownItem
                      //key={3}
                      onClick={() => setAge("over")}
                    >
                      Trên 35 tuổi
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <CButton color="light" className="my-2 my-sm-0" type="submit">
                  <Link to="/customerNew">Thêm mới</Link>
                </CButton>
              </CNavbarNav>
            </CCollapse>
          </CNavbar>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default NavBar;
