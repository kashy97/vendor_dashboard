import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const vendors = [
  {
    value: "a",
    label: "a",
  },
  {
    value: "b",
    label: "b",
  },
];

const vat = [
  {
    value: "0",
    label: "0%",
  },
  {
    value: "14",
    label: "14%",
  },
  {
    value: "25",
    label: "25%",
  },
];
const IAdd = () => {
  const handleChange = () => {
    console.log("working!!");
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Stack spacing={2}>
          <Typography variant="h4">Add Purchase Order</Typography>
          <Typography variant="h6">Vendor</Typography>
          <TextField
            id="vendor"
            label="Vendor"
            select
            onChange={handleChange}
            helperText="Please select vendor"
            variant="outlined"
          >
            {vendors.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Typography variant="h6">Items</Typography>
          <Stack spacing={2} direction="row">
            <TextField
              id="title"
              label="Title"
              type="text"
              variant="outlined"
            />
            <TextField
              id="price"
              label="Price"
              type="number"
              variant="outlined"
            />
            <TextField
              id="quantity"
              label="Quantity"
              type="number"
              variant="outlined"
              defaultValue="1"
            />
            <TextField
              id="vat"
              select
              label="Vat Rate"
              onChange={handleChange}
              variant="outlined"
            >
              {vat.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="gross"
              label="Gross Amount"
              type="number"
              variant="outlined"
              disabled
            />
          </Stack>
          <Button sx={{ maxWidth: 8 }} size="medium" variant="outlined">
            +
          </Button>
          <TextField
            id="sender"
            label="Sender Reference"
            type="text"
            variant="outlined"
          />
          <Typography variant="h6">Total</Typography>
          <Stack spacing={1}>
            <Typography>Net Amount: {}</Typography>
            <Typography>Vat Amount: {}</Typography>
            <Typography>Gross Amount: {}</Typography>
          </Stack>
        </Stack>
      </div>
    </Box>
  );
};

export default IAdd;
