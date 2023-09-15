import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AvgBalanceBarChart from '../Graphs/AvgBalanceBarChart';
import CashflowBarChart from '../Graphs/CashflowBarChart';
import NetCashFlowLineChart from '../Graphs/NetCashFlowLineChart';

const Analyzer = ({ jsonData }) => {
  if (!jsonData) {
    return (
      <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
        <Typography variant="h6">NO VISUALIZATION TO SHOW</Typography>
      </Paper>
    );
  }

  const { data } = jsonData[1];
  console.log(data);

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
