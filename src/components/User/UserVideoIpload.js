import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import PhotoClick from "./PhotoClick";
import "./UserPhotoUpload.css";
const UserVideoUpload = () => {
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [designName, setNameDesign] = useState("");
  const [descr, setDescr] = useState("");
  const [nameError, setNameError] = useState(true);
  const [descrError, setDescrError] = useState(true);
  const [imageError, setImageError] = useState(true);
  const [uploadFail, setUploadFail] = useState(false);
  const [formErrors, setFormErrors] = useState({
    iError: false,
    nError: false,
    dError: false,
  });

  const setMain = (image) => setMainImage((p) => image);

  useEffect(() => {
    errorHandler();
  }, [nameError, descrError, imageError]);
  const errorHandler = () => {
    if (!imageError && !nameError && !descrError) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  const finalClickHandler = async () => {
    mainImage ? setImageError(false) : setImageError(true);
    designName.length < 6 ? setNameError(true) : setNameError(false);
    descr.length < 30 ? setDescrError(true) : setDescrError(false);
  };

  return (
    <div>
      {/* {loading ? (
        uploadFail ? (
          <div className="uploadFailPage">
            <h1>Unable to Upload the data </h1>
            <Button>Go back</Button>
          </div>
        ) : ( */}
      {loading ? (
        <div className="loadingImage">
          <span>U</span>
          <span>p</span>
          <span>l</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
      ) : (
        <div className="UserPhotoUpload">
          <div className="userPhotoHeader">
            <h1>Modernss</h1>
          </div>
          <div className="userPhotoMain">
            <div className="userPhotoMainContent">
              <div className="userPhotoMainContentPhotos">
                <h2
                  style={{ fontSize: "20px", marginTop: "20px" }}
                  className="headingPhoto"
                >
                  Add Videos
                </h2>
                <PhotoClick
                  width="70%"
                  height="200px"
                  images={images}
                  setImages={setImages}
                  main={true}
                  setMain={setMain}
                  photo={false}
                />
                {formErrors.iError ? (
                  <h2 className="errorPhoto">
                    Please Upload atleast Main Video
                  </h2>
                ) : null}
                {/* {photos.one ? ( */}
                <PhotoClick
                  width="70%"
                  height="200px"
                  images={images}
                  setImages={setImages}
                  main={false}
                  setMain={setMain}
                  photo={false}
                />
                {/* ) : null} */}
                {/* {photos.two ? ( */}
                <PhotoClick
                  width="70%"
                  height="200px"
                  images={images}
                  setImages={setImages}
                  main={false}
                  setMain={setMain}
                  photo={false}
                />
                {/* ) : null} */}
              </div>
              <div className="userPhotoMainContentDesc">
                <h2
                  style={{
                    marginTop: "20px",
                    fontSize: "20px",
                    marginBottom: "20px",
                  }}
                >
                  Add Details of Video
                </h2>
                <TextField
                  variant="standard"
                  label="name of Design"
                  value={designName}
                  onChange={(e) => setNameDesign(e.target.value)}
                  helperText="Enter above 5 characters"
                  error={formErrors.nError}
                >
                  Name of Design
                </TextField>
                <span style={{ marginBottom: "30px" }}></span>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Description"
                  multiline
                  maxRows={4}
                  value={descr}
                  onChange={(e) => setDescr(e.target.value)}
                  // height="200px"
                  helperText="Enter above 30 characters"
                  error={formErrors.dError}

                  // onChange={handleChange}
                />
                <span style={{ marginBottom: "30px" }}></span>
                <Button onClick={finalClickHandler}>Submit</Button>
                {/* <input type="text"></input> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserVideoUpload;
