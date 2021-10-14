import Cookies from "js-cookie";

export const getToken = () => {
  // Before window load don't try to access cookie
  if (typeof window === "undefined") {
    return null;
  }

  // After load fetch the cookies
  return Cookies.get("token");
};
