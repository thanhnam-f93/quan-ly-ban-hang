import React from 'react';
import "./scss/SaleSearchCustomer.scss"
const SaleSearchCustomer = ({item}) => {
    return (
        <div className = "sale-search-customer">
            <div className = 'customer-1'>
            <span>{item.name}</span>
            <span>{item.phone}</span>
            </div>
        </div>
    );
}

export default SaleSearchCustomer;
