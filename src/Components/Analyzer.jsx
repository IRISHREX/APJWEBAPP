import React from 'react';
import AvgBalanceBarChart from '../SubPackages/AvgBalanceBarChart';
import CashflowBarChart from '../SubPackages/CashflowBarChart';
import NetCashFlowLineChart from '../SubPackages/NetCashFlowLineChart';
import PieChart from '../SubPackages/PieChart';

const Analyzer = ({ jsonData }) => {
  if (!jsonData) {
    return <div>Loading...</div>;
  }

  const { data } = jsonData[1];
 // Assuming jsonData is your object
const {value} = jsonData[5];


  return (
    <div className="analyzer">
      <div className="chart-grid">
        <div className="chart">
          <CashflowBarChart data={data} />
        </div>
        <div className="chart">
          <AvgBalanceBarChart data={data} />
        </div>
        <div className="chart">
          <NetCashFlowLineChart data={data} />
        </div>
        <PieChart data={value}/>
      </div>
    </div>
  );
};

export default Analyzer;
