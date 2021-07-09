import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { ProductContext } from 'src/context/JwtContext';
import "./scss/DiscountOrder.css"

const DiscountOrder = (props) => {
    const [discount,setDiscount] = useState(0);
    const {isDiscount, setIsDiscount,getDiscountOrder}= useContext(ProductContext);
    const handleClose = ()=>setIsDiscount(false);
    console.log("discountOrder:",isDiscount);

    const validateDiscount = (e)=>{
      let val = e.target.value;
      console.log("giá trị của e:",val);
      let repx = /^\d+$/
      if(repx.test(val) ){
        console.log("giá trị của discount");
        setDiscount(val);
      }else{
       
      }
    }

    const apply = ()=>{
      getDiscountOrder(discount);
      console.log(discount);
      setIsDiscount(false);
    }
    return (
        <Modal show={isDiscount}
        scrollable = "true"
         onHide={handleClose}
         size="sm"
         aria-labelledby="contained-modal-title-vcenter"
         centered>
          <Modal.Header closeButton>
            <Modal.Title style = {{color:"black"}}>Chiết khấu đơn hàng</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className = "valueDiscount">
                <span>Nhập giá trị chiết khấu</span>
                <input onChange = {validateDiscount} type = "text"  />
                
            </div>
          </Modal.Body>
          <Modal.Footer className = "h-1">
            <button variant="secondary" onClick={handleClose}>
              Thoát
            </button>
            <button onClick={apply}>
              Áp dụng
            </button>
          </Modal.Footer>
        </Modal>
    );

};
export default DiscountOrder
