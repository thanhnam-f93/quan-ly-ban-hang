import React, { useState, useEffect } from "react";
import { CChartBar } from "@coreui/react-chartjs";
import {
  CCard,
  CCardBody,
  CCardGroup,
  CFormGroup,
  CCardHeader,
  CPagination,
} from "@coreui/react";
import { header } from "src/components/Customer/data";
import axios from "axios";
function TotalCustomerByYear() {
  const headers = header;
  const [year, setYear] = useState();
  const [listYear, setListYear] = useState([]);
  const [totalByYear, setTotalByYear] = useState([]);
  const getListYear = async () => {
    const API_listYear =
      "http://localhost:8080/customers/getYearCreateCustomer";
    axios
      .get(API_listYear, { headers })
      .then((response) => {
        setListYear(response.data);
 //       console.log("list Year: ", listYear);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getDataByYear = async () => {
    var API_Statistics = `http://localhost:8080/customers/count?year=${year}`;
   // console.log("API: ", API_Statistics);
    axios.get(API_Statistics, { headers }).then((response) => {
      setTotalByYear(response.data);
      console.log("response:  " + response.data);
    });
  };
  function handleChangeYear() {
    let y = document.getElementById("year");
    setYear(y.value);
    getDataByYear();
  }
  useEffect(() => {
    getDataByYear();
  }, [year]);

  useEffect(() => {
    getListYear();
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div className="row">
      <CCardGroup columns className="cols-2" style={{}}>
        <CCard style={{}}>
          <CCardHeader className="text-center font-weight-bold">
            Lượng khách hàng mới theo tháng
          </CCardHeader>
          <CFormGroup></CFormGroup>
          <select
            id="year"
            className="form-control"
            placeholder="Chọn năm"
            aria-label="Default select example"
            onChange={handleChangeYear}
          >
            <option selected disabled>
              Select year
            </option>
            {listYear.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>

          <CCardBody>
            <CChartBar
              datasets={[
                {
                  label: "Lượng Khách Hàng",
                  backgroundColor: "#f87979",
                  data: totalByYear,
                },
              ]}
              labels="months"
              options={{
                tooltips: {
                  enabled: true,
                },
              }}
            />
          </CCardBody>
        </CCard>
        <CCard style={{}}>
          <table className=" table table-striped table-bordered">
            <thead>
              <tr>
                <th>Tháng ... Năm {year}</th>
                <th>Số lượng khách theo tháng </th>
              </tr>
            </thead>
            <tbody>
              {totalByYear.map((item, index) => {
                return (
                  <tr>
                    <td> {index + 1}</td>
                    <td>{item}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <CPagination
            align="center"
            addListClass="some-class"
            activePage={1}
            pages={2}
            onActivePageChange
          />
        </CCard>
      </CCardGroup>
    </div>
  );
}

export default TotalCustomerByYear;
