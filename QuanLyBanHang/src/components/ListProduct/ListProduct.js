import React, { useEffect, useState } from "react";
import querystring from 'query-string';
import Pagination from "./Pagination";


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
} from "@coreui/react";
import { DocsLink } from "src/reusable";

import Select from "react-select";
import CIcon from "@coreui/icons-react";
import axios from "axios";


function ListProduct(props) {
  const id = useState(props.match.params.id);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);
  // const [pageNo, setPageNo] = useState(1);
  // const [pageSize,setPageSize]= useState(3);
  // const [totalPage,setTotal]=useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setPageSize] = useState(5);

  const [filterCategory, setFilterOptionCategory] = useState([]);
  const [category_id, setCategory_Id] = useState("");
  const [categories, setCategories] = useState([]);

// const total = Math.ceil(totalPage/pageSize)

  useEffect(() => {
    getCategory()
      .then((item) => {
        setCategory(item.data);
        console.log(item)
      });
  }, []);

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
    props.history.push("/add-category");
  };

  const updateCategory = (id) => {
    props.history.push(`/update-category/${id}`);
  };

  const deleteCategory = (id) => {
    DeleteCategory(id).then(() => {
      setCategory(category.filter((item) => item.id !== id));
    });
  };

  const changeCate = (event) => {
    // setCategory_Id(event.value);
   Filter(event.value).then((item) => {
      setCategory(item.data);
      console.log(item)
    });
   
  };

  const SearchByName = (e) => {
    e.preventDefault();
 Search(search).then((item) => {
      setCategory(item.data);
     

    });
  };

  const changeSearch = (event) => {
    setSearch(event.target.value)
  };

//  const changeNext =()=>{
//    console.log("111111111111111111")
//    setPageNo(pageNo+1);
//  }
//  const changePrev =()=>{
//   setPageNo(pageNo-1);
// }

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = category.slice(indexOfFirstPost, indexOfLastPost);

const paginate = (page) => setCurrentPage(page);

console.log(currentPage);

const handnext = () => {
  setCurrentPage(currentPage + 1);
};
const handprev = () => {
  setCurrentPage(currentPage - 1);
};

  return (
    <>
      <div>
        <CRow>
          <CFormGroup row>
            <CCol xs="12" sm="7">
              <CInputGroup>
                <CInputGroupPrepend>
                  <CButton type="button" color="primary" onClick={SearchByName}>
                    <CIcon name="cil-magnifying-glass" /> Search
                  </CButton>
                </CInputGroupPrepend>
                <CInput onChange={changeSearch} placeholder="Search" />
              </CInputGroup>
            </CCol>
            <CCol xs="12" sm="3">
              <CFormGroup>
                <Select options={filterCategory} onChange={changeCate} />
              </CFormGroup>
            </CCol>
            <CCol xs="12" sm="4">
              <CButton block color="success" onClick={addCategory}>
                Thêm sản phẩm
              </CButton>
            </CCol>
          </CFormGroup>
        </CRow>

        <div className="row">
          <table className=" table table-striped table-bordered">
            <thead>
              <tr>
                <th>Ảnh</th>
                <th>Sản phẩm</th>
                <th>Loại</th>
                <th>Nhãn hiệu</th>
                <th>Số lượng</th>
                <th>Ngày tạo</th>
                <th>Tùy chọn</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} width="25px" height="25px" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.categoryId}</td>
                  <td>{item.brandID}</td>
                  <td>{item.numberProduct}</td>
                  <td>{item.createdDate}</td>

                  <td>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => updateCategory(item.id)}
                      className="btn btn-success"
                    >
                      chi tiết
                    </button>

                    {/* <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => deleteCategory(item.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
       
        </div>
        <div className="row">    <div className="pagination">
          <div className="page-item">
            <button
              className="btn btn-primary"
              onClick={handprev}
              disabled={currentPage == 1 ? true : false}
            >
              prev
            </button>
          </div>
        </div>
        {/* <Pagination
          postsPerPage={postsPerPage}
          totalPosts={category.length}
          paginate={paginate}
        /> */}
        <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={category.length}
        paginate={paginate}/>

      
         <div className="pagination">
          <div className="page-item">
            <button
              className="btn btn-primary"
              onClick={handnext}
              disabled={
                currentPage == Math.ceil(category.length / postsPerPage)
                  ? true
                  : false
              }
            >
              next
            </button>
          </div>
        </div>
        </div>
    
      </div>
    </>
  );
}

export default ListProduct;
