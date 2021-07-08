import React from 'react'
import { useHistory } from 'react-router-dom'
import {Link} from 'react-router-dom'

const RoleItem = ({role}) => {
  let history = useHistory();

  const updateRole = (role) => {
    history.push({
      pathname: `/settings/roles/${role.id}`,
      state: { role: role }
    })
  }
  return (
    <>
       <tr >
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td>{role.notes}</td>
              <td>{new Date(role.createdDate).toLocaleDateString()}</td>
              <td>
                {/* <Link to = {{pathname: `/settings/roles/${role.id}`, state: { role: role }}}> */}
                <button
                style={{ marginLeft: "10px" }}
                onClick={() => updateRole(role)}
                className="btn btn-success"
                >
                  Cập nhật
                </button>
                {/* </Link> */}
              </td>
            </tr>
    </>
  )
}

export default RoleItem













