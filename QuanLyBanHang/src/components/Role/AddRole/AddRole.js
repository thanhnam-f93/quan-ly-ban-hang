import React, { useState } from 'react'
import { callApi } from 'src/apis/Apis';
import {
  CFormGroup,
  CLabel,
  CInput,
  CTextarea,
  CInputCheckbox,
  CCol
} from '@coreui/react'
import { useHistory } from 'react-router-dom';


const AddRole = () => {

  const [clickIconCheckBox, setClickIconCheckBox] = useState(1);


  let history = useHistory();

  const [role, setRole] = useState({ createdDate: new Date(), createBy: localStorage.getItem('name') })


  /* Staff */
  const showCheckBoxOfIconStaff = () => {
    setClickIconCheckBox(clickIconCheckBox + 1);
    var listItem = document.getElementById("listItemStaff");
    var checkBoxStaff = document.getElementsByName("staff");
    var pStaff = document.getElementById("pStaff");
    var result = "";

    for (var i = 0; i < checkBoxStaff.length; i++) {
      if (checkBoxStaff[i].checked == true) {
        result += ' ' + checkBoxStaff[i].value + ',';
      }
    }

    pStaff.innerHTML = "Có quyền: " + `<em> ${result} </em>`;

    if (clickIconCheckBox % 2 != 0) {
      listItem.style.display = "block"
      pStaff.style.display = "none"
    } else {
      listItem.style.display = "none";
      pStaff.style.display = "block"
      if (result == "") {
        pStaff.style.display = "none"
      }
    }
  }

  const showCheckBoxStaff = () => {
    setClickIconCheckBox(clickIconCheckBox + 1);
    var listItem = document.getElementById('listItemStaff');
    var checkBoxStaff = document.querySelectorAll("input[name='staff']");
    listItem.style.display = "block";

    if (clickIconCheckBox % 2 != 0) {
      checkBoxStaff.forEach((checkbox) => {
        checkbox.checked = true;
      })
    } else {
      checkBoxStaff.forEach((checkbox) => {
        checkbox.checked = false;
      })
    }
  }
  /* End - Staff */

  /* Product */
  const showCheckBoxOfIconProduct = () => {
    setClickIconCheckBox(clickIconCheckBox + 1);
    var listItem = document.getElementById("listItemProduct");
    var checkBoxStaff = document.getElementsByName("product");
    var pStaff = document.getElementById("pProduct");
    var result = "";

    for (var i = 0; i < checkBoxStaff.length; i++) {
      if (checkBoxStaff[i].checked == true) {
        result += ' ' + checkBoxStaff[i].value + ',';
      }
    }

    pStaff.innerHTML = "Có quyền: " + `<em> ${result} </em>`;

    if (clickIconCheckBox % 2 != 0) {
      listItem.style.display = "block"
      pStaff.style.display = "none"
    } else {
      listItem.style.display = "none";
      pStaff.style.display = "block"
      if (result == "") {
        pStaff.style.display = "none"
      }
    }
  }

  const showCheckBoxProduct = () => {
    setClickIconCheckBox(clickIconCheckBox + 1);
    var listItem = document.getElementById('listItemProduct');
    var checkBoxStaff = document.querySelectorAll("input[name='product']");
    listItem.style.display = "block";

    if (clickIconCheckBox % 2 != 0) {
      checkBoxStaff.forEach((checkbox) => {
        checkbox.checked = true;
      })
    } else {
      checkBoxStaff.forEach((checkbox) => {
        checkbox.checked = false;
      })
    }
  }
  /* End - Product */


  /* Customer */
  const showCheckBoxOfIconCustomer = () => {
    setClickIconCheckBox(clickIconCheckBox + 1);
    var listItem = document.getElementById("listItemCustomer");
    var checkBoxStaff = document.getElementsByName("customer");
    var pStaff = document.getElementById("pCustomer");
    var result = "";

    for (var i = 0; i < checkBoxStaff.length; i++) {
      if (checkBoxStaff[i].checked == true) {
        result += ' ' + checkBoxStaff[i].value + ',';
      }
    }

    pStaff.innerHTML = "Có quyền: " + `<em> ${result} </em>`;

    if (clickIconCheckBox % 2 != 0) {
      listItem.style.display = "block"
      pStaff.style.display = "none"
    } else {
      listItem.style.display = "none";
      pStaff.style.display = "block"
      if (result == "") {
        pStaff.style.display = "none"
      }
    }
  }

  const showCheckBoxCustomer = () => {
    setClickIconCheckBox(clickIconCheckBox + 1);
    var listItem = document.getElementById('listItemCustomer');
    var checkBoxStaff = document.querySelectorAll("input[name='customer']");
    listItem.style.display = "block";

    if (clickIconCheckBox % 2 != 0) {
      checkBoxStaff.forEach((checkbox) => {
        checkbox.checked = true;
      })
    } else {
      checkBoxStaff.forEach((checkbox) => {
        checkbox.checked = false;
      })
    }
  }
  /* End - Customer */

  /* Order */
  const showCheckBoxOfIconOrder = () => {
    setClickIconCheckBox(clickIconCheckBox + 1);
    var listItem = document.getElementById("listItemOrder");
    var checkBoxStaff = document.getElementsByName("order");
    var pStaff = document.getElementById("pOrder");
    var result = "";

    for (var i = 0; i < checkBoxStaff.length; i++) {
      if (checkBoxStaff[i].checked == true) {
        result += ' ' + checkBoxStaff[i].value + ',';
      }
    }

    pStaff.innerHTML = "Có quyền: " + `<em> ${result} </em>`;

    if (clickIconCheckBox % 2 != 0) {
      listItem.style.display = "block"
      pStaff.style.display = "none"
    } else {
      listItem.style.display = "none";
      pStaff.style.display = "block"
      if (result == "") {
        pStaff.style.display = "none"
      }
    }
  }

  const showCheckBoxOrder = () => {
    setClickIconCheckBox(clickIconCheckBox + 1);
    var listItem = document.getElementById('listItemOrder');
    var checkBoxStaff = document.querySelectorAll("input[name='order']");
    listItem.style.display = "block";

    if (clickIconCheckBox % 2 != 0) {
      checkBoxStaff.forEach((checkbox) => {
        checkbox.checked = true;
      })
    } else {
      checkBoxStaff.forEach((checkbox) => {
        checkbox.checked = false;
      })
    }
  }
  /* End - Order */


  /* Statistical */
  const showCheckBoxOfIconStatistical = () => {
    setClickIconCheckBox(clickIconCheckBox + 1);
    var listItem = document.getElementById("listItemStatistical");
    var checkBoxStaff = document.getElementsByName("statistical");
    var pStaff = document.getElementById("pStatistical");
    var result = "";

    for (var i = 0; i < checkBoxStaff.length; i++) {
      if (checkBoxStaff[i].checked == true) {
        result += ' ' + checkBoxStaff[i].value + ',';
      }
    }

    pStaff.innerHTML = "Có quyền: " + `<em> ${result} </em>`;

    if (clickIconCheckBox % 2 != 0) {
      listItem.style.display = "block"
      pStaff.style.display = "none"
    } else {
      listItem.style.display = "none";
      pStaff.style.display = "block"
      if (result == "") {
        pStaff.style.display = "none"
      }
    }
  }

  const showCheckBoxStatistical = () => {
    setClickIconCheckBox(clickIconCheckBox + 1);
    var listItem = document.getElementById('listItemStatistical');
    var checkBoxStaff = document.querySelectorAll("input[name='statistical']");
    listItem.style.display = "block";

    if (clickIconCheckBox % 2 != 0) {
      checkBoxStaff.forEach((checkbox) => {
        checkbox.checked = true;
      })
    } else {
      checkBoxStaff.forEach((checkbox) => {
        checkbox.checked = false;
      })
    }
  }
  /* End - Statistical */

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setRole({ ...role, [name]: value });
  }

  const addRole = (e) => {
    e.preventDefault();
    callApi('post', 'roles', role)
      .then(response => { history.goBack() })
  }

  return (
    <div>
      <h3>Thêm mới vai trò</h3>
      <hr />

      {/* Chi tiết vai trò */}
      <div className="row" style={{ marginTop: "30px" }}>

        <div className="col-lg-4">
          <div style={{ width: "360px" }}>
            <h5 style={{ marginTop: "12px" }}>Chi tiết vai trò</h5>
            <p></p>
            <p>Thông tin chi tiết của vai trò để phục vụ cho việc quản lý sau này</p>
          </div>
        </div>

        <div className="col-lg-8">
          <div style={{ backgroundColor: "white", padding: "13px 20px" }}>
            <div className="row">
              <div className="col-lg-6">
                <CFormGroup>
                  <CLabel>Tên vai trò</CLabel>
                  <CInput
                    type="text"
                    name="name"
                    placeholder="Nhập vai trò"
                    onChange={onHandleChange}
                  />
                </CFormGroup>
              </div>
              <div className="col-lg-6">
                <CFormGroup>
                  <CLabel htmlFor="vat">Ghi chú</CLabel>
                  <CTextarea style={{ height: "70px" }}
                    type="text"
                    name="notes"
                    placeholder="Nhập ghi chú"
                    onChange={onHandleChange}
                  />
                </CFormGroup>
              </div>
            </div>
          </div>
          {/* <button className="btn btn-danger btn-light" type="reset" style={{ marginLeft: "10px" }}>Hủy</button>
                <button className="btn btn-success"  style={{ marginLeft: "10px" }} type = "submit" onClick = {addRole}>Thêm</button> */}
        </div>
      </div>
      {/* End - Chi tiết vai trò */}


      {/*Phân quyền chi tiết */}

      <div className="row" style={{ marginTop: "30px" }}>

        <div className="col-lg-4">
          <div style={{ width: "360px" }}>
            <h5 style={{ marginTop: "23px" }}>Phân quyền chi tiết</h5>
            <p></p>
            <p>Cho phép người quản lý giới hạn quyền của vai trò trong hệ thống</p>
          </div>
        </div>

        <div className="col-lg-8">
          <div style={{ backgroundColor: "white", padding: "13px 20px" }}>

            {/* Nhân viên */}
            <div>
              <div style={{ padding: "10px 0" }}  >
                <CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox custom id="inline-checkbox1" name="inline-checkbox1" value="" onClick={showCheckBoxStaff} />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1" ><h6 style={{ display: "inline" }}>Nhân viên</h6></CLabel>
                  <svg style={{ marginLeft: "10px", marginTop: "3px", color: "blue" }}
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-chevron-double-down" viewBox="0 0 16 16" onClick={showCheckBoxOfIconStaff}>
                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </CFormGroup>
              </div>

              <p id="pStaff" style={{ display: "none", color: "#637381", fontSize: "13px", marginLeft: "18px" }}></p>
              {/* List Item */}
              <div id="listItemStaff" style={{ display: "none" }}>
                {/* Item */}
                <div className="row" style={{ padding: "10px 10px" }}>
                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox2" name="staff" value="Xem nhân viên" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Xem nhân viên</CLabel>
                    </CFormGroup>
                  </div>

                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox3" name="staff" value="Tạo nhân viên" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Tạo nhân viên</CLabel>
                    </CFormGroup>
                  </div>

                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox4" name="staff" value="Sửa nhân viên" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox4">Sửa nhân viên</CLabel>
                    </CFormGroup>
                  </div>
                </div>
                {/* End - Item */}

                {/* Item */}
                <div className="row" style={{ padding: "10px 10px" }}>
                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox5" name="staff" value="Tìm kiếm nhân viên" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox5">Tìm kiếm nhân viên</CLabel>
                    </CFormGroup>
                  </div>
                </div>
                {/* End - Item */}
              </div>
              {/*End - List Item */}

            </div>
            {/* End - Nhân viên */}
            <hr />

            {/* Sản phẩm */}
            <div>
              <div style={{ padding: "10px 0" }}  >
                <CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox custom id="inline-checkbox20" name="inline-checkbox20" value="" onClick={showCheckBoxProduct} />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox20" ><h6 style={{ display: "inline" }}>Sản phẩm</h6></CLabel>
                  <svg style={{ marginLeft: "10px", marginTop: "3px", color: "blue" }}
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-chevron-double-down" viewBox="0 0 16 16" onClick={showCheckBoxOfIconProduct}>
                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </CFormGroup>
              </div>

              <p id="pProduct" style={{ display: "none", color: "#637381", fontSize: "13px", marginLeft: "18px" }}></p>
              {/* List Item */}
              <div id="listItemProduct" style={{ display: "none" }}>
                {/* Item */}
                <div className="row" style={{ padding: "10px 10px" }}>
                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox21" name="product" value="Xem sản phẩm" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox21">Xem sản phẩm</CLabel>
                    </CFormGroup>
                  </div>

                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox22" name="product" value="Tạo sản phẩm" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox22">Tạo sản phẩm</CLabel>
                    </CFormGroup>
                  </div>

                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox23" name="product" value="Sửa sản phẩm" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox23">Sửa sản phẩm</CLabel>
                    </CFormGroup>
                  </div>
                </div>
                {/* End - Item */}

                {/* Item */}
                <div className="row" style={{ padding: "10px 10px" }}>
                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox24" name="product" value="Xóa sản phẩm" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox24">Xóa sản phẩm</CLabel>
                    </CFormGroup>
                  </div>

                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox25" name="product" value="Tìm kiếm sản phẩm" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox25">Tìm kiếm sản phẩm</CLabel>
                    </CFormGroup>
                  </div>

                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox26" name="product" value="Lọc sản phẩm" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox26">Lọc sản phẩm</CLabel>
                    </CFormGroup>
                  </div>
                </div>

                {/* End - Item */}
              </div>
              {/*End - List Item */}

            </div>
            {/* End - Sản phẩm */}
            <hr />

            {/* Khách hàng */}
            <div>
              <div style={{ padding: "10px 0" }}  >
                <CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox custom id="inline-checkbox30" name="inline-checkbox30" value="" onClick={showCheckBoxCustomer} />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox30" ><h6 style={{ display: "inline" }}>Khách hàng</h6></CLabel>
                  <svg style={{ marginLeft: "10px", marginTop: "3px", color: "blue" }}
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-chevron-double-down" viewBox="0 0 16 16" onClick={showCheckBoxOfIconCustomer}>
                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </CFormGroup>
              </div>

              <p id="pCustomer" style={{ display: "none", color: "#637381", fontSize: "13px", marginLeft: "18px" }}></p>
              {/* List Item */}
              <div id="listItemCustomer" style={{ display: "none" }}>
                {/* Item */}
                <div className="row" style={{ padding: "10px 10px" }}>
                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox31" name="customer" value="Xem khách hàng" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox31">Xem khách hàng</CLabel>
                    </CFormGroup>
                  </div>

                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox32" name="customer" value="Tạo khách hàng" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox32">Tạo khách hàng</CLabel>
                    </CFormGroup>
                  </div>

                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox33" name="customer" value="Sửa khách hàng" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox33">Sửa khách hàng</CLabel>
                    </CFormGroup>
                  </div>
                </div>
                {/* End - Item */}

                {/* Item */}
                <div className="row" style={{ padding: "10px 10px" }}>
                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox34" name="customer" value="Xóa khách hàng" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox34">Xóa khách hàng</CLabel>
                    </CFormGroup>
                  </div>

                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox35" name="customer" value="Tìm kiếm khách hàng" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox35">Tìm kiếm khách hàng</CLabel>
                    </CFormGroup>
                  </div>

                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox36" name="customer" value="Lọc khách hàng" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox36">Lọc khách hàng</CLabel>
                    </CFormGroup>
                  </div>
                </div>

                {/* End - Item */}
              </div>
              {/*End - List Item */}

            </div>
            {/* End - Khách hàng */}
            <hr />

            {/* Hóa đơn */}
            <div>
              <div style={{ padding: "10px 0" }}  >
                <CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox custom id="inline-checkbox40" name="inline-checkbox40" value="" onClick={showCheckBoxOrder} />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox40" ><h6 style={{ display: "inline" }}>Hóa đơn</h6></CLabel>
                  <svg style={{ marginLeft: "10px", marginTop: "3px", color: "blue" }}
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-chevron-double-down" viewBox="0 0 16 16" onClick={showCheckBoxOfIconOrder}>
                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </CFormGroup>
              </div>

              <p id="pOrder" style={{ display: "none", color: "#637381", fontSize: "13px", marginLeft: "18px" }}></p>
              {/* List Item */}
              <div id="listItemOrder" style={{ display: "none" }}>
                {/* Item */}
                <div className="row" style={{ padding: "10px 10px" }}>
                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox41" name="order" value="Xem hóa đơn" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox41">Xem hóa đơn</CLabel>
                    </CFormGroup>
                  </div>

                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox42" name="order" value="Tạo hóa đơn" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox42">Tạo hóa đơn</CLabel>
                    </CFormGroup>
                  </div>

                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox43" name="order" value="Sửa hóa đơn" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox43">Sửa hóa đơn</CLabel>
                    </CFormGroup>
                  </div>
                </div>
                {/* End - Item */}

                {/* Item */}
                <div className="row" style={{ padding: "10px 10px" }}>
                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox44" name="order" value="Xóa hóa đơn" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox44">Xóa hóa đơn</CLabel>
                    </CFormGroup>
                  </div>

                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox45" name="order" value="Tìm kiếm hóa đơn" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox45">Tìm kiếm hóa đơn</CLabel>
                    </CFormGroup>
                  </div>

                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox46" name="order" value="Lọc hóa đơn" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox46">Lọc hóa đơn</CLabel>
                    </CFormGroup>
                  </div>
                </div>

                {/* End - Item */}
              </div>
              {/*End - List Item */}

            </div>
            {/* End - Hóa đơn */}
            <hr />

            {/* Báo cáo */}
            <div>
              <div style={{ padding: "10px 0" }}  >
                <CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox custom id="inline-checkbox40" name="inline-checkbox50" value="" onClick={showCheckBoxStatistical} />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox50" ><h6 style={{ display: "inline" }}>Báo cáo</h6></CLabel>
                  <svg style={{ marginLeft: "10px", marginTop: "3px", color: "blue" }}
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-chevron-double-down" viewBox="0 0 16 16" onClick={showCheckBoxOfIconStatistical}>
                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </CFormGroup>
              </div>

              <p id="pStatistical" style={{ display: "none", color: "#637381", fontSize: "13px", marginLeft: "18px" }}></p>
              {/* List Item */}
              <div id="listItemStatistical" style={{ display: "none" }}>
                {/* Item */}
                <div className="row" style={{ padding: "10px 10px" }}>
                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox51" name="statistical" value="Xem báo cáo" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox51">Xem báo cáo</CLabel>
                    </CFormGroup>
                  </div>

                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox52" name="statistical" value="Tạo báo cáo" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox52">Tạo báo cáo</CLabel>
                    </CFormGroup>
                  </div>

                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox53" name="statistical" value="Sửa báo cáo" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox53">Sửa báo cáo</CLabel>
                    </CFormGroup>
                  </div>
                </div>
                {/* End - Item */}

                {/* Item */}
                <div className="row" style={{ padding: "10px 10px" }}>
                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox54" name="statistical" value="Xóa báo cáo" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox54">Xóa báo cáo</CLabel>
                    </CFormGroup>
                  </div>

                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox55" name="statistical" value="Tìm kiếm báo cáo" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox55">Tìm kiếm báo cáo</CLabel>
                    </CFormGroup>
                  </div>

                  <div className="col-lg-4">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox56" name="statistical" value="Lọc báo cáo" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox56">Lọc báo cáo</CLabel>
                    </CFormGroup>
                  </div>
                </div>

                {/* End - Item */}
              </div>
              {/*End - List Item */}

            </div>
            {/* End - Báo cáo */}
            <hr />

          </div>
        </div>
      </div>
      {/* End - Phân quyền chi tiết */}

    </div>
  )
}

export default AddRole
