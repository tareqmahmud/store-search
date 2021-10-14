import { useMutation } from "react-query";
import { AuthService } from "./auth.service";
import { LoginInputType } from "../types";

export const useLoginMutation = () => {
  return useMutation((input: LoginInputType) => AuthService.login(input));
};
