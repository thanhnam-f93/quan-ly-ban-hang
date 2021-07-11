import React from 'react'
import { useHistory } from 'react-router-dom'

const StaffItem = ({staff}) => {
  let history = useHistory();

  const updateStaff = (staff) => {
    history.push({
      pathname: `/settings/staffs/${staff.id}`,
      state: { staff: staff }
    })
  }
  
  return (
    <>
       <tr >
              <td>{staff.fullName}</td>
              <td>{staff.status}</td>
              <td>{staff.mail}</td>
              <td>{staff.phone}</td>
              <td>{staff.roleName}</td>

              <td>
                <button
                onClick={() => updateStaff(staff)}
                className="btn btn-success"
                >
                  Cập nhật
                </button>
              </td>
            </tr>
    </>
  )
}

export default StaffItem













