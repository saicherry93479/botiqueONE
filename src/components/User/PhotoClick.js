import React, { useEffect, useState } from "react";
import "./PhotoClick.css";
const PhotoClick = ({
  width,
  height,
  images,
  setImages,
  main,
  setMain,
  photo = true,
}) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  // useEffect(() => {
  //   console.log("images length is in effect ", images.length);
  //   images.map((image, key) => console.log(key, " is in effect  ", image.name));
  // }, [images]);
  const imageSet = async (imagef) => {
    await setImages((p) => [...images, imagef]);
  };
  const changeHandler = (e) => {
    e.preventDefault();
    const imagef = e.target.files[0];
    if (imagef !== "") {
      console.log("imagef is ", typeof imagef);
      setImage((p) => imagef);
      imageSet(imagef);

      const imageUrl = URL.createObjectURL(imagef);
      setImageUrl((p) => imageUrl);

      // console.log("in side add end ", images.length);
      // console.log("images in add of end ", images);
      if (main) {
        setMain(imagef);
        console.log("main was attached main is ", imagef.name);
      }
    }
  };

  const deleteHandler = () => {
    // console.log("in side delete start ", images.length);
    // console.log("images in start of delete ", images);
    const allImages = [...images];
    // console.log("all images are in delete length ", allImages.length, "  and ");
    // allImages.map((data, key) => console.log("key ", key, "  data ", data));
    const index = allImages.indexOf(image);
    if (index > -1) {
      allImages.splice(index, 1);
    }
    allImages.map((data, key) =>
      console.log(" after splica key ", key, "  data ", data.name)
    );
    setImages(allImages);

    // console.log("in side delete end ", images.length);
    // console.log("images in end of delete ", images);

    setImage((p) => null);

    setImageUrl((p) => null);

    if (main) {
      setMain(null);
      // console.log("main was deleted main is ", image);
    }
  };
  return (
    <div style={{ width: width, height: height, marginTop: "20px" }}>
      <div className="photoClickOutOut">
        {/* <div className="photoClickOut"> */}
        <input
          type="file"
          // accept="image/*"
          accept={photo ? "image/*" : "video/*"}
          className={imageUrl ? "photoClickInput2" : "photoClickInput"}
          onChange={changeHandler}
        ></input>
        {imageUrl ? (
          <div>
            <div className="imageTop">
              <i className="fas fa-trash" onClick={deleteHandler}></i>
            </div>
            {
              photo ? (
                <img src={imageUrl} className="photoSeen"></img>
              ) : (
                <video controls className="photoSeen">
                  <source src={imageUrl} type="video/mp4"></source>
                </video>
              )
              //               <video  controls>
              //   <source src={imageUrl} type="video/mp4">

              //   Your browser does not support the video tag.
              // </video>
            }
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PhotoClick;
