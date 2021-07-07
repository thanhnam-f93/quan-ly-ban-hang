import React, { useContext } from 'react';
import { ProductContext } from 'src/context/JwtContext';
import "./scss/Emptycontent.css"

const EmptyContent = () => {
    const{getFocusInput} = useContext(ProductContext);
    return (
        <div className = "empty-content">
            <div className= "content-1-2">
                <div className ="image-content-1" >
                <i className="fas fa-box-open fa-8x"></i>
                </div>
                <div className ="btn-content"><button onClick = {getFocusInput}>Thêm sản phẩm ngay</button></div>
                
            </div>
            
        </div>
    );
}

export default EmptyContent;
