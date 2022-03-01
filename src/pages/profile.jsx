import { Button, Divider, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";

const Profile = (props) => {
  return (
    <div className="profile">
      <Typography variant="h4">My Account</Typography>
      <Typography>Team:</Typography>
      {/* {...props} */}
      <Typography>E-Mail: </Typography>
      {/* {props} */}
      <Divider />
      <div className="profile_button">
        <Button
          variant="outlined"
          color="info"
          startIcon={<EditIcon />}
          href="/profile/edit"
        >
          Edit Team
        </Button>
        <Button variant="contained" color="error" href="/login">
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Profile;
