import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { createCategory,getBrand,getColor,getSize,getCate,getSupplier } from "src/apis/Product";
import Select from "react-select";
import axios from "axios";
function Create(props) {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [brand_id, setBrandID] = useState("");
  const [numberProduct, setNumber] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [supplier_id, setSupplierId] = useState("");
  const [description, setDescription] = useState("");
  const [color_id, setColorId] = useState("");
  const [size_id, setSizeId] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [createBy, setCreateBy] = useState("");
  const [category, setCategory] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [brand, setBrand] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);
  const [filterOptionCategory, setFilterOptionCategory] = useState([]);
  const [filterOptionColor, setFilterOptionColor] = useState([]);
  const [filterOptionSize, setFilterOptionSize] = useState([]);
  const [filterOptionBrand, setFilterOptionBrand] = useState([]);

  const saveCategory = (e) => {
    e.preventDefault();
    let product = {
      code: code,
      name: name,
      brand_id: brand_id,
      numberProduct: numberProduct,
      image: image,
      price: price,
      description: description,
      color_id: color_id,
      size_id: size_id,
      category_id: category_id,
      createBy: createBy,
      supplier_id: supplier_id,
    };
    console.log(product);
    createCategory(product).then((item) => {
      props.history.push("/category");
    });
  };
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

  const cancel = () => {
    props.history.push("/category");
  };

  const changeCode = (event) => {
    setCode(event.target.value);
  };
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeBrand = (event) => {
    setBrandID(event.value);
  };
  const changeNumber = (event) => {
    setNumber(event.target.value);
  };
  const changeImage = (event) => {
    setImage(event.target.value);
  };
  const changePrice = (event) => {
    setPrice(event.target.value);
  };

  const changeDescription = (event) => {
    setDescription(event.target.value);
  };
  const changeColor = (event) => {
    setColorId(event.value);
  };
  const changeSize = (event) => {
    setSizeId(event.value);
  };
  const changeCate = (event) => {
    setCategoryId(event.value);
  };
  const changeCreateBy = (event) => {
    setCreateBy(event.target.value);
  };
  const changeSuppliers = (event) => {
    setSupplierId(event.value);
  };

  return (
    <div>
      <div>
        <div className="row">
          <div className=" card col-lg-6">
            <CCard>
              <CCardHeader>Sản phẩm</CCardHeader>
              <CCardBody>
                <CFormGroup>
                  <CLabel htmlFor="company">Mã</CLabel>
                  <CInput
                    name="code"
                    placeholder="Nhập Mã"
                    onChange={changeCode}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Tên</CLabel>
                  <CInput
                    name="name"
                    placeholder="Nhập tên sản phẩm"
                    onChange={changeName}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Số lượng</CLabel>
                  <CInput
                    id="vat"
                    placeholder="Số lượng"
                    onChange={changeNumber}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Mô tả</CLabel>
                  <CInput
                    id="vat"
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
                  />
                </CFormGroup>
              </CCardBody>
            </CCard>
          </div>
          <div className=" card col-lg-6 mx-auto">
            <CCard>
              <CCardHeader>Phân loại</CCardHeader>
              <CCardBody>
                <CFormGroup>
                  <CLabel htmlFor="company">Nhãn hiệu</CLabel>
                  <Select
                    options={filterOptionBrand}
                    onChange={changeBrand}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Loại</CLabel>

                  <Select
                    options={filterOptionCategory}
                    onChange={changeCate}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Người tạo</CLabel>
                  <CInput id="vat" onChange={changeCreateBy} />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Nhà phân phối</CLabel>
                  {/* <CInput id="vat" placeholder="nguồn hàng" onChange={changeSupplier} /> */}

                  <Select options={filterOptions} onChange={changeSuppliers} />
                </CFormGroup>
              </CCardBody>
            </CCard>
          </div>
        </div>
        <CCard>
          <CCardHeader>Thuộc tính</CCardHeader>
          <CCardBody>
            <CFormGroup row className="my-0">
              <CCol xs="8">
                <CFormGroup>
                  <CLabel htmlFor="city">Color</CLabel>
                  <Select options={filterOptionColor} onChange={changeColor} />
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="postal-code">Size</CLabel>
                  <Select options={filterOptionSize} onChange={changeSize} />
                </CFormGroup>
              </CCol>
            </CFormGroup>
          </CCardBody>
        </CCard>
        <button
          className="btn btn-danger"
          onClick={cancel}
          style={{ marginLeft: "10px" }}
        >
          Hủy
        </button>
        <button
          className="btn btn-success"
          onClick={saveCategory}
          style={{ marginLeft: "10px" }}
        >
          Thêm sản phẩm
        </button>
      </div>
    </div>
  );
}
export default Create;
