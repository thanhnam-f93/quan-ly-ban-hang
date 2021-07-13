import React, { useContext, useState } from 'react'
import { SalerContext } from 'src/context/JwtContext'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {
const [isShow, setShow] = useState(true);
  return (  
    <div className="c-app c-default-layout">
      <SalerContext.Provider value ={{isShow,setShow}}>
        {isShow ? <TheSidebar />: ""}
        {/* <TheSidebar /> */}
      <div className="c-wrapper">
        {isShow ?  <TheHeader/> : ""}
        {/* <TheHeader/> */}
        <div className="c-body">
          <TheContent/>
        </div>
        {isShow ? <TheFooter/>:"" }   
        {/* <TheFooter/> */}
      </div>
      </SalerContext.Provider>
    </div>
  )
}

export default TheLayout
