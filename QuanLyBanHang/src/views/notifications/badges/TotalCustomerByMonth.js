import React, { useState, useEffect } from "react";
import {
  CChartBar,
} from "@coreui/react-chartjs";
import {
  CCard,
  CCardBody,
  CCardGroup,
  CFormGroup,
  CCardHeader,
} from "@coreui/react";
import { header, dataMonth, dataDay } from "src/components/Customer/data";
import axios from "axios";

function TotalCustomerByMonth() {
  const headers = header;
  const [year, setYear] = useState();
  const [listYear, setListYear] = useState([]);
  const [month, setMonth] = useState();
  const [totalByYear, setTotalByYear] = useState([]);
  const [totalByMonth, setTotalByMonth] = useState([]);
  const getListYear = async () => {
    const API_listYear =
      "http://localhost:8080/customers/getYearCreateCustomer";
    axios
      .get(API_listYear, { headers })
      .then((response) => {
        setListYear(response.data);
        console.log("list Year: ", listYear);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getDataByYear = async () => {
    var API_Statistics = `http://localhost:8080/customers/count?year=${year}`;
    console.log("API: ", API_Statistics);
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
  const getDataByMonth = async () => {
    var API_Statistics = `http://localhost:8080/customers/count2?year=${year}&month=${month}`;
    console.log("API: ", API_Statistics);
    axios.get(API_Statistics, { headers }).then((response) => {
      setTotalByMonth(response.data);
      console.log("response:  " + response.data);
    });
  };

  function handleChangeMonth() {
    let item = document.getElementById("month");
    setMonth(item.value);
  }
  useEffect(() => {
    getListYear();
    getDataByMonth();
  }, [year, month]);
  console.log("list Year Binhf: ", listYear);
  return (
    <CCardGroup columns className="cols-2">
      <CCard>
        <CCardHeader>Chọn Năm</CCardHeader>
        <CFormGroup></CFormGroup>
        <select
          id="year"
          className="form-control"
          placeholder="Chọn năm"
          aria-label="Default select example"
          onChange={handleChangeYear}
        >
          {listYear.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>

        <select
          id="selectm"
          className="form-control"
          placeholder="Chọn tháng"
          aria-label="Default select example"
          onChange={handleChangeMonth}
        >
          {dataMonth.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
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
    </CCardGroup>
  );
}

export default TotalCustomerByMonth
