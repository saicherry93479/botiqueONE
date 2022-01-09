var currentlyUploaded = 0;
var n = 0;
var dataBaseItems = [];

const uploadImage = (imagetoUpload) => {
  console.log("image uploading is ", imagetoUpload.name);
  const storageRef = ref(storage, "Images/" + imagetoUpload.name);

  const uploadTask = uploadBytesResumable(storageRef, imagetoUpload);

  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      // const progress =
      //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      // console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
      currentlyUploaded++;
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...

      n++;

      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);

        dataBaseItems.push({
          imageName: imagetoUpload.name,
          downloadImageUrl: downloadURL,
        });

        console.log("image length is ", images.length);

        if (downloadURL) {
          if (n === images.length) {
            console.log(
              "database items are  and length is  ",
              dataBaseItems,
              " and  ",
              dataBaseItems.length
            );
            finalUploadToDatabase();
          }
          if (currentlyUploaded > 0 && n !== images.length) {
            console.log("in except value n is ", n);
            console.log("in except value current is ", currentlyUploaded);
            console.log("in except value  images length is ", images.length);
            setUploadFail(true);
          }
        }
      });
    }
  );
};

const finalUploadToDatabase = () => {
  uploadToDataBase();
};
const deleteUpload = (imageName) => {
  const desertRef = ref(storage, "Images/" + imageName);

  // Delete the file
  deleteObject(desertRef)
    .then(() => {
      // File deleted
      console.log("deleted image ", imageName);
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
      console.log("unable to delete ", imageName);
    });
};
const uploadObject = () => {
  console.log(
    "database items are in uploadObject  and length is  ",
    dataBaseItems,
    " and  ",
    dataBaseItems.length
  );
  var b = {
    main_image_url: "no",
    image_url_one: "no",
    image_url_two: "no",
  };
  dataBaseItems.map((item) => {
    if (item.imageName === mainImage.name) {
      b.main_image_url = item.downloadImageUrl;
    } else if (b.image_url_one === "no") {
      b.image_url_one = item.downloadImageUrl;
    } else {
      b.image_url_two = item.downloadImageUrl;
    }
  });

  return b;
};
const uploadDataBase = (userId) => {
  console.log("gone to upload lastly");
  const image_urls = uploadObject();
  console.log("images uploading urls are ", image_urls);
  set(refData(database, `Images/${userId}`), {
    user_id: userId,
    design_name: designName,
    description: descr,
    ...image_urls,
  })
    .then(() => console.log("upload to real time sucessfully "))
    .catch((e) => {
      console.log("error in realtime upload is ", e);
      setUploadFail(true);
      setImages(null);
      dataBaseItems.map((item) => {
        const last_1 = item.imageName.indexOf(".");
        const user_id_2 = item.imageName.substring(0, last_1);
        deleteUpload(user_id_2);
      });
    });
};
function getRndInteger(min, max) {
  console.log("assigning random name");
  return Math.floor(Math.random() * (max - min)) + min;
}
const uploadToDataBase = () => {
  const dbref = refData(database);
  console.log("uploading to database ");
  const last_1 = mainImage.name.indexOf(".");
  const user_id_2 = mainImage.name.substring(0, last_1);
  get(child(dbref, `Images/${user_id_2}`))
    .then((snapshot) => {
      console.log("checking for existence ");
      if (snapshot.exists()) {
        console.log("exists");
        const random = getRndInteger(0, 1000000);
        const last = mainImage.name.indexOf(".");
        const user_id_1 = mainImage.name.substring(0, last);

        const user_id = user_id_1 + "-" + random;
        uploadDataBase(user_id);
      } else {
        console.log(" doesnt exists");
        const last = mainImage.name.indexOf(".");
        const user_id = mainImage.name.substring(0, last);
        uploadDataBase(user_id);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
const finalClickHandler = () => {
  // console.log("onsubmit main is ", mainImage.name);
  console.log("on submit main is ", mainImage);
  if (mainImage) {
    setImageError(false);
  } else {
    setImageError(true);
    console.log("image error  in main Image ", imageError);
  }
  // mainImage ? setImageError(false) : setImageError(true);
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

    images.map((data) => uploadImage(data));
  } else {
    setLoading(false);
    // successfulUploads.map((data) => deleteUpload(data));
  }
};
