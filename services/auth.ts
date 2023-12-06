import { server } from "../constants/server";
import axiosInstance from "../constants/axios";

export const createUser = async (form) => {
  let data = null;
  let error = null;
  try {
    const response = await axiosInstance.post(`${server}user/signup`, form);
    data = response.data;

    console.log("====================================");
    console.log(response);
    console.log("====================================");
  } catch (err) {
    error = err;
    console.log("====================================");
    console.log(err);
    console.log("====================================");
  }
  return { data, error };
};
