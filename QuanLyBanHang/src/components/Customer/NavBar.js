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
  CToggler,
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
          Khách hàng
          <DocsLink name="CNavbar" />
        </CCardHeader>
        <CCardBody>
          <CNavbar expandable="sm" color="info">
            <CToggler inNavbar />
            <CButton
              onClick={() => history.goBack()}
              style={{ backgroundColor: "orange", textAlign: "center" }}
            >
              Back
            </CButton>
            <CCollapse navbar>
              <CNavbarNav className="m-auto">
                <CForm style={{ width: "380px", paddingRight: "50px" }}>
                  <CInput
                    className="mr-sm-6"
                    placeholder="Tìm kiếm theo Tên, Email, Số ĐT của khách hàng..."
                    size="md"
                    onKeyPress={handleChange}
                  />
                </CForm>
                <CDropdown inNav style={{ paddingRight: "50px" }}>
                  <CDropdownToggle>Giới tính</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem onClick={() => setGender("")}>
                      All
                    </CDropdownItem>
                    <CDropdownItem onClick={() => setGender("Nam")}>
                      Nam
                    </CDropdownItem>
                    <CDropdownItem onClick={() => setGender("Nu")}>
                      Nu
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown inNav style={{ paddingRight: "50px" }}>
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
