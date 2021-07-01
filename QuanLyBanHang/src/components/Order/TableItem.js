import React from 'react';

const TableItem = (props) => {
    const {code, name, price, createdDate}= props;
    const d = new Date(createdDate);
    var option = {day:"numeric",month:"2-digit",year:'numeric', hour:'2-digit',minute:'2-digit'};
    console.log( );
    const times=d.toLocaleDateString("ja-JP", option)
    return (   
         <tr className = "table-row">
            <th scope="row">{code}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{times}</td>
          </tr>
    );
};




export default TableItem;
