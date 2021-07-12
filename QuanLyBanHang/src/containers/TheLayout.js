import React, { useContext, useState } from 'react'
import { SalerContext } from 'src/context/JwtContext'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {
const [isShow, setShow] = useState(false);
  return (  
    <div className="c-app c-default-layout">
      <SalerContext.Provider value ={{isShow,setShow}}>
        {isShow ==false ?<TheSidebar />: ""}
      <div className="c-wrapper">
        {isShow  ? <TheHeader/> : ""}
        <div className="c-body">
          <TheContent/>
        </div>
        {isShow == false ?<TheFooter/>:"" }   
      </div>
      </SalerContext.Provider>
    </div>
  )
}

export default TheLayout
