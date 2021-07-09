import React, { useContext, useEffect, useState } from "react";
import { callApi, callApiNotJwt } from "src/apis/ApiCaller";
import { JwtContext, ProductContext } from "src/context/JwtContext";
import { FormatMoney } from "src/helpers/FormatMoney";
import swal from "sweetalert";
import ModalHeaders from "../Order/ModalHeaders";
import EmptyContent from "./EmptyContent";
import ProductList from "./ProductList";
import SalerItem from "./SalerItem";
import "./scss/saler.scss";

const Saler = () => {
  const [orderDto, setOrderDto] = useState({});
  const [isShow, setIsShow] = useState(false);
  const { jwt } = useContext(JwtContext);
  const [productOption, setProductOption] = useState([]);
  const [discountMoney,setDiscountMoney] = useState(0);
  const [customerPay, setCustomerPay] = useState(0);
  const [orderPageable, setOrderPageAble] = useState({
    page: 1,
    limit: 10,
    inputOrder: "",
    orderTime: "",
  });
  const [productList, setProductList] = useState([]);
  /**
   * call api get product
   */
  const showProductList = () => {
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
    
  }, []);

 
   
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



  return (
    <div className="saler ">
      <ProductContext.Provider>
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
                  onFocus={showProductList}
                  type="text"
                  name="inputOrder"
                  id="userName"
                  placeholder="Thêm sản phẩm vào đơn"
                />
              </div>
            </div>
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
              <tbody></tbody>
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
                <div className="payment-content">
                  <div className="h-1">
                    <span>Tổng tiền</span>
                    <span>0</span>
                  </div>
                  <div className="h-1  h-1-1">
                    <span>Chiết khấu</span>
                    <div className = "moneyDiscount" ></div>
                   
                  </div>
                  <div className="h-1  h-1-2">
                    <span>Khách phải trả</span>
                    <span> </span>
                  </div>
                  <div className="h-1 h-1-1">
                    <span>Tiền khách đưa</span>     
                    <input
                    id = "moneyOfCustomerId"
                      // onChange={getMoney}
                      placeholder=""
                      defaultValue ="0"
                    />
                  </div>
                  <div className="h-1">
                    <span>Tiền thừa</span>
                    <span></span>
                  </div>
                
                </div>       
            </div>
              </div>
              <div className="h-1 h-2-2">
                    <button >Thanh toán</button>
                  </div>
          </div>
        </div>
      </ProductContext.Provider>
    </div>
  );
};

export default Saler;
