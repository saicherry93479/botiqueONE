import React from "react";
import Header from "./Header";

import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <div className="heroContainerOneHeadings">
        <h1> Modernss </h1>
        <div className="heroContainerOneHeadingsInner">
          <h1> creates modern </h1>
          <h1>& creative</h1>
        </div>
      </div>

      <div className="heroMain">
        <div className="heroContainerOne">
          <div className="heroContainerOneImage"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
