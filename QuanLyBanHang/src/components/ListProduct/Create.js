import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CTextarea,
  CInputFile,
  CValidFeedback,
  CButton
} from "@coreui/react";
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
import swal from 'sweetalert';
import {
  getBrand,
  getCate,
  getSupplier,
  createProduct,
  ApiQuan
} from "src/apis/Product";
import Select from "react-select";
import axios from "axios";
import ApiCustomer from "src/apis/ApiCustomer";
function Create(props) {
  const [code, setCode] = useState("1");
  const [name, setName] = useState("");
  const [message,setMesage] =useState({
    code : "",
    name : "",
    numberProduct:"",
    price:"",

  });
  const [brandName, setBrandName] = useState("");
  const [numberProduct, setNumber] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColorId] = useState("");
  const [size, setSizeId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);
  const [filterOptionCategory, setFilterOptionCategory] = useState([]);
  const [filterOptionBrand, setFilterOptionBrand] = useState([]);

  const saveProduct = (e) => {
    e.preventDefault();
    let product = {
          code: code,
          name: name,
          brandName: brandName,
          numberProduct: numberProduct,
          image: image,
          price: price,
          description: description,
          color: color,
          size: size,
          categoryName: categoryName,
          createdDate: createdDate,
          supplierName: supplierName,
    };
    var data1 = JSON.stringify(product)
  console.log(product);
    ApiQuan('post',`products`,data1).then((item) => {  
    Swal.fire({
      icon: 'success',
      title: 'đã đạo thêm nhà cung cấp',
      showConfirmButton: false,
      timer: 1500
    })
      props.history.push("/product");
    })
    .catch(error=>{
      console.log("aaaaaaaaaaaaaaaa")
      if(error.response.data.mess == " error : code trung "){
        Swal.fire({
          icon: 'error',
          title: 'code trùng',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  };

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

  useEffect(() => {
    supplier.map((item) => {
      setFilterOptions((filterOptions) => [
        ...filterOptions,
        { value: item.id, label: item.name },
      ]);
    });
  }, [supplier]);

  useEffect(() => {
    category.map((item) => {
      setFilterOptionCategory((filterOptions) => [
        ...filterOptions,
        { value: item.id, label: item.name },
      ]);
    });
  }, [category]);

  useEffect(() => {
    brand.map((item) => {
      setFilterOptionBrand((filterOptions) => [
        ...filterOptions,
        { value: item.id, label: item.name },
      ]);
    });
  }, [brand]);

  const cancel = () => {
    props.history.push("/category");
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
  var a = new RegExp("^[0-9]*$")
  
  if((a.test(event.target.value)==false)){
    setMesage({
      price:"Số lượng không được nhập kí tự"
    })
  }
  else if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
    setMesage({
      price:" Số lượng sản phẩm không được để trống"
    })
  }
  else{
    setMesage({
      price:""
    })
  }
}

const changeCode= (event) => {
 setCode(event.target.value)
  };

  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeBrand = (event) => {
    setBrandName(event.label);
    console.log(event)
  };

  const changeNumber = (event) => {
    setNumber(event.target.value);
  };
  const changeImage = (event) => {
     setImage(event.target.value)
    
  
  };
 
  const changePrice = (event) => {
    setPrice(event.target.value);
  };
  const changeDescription = (event) => {
    setDescription(event.target.value);
  };
  const changeColor = (event) => {
    setColorId(event.target.value);
  };
  const changeSize = (event) => {
    setSizeId(event.target.value);
  };
  const changeCate = (event) => {
    setCategoryName(event.label);
  };
  const changeSuppliers = (event) => {
    setSupplierName(event.label);
  };


  return (
    <div>
      <div>
        <CRow>
          <CCol xs="12" sm="7">
            <CCard>
              <CCardHeader>Sản phẩm</CCardHeader>
              <CCardBody>
                <CFormGroup>
                  <CLabel htmlFor="company">Mã</CLabel>
                  <CInput
                    name="code"
                    placeholder="Nhập Mã"
                    onChange={changeCode}
                    onBlur={changeonBlur}
                  />
                  <span style={{color:"red"}}> {message.code}</span>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Tên</CLabel>
                  <CInput
                    name="name"
                    placeholder="Nhập tên sản phẩm"
                    onChange={changeName}
                    onBlur={changeonBlurName}
                  />
                  <span style={{color:"red"}}> {message.name}</span>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Số lượng</CLabel>
                  <CInput
               
                    id="vat"
                    placeholder="Số lượng"
                    onChange={changeNumber}
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
                    id="vat"
                    placeholder="nhập giá"
                    onChange={changePrice}
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
                    placeholder="Nhập tên màu sắc"
                    onChange={changeColor}                  
                  />
                    
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="postal-code">Kích cỡ</CLabel>
                      <CInput
                    name="color"
                    placeholder="Nhập kích cỡ"
                    onChange={changeSize}
                  />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
              </CCardBody>
            </CCard>
            
          </CCol>
          <CCol xs="12" sm="5">
            <CCard>
              <CCardHeader>Phân loại</CCardHeader>
              <CCardBody>
                <CFormGroup>
                  <CLabel htmlFor="company">Nhãn hiệu</CLabel>
                  <Select options={filterOptionBrand} onChange={changeBrand} />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Loại</CLabel>
                  <Select
                    options={filterOptionCategory}
                    onChange={changeCate}
                  />
                       {/* <CInput
                    name="color"
                    placeholder="Nhập kích cỡ"
                    onChange={changeCate}
                  /> */}
                  
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Nhà cung cấp</CLabel>
                  {/* <CInput id="vat" placeholder="nguồn hàng" onChange={changeSupplier} /> */}

                  <Select options={filterOptions} onChange={changeSuppliers} />
                </CFormGroup>
              </CCardBody>
            </CCard>

            <CCard>
            <CCardHeader>Ảnh</CCardHeader>
            <CCardBody>
            <CFormGroup >
            <CFormGroup>
                      {/* <CLabel htmlFor="city">Chọn ảnh</CLabel>
                    */}
                      <CFormGroup row>
               
                  <CCol xs="12" md="9">
                  
                    {/* <CInputFile id="file-input" name="file-input"  onChange={changeImage}/> */}
                  
                  </CCol>
                </CFormGroup>
                   <CInput
                    id="vat"
                    placeholder="link anh"
                    onChange={changeImage}
                  />
             
                    
                    </CFormGroup>
            </CFormGroup>
            </CCardBody>
               </CCard>
           
          </CCol>
        </CRow>
       <CRow>
         <CCol xs="12" sm="7">
           <CRow>
           <CCol xs="6"  sm="3" >
           <CButton block color="secondary" onClick={cancel}>
            Quay lại
            </CButton>
           </CCol>
           <CCol xs="6"  sm="3">
           <CButton block color="success" onClick={saveProduct}>
            Thêm sản phẩm
            </CButton>
           </CCol>

           </CRow>
           
         </CCol>
         <CCol>
             fdfd
           </CCol>
     
       </CRow>
      </div>
    </div>
  );
}
export default Create;
