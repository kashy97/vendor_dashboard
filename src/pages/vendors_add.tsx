import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const VAdd = () => {
  return (
    <div className="vendors_add">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "80ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h4">Add Vendors</Typography>
        <Stack spacing={10} direction="row">
        <Stack spacing={2}>
          <TextField id="name" label="Name" variant="outlined" />
          <TextField
            id="supplier_code"
            label="Supplier Code"
            type="number"
            variant="outlined"
          />
          <TextField id="email" label="Email" type="email" variant="outlined" />
          <TextField
            id="address"
            label="Address 1"
            type="text"
            variant="outlined"
          />
          <TextField
            id="address"
            label="Address 2"
            type="text"
            variant="outlined"
          />
          </Stack>
          <Stack spacing={2}>
          <TextField
            id="zipcode"
            label="Zip Code"
            type="number"
            variant="outlined"
          />
          <TextField id="place" label="Place" type="text" variant="outlined" />
          <TextField id="city" label="City" type="text" variant="outlined" />
          <TextField
            id="country"
            label="Country"
            type="text"
            variant="outlined"
          />
        </Stack>
        </Stack>
        <br />
        <Button variant="contained">SAVE</Button>
      </Box>
    </div>
  );
};

export default VAdd;
