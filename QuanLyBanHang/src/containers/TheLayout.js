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
      <TheSidebar/>
      <div className="c-wrapper">
         <TheHeader/> 
        <div className="c-body">
          <TheContent/>
        </div>
        {isShow ? <TheFooter/>:"" }  
       
      </div>
      </SalerContext.Provider>
    </div>
  )
}

export default TheLayout
