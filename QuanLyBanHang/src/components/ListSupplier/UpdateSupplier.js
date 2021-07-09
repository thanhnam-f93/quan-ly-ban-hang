import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormGroup,
    CInput,
    CLabel,
    CRow,
    CTextarea
  } from "@coreui/react";
  import swal from 'sweetalert';
import Swal from 'sweetalert2'
  import { useEffect, useState } from "react";
  import {
    DeleteSupplier,
    getSupplier,
    UpdateSuppliers,
    getSupplierByID
    
  } from "src/apis/Product";
  import axios from "axios";
  

  function Update(props) {

    const [id] = useState(props.match.params.id);
    // const [message,setMesage] =useState({
    //   code : "",
    //   name : "",
    //   numberProduct:"",
    //   price:"",
  
    // });
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const[supplier,setSupplier]=useState([])

    useEffect(() => {
      getSupplier().then((res) => {
        setSupplier(res.data);
        console.log(res.data);
      });
    }, []);
  
    const cancel = () => {
      props.history.push("/supplier");
    };

    const deleteSupplier = (id) => {
     

      swal({
        title: "bạn có muốn xóa nhà cung cấp?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          DeleteSupplier(id).then(() => {
            setSupplier(supplier.filter((item) => item.id !== id))
            props.history.push("/supplier");
          });
         
          swal("xóa thành công!", {
            icon: "success",
          });
        } else {
          swal("nhà cung cấp chưa được xóa!");
        }
      });
     
    };
  

  
    useEffect(() => {
      getSupplierByID(id).then((res) => {
        setCode(res.data.code);
        setName(res.data.name);
        setEmail(res.data.email);
        setAddress(res.data.address);
        setPhone(res.data.phone);
        setDescription(res.data.description)
      });
    }, []);
    const updateSupplier = (e) => {
      e.preventDefault();
      let supplier = {
        code: code,
        name: name,
        email: email,
        address: address,
        phone: phone,
        description: description,
      };
      Swal.fire({
        title: 'bạn có muốn thay đổi nhà cung cấp?',
        showCancelButton: true,
        confirmButtonText: `lưu`,
      }).then((result) => {
       
        if (result.isConfirmed) {
          UpdateSuppliers(supplier, id).then((res) => {
            console.log("aaaa")
           });
          Swal.fire('đã lưu!', '', 'success')
        } 
      })

      UpdateSuppliers(supplier, id).then((res) => {
       console.log("aaaa")
      });
    };
  
    const changeCode = (event) => {
      setCode(event.target.value);
    };
    const changeName = (event) => {
      setName(event.target.value);
    };

    const changeDescription = (event) => {
      setDescription(event.target.value);
    };
    const changeEmail = (event) => {
      setEmail(event.target.value);
    };
    const changeAddress = (event) => {
      setAddress(event.target.value);
    };
    const changePhone = (event) => {
      setPhone(event.target.value);
    };

  
  //   const changeonBlur = (event)=>{
  //  if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
  //       setMesage({
  //         code:" * Mã không được để trống"
  //       })
  //     }
  //     else{
  //       setMesage({
  //         code:""
  //       })
  //     }
  //   }
    
  //   const changeonBlurName = (event)=>{
  //  if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
  //       setMesage({
  //         name:" Tên sản phẩm không được để trống"
  //       })
  //     }
  //     else{
  //       setMesage({
  //         name:""
  //       })
  //     }
  //   }
    
  //   const changeonBlurNumber = (event)=>{
  //     var a = new RegExp("^[0-9]*$")
      
  //     if((a.test(event.target.value)==false)){
  //       setMesage({
  //         numberProduct:"Số lượng không được nhập kí tự"
  //       })
  //     }
  //     else if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
  //       setMesage({
  //         numberProduct:" Số lượng sản phẩm không được để trống"
  //       })
  //     }
  //     else{
  //       setMesage({
  //         numberProduct:""
  //       })
  //     }
  //   }
    
  //   const changeonBlurPrice = (event)=>{
  //     var a = new RegExp("^[0-9]*$")
      
  //     if((a.test(event.target.value)==false)){
  //       setMesage({
  //         price:"Giá không được nhập kí tự"
  //       })
  //     }
  //     else if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
  //       setMesage({
  //         price:" Giá sản phẩm không được để trống"
  //       })
  //     }
  //     else{
  //       setMesage({
  //         price:""
  //       })
  //     }
  //   }
  
  
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
                    <CInput name="code" onChange={changeCode} value={code} />
                    {/* <span style={{color:"red"}}> {message.code}</span> */}
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel htmlFor="vat">Tên</CLabel>
                    <CInput
                      name="name"
                      placeholder="DE1234567890"
                      onChange={changeName}
                      value={name}
                    
                    />
                     {/* <span style={{color:"red"}}> {message.name}</span> */}
                  </CFormGroup>
                  <CFormGroup>
                  <CLabel htmlFor="vat">Số điện thoại</CLabel>
                  <CInput
                    id="vat"
                    placeholder="Số điện thoại"
                    value={phone}
                    onChange={changePhone}
                  />

                  {/* <span style={{color:"red"}}> {message.numberProduct}</span> */}
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Địa chỉ</CLabel>
                  <CInput
                    id="vat"
                   value={address}
                    onChange={changeAddress}
                  />
                  {/* <span style={{color:"red"}}> {message.price}</span> */}
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Email</CLabel>
                  <CInput
                  value={email}
                  onChange={changeEmail}
                  />
                  {/* <span style={{color:"red"}}> {message.price}</span> */}
                </CFormGroup>
                </CCardBody>
              </CCard>
              <CCol xs="7">
              {" "}
              <button
                className="btn btn-secondary"
                onClick={cancel}
                style={{ marginLeft: "10px" }}
              >
                Quay lại
              </button>
              <button
                className="btn btn-success"
                onClick={updateSupplier}
                style={{ marginLeft: "10px" }}
              >
                Sửa
              </button>
              <button
          style={{ marginLeft: "10px" }}
          onClick={() => deleteSupplier(id)}
          className="btn btn-danger"
        >
          Xóa
        </button>
        </CCol>
        </CCol>
            <CCol xs="5">
            <CCard>
              <CCardHeader>Mô tả</CCardHeader>
              <CCardBody>
                <CFormGroup>
                  <CTextarea
                    name="textarea-input"
                    id="textarea-input"
                    rows="9"
                    placeholder="mô tả"
                    value={description}
                    onChange={changeDescription}
                  />
                </CFormGroup>
              </CCardBody>
            </CCard>
          </CCol>
          </CRow>
        </div>
      </div>
    );
  }
  export default Update;
  