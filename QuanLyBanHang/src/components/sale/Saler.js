import React, { useContext, useEffect, useState } from "react";
import { callApi, callApiNotJwt } from "src/apis/ApiCaller";
import { JwtContext, ProductContext } from "src/context/JwtContext";
import { FormatMoney } from "src/helpers/FormatMoney";
import swal from "sweetalert";
import ModalHeaders from "../Order/ModalHeaders";
import DiscountOrder from "./DiscountOrder";
import EmptyContent from "./EmptyContent";
import ProductList from "./ProductList";
import SalerItem from "./SalerItem";
import "./scss/saler.css";

const Saler = () => {
  const [orderDto, setOrderDto] = useState({});
  const [isShow, setIsShow] = useState(false);
  const [money, setMoney] = useState(0);
  const [returnMoney, setReturnMoney] = useState(0);
  const { jwt } = useContext(JwtContext);
  const [productOption, setProductOption] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [isDiscount, setIsDiscount] = useState(false);
  const [discount,setDiscount] = useState(0);
  const [discountMoney,setDiscountMoney] = useState(0);
  const [customerPay, setCustomerPay] = useState(0);
  const [orderPageable, setOrderPageAble] = useState({
    page: 1,
    limit: 10,
    inputOrder: "",
    orderTime: "",
  });
  const [productList, setProductList] = useState([]);
  var data = [{}];
  /**
   * call api get product
   */
  const showOption = () => {
    console.log("input", data);
    callApi("api/v1/find-all", "post", orderPageable, jwt).then((response) => {
      if (response.status !== 200) {
        alert("thao tác thất bại");
        return;
      }
      response.json().then((data) => {
        console.log("danh sach product:", data);
        setProductList(data);
      });
    });

    setIsShow(true);
    console.log(isShow);
  };

  /**
   *
   * @param {*} e
   * filter product by name
   */
  const getInput = (e) => {
    callApiNotJwt(`api/v1/product_search/${e.target.value}`, "GET", jwt).then(
      (response) => {
        if (response.status !== 200) {
          alert("thao tác thất bại");
          return;
        }
        response.json().then((data) => {
          console.log("danh sach product:", data);
          setProductList(data);
        });
      }
    );
  };

  const getListProduct = (item) => {
    console.log("vòa get list");
    item.amount = 1;
    if (productOption.length == 0) {
      console.log("hêllo");
      setProductOption([...productOption, item]);
    } else {
      var check = false;
      for (const ob of productOption) {
        console.log(ob["id"]);
        if (ob["id"] === item.id) {
          check = true;
          setCount(ob["amount"]);
        }
      }

      if (check === false) {
        setProductOption([...productOption, item]);
      }
    }
    // setTotal(productOption.reduce())

    setIsShow(false);
  };

  const getCount = (e, item) => {
      item["amount"] = e;
      setCount(e); 
   
  };

  var products = productOption.map((item, index) => {
    console.log("map:", item);
    return <SalerItem item={item} key={index} index = {index} />;
  });

  useEffect(() => {
    var count = 0;
    for (const ob of productOption) {
      count += ob["price"] * ob["amount"];
      console.log("tổng tiền là :", count);
    }
    var orderDetailDtos = productOption.map((item) => {
      return {
        productId: item.id,
        quanlity: item.amount,
        discount: item.price,
      };
    });
    setTotal(count);
    setOrderDto({});
    console.log("bill-order:", orderDetailDtos);
    setOrderDto({ customId: "", orderDetailDtos: orderDetailDtos });
    setDiscountMoney(total*discount/100);
    setCustomerPay(total-discountMoney);
  }, [productOption, money, returnMoney, total, count, discount]);

  const getMoney = (e) => {
    var m = e.target.value;
    const regexp = /^\d+$/;
    const checkingResult  = regexp.test(m);
    console.log("checking:",checkingResult);
    if(checkingResult== true){
      // let mn = parseInt(mn,10);
      
      setMoney(m);
      setReturnMoney(m - total);
      var d= document.getElementById("moneyOfCustomerId");
      // d.value = mn.toLocaleString('vn-VN');

    }else{
      var d= document.getElementById("moneyOfCustomerId");
      d.value=0;

    }
   
  };

  /**
   * create bill------------------
   */
  const payment = () => {
    swal({
      title: "Are you sure?",
      text: "bạn có muốn chắc chắn thanh toán không?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        callApi("orders", "post", orderDto, jwt).then((response) => {
          if (response.status !== 200) {
            swal("Thao tác không thành công");
            return;
          }
          response.json().then((data) => {
            console.log("size data:", data.length);
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
          });
        });
      } else {
        swal("Thao tác không thành công");
      }
    });
  };

  const deleteItemOfList = (id) => {
    console.log("delete:", id);
    var list = productOption;
    list = list.filter(function (obj) {
      return obj.id !== id;
    });
    setProductOption(list);
  };

  const getFocusInput = ()=>{
    document.getElementById("userName").focus();
  }

  /**
   * check navigation of input money of customer send
   * @param {*} e 
   */
  const checkNavigation = (e)=>{
    var a = e.keyCode;
    console.log("customer send:",a);
    if(a===189){
      document.getElementById("moneyOfCustomerId").value = 0;
    }
  }
 
  /**
   * show hide discount
   */
  const isShowDiscount = ()=>{
    setIsDiscount(!isDiscount);
    console.log("discount:",isDiscount);
  }

  const getDiscountOrder = (value)=>{
    console.log("discount:",value);
    setDiscount(value);
  }

  return (
    <div className="saler">
      <ProductContext.Provider
    value={{ getListProduct, deleteItemOfList, getCount,getFocusInput,isDiscount,setIsDiscount, getDiscountOrder}} >
        <div className="row">
          <div className="col-lg-8 row-1">
            <div className="header-order">
              <div className="input-data">
                <button type="button">
                  <span>
                    <i className="fas fa-search"></i>
                  </span>
                </button>
                <input
                  autoComplete="off"
                  onChange={getInput}
                  onFocus={showOption}
                  type="text"
                  name="inputOrder"
                  id="userName"
                  placeholder="Thêm sản phẩm vào đơn"
                />
              </div>
            </div>
            {isShow ? (
              <ProductList listProduct={productList} list={getListProduct} />
            ) : (
              ""
            )}
            <div
              className="order-table"
              tabIndex="0"
              onFocus={() => setIsShow(false)}
            >{
              productOption.length===0? <EmptyContent />:
              <table className="table table-striped">
              <thead>
                <tr>  
                  <th scope="col">Mã sản phẩm </th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Đơn giá </th>
                  <th scope="col">Thành tiền</th>
                  <th scope="col"> </th>
                </tr>
              </thead>
              <tbody>{products}</tbody>
            </table>
            }
             
            </div>
          </div>
          <div className="col-lg-4 row-2 ">
            <div className="payment">
              <div className="customer">
                <div className="search-customer">
                  <div className="input-customer">
                    <button type="button">
                        <i className="fas fa-search"></i>            
                    </button>
                    <input
                      autoComplete="off"
                      type="text"
                      name="inputOrder"
                      id="userName"
                      placeholder="Tìm kiếm thông tin khách hàng"
                    />
                  </div>
                  <button>
                    <i className="fas fa-plus fa-1x"></i>
                  </button>
                </div>
                <div className="infor-customer">
                  <p> Tên khách hàng:</p>
                  <p>Điện thoại:</p>
                  <p>Địa chỉ:</p>
                </div>
              </div>
              <div className="payment-2">
                {/* <div className="payment__label">
                  <p>Thanh toán</p>
                </div> */}
                <div className="payment-content">
                  <div className="h-1">
                    <span>Tổng tiền</span>
                    <span>{FormatMoney(total)}</span>
                  </div>
                  <div className="h-1  h-1-1">
                    <span>Chiết khấu</span>
                    <div className = "moneyDiscount" onClick = {isShowDiscount}>{FormatMoney(discountMoney)}</div>
                   
                  </div>
                  <div className="h-1  h-1-2">
                    <span>Khách phải trả</span>
                    <span>{FormatMoney(customerPay)} </span>
                  </div>
                  <div className="h-1 h-1-1">
                    <span>Tiền khách đưa</span>     
                    <input
                    id = "moneyOfCustomerId"
                      onChange={getMoney}
                      placeholder=""
                      defaultValue ="0"
                    />
                  </div>
                  <div className="h-1">
                    <span>Tiền thừa</span>
                    <span style = {returnMoney<0?{color:"red"}:{color:"blue"}}>{FormatMoney(returnMoney)}</span>
                  </div>
                
                </div>       
            </div>
              </div>
              <div className="h-1 h-2-2">
                    <button onClick={payment}>Thanh toán</button>
                  </div>
          </div>
        </div>
        <DiscountOrder isShow = {{isDiscount, setIsDiscount}} />
      </ProductContext.Provider>
    </div>
  );
};

export default Saler;
