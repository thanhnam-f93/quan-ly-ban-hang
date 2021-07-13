import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
  CRow,
  CTextarea,
  CButton
 
} from "@coreui/react";
import swal from 'sweetalert';
import Swal from 'sweetalert2'
import { DocsLink } from 'src/reusable'
import { useEffect, useState } from "react";
import {
  getCategoryByID,
  UpdateCategory,
  getSupplier,
  getCate,
  getBrand,
  getColor,
  getSize,
  DeleteCategory,
  getCategory,
  ApiQuan,
} from "src/apis/Product";
import Select from "react-select";
import axios from "axios";
import { values } from "regenerator-runtime";

function Update(props) {
  const [id] = useState(props.match.params.id);
  const [message,setMesage] =useState({
    code : "",
    name : "",
    numberProduct:"",
    price:"",

  });
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [brandID, setBrandID] = useState("");
  const [numberProduct, setNumber] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [supplierId, setSupplierId] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [createBy, setCreateBy] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [category, setCategory] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [brand, setBrand] = useState([]);
  const [filterCategory, setFilterOptionCategory] = useState([]);
  const [filterSupplier, setFilterOptionSupplier] = useState([]);
  const [filterOptionColor, setFilterOptionColor] = useState([]);
  const [filterOptionBrand, setFilterOptionBrand] = useState([]);
  const [filterOptionSize, setFilterOptionSize] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [product, setProduct] = useState([]);


  useEffect(() => {
    ApiQuan('get',`suppliers`).then((res) => {
      setSupplier(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    ApiQuan('get',`categories`).then((res) => {
      setCategory(res.data);
      console.log(res.data);
    });
  }, []);


  useEffect(() => {
    ApiQuan('get',`brands`).then((res) => {
      setBrand(res.data);
      console.log(res.data);
    });
  }, []);

  const cancel = () => {
    props.history.push("/category");
  };

  useEffect(() => {
    ApiQuan('get',`products`).then((item) => {
      setProduct(item.data);
      console.log(item);
    });
  }, []);
  
  const deleteCategory = (id) => {
    swal({
      title: "bạn có muốn xóa sản phẩm?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        ApiQuan('delete',`products/${id}`).then(() => {
          setProduct(product.filter((item) => item.id !== id))
          props.history.push("/category");
        });
       
        swal("xóa thành công!", {
          icon: "success",
        });
      } else {
        swal("sản phẩm chưa được xóa!");
      }
    });


  };

  useEffect(() => {
    category.map((item) => {
      setFilterOptionCategory((filterOptions) => [
        ...filterOptions,
        { value: item.id, label: item.name },
      ]);
    });
  }, [category]);

  useEffect(() => {
    supplier.map((item) => {
      setFilterOptionSupplier((filterOptions) => [
        ...filterOptions,
        { value: item.id, label: item.name },
      ]);
    });
  }, [supplier]);




  useEffect(() => {
    brand.map((item) => {
      setFilterOptionBrand((filterOptions) => [
        ...filterOptions,
        { value: item.id, label: item.name },
      ]);
    });
  }, [brand]);

  useEffect(() => {
    // getCategoryByID(id).then((res) => {
      ApiQuan('get',`products/${id}`).then((res) => {
      setCode(res.data.code);
      setName(res.data.name);
      setBrandName(res.data.brandID);
      setNumber(res.data.numberProduct);
      setImage(res.data.image);
      setSupplierName(res.data.supplierId);
      setDescription(res.data.description);
      setColor(res.data.color);
      setSize(res.data.size);
      setPrice(res.data.price);
      setCategoryName(res.data.categoryId);
      setCreatedDate(res.data.createdDate);
    });
  }, []);
  const updateCategory = (e) => {
    e.preventDefault();
    let category = {
      code: code,
      name: name,
      brandName: brandName,
      numberProduct: numberProduct,
      image: image,
      categoryName: categoryName,
      description: description,
      color: color,
      size: size,
      price: price,
      supplierName: supplierName,
      createdDate: createdDate,
    };

    var data = JSON.stringify(category)
    Swal.fire({
      title: 'bạn có muốn thay đổi sản phẩm?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `lưu`,
      denyButtonText: `hủy bỏ thao tác`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // UpdateCategory(category, id).then((res) => {
          ApiQuan('put',`products/${id}`,data).then((res)=>{
          // props.history.push("/category");
          console.log(category);
        });
        Swal.fire('đã lưu!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Sản phẩm vẫn chưa được thay đổi', '', 'info')
      }
    })
    
    
  };
  function format2(n, currency) {
    if (n != "") {
        return n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + " " + currency;
    }
}

  const changeCode = (event) => {
    setCode(event.target.value);
  };
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeBrand = (event) => {
    setBrandName(event.label);
  };
  const changeNumber = (event) => {
    setNumber(event.target.value);
  };
  const changeImage = (event) => {
    setImage(event.target.value);
  };
  const changeSupplier = (event) => {
    setSupplierName(event.label);
  };
  const changeDescription = (event) => {
    setDescription(event.target.value);
  };
  const changeColor = (event) => {
    setColor(event.target.value);
  };
  const changeSize = (event) => {
    setSize(event.target.value);
  };
  const changePrice = (event) => {
    setPrice(event.target.value);
  };
  const changeCate = (event) => {
    setCategoryName(event.label);
    console.log(event);
  };
  const changeCreateBy = (event) => {
    setCreatedDate(event.target.value);
  };

  const changeonBlur = (event)=>{
 if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
      setMesage({
        code:" * Mã không được để trống"
      })
    }
    else{
      setMesage({
        code:""
      })
    }
  }
  
  const changeonBlurName = (event)=>{
 if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
      setMesage({
        name:" Tên sản phẩm không được để trống"
      })
    }
    else{
      setMesage({
        name:""
      })
    }
  }
  
  const changeonBlurNumber = (event)=>{
    var a = new RegExp("^[0-9]*$")
    
    if((a.test(event.target.value)==false)){
      setMesage({
        numberProduct:"Số lượng không được nhập kí tự"
      })
    }
    else if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
      setMesage({
        numberProduct:" Số lượng sản phẩm không được để trống"
      })
    }
    else{
      setMesage({
        numberProduct:""
      })
    }
  }
  
  const changeonBlurPrice = (event)=>{
    // var a = new RegExp("^[0-9]*$")
    
    // if((a.test(event.target.value)==false)){
    //   setMesage({
    //     price:"Giá không được nhập kí tự"
    //   })
    // }
    // else 
    if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
      setMesage({
        price:" Giá sản phẩm không được để trống"
      })
    }
    else{
      setMesage({
        price:""
      })
    }
  }


  return (
    <div>
      <div>
      <h1>{name}</h1>
        <CRow>
          
      <CCol  xs="12" sm="7">
      
      <CCard>
       
              <CCardHeader>Sản phẩm</CCardHeader>
              <CCardBody>
                <CFormGroup>
                  <CLabel htmlFor="company">Mã</CLabel>
                  <CInput name="code" onChange={changeCode} value={code} onBlur={changeonBlur}/>
                  <span style={{color:"red"}}> {message.code}</span>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Tên</CLabel>
                  <CInput
                    name="name"
                    placeholder="DE1234567890"
                    onChange={changeName}
                    value={name}
                    onBlur={changeonBlurName}
                  />
                   <span style={{color:"red"}}> {message.name}</span>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Số lượng</CLabel>
                  <CInput
                    name="price"
                    placeholder="DE1234567890"
                    onChange={changeNumber}
                    value={numberProduct}
                    onBlur={changeonBlurNumber}
                  />
                   <span style={{color:"red"}}> {message.numberProduct}</span>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Mô tả</CLabel>
                  <CTextarea
                    name="textarea-input"
                    id="textarea-input"
                    rows="3"
                    placeholder="mô tả"
                    onChange={changeDescription}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Giá</CLabel>
                  <CInput
                    name="price"
                    placeholder="DE1234567890"
                    onChange={changePrice}
                    value={format2(price,"vnd")}
                    onBlur={changeonBlurPrice}
                  />
                   <span style={{color:"red"}}> {message.price}</span>
                </CFormGroup>
              </CCardBody>
            </CCard>
        <CCard>
          <CCardHeader>Thuộc tính</CCardHeader>
          <CCardBody>
            <CFormGroup row className="my-0">
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="city">Màu sắc</CLabel>
                  <CInput
                    name="color"
                    placeholder="nhập màu sắc"
                    onChange={changeColor}
                    value={color}
                   
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="postal-code">Kích cỡ</CLabel>
                  <CInput
                    name="size"
                    placeholder="nhập kích cỡ"
                    onChange={changeSize}
                    value={size}
                   
                  />
                </CFormGroup>
              </CCol>
            </CFormGroup>
          </CCardBody>
        </CCard>
        {/* <CCol className="px-0"  xs="12" sm="7">
        <button
          className="btn btn-secondary"
          onClick={cancel}
          style={{ marginLeft: "10px" }}
        >
          Quay Lại
        </button>
        <button
          className="btn btn-success"
          onClick={updateCategory}
          style={{ marginLeft: "10px" }}
        >
          Cập nhật
        </button>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => deleteCategory(id)}
          className="btn btn-danger"
        >
          Xóa
        </button>
        </CCol> */}
    
      </CCol>
         <CCol xs="12" sm="5">   
            <CCard>
              <CCardHeader>Phân loại</CCardHeader>
                    <CCol xs="12"> <CFormGroup>
                  <CLabel htmlFor="company">Nhãn hiệu</CLabel>
                  <Select placeholder={brandName} options={filterOptionBrand} onChange={changeBrand} />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Loại</CLabel>
                  <Select
                  placeholder={categoryName}
                    options={filterCategory}
                    onChange={changeCate}
                  />
                </CFormGroup>
                    
                <CFormGroup>
                  <CLabel htmlFor="vat">Nhà cung cấp</CLabel>
                  <Select placeholder={supplierName} 
                  options={filterSupplier} onChange={changeSupplier} />
                </CFormGroup>
                </CCol>
            </CCard>
            <CCard className=" p-4">
               <img width="100%" height="400px" src={image}/>    
               <CInput
                    name="price"
                    placeholder="thay đổi link ảnh"
                    onChange={changeImage}
                   
                  />        
            </CCard>
        </CCol>
    
        {/* <CCol className="px-0" xs="12" sm="7">
        <button
          className="btn btn-secondary"
          onClick={cancel}
          style={{ marginLeft: "10px" }}
        >
          Quay Lại
        </button>
        <button
          className="btn btn-success"
          onClick={updateCategory}
          style={{ marginLeft: "10px" }}
        >
          Cập nhật
        </button>
       
        </CCol>
        <CCol  xs="12" sm="5">
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => deleteCategory(id)}
          className="btn btn-danger"
        >
          Xóa
        </button>
        </CCol>
     */}
        </CRow>
        <CRow>
         <CCol xs="12" sm="7">
           <CRow>
           <CCol xs="6"  sm="2" >
           <CButton block color="secondary" onClick={cancel}>
            Quay lại
            </CButton>
           </CCol>
           <CCol xs="6"  sm="3">
           <CButton block color="success" onClick={updateCategory}>
            Cập nhật
            </CButton>
           </CCol>
           </CRow>
         </CCol>
         <CCol className="px-0 d-flex justify-content-end" xs="12" sm="5" >
         <CCol xs="6"  sm="3" >
           <CButton block color="danger" onClick={() => deleteCategory(id)}>
            Xóa
            </CButton>
           </CCol>
         </CCol>
       </CRow>
      </div>
    </div>
  );
}
export default Update;
