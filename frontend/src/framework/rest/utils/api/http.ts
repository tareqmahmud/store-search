import axios from 'axios';
import { getToken } from '@framework/rest/utils/get-token';

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Interceptor for sending the auth cookies
http.interceptors.request.use(
  (config) => {
    const token = getToken();

    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token ? token : ''}`,
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
