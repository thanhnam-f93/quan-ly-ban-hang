import React, { useState, useEffect } from "react";
import { CChartBar } from "@coreui/react-chartjs";
import {
  CCard,
  CCardBody,
  CCardGroup,
  CFormGroup,
  CCardHeader,
  CPagination,
  CRow,
} from "@coreui/react";
import { header, dataMonth, dataDay } from "src/components/Customer/data";
import axios from "axios";

function TotalCustomerByMonth() {
  const headers = header;
  const [year, setYear] = useState();
  const [listYear, setListYear] = useState([]);
  const [month, setMonth] = useState();
  const [pageNo, setPageno] = useState(1);
  const [dataTable, setDataTable] = useState([]);
  const [totalByMonth, setTotalByMonth] = useState([]);
  const getListYear = async () => {
    const API_listYear =
      "http://localhost:8080/customers/getYearCreateCustomer";
    axios
      .get(API_listYear, { headers })
      .then((response) => {
        setListYear(response.data);
        console.log("list Year in 2: ", listYear);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleChangeYear() {

    let item = document.getElementById("year");
    alert(item.value);
    setYear(item.value);
    console.log("this year: " + year);
  }
  function handleChangeMonth() {
    let item = document.getElementById("month");
    alert(item.value);
    setMonth(item.value);
    console.log("this month: " + month);
  }
  const getDataTable = async () => {
    setPageno(pageNo < 0 ? 1 : pageNo);
    setDataTable(totalByMonth.slice(pageNo * 10, (pageNo + 1) * 10));
    console.log("data page1:   ", dataTable);
  };
  const getDataByMonth = async () => {
    // if (year !== (null | undefined) && month !== (null | undefined))

    // console.log("API: ", API_Statistics);
    if (year !== (undefined | null) && month !== (undefined | null)) {
      var API_Statistics = `http://localhost:8080/customers/count2?month=${month}&year=${year}`;
      axios.get(API_Statistics, { headers }).then((response) => {
        setTotalByMonth(response.data);
        console.log("response:  " + response.data);
      });
    }
  };

  useEffect(() => {
    getListYear();
    // return () => {
    //   cleanup
    // }
  }, []);
  useEffect(() => {
    getDataTable();
  }, [pageNo]);

  useEffect(() => {
    //    getListYear();
    getDataByMonth();
  }, [year, month]);

  console.log("list Year Binhf: ", listYear);
  return (
    <CCardGroup columns className="cols-2">
      <CCard>
        <CCardHeader className="text-center font-weight-bold">
          Lượng khách hàng mới theo tháng
        </CCardHeader>
        <CRow>
          <div className="col-5 offset-1">
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
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-5">
            <select
              id="month"
              className="form-control"
              placeholder="Chọn tháng"
              aria-label="Default select example"
              onChange={handleChangeMonth}
            >
              <option selected disabled>
                Select month
              </option>
              {dataMonth.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </CRow>

        <CCardBody>
          <CChartBar
            datasets={[
              {
                label: "Lượng Khách Hàng",
                backgroundColor: "#f87979",
                data: totalByMonth,
              },
            ]}
            labels={dataDay}
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
              <th>
                Ngày ... Tháng {month} - Năm {year}
              </th>
              <th>Số lượng khách theo ngày </th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((item, index) => {
              return (
                <tr key={item}>
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
  );
}

export default TotalCustomerByMonth;
