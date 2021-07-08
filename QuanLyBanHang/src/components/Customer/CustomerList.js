import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomerItem from "./CustomerItem";
import NavBar from "./NavBar";
import { reactLocalStorage } from "reactjs-localstorage";
import Paginations from "src/views/base/paginations/Pagnations";
import Swal from "sweetalert2";
import ApiCustomer from "src/apis/ApiCustomer";
function CustomerList() {
  const headers = {
    Authorization: "Bearer " + reactLocalStorage.get("token"),
  };
  const [customers, setCustomers] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState({});
  const [age, setAge] = useState({});
  const [search, setSearch] = useState({});
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [status, setStatus] = useState(true);
  const [response, setResponse] = useState([]);
  const getData = async () => {
    setIsLoading(true);
    setCustomers([]);
    var URL;
    if (search.length > 0) {
      URL = `http://localhost:8080/customers/search?input=${search}&pageNo=${page}&limit=${limit}`;
    } else if (age.length > 0 && gender.length > 0) {
      URL = `http://localhost:8080/customers/${age}?gender=${gender}&pageNo=${page}&limit=${limit}`;
    } else if (gender.length > 0) {
      URL = `http://localhost:8080/customers/findGender?gender=${gender}&pageNo=${page}&limit=${limit}`;
    } else if (age.length > 0) {
      URL = `http://localhost:8080/customers/${age}?pageNo=${page}&limit=${limit}`;
    } else {
      URL = `http://localhost:8080/customers/page?pageNo=${page}&limit=${limit}`;
    }

    console.log("this URL: ", URL);
    await axios
      .get(URL, { headers })
      .then((response) => {
        const result = response.data;

        // const totalPage = response.data.totalPage;
        setTotalPage(response.data.totalPages);
        // console.log("totalPage", totalPage);

        const currentPage = result.pageable.pageNumber;
        setPage(currentPage);
        console.log("currentPage", currentPage);

        const cus = result.content;
        setCustomers(cus);
        console.log("cus", customers);

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(true);
        console.log(error);
      });

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
  };

  console.log("totalPage", totalPage);
  const renderTodo = customers.map((customer, index) => {
    return (
      <CustomerItem
        customer={customer}
        deleteC={deleteCustomer}
        index={index}
        key={customer.id}
      ></CustomerItem>
    );
  });
  function deleteCustomer(id) {
    const API = `http://localhost:8080/customers/off/${id}`;
    if (window.confirm("Xoa la mat day nhe")) {
      axios
        .get(API, { headers })
        .then(function (response) {
          setCustomers(customers.filter((data) => data.status !== "off"));
          setStatus(!status);
          Swal.fire("Good job!", "Delete Complete!", "success");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  useEffect(() => {
    getData();
    console.log("gender", gender);
  }, [gender, page, search, age, status, limit]);

  return (
    <div>
      <NavBar
        setAge={setAge}
        search
        setSearch={setSearch}
        gender={gender}
        setGender={setGender}
      ></NavBar>
      <table
        className=" table table-striped table-bordered"
        style={{ border: "none" }}
      >
        <thead>
          <tr className="row">
            <th className="col-1">STT</th>
            <th className="col-3">Name</th>
            {/* <th className="col-2">Email</th> */}
            <th className="col-2">Phone</th>
            <th className="col-2">Gender</th>
            {/* <th className="col-2">Address</th> */}
            <th className="col-4">Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {!customers.length && isLoading && (
            <tr className="text-center">
              <td colSpan={3}>No Student</td>
            </tr>
          )}
          {isLoading && (
            <tr className="text-center">
              <td colSpan={3}>Loading...</td>
            </tr>
          )}
          {renderTodo}
        </tbody>
      </table>
      <Paginations
        totalPages={totalPage}
        currentPage={page}
        setCurrentPage={setPage}
      ></Paginations>
    </div>
  );
}

export default CustomerList;
