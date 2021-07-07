import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomerItem from "./CustomerItem";
import NavBar from "./NavBar";
import Paginations from "src/views/base/paginations/Pagnations";
import Swal from "sweetalert2";
function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState({});
  const [age, setAge] = useState({});
  const [search, setSearch] = useState({});
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [status, setStatus] = useState(true);
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
    axios
      .get(URL)
      .then((response) => {
        setCustomers(response.data.content);
        setTotalPage(response.data.totalPages);
        console.log("Total Page", totalPage);
        // setPage(response.data.pageNumber);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(true);
        console.log(error);
      });
  };

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
        .get(API)
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
    axios
      .get(URL)
      .then((response) => {
        setTotalPage(response.data.totalPages);
        console.log("Total Page", totalPage);
        // setPage(response.data.pageNumber);
      })
      .catch((error) => {
        console.log(error);
      });
  });
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
      <Paginations totalPages={totalPage} setPage={setPage}></Paginations>
    </div>
  );
}

export default CustomerList;
