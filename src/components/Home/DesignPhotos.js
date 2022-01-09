import React from "react";
import "./DesignPhotos.css";

import designPhotosOne from "../../Images/DesignOne.png";
import DesignPhotoGallery from "./DesignPhotoGallery";
import DesignPhotosHeader from "./DesignPhotosHeader";

const DesignPhotos = () => {
  return (
    <div className="designPhotos">
      <div className="left">
        <DesignPhotosHeader />
        <img src={designPhotosOne}></img>
      </div>
      <div className="right">
        <DesignPhotoGallery />
      </div>
    </div>
  );
};

export default DesignPhotos;
