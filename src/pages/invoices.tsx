import { Button, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const Orders = (props:any) => {
  const [tableData, setTableData] = React.useState([]);
  const columns = [
    { field: 'id', headerName: "#" },
    { field: 'vendor', headerName: "Vendor" },
    { field: 'amount', headerName: "Amount" },
    { field: 'Is Paid', headerName: 'Is Paid' },
    { field: 'view', headerName: 'View' },
  ];

  React.useEffect(() => {
    console.log("fetched")
    fetch("")
        .then((data) => data.json())
        .then((data) => setTableData(data));
}, [props.value]);


  return (
    <div>
      <div className="navigation_purchase">
      <Typography variant="h4">Purchase Orders /</Typography>
      <Button variant="contained" color="primary" href="/invoices/add">Add Purchase Order</Button>
      </div>
      <div style={{ height: 400, flexGrow: 1 }}>
        <DataGrid rows={tableData} columns={columns} pageSize={5} />
      </div>
    </div>
  )
}

export default Orders