import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const Team = () => {
  return (
    <div className='edit_team'>
      <Typography variant="h4">Edit team</Typography>
      <Stack spacing={2}>
        <TextField id="name" label="Name" type="text" variant="outlined" />
        <TextField
          id="phone_number"
          label="Phone Number"
          type="number"
          variant="outlined"
        />
        <TextField
          id="gst_number"
          label="GST NUMBER"
          type="text"
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
        <TextField
          id="zip_code"
          label="Zip Code"
          type="number"
          variant="outlined"
        />
        <TextField id="street" label="Street" type="text" variant="outlined" />
        <TextField id="city" label="City" type="text" variant="outlined" />
        <TextField
          id="country"
          label="Country"
          type="text"
          variant="outlined"
        />

        <Divider />
        <Button variant="contained" color="success">
          SAVE
        </Button>
      </Stack>
    </div>
  );
};

export default Team;
