import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TableNav from './TableNav'; // Import the TableNav component
import { flattenData } from './Util'; // Import the flattenData utility function
// import './app.css'; // Import your custom CSS file

function TableComponent({ jsonData }) {

//  console.log('data of Cashflow:-', jsonData[1].data.Debit[1],
//  jsonData[1].data.Credit[1],
//  jsonData[1].data.Month[1]);

  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableSelect = (tableData) => {
    setSelectedTable(tableData);
    console.log('tableData',tableData)
  };

  return (
    <div>
      {/* Use the TableNav component for navigation */}
      <TableNav
        jsonData={jsonData}
        selectedTable={selectedTable}
        handleTableSelect={handleTableSelect}
      />

      <div>
        {selectedTable && (
          <div >
            <DataGrid
              rows={flattenData(selectedTable.data)}
              columns={Object.keys(selectedTable.data).map((col) => ({
                field: col,
                headerName: col,
                flex: 1,
              }))}
              // Enable auto-resizing columns
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TableComponent;