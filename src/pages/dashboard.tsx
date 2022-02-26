import { DataGrid } from '@mui/x-data-grid';
import { Card, CardActions, Box, CardContent, Divider, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';

const DashBoard = (props: any) => {
    //insert data history here
    const [tableData, setTableData] = React.useState([]);
    const [vendorData, setVendorData] = React.useState([]);
    const [releaseData, setReleaseData] = React.useState([]);
    const r_columns=[
        { field: 'id', headerName: "#", width: 100 },
        { field: 'vendor', headerName: "Vendor", width: 150 },
        { field: 'amount', headerName: "Amount", width: 100 },
        { field: 'edition', headerName: 'Edition', width: 150},
        { field: 'view', headerName: 'View', width:150},
    ]
    const columns = [
        { field: 'id', headerName: "#", width: 100 },
        { field: 'vendor', headerName: "Vendor", width: 200 },
        { field: 'amount', headerName: "Amount", width: 200 },
        { field: 'view', headerName: 'View', width:150},
    ];

    const v_columns = [
        { field: "name", headerName: "Vendor Name", width: 300 }
    ]

    useEffect(() => {
        console.log("fetched")
        fetch("")
            .then((data) => data.json())
            .then((data) => setTableData(data));
    }, [props.value]);

    useEffect(() => {
        console.log("fetched")
        fetch("")
            .then((data) => data.json())
            .then((data) => setVendorData(data));
    }, [props.value]);

    useEffect(() => {
        console.log("fetched")
        fetch("")
            .then((data) => data.json())
            .then((data) => setReleaseData(data));
    }, [props.value]);



    return (
        <Paper sx={{width:1}}>
            <Typography sx={{ padding: 5 }} variant='h4'>Dashboard</Typography>
            <Box sx={{ padding: 10, display: 'flex', rowGap:10, columnGap: 10, flexFlow: 'row wrap' }} >
                <div>
                    <Card elevation={3} sx={{ minWidth: 700, borderRadius: 5, minHeight: '50vh' }}>
                        <CardContent>
                            <Typography variant="h6" style={{ paddingLeft: 5 }}> Unpaid Purchase Order</Typography>
                        </CardContent>
                        <CardActions>
                            <div style={{ height: 300, width: 1, flexGrow: 1 }}>
                                <DataGrid rows={tableData} columns={columns} pageSize={5} />
                            </div>
                        </CardActions>
                    </Card>
                </div>
                <div>
                    <Card elevation={3} sx={{ minWidth: 500, borderRadius: 5, minHeight: '50vh' }}>
                        <CardContent>
                            <Typography variant="h6" style={{ paddingLeft: 5 }}> Newest Vendors</Typography>
                        </CardContent>
                        <CardActions>
                            <div style={{ height: 300, flexGrow: 1 }}>
                                <DataGrid rows={vendorData} columns={v_columns} pageSize={5} />
                            </div>
                        </CardActions>
                    </Card>
                </div>
                <div>
                    <Card elevation={3} sx={{ minWidth: 700, borderRadius: 5, minHeight: '50vh' }}>
                        <CardContent>
                            <Typography variant="h6" style={{ paddingLeft: 5 }}> Newest Vendors</Typography>
                        </CardContent>
                        <CardActions>
                            <div style={{ height: 300, flexGrow: 1 }}>
                                <DataGrid rows={releaseData} columns={r_columns} pageSize={5} />
                            </div>
                        </CardActions>
                    </Card>
                </div>
            </Box>
            <Divider />
        </Paper>
    );
}

export default DashBoard