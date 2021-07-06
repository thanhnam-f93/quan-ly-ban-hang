import axios from "axios";
import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
function CustomerItem({ customer, deleteC, index}) {
  const history = useHistory();
  console.log("key", deleteC);
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
      className="row"
      style={{ backgroundColor: "white", hover: { backgroundColor: "red" } }}
    >
      <td className="col-1">{index}</td>
      <td className="col-3">{customer.name}</td>
      {/* <td className="col-2">{customer.email}</td> */}
      <td className="col-2">{customer.phone}</td>
      <td className="col-2">{customer.gender}</td>
      {/* <td className="col-2">{customer.address}</td> */}

      <td className="col-4">
        <button
          style={{ marginLeft: "10px" }}
          onClick={() =>
            history.push({
              pathname: "/customerDetail",
              state: { customer: customer },
            })
          }
          className="btn btn-success"
        >
          Update
        </button>

        <button
          style={{ marginLeft: "10px" }}
          onClick={() => deleteC(customer.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
    // </NavLink>
  );
}

export default CustomerItem;
