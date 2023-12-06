"use client";
import { Context } from "@/context";
import React, { useContext, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { createApp } from "@/services/app";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../../firebase-config";
import axios from "axios";

const page = () => {
  const { user } = useContext(Context);

  const [appFile, setAppFile] = useState(null);

  const [app, setApp] = useState({
    title: "",
    description: "",
    developer: user && user?._id,
    imageUrl: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setAppFile(file);
    handleUploadAndGetUrl(file);

    if (file && file.type.startsWith("image/")) {
      // Validate that the selected file is an image
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      console.log("====================================");
      console.log(file, "file");
      console.log("====================================");
    } else {
      // Handle case when the selected file is not an image
      setSelectedImage(null);
      //   alert("Please select a valid image file.");
    }
  };

  // Function to upload APK file
  const uploadAPK = async (appFile) => {
    const apkRef = ref(storage, "apks/" + appFile.name);
    await uploadBytes(apkRef, appFile);
  };

  // Function to get a temporary download URL
  const getDownloadLink = async (fileName) => {
    const apkRef = ref(storage, "apks/" + fileName);
    const downloadURL = await getDownloadURL(apkRef);
    return downloadURL;
  };

  const handleUploadAndGetUrl = async (file) => {
    if (!file) return;
    // Example usage
    await uploadAPK(file);

    const fileName = file.name;
    const downloadURL = await getDownloadLink(fileName);
    console.log("Temporary download link:", downloadURL);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApp({ ...app, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await createApp(app);

    if (data) {
      console.log("====================================");
      console.log(data);
      console.log("====================================");
    }
    if (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  return (
    <div className="w-full">
      <h1 className="font-bold text-xl text-left">Manage Apps</h1>

      <div className="w-1/2">
        <div>
          <input
            type="file"
            //   accept="image/*"
            onChange={handleImageChange}
          />
          {/* {selectedImage && (
            <div>
              <h2>Selected Image</h2>
              <div>
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ maxWidth: "100%", maxHeight: "300px" }}
                />
              </div>
            </div>
          )} */}
        </div>
        <h1 className="font-semibold text-base text-left">
          Fill in the app details
        </h1>
        <form className="flex flex-col gap-4">
          <div className="w-full flex flex-col gap-4">
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
                name="title"
                type="text"
                variant={"faded"}
                label="Title"
                placeholder="Enter Title"
                value={app.title}
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
                name="description"
                type="text"
                variant={"faded"}
                label="Description"
                placeholder="Describe your app"
                value={app.description}
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
                name="imageUrl"
                type="text"
                variant={"faded"}
                label="Image URL"
                placeholder="Enter the link to the app image"
                value={app.imageUrl}
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
                name="appUrl"
                type="text"
                variant={"faded"}
                label="App URL"
                placeholder="Enter your app apk or zip url"
                value={app.imageUrl}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex gap-2 justify-start">
            <Button
              className="w-fit !bg-pink-900"
              onClick={handleSubmit}
              color="primary"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
