import React from 'react';
import "./scss/SaleSearchCustomer.scss"
const SaleSearchCustomer = ({item}) => {
    const getItem =()=>{
        console.log(item);
    }
    return (
        <div className = "sale-search-customer" onClick={getItem}>
            <div className = 'customer-1'>
            <span>{item.name}</span>
            <span>{item.phone}</span>
            </div>
        </div>
    );
}

export default SaleSearchCustomer;
