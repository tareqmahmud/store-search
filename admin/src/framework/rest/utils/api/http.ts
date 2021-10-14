import axios from "axios";
import { getToken } from "../get-token";

// Create axios global instance
const http = axios.create({
  baseURL: process.env.REACT_APP_REST_API_URI,
  timeout: 1000,
  // Accept json
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// // Change request before sent or received
axios.interceptors.request.use(
  (config) => {
    // Send auth token before sending something
    const token = getToken();

    // Attach token with header
    config.headers = {
      ...config.headers,
      // TODO: Fix this
      Authorization: `Bearer ${token ? token : ""}`,
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
