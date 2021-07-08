import React from 'react'

var API = 'http://localhost:8080/admin';

const ApiStaff = {
    method: 'get',
    url: `${API}/staffs`,
    headers: {
        // 'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
        'Content-Type': 'application/json'
    }
};
export { ApiStaff };

const ApiRole = {
    method: 'get',
    url: `${API}/roles`,
    headers: {
        // 'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
        'Content-Type': 'application/json'
    }
};
export { ApiRole }

const apiAddRole = {
    method: 'post',
    url: `${API}/roles`,
    data: null,
    headers: {
        // 'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
        'Content-Type': 'application/json'
    }
};
export { apiAddRole }