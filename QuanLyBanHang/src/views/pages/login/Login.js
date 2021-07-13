import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { callApi } from 'src/apis/ApiCaller'
import { reactLocalStorage } from 'reactjs-localstorage'
import { JwtContext } from 'src/context/JwtContext'

const Login = () => {
  const { jwt, setJwt } = useContext(JwtContext);
  const history = useHistory();
  const [category, setCategory] = useState({ phone: "", passWord: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setCategory({ ...category, [name]: value });
  };
  const getUser = ()=>{
    callApi("login", "POST", category).then((response) => {
      if (response.status !== 200) {
        alert("tài khoản mật khẩu không chính xác");
        return;
      }
      response.json().then((data) => {
        alert("thao tác thành công");
        console.log("response:", data);
        reactLocalStorage.set("token", data.token);
        reactLocalStorage.set("name", data.fullName);
        setJwt(data.token);
        console.log("login:", jwt);
        history.push("/home");
      });
    });
  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username"vname = "username" autoComplete="username" onChange= {handleChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" name = "password" placeholder="Password" autoComplete="current-password" onChange = {handleChange}/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick = {getUser}>Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1} >Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
