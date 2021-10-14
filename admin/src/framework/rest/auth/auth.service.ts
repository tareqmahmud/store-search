import CoreApi from "../utils/api/core-api";
import { API_ENDPOINTS } from "../utils/endpoint";
import { LoginInputType } from "../types";

class AuthApi extends CoreApi {
  login(input: LoginInputType) {
    return this.http.post(API_ENDPOINTS.LOGIN).then((res) => res.data);
  }
}

export const AuthService = new AuthApi("auth");
