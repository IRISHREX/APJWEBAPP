import React from 'react';
import AvgBalanceBarChart from '../Graphs/AvgBalanceBarChart';
import CashflowBarChart from '../Graphs/CashflowBarChart';
import NetCashFlowLineChart from '../Graphs/NetCashFlowLineChart';

const Analyzer = ({ jsonData }) => {
  if (!jsonData) {
    return <div>Loading...</div>;
  }

  const { data } = jsonData[1];
 // Assuming jsonData is your object
const value = jsonData[5].value;

// Access the arrays by their property names
const tags = value.Tags;
const startDate = value['Start Date'];
const endDate = value['End Date'];
const totalCredit = value['Total Credit'];
const totalDebit = value['Total Debit'];

// Use forEach to iterate over the arrays
tags.forEach((tag, index) => {
  const startDateValue = startDate[index];
  const endDateValue = endDate[index];
  const totalCreditValue = totalCredit[index];
  const totalDebitValue = totalDebit[index];

  // Do something with the values, for example, print them
  console.log(`Tag: ${tag}`);
  console.log(`Start Date: ${startDateValue}`);
  console.log(`End Date: ${endDateValue}`);
  console.log(`Total Credit: ${totalCreditValue}`);
  console.log(`Total Debit: ${totalDebitValue}`);
});



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
        {/* Add more charts here */}
      </div>
    </div>
  );
};

export default Analyzer;
