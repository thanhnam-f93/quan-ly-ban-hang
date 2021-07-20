import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FeedBackItem from "./FeedBackItem";
import { CPagination } from "@coreui/react";
function FeedBackList() {
  const [clickSearch, setClickSearch] = useState(0);

  const [keySearch, setKeySearch] = useState("");

  const getKeySearch = (e) => {
    const value = e.target.value;
    setKeySearch(value);
    console.log("keySearch ", keySearch);
  };

  const searchStaffByName = () => {
    setClickSearch(clickSearch + 1);
  };

  const [feedbacks, setfeedbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  var URL = `http://localhost:8080/feedbacks/page?pageNo=${currentPage - 1}`;
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setfeedbacks(response.data.content);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => console.log("error"));
  }, [currentPage, clickSearch]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <h3>Ý kiến Khách hàng</h3>
        </div>

        {/* Search */}
        <div style={{ marginLeft: "500px", marginRight: "10px" }}>
          <input
            //    onChange={getKeySearch}
            type="text"
            placeholder="Search by name"
            style={{
              height: "34px",
              width: "289px",
              padding: "10px 15px 10px 15px",
              border: "none",
            }}
          />
          <button
            //  onClick={searchStaffByName}
            style={{
              padding: "1px 10px 0px 10px",
              height: "34px",
              border: "none",
              backgroundColor: "white",
            }}
          >
            <i
              class="fas fa-search"
              style={{ color: "green", fontSize: "19px" }}
            ></i>
          </button>
        </div>

        {/*End -  Search */}

        <div style={{ margin: "0px" }}>
          <Link to="/feedback/new">
            <button style={{ marginLeft: "10px" }} className="btn btn-success">
              Thêm mới Ý kiến
            </button>
          </Link>
        </div>
      </div>
      <hr />
      <table
        className=" table table-striped table-bordered"
        style={{ backgroundColor: "white" }}
      >
        <thead>
          <tr>
            <th>Stt</th>
            <th>Khách hàng</th>
            <th>Tiêu đề</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((item, index) => {
            return (
              <FeedBackItem
                feedback={item}
                key={item.id}
                index={index}
              ></FeedBackItem>
            );
          })}
        </tbody>
      </table>

      <CPagination
        activePage={currentPage}
        pages={totalPages}
        onActivePageChange={setCurrentPage}
      />
      <br></br>
    </div>
  );
}

export default FeedBackList;
