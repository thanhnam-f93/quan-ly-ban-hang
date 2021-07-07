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
 
} from "@coreui/react";
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
  const [colorId, setColorId] = useState("");
  const [sizeId, setSizeId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [createBy, setCreateBy] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [category, setCategory] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [brand, setBrand] = useState([]);
  const [filterCategory, setFilterOptionCategory] = useState([]);
  const [filterSupplier, setFilterOptionSupplier] = useState([]);
  const [filterOptionColor, setFilterOptionColor] = useState([]);
  const [filterOptionBrand, setFilterOptionBrand] = useState([]);
  const [filterOptionSize, setFilterOptionSize] = useState([]);
  const [category_id, setCategory_Id] = useState("");
  const [supplier_id, setSupplier_Id] = useState("");
  const [brand_id, setBrand_Id] = useState("");
  const [color_id, setColor_Id] = useState("");
  const [size_id, setSize_Id] = useState("");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getSupplier().then((res) => {
      setSupplier(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    getCate().then((res) => {
      setCategory(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    getColor().then((res) => {
      setColor(res.data);
      console.log(res.data);
    });
  }, []);
  useEffect(() => {
    getSize().then((res) => {
      setSize(res.data);
      console.log(res.data);
    });
  }, []);
  useEffect(() => {
    getBrand().then((res) => {
      setBrand(res.data);
      console.log(res.data);
    });
  }, []);

  const cancel = () => {
    props.history.push("/category");
  };

  useEffect(() => {
    getCategory().then((item) => {
      setProduct(item.data);
      console.log(item);
    });
  }, []);
  const deleteCategory = (id) => {
    DeleteCategory(id).then(() => {
      setProduct(product.filter((item) => item.id !== id))
      props.history.push("/category");
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
    color.map((item) => {
      setFilterOptionColor((filterOptions) => [
        ...filterOptions,
        { value: item.id, label: item.name },
      ]);
    });
  }, [color]);

  useEffect(() => {
    size.map((item) => {
      setFilterOptionSize((filterOptions) => [
        ...filterOptions,
        { value: item.id, label: item.size },
      ]);
    });
  }, [size]);

  useEffect(() => {
    brand.map((item) => {
      setFilterOptionBrand((filterOptions) => [
        ...filterOptions,
        { value: item.id, label: item.name },
      ]);
    });
  }, [brand]);

  useEffect(() => {
    getCategoryByID(id).then((res) => {
      setCode(res.data.code);
      setName(res.data.name);
      setBrandID(res.data.brandID);
      setNumber(res.data.numberProduct);
      setImage(res.data.image);
      setSupplierId(res.data.supplierId);
      setDescription(res.data.description);
      setColorId(res.data.colorId);
      setSizeId(res.data.sizeId);
      setPrice(res.data.price);
      setCategoryId(res.data.categoryId);
      setCreatedDate(res.data.createdDate);
    });
  }, []);
  const updateCategory = (e) => {
    e.preventDefault();
    let category = {
      code: code,
      name: name,
      brand_id: brand_id,
      numberProduct: numberProduct,
      image: image,
      category_id: category_id,
      description: description,
      color_id: color_id,
      size_id: size_id,
      price: price,
      supplier_id: supplier_id,
      createdDate: createdDate,
    };
    UpdateCategory(category, id).then((res) => {
      props.history.push("/category");
    });
    console.log(category);
  };

  const changeCode = (event) => {
    setCode(event.target.value);
  };
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeBrand = (event) => {
    setBrand_Id(event.value);
  };
  const changeNumber = (event) => {
    setNumber(event.target.value);
  };
  const changeImage = (event) => {
    setImage(event.target.value);
  };
  const changeSupplier = (event) => {
    setSupplier_Id(event.value);
  };
  const changeDescription = (event) => {
    setDescription(event.target.value);
  };
  const changeColor = (event) => {
    setColor_Id(event.value);
  };
  const changeSize = (event) => {
    setSize_Id(event.value);
  };
  const changePrice = (event) => {
    setPrice(event.target.value);
  };
  const changeCate = (event) => {
    setCategory_Id(event.value);
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
    var a = new RegExp("^[0-9]*$")
    
    if((a.test(event.target.value)==false)){
      setMesage({
        price:"Giá không được nhập kí tự"
      })
    }
    else if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
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
                  <CInput
                    name="description"
                    placeholder="DE1234567890"
                    onChange={changeDescription}
                    value={description}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Giá</CLabel>
                  <CInput
                    name="price"
                    placeholder="DE1234567890"
                    onChange={changePrice}
                    value={price}
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
                  <CLabel htmlFor="city">Color: {colorId}</CLabel>
                  <Select options={filterOptionColor} onChange={changeColor} />
                </CFormGroup>
              </CCol>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="postal-code">Size: {sizeId}</CLabel>
                  <Select options={filterOptionSize} onChange={changeSize} />
                </CFormGroup>
              </CCol>
            </CFormGroup>
          </CCardBody>
        </CCard>
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
          Delete
        </button>
      </CCol>
         <CCol xs="12" sm="5">   
            <CCard>
              <CCardHeader>Phân loại</CCardHeader>
                    <CCol xs="12"> <CFormGroup>
                  <CLabel htmlFor="company">Nhãn hiệu: {brandID}</CLabel>
                  <Select options={filterOptionBrand} onChange={changeBrand} />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Loại: {categoryId}</CLabel>
                  <Select
                    options={filterCategory}
                    defaultValue={categoryId}
                    onChange={changeCate}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Ngày tạo</CLabel>
                  {/* <CInput
                    name="createBy"
                    placeholder="DE1234567890"
                    onChange={changeCreateBy}
                    value={createdDate}
                  /> */}
                    <CInput type="date" id="dob" name="dob"  placeholder="date"  value={createdDate} onChange={changeCreateBy} />
                
                </CFormGroup>
                    
                <CFormGroup>
                  <CLabel htmlFor="vat">Nhà phân phối: {supplierId}</CLabel>
                  <Select options={filterSupplier} onChange={changeSupplier} />
                </CFormGroup>
                </CCol>
            </CCard>
            <CCard className=" p-4">
               <img width="100%" height="400px" src={image}/>            
            </CCard>
        </CCol>
        </CRow>
      </div>
    </div>
  );
}
export default Update;
