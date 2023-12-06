import { server } from "../constants/server";
import axiosInstance from "../constants/axios";

export const getAllApps = async () => {
  let data = null;
  let error = null;
  try {
    const response = await axiosInstance.get(`${server}app`);
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

export const getAppById = async (id) => {
  let data = null;
  let error = null;
  try {
    const response = await axiosInstance.get(`${server}app/${id}`);
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

export const createApp = async (form) => {
  let data = null;
  let error = null;
  try {
    const response = await axiosInstance.post(`${server}app`, form);
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

export const uploadApp = async (form) => {
  let data = null;
  let error = null;
  try {
    const response = await axiosInstance.post(`${server}app/upload`, form);
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
