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
      setCreateBy(res.data.createBy);
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
      createBy: createBy,
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
    setCreateBy(event.target.value);
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
                  <CInput name="code" onChange={changeCode} value={code} />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Tên</CLabel>
                  <CInput
                    name="name"
                    placeholder="DE1234567890"
                    onChange={changeName}
                    value={name}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Số lượng</CLabel>
                  <CInput
                    name="price"
                    placeholder="DE1234567890"
                    onChange={changeNumber}
                    value={numberProduct}
                  />
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
                  <CLabel htmlFor="vat">Người tạo</CLabel>
                  <CInput
                    name="createBy"
                    placeholder="DE1234567890"
                    onChange={changeCreateBy}
                    value={createBy}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Nhà phân phối</CLabel>
                  <Select options={filterSupplier} onChange={changeSupplier} />
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
                  <CLabel htmlFor="postal-code">Size {sizeId}</CLabel>
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
      </div>
    </div>
  );
}
export default Update;
