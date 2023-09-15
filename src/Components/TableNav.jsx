import React from 'react';
import {
  Typography,
  List,
  ListItem,
  Toolbar,
  Paper,
} from '@mui/material';

function TableNav({ jsonData, selectedTable, handleTableSelect }) {
  return (
    <Paper className="table-nav">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="table-name">
          {selectedTable && (
            <Typography variant="h6" className="text-lg font-semibold">
              SHEET NAME: {selectedTable.sheetName}
            </Typography>
          )}
        </div>
      </Toolbar>
      <Toolbar
        position="fixed"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div className="table-list">

          <List className="horizontal-list">
            {jsonData.map((tableData, index) => (
              <ListItem
                key={index}
                onClick={() => handleTableSelect(tableData)}
                className={`cursor-pointer hover-text-blue selected-text-blue ${
                  selectedTable === tableData ? 'selected' : ''
                }`}
              >
                {tableData.sheetName}
              </ListItem>
            ))}
          </List>
        </div>
      </Toolbar>
    </Paper>
  );
}

export default TableNav;
