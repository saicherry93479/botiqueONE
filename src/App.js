import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/User/Login";
import UserHome from "./components/User/UserHome";
import UserPhotoUpload from "./components/User/UserPhotoUpload";
import UserVideoIpload from "./components/User/UserVideoIpload";

const App = () => {
  return (
    <div className="App">
      {/* <Home /> */}
      <Login />
      {/* <PhotoUploader /> */}
      {/* <UserHome /> */}
      {/* <UserPhotoUpload /> */}
      {/* <UserVideoIpload /> */}
    </div>
  );
};

export default App;
