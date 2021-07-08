import React from 'react';
import {
    CChartBar
  } from '@coreui/react-chartjs'
  import {
    CCard,
    CCardBody,
    CCardGroup,
    CCardHeader
  } from '@coreui/react'
  import { DocsLink } from 'src/reusable'

const ChartDashBoard = (props) => {
    const{list}=props;
    const items = list.map(item =>item.price);
    console.log(items);
    const fields = list.map(item =>item.createdDate);
    return (
        <CCardBody>
        <CChartBar
            datasets={[
              {
                label: 'GitHub Commits',
                backgroundColor: '#f87979',
                data: items
              }
            ]}
            labels={fields}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
           </CCardBody>
     
    );
}

export default ChartDashBoard;
