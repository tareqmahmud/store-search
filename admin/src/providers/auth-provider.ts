import { AuthProvider, notification } from "@pankod/refine";
import http from "../framework/rest/utils/api/http";
import { API_ENDPOINTS } from "../framework/rest/utils/endpoint";
import { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { getToken } from "../framework/rest/utils/get-token";

const authProvider: AuthProvider = {
  login: async ({ username, password, remember }) => {
    const data = await http
      .post(`/auth/${API_ENDPOINTS.LOGIN}`, { username, password })
      .then((res: AxiosResponse<any>) => res.data);

    if (data?.token) {
      // Set token to cookie
      Cookies.set("token", data?.token);

      notification.success({
        message: "Successfully logged in",
      });
      return Promise.resolve("Successfully logged in");
    }

    return Promise.reject();
  },

  logout: () => {
    Cookies.remove("token");
    notification.success({
      message: "Successfully logged out",
    });
    return Promise.resolve();
  },

  checkError: (error) => {
    if (error && error.statusCode === 401) {
      return Promise.reject();
    }

    return Promise.resolve();
  },

  checkAuth: () => {
    return getToken() ? Promise.resolve() : Promise.reject();
  },

  getPermissions: () => {
    return Promise.resolve();
  },

  getUserIdentity: async () => {
    const data = await http
      .get(`/auth/${API_ENDPOINTS.PROFILE}`, {
        headers: {
          'Authorization': `Bearer ${getToken()}`
        }
      })
      .then((res: AxiosResponse<any>) => res.data);

    console.log("Data", data);

    if (data) {
      const user = {
        name: "Tareq Mahmud",
        avatar: "https://i.pravatar.cc/150?u=refine",
      }

      return Promise.resolve(user);
    }

    return Promise.reject();
  },
};

export default authProvider;
