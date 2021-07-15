import React, { useEffect, useState } from "react";
import querystring from "query-string";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import "../../apis/css.scss";

import {
  getCategory,
  DeleteCategory,
  Search,
  getCate,
  Filter,
  ApiQuan,
} from "../../apis/Product";
import {
  CButton,
  CCardBody,
  CCol,
  CInput,
  CInputGroup,
  CFormGroup,
  CForm,
  CInputGroupPrepend,
  CRow,
  CPagination,
  CCard,
} from "@coreui/react";
import swal from "sweetalert";

import Select from "react-select";

import axios from "axios";

function ListProduct(props) {
  const id = useState(props.match.params.id);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [product, setProduct] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [total, setTotal] = useState(1);
  const [filterCategory, setFilterOptionCategory] = useState([]);
  const [categories, setCategories] = useState([]);

  const config = {
    method: "get",
    url: `http://localhost:8080/api/v1/productSearch?keyword=${search}&filter=${filter}&pageNo=${pageNo}&pageSize=${pageSize}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };
  const config3 = {
    method: "get",
    url: `http://localhost:8080/api/v1/product_searchByCategories?keyword=${search}&pageNo=${pageNo}&pageSize=${pageSize}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  const config1 = {
    method: "get",
    url: `http://localhost:8080/api/v1/productSearchByKey?keyword=${search}&filter=${filter}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  const config2 = {
    method: "get",
    url: `http://localhost:8080/api/v1/categories`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    // axios.get(`http://localhost:8080/api/v1/productSearch?keyword=${search}&pageNo=${pageNo}&pageSize=${pageSize}`)
    axios(config).then((item) => {
      setProduct(item.data);
      console.log(item);
    });
  }, [search, pageNo, pageSize, filter]);

  useEffect(() => {
    // axios.get(`http://localhost:8080/api/v1/productSearchByKey?keyword=${search}`)
    axios(config1).then((item) => {
      setTotal(Math.ceil(item.data.length / pageSize));
    });
  }, [search, filter]);

  useEffect(() => {
    axios(config2).then((res) => {
      setCategories(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    categories.map((item) => {
      setFilterOptionCategory((filterOptions) => [
        ...filterOptions,
        { value: item.id, label: item.name },
      ]);
    });
  }, [categories]);

  const addCategory = () => {
    props.history.push("product/add-category");
  };

  const updateCategory = (id) => {
    props.history.push(`product/update-category/${id}`);
  };

  const changeSearch = (event) => {
    setSearch(event.target.value);
  };
  const changeFilter = (event) => {
    setFilter(event.value);
    console.log(event.value);
  };
  const cancel = (e) => {
    e.preventDefault();
    setFilter("");
    setSearch("");
    setPageNo(1);
  };

  return (
    <>
      <div>
        <CRow>
          <CCol xs="7" className="px-0" sm="7">
            <CFormGroup>
              <CInput
                name="name"
                placeholder="tìm kiếm mã, tên"
                value={search}
                onChange={changeSearch}
              />
            </CFormGroup>
          </CCol>
          <CCol xs="3" sm="2">
            <Select
              placeholder="loại sản phẩm"
              defaultValue={filter}
              options={filterCategory}
              onChange={changeFilter}
            />
          </CCol>
          <CCol xs="3" sm="2">
            <CButton block color="secondary" onClick={cancel}>
              Đặt lại
            </CButton>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="1">
            <CFormGroup row>
              <CButton block color="success" onClick={addCategory}>
                Tạo
              </CButton>
            </CFormGroup>
          </CCol>
        </CRow>

        <div className="row">
          <table className=" table">
            <thead>
              <tr>
                <th>Mã</th>
                <th>Ảnh</th>
                <th>Sản phẩm</th>
                <th>Loại</th>
                <th>Nhãn hiệu</th>
                <th>Số lượng</th>
                <th>Ngày tạo</th>
              </tr>
            </thead>
            <tbody>
              {/* {currentPosts.map((item)  */}
              {product.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => updateCategory(item.id)}
                  className="lits"
                >
                  <td>{item.code}</td>
                  <td>
                    <img src={item.image} width="40px" height="40px" />{" "}
                  </td>
                  <td style={{ color: "blue" }}> {item.name}</td>
                  <td>{item.categoryId}</td>
                  <td>{item.brandID}</td>
                  <td>{item.numberProduct}</td>
                  <td>{item.createdDate}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row">
          <CPagination
            activePage={pageNo}
            pages={total}
            onActivePageChange={setPageNo}
          />
        </div>
      </div>
    </>
  );
}

export default ListProduct;
