import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import StaffItem from '../StaffItem/StaffItem';
const Search = () => {
    
    const [staffSearch, setStaffSearch] = useState();

    const [keySearch, setKeySearch] = useState("");

    const getKeySearch = (e) => {
        const value = e.target.value;
        setKeySearch(value);
        console.log("keySearch ", keySearch);
    }

    var API = 'http://localhost:8080/admin';

    const apiSeachStaff = {
      method: 'get',
      url: `${API}/staffs/search?name=${keySearch}`,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json'
      }
    };
  
    const searchStaffByName = () => {
            axios(apiSeachStaff)
              .then(response => {
                  setStaffSearch(response.data);
                  console.log('data search ', response.data)
              })
              .catch(error => console.log('error'))
    }

    return (
        <div>
            <div style={{ marginLeft: "500px", marginRight: "10px" }}>
                <input onChange={getKeySearch} 
                    type="text" placeholder="Search" style={{ height: "34px", width: "289px", padding: "10px 15px 10px 15px", border: "none" }} />
                <button onClick={searchStaffByName}
                    style={{ padding: "1px 10px 0px 10px", height: "34px", border: "none", backgroundColor: "white" }}>
                    <i class="fas fa-search" style={{ color: "green", fontSize: "19px" }}></i>
                </button>
            </div>
        </div>
    )
}

export default Search
