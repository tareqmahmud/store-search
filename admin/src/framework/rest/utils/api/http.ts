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

export default http;
