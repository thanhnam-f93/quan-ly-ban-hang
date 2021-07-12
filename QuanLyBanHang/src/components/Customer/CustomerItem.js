import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
function CustomerItem({ customer, deleteC, index }) {
  const history = useHistory();
  return (
    // <NavLink
    //   to={{ pathname: "/customerDetail", state: { customer } }}
    //   style={{
    //     padding: 0,
    //     textDecoration: "none",
    //     margin: " auto",
    //   }}
    // >
    <tr
      className="row alig"
      style={{ backgroundColor: "white", hover: { backgroundColor: "red" } }}
    >
      <td className="col-1">{index + 1}</td>
      <td className="col-3">{customer.name}</td>
      {/* <td className="col-2">{customer.email}</td> */}
      <td className="col-2">{customer.phone}</td>
      <td className="col-2">{customer.gender}</td>
      {/* <td className="col-2">{customer.address}</td> */}

      <td className="col-4">
        <button
          style={{ marginLeft: "10px", hover: { cursor: "pointer" } }}
          onClick={() =>
            history.push({
              pathname: "/customerDetail",
              state: { customer: customer },
            })
          }
          className="btn btn-success"
        >
          Chi tiết
        </button>

        <button
          style={{ marginLeft: "10px" }}
          onClick={() => deleteC(customer.id)}
          className="btn btn-danger"
        >
          Xóa
        </button>
      </td>
    </tr>
    // </NavLink>
  );
}

export default CustomerItem;
