import React, { useEffect, useState} from "react";


import { getCategory,DeleteCategory ,Search} from "../../apis/Product";
import {
  CButton,
  CCardBody,
  CCol,
  CInput,
  CInputGroup,
  CFormGroup,
  CForm,
  CInputGroupPrepend,
  CCard,
  CCardHeader,
  CPagination
} from "@coreui/react";
import { DocsLink } from 'src/reusable'


import CIcon from "@coreui/icons-react";
import axios from "axios";

function ListProduct(props) {

  const id = useState(props.match.params.id);

  const [category, setCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
 

 

useEffect(()=>{
    getCategory().then((item)=>{
        setCategory(item.data);
    }); 
},[])



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
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = category.slice(indexOfFirstPost, indexOfLastPost);
 const totalPages = Math.ceil( category.length/postsPerPage);





  return (
    <>
      <div>
        <CCardBody>
          <CForm action="" method="post" className="form-horizontal">
            <CFormGroup row>
              <CCol md="12">
                <CInputGroup>
                  <CInputGroupPrepend>
                    <CButton type="button" color="primary" >
                      <CIcon name="cil-magnifying-glass" /> Search
                    </CButton>
                  </CInputGroupPrepend>
                  <CInput
                    id="input1-group2"
                   
                    name="input1-group2"
                    placeholder="Username"
                  />
                </CInputGroup>
              </CCol>
            </CFormGroup>
          </CForm>
        </CCardBody>

        <div className="row">

        <div className="row">
         <button
                      style={{ marginLeft: "10px" }}
                     onClick={addCategory}
                      className="btn btn-info"
                    >
                      Thêm sản phẩm
                    </button>
      </div>
          <table className=" table table-striped table-bordered">
            <thead>
              <tr>
                <th>Ảnh</th>
                <th>Sản phẩm</th>
                <th>Loại</th>
                <th>Nhãn hiệu</th>
                <th>Số lượng</th>
                <th>Tùy chọn</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src="http://styleguru.vn/wp-content/uploads/2021/03/kieu-vay-dam-xoe-cong-chua-1.jpg" width="25px" height="25px" />
                    {item.image}
                    </td>
                  <td>{item.name}</td>
                  <td>{item.categoryId}</td>
                  <td>{item.brandID}</td>
                  <td>{item.numberProduct}</td>
                 
                  <td>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => updateCategory(item.id)}
                      className="btn btn-success"
                    >
                      Update
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
          <div className="row"> <div>
            <p>Show Page {currentPage} of {totalPages}</p>
          </div>
<button>dsad</button>
<button>aaa</button>


          </div>
         
     
     
          <div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
