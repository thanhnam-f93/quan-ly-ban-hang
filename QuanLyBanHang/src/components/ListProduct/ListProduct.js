import React, { useEffect, useState } from "react";
import querystring from 'query-string';
import Pagination from "./Pagination";
import {Link} from 'react-router-dom'
import "../../apis/css.scss"

import {
  getCategory,
  DeleteCategory,
  Search,
  getCate,
  Filter,

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
  CCard
} from "@coreui/react";
import swal from 'sweetalert';
import { DocsLink } from "src/reusable";
import Select from "react-select";
import CIcon from "@coreui/icons-react";
import axios from "axios";


function ListProduct(props) {
  const id = useState(props.match.params.id);
  const [search, setSearch] = useState("");
  const [product,setProduct] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [pageSize,setPageSize]= useState(5);
  const [total,setTotal] = useState(1);
  const [filterCategory, setFilterOptionCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  

 useEffect(() => {
  axios.get(`http://localhost:8080/api/v1/productSearch?keyword=${search}&pageNo=${pageNo}&pageSize=${pageSize}`)
    .then((item) => {
      setProduct(item.data);
      console.log(item)
    });
}, [search,pageNo,pageSize]);


useEffect(() => {
  axios.get(`http://localhost:8080/api/v1/productSearchByKey?keyword=${search}`)
     .then((item) => {
       setTotal(Math.ceil(item.data.length/pageSize));
     });
 }, [search]);



  useEffect(() => {
    getCate().then((res) => {
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


  const changeCate = (event) => {
    // setCategory_Id(event.value);
   Filter(event.value).then((item) => {
      setProduct(item.data);
      console.log(event.value)
    });
   
  };

  const changeSearch = (event) => {
    setSearch(event.target.value)
  };

  return (
    
    <>
      <div>
      <CRow>
          <CCol xs="7" className="px-0" sm="7">
            <CFormGroup >
              <CInput
                name="name"
                placeholder="tìm kiếm mã, tên"
                onChange={changeSearch}
              />  
          
               
            </CFormGroup>
          </CCol>
          <CCol xs="3"  sm="3">
         <Select placeholder="loại sản phẩm" options={filterCategory} onChange={changeCate} />  
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
          <table className=" table" >
              
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
            <tbody >
            {/* {currentPosts.map((item)  */}
              {product.map((item) => (
              
                 <tr key={item.id} onClick={() => updateCategory(item.id)} className="lits">
             
                   <td>
                    {item.code}
                  </td>
                <td><img src={item.image} width="40px" height="40px" />  </td>
                  <td style={{color:"blue"}} > {item.name}</td>
                  <td>{item.categoryId}</td>
                  <td>{item.brandID}</td>
                  <td>{item.numberProduct}</td>
                  <td>{item.createdDate}</td>
                  <td>
                  </td>

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
