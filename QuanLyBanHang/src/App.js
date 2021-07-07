import React, { Component, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';
import Logins from './components/Login/Logins';
import { JwtContext } from './context/JwtContext';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

function App(){
  const [jwt, setJwt] = useState(reactLocalStorage.get("token"));
  console.log("jwt:",jwt);
  var acc = reactLocalStorage.getObject("acc");
  console.log("jwt",jwt);
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
            <JwtContext.Provider value = {{jwt,setJwt}}>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/logins"  component = {Logins}/>
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
              </JwtContext.Provider>
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
}

export default App;
