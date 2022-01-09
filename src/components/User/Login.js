import { Button, Card, CardContent, TextField } from "@mui/material";
import React from "react";
import LoginPic from "../../Images/LoginPic";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="loginLeft">
        <Card>
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "40px",
            }}
          >
            {/* backgroundImage: "linear-gradient(to right,hsl(136, 65%, 51%)
            0%,hsl(192, 70%, 51%) 100%) ", -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;}} */}
            <h2
              style={{
                textAlign: "center",
                marginBottom: "25px",
                backgroundImage:
                  "linear-gradient(90deg, rgba(9,47,121,1) 13%, rgba(2,0,36,1) 38%, rgba(0,212,255,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Montserrat Alternates",
              }}
            >
              Login
            </h2>
            <TextField
              label="Username"
              style={{ marginBottom: "20px" }}
            ></TextField>
            <TextField
              label="password"
              style={{ marginBottom: "20px" }}
            ></TextField>
            <Button
              color="primary"
              variant="contained"
              style={{ marginBottom: "30px" }}
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="loginRight">
        <h1>Modernss</h1>
        <div style={{ marginTop: "70px", marginLeft: "40px" }}>
          <LoginPic />
        </div>
      </div>
    </div>
  );
};

export default Login;
