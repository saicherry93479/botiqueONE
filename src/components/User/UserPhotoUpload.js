import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import PhotoClick from "./PhotoClick";
import { storage, app, database } from "../../Firebase/Firebase";
import "./UserPhotoUpload.css";
import { child, get, ref as refData, set } from "@firebase/database";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "@firebase/storage";
const UserPhotoUpload = () => {
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [designName, setNameDesign] = useState("");
  const [descr, setDescr] = useState("");
  const [nameError, setNameError] = useState(false);
  const [descrError, setDescrError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [uploadFail, setUploadFail] = useState(false);
  // const [dataBaseItems, setDataBaseItems] = useState([]);
  // const [successfulUploads, setSuccessfulUploads] = useState([]);
  // const [completedUploads, setCompleteUploads] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const setMain = (image) => setMainImage((p) => image);

  useEffect(() => {
    console.log("image error changed in effect  ", imageError);
  }, [imageError]);

  const finalClickHandler = (e) => {
    e.preventDefault();

    // console.log("onsubmit main is ", mainImage.name);
    console.log("on submit main is ", mainImage);
    // if (mainImage) {
    //   setImageError(false);
    // } else {
    //   setImageError(true);
    //   console.log("image error  in main Image ", imageError);
    // }
    mainImage ? setImageError((p) => false) : setImageError((p) => true);
    designName.length < 6 ? setNameError(true) : setNameError(false);
    descr.length < 30 ? setDescrError(true) : setDescrError(false);
    if (imageError === false && nameError === false && descrError === false) {
      console.log(
        "image  eroor ",
        imageError,
        " name error ",
        nameError,
        " descr error ",
        descrError
      );
      setLoading(true);

      // images.map((data) => uploadImage(data));
    } else {
      setLoading(false);
      // successfulUploads.map((data) => deleteUpload(data));
    }
  };

  return (
    <div>
      {loading ? (
        uploadFail ? (
          <div className="uploadFailPage">
            <h1 style={{ fontSize: "20px", marginBottom: "20px" }}>
              Unable to Upload the data{" "}
            </h1>
            <Button variant="outlined" color="primary">
              Go back
            </Button>
          </div>
        ) : (
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
        )
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
                  Add Photos
                </h2>
                <PhotoClick
                  width="70%"
                  height="200px"
                  images={images}
                  setImages={setImages}
                  main={true}
                  setMain={setMain}
                />
                {imageError ? (
                  <h2 className="errorPhoto">
                    Please Upload atleast Main Image
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
                  Add Details
                </h2>
                <TextField
                  variant="standard"
                  label="name of Design"
                  value={designName}
                  onChange={(e) => setNameDesign(e.target.value)}
                  helperText="Enter above 5 characters"
                  error={nameError}
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
                  error={descrError}

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

export default UserPhotoUpload;
