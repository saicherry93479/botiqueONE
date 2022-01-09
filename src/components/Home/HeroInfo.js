import React from "react";
import "./HeroInfo.css";
const HeroInfo = () => {
  return (
    <div className="heroInfo">
      <div className="left">
        <h2 className="headingHeroInfo">
          <i class="far fa-bookmark"></i>COLLECTION
        </h2>
        <p className="paraHeroInfo">
          Our latest collection <br />
          inspired by you
        </p>
      </div>
      <div className="middle">
        <h2 className="headingHeroInfo">
          <i class="fas fa-anchor"></i>HANDOVER
        </h2>
        <p className="paraHeroInfo">
          Handover of material will <br />
          be done in time
        </p>
      </div>
      <div className="right">
        <h2 className="headingHeroInfo">
          <i class="fas fa-shield-alt"></i>SECURE
        </h2>
        <p className="paraHeroInfo">
          Your items are secure <br />
          we are trust worthy
        </p>
      </div>
    </div>
  );
};

export default HeroInfo;
