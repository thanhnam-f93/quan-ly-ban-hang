import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomerItem from "./CustomerItem";
import NavBar from "./NavBar";
import { reactLocalStorage } from "reactjs-localstorage";
import Swal from "sweetalert2";
import {
  CPagination,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
function CustomerList() {
  const headers = {
    Authorization: "Bearer " + reactLocalStorage.get("token"),
  };
  const [customers, setCustomers] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState({});
  const [age, setAge] = useState({});
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState({});
  const [limit, setLimit] = useState(5);
  const [status, setStatus] = useState(true);
  const [response, setResponse] = useState([]);
  const getData = async () => {
    setIsLoading(true);
    setCustomers([]);
    var URL;
    if (search.length > 0) {
      URL = `http://localhost:8080/customers/search?input=${search}&pageNo=${
        page - 1
      }&limit=${limit}`;
    } else if (age.length > 0 && gender.length > 0) {
      URL = `http://localhost:8080/customers/${age}?gender=${gender}&pageNo=${
        page - 1
      }&limit=${limit}`;
    } else if (gender.length > 0) {
      URL = `http://localhost:8080/customers/findGender?gender=${gender}&pageNo=${
        page - 1
      }&limit=${limit}`;
    } else if (age.length > 0) {
      URL = `http://localhost:8080/customers/${age}?pageNo=${
        page - 1
      }&limit=${limit}`;
    } else {
      URL = `http://localhost:8080/customers/page?pageNo=${
        page - 1
      }&limit=${limit}`;
    }

    console.log("this URL: ", URL);
    await axios
      .get(URL, { headers })
      .then((response) => {
        const result = response.data;

        // const totalPage = response.data.totalPage;
        setTotalPage(response.data.totalPages);
        // console.log("totalPage", totalPage);

        //  const currentPage = result.pageable.pageNumber;
        //  setPage(currentPage);
        //   console.log("currentPage", currentPage);

        const cus = result.content;
        setCustomers(cus);
        //    console.log("cus", customers);

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(true);
        console.log(error);
      });
  };

  console.log("totalPage", totalPage);
  const renderTodo = customers.map((customer, index) => {
    return (
      <CustomerItem
        customer={customer}
        index={index}
        key={customer.id}
      ></CustomerItem>
    );
  });

  useEffect(() => {
    getData();
  }, [gender, page, search, age, status, limit]);
  return (
    <div>
      <NavBar
        setAge={setAge}
        search
        setSearch={setSearch}
        gender={gender}
        setGender={setGender}
        setPage={setPage}
      ></NavBar>
      <table
        className=" table table-striped table-bordered"
        style={{ border: "none" }}
      >
        <thead>
          <tr className="row">
            <th className="col-1">STT</th>
            <th className="col-2">Name</th>
            <th className="col-1">Gender</th>
            <th className="col-2">Phone</th>
            <th className="col-3">Email</th>
            <th className="col-3">Address</th>
          </tr>
        </thead>
        <tbody>
          {!customers.length && isLoading && (
            <tr className="text-center">
              <td colSpan={3}>No Student</td>
            </tr>
          )}
          {/* {isLoading && (
            <tr className="text-center">
              <td colSpan={3}>Loading...</td>
            </tr>
          )} */}
          {renderTodo}
        </tbody>
      </table>
      <div className="row">
        <CPagination
          id="pagination"
          align="center"
          addListClass="some-class"
          activePage={page}
          pages={totalPage}
          onActivePageChange={setPage}
        />

        <CDropdown className="m-1 float-right offset-8">
          <CDropdownToggle color="secondary" size="sm">
            Bản ghi
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem header>Chọn số bản ghi hiển thị</CDropdownItem>
            <CDropdownItem
              onClick={() => {
                setPage(1);
                setLimit(5);
              }}
            >
              5
            </CDropdownItem>
            <CDropdownItem
              onClick={() => {
                setPage(1);
                setLimit(8);
              }}
            >
              8
            </CDropdownItem>
            <CDropdownItem
              onClick={() => {
                setPage(1);
                setLimit(10);
              }}
            >
              10
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>

      {/* <Paginations
        totalPages={totalPage}
        currentPage={page}
        setCurrentPage={setPage}
      ></Paginations> */}
    </div>
  );
}
export default CustomerList;

// try {
//   var rs = null;
//   if (search.length > 0) {
//     //  rs = getPageBySearch(search, page, limit);
//   } else if (age.length > 0 && gender.length > 0) {
//     //   rs = getPageByAgeAndGender(age, gender, page, limit);
//   } else if (gender.length > 0) {
//     //  rs = setResponse(getPageByGender(gender, page, limit));
//   } else if (age.length > 0) {
//     //  rs = setResponse(getPageByAge(age, page, limit));
//   } else {
//     console.log("ahihihihihi");
//     ApiCustomer.getBasePage(page, limit)
//       .then((result) => {
//         setResponse(result);
//       })
//       .catch((err) => console.log(err));
//     console.log("Rs is :    " + response);
//   }
//   console.log("object tra ve customer:   " + rs);
//   setCustomers(response.data.content);
//   setTotalPage(response.data.totalPages);
//   setPage(response.pageable.pageNumber);
//   setIsLoading(false);
// } catch (error) {
//   setIsLoading(true);
//   console.log(error);
// }
