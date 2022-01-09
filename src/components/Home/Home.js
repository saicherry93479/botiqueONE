import React from "react";
import DesignPhotos from "./DesignPhotos";
import Footer from "./Footer";
import Hero from "./Hero";
import HeroInfo from "./HeroInfo";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <HeroInfo />
      <DesignPhotos />
      <Footer />
    </div>
  );
};

export default Home;
