import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CCard,
  CCardBody,
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
import { useHistory } from "react-router-dom";
function NavBar({ setGender, setAge, setSearch, setPage }) {
  const history = useHistory();
  const handleChange = (e) => {
    setPage(1);
    setSearch(e.target.value);
  };
  return (
    <div style={{ padding: "0", margin: "0" }}>
      <CCard>
        <CCardBody>
          <CNavbar
            expandable="sm"
            //   color="primary"
            style={{ backgroundColor: "#0089ff" }}
          >
            <CToggler inNavbar />
            <CButton
              onClick={() => history.goBack()}
              style={{
                backgroundColor: "white",
                textAlign: "center",
              }}
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
                  <CDropdownToggle color="light">Giới tính</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem onClick={() => setGender("")}>
                      All
                    </CDropdownItem>
                    <CDropdownItem
                      onClick={() => {
                        setPage(1);
                        setGender("Nam");
                      }}
                    >
                      Nam
                    </CDropdownItem>
                    <CDropdownItem
                      onClick={() => {
                        setPage(1);
                        setGender("Nu");
                      }}
                    >
                      Nu
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown inNav style={{ paddingRight: "50px" }}>
                  <CDropdownToggle color="light">Độ tuổi</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem
                      // key={1}
                      onClick={() => setAge("")}
                    >
                      All
                    </CDropdownItem>
                    <CDropdownItem
                      // key={1}
                      onClick={() => {
                        setPage(1);
                        setAge("under");
                      }}
                    >
                      Dưới 18
                    </CDropdownItem>
                    <CDropdownItem
                      // key={2}
                      onClick={() => {
                        setPage(1);
                        setAge("between");
                      }}
                    >
                      18 đến 35
                    </CDropdownItem>
                    <CDropdownItem
                      //key={3}
                      onClick={() => {
                        setPage(1);
                        setAge("over");
                      }}
                    >
                      Trên 35 tuổi
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <CButton color="light" className="my-2 my-sm-0" type="submit">
                  <Link to="customer/new" className="text-decoration-none">
                    Thêm mới
                  </Link>
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
