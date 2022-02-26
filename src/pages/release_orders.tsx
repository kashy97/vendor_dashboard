import {
  Box,
  Button,
  Divider,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const edition = [
  {
    value: "null",
    label: "null",
  },
];
const vendor_cat = [
  {
    value: "null",
    label: "null",
  },
];
const vendor_name = [
  {
    value: "null",
    label: "null",
  },
];
const billing_address = [
  {
    value: "chennai",
    label: "Chennai",
  },
  {
    value: "bangalore",
    label: "Bangalore",
  },
];
const ROrders = () => {
  const [ro_value, setRovalue] = React.useState<Date | null>(null);
  const [pub_value, setPubvalue] = React.useState<Date | null>(null);
  const handleChange = () => {
    console.log("working");
  };
  return (
    <div className="release_order">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "80ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography sx={{paddingButtom:5}} variant="h4">Release Order Entry form</Typography>
        <Stack spacing={10} direction="row">
          <Stack spacing={2}>
            <TextField
              id="ro_number"
              label="Ro_Number"
              type="number"
              variant="outlined"
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Ro_Date"
                value={ro_value}
                onChange={(newValue: any) => {
                  setRovalue(newValue);
                }}
                renderInput={(params: any) => <TextField {...params} />}
              />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Published Date"
                value={pub_value}
                onChange={(newValue: any) => {
                  setPubvalue(newValue);
                }}
                renderInput={(params: any) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField
              id="add_type"
              label="Add Type"
              type=""
              variant="outlined"
            />
            <TextField
              id="size"
              label="Size"
              type="number"
              variant="outlined"
            />
            <TextField
              id="edition"
              label="Edition"
              select
              onChange={handleChange}
              variant="outlined"
            >
              {edition.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="vendor_name"
              label="Vendor Name"
              select
              onChange={handleChange}
              variant="outlined"
            >
              {vendor_name.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="vendor_category"
              label="Vendor_Category"
              select
              onChange={handleChange}
              variant="outlined"
            >
              {vendor_cat.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
          <Stack spacing={2}>
            <TextField
              id="color"
              label="Color"
              type="text"
              variant="outlined"
            />
            <TextField
              id="gross_amount"
              label="Gross Amount"
              type="number"
              variant="outlined"
            />
            <TextField id="gst" label="GST" type="text" variant="outlined" />
            <TextField
              id="gst_amount"
              label="GST Amount"
              type="number"
              variant="outlined"
              disabled
            />
            <TextField
              id="net_amount"
              label="Net Amount"
              type="number"
              variant="outlined"
              disabled
            />
            <TextField
              id="billing_address"
              label="Billing Address"
              select
              onChange={handleChange}
              variant="outlined"
            >
              {billing_address.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Stack>
        <br />
        <Divider />
        <br />
        <Button variant="outlined" color="success">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default ROrders;
