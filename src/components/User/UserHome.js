import { Button } from "@mui/material";
import React from "react";
import "./UserHome.css";
const UserHome = () => {
  return (
    <div className="userHome">
      <div className="userHeader">
        <h1>Welcome</h1>
      </div>
      <div className="userMain">
        <div className="userMainLeft">
          <Button variant="outlined">Upload Photo</Button>
        </div>
        <div className="userMainRight">
          <Button variant="outlined">Upload Video</Button>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
