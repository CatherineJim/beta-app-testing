// Create a new axios instance
import axios from "axios";
import { getCookie } from "../utils/cookies";

const axiosInstance = axios.create();

// Add the authorization header to the instance
const token = getCookie("token").replace(/"/g, "");
if (token) {
  console.log("====================================");
  console.log(token);
  console.log("====================================");
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default axiosInstance;
