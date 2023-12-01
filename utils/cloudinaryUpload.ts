import { notify } from "@/components/common/Notify";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export const handleCloudinaryUpload = (file: File, fieldName: string,  setIsLoading: Dispatch<SetStateAction<boolean>>, setForm: Dispatch<SetStateAction<any>>) => {
    if (file) setIsLoading(true);
    const cloudName = "dw9oa2vpq";
    const presetKey = "akqax0vr";

    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", presetKey);
    axios
      .post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, form)
      .then((res) => {
        setForm((prevState: any) => ({
          ...prevState,
          [fieldName]: res.data.url, // Set the data URL of the selected file
        }));
        notify("Image passed our standards", "info");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
