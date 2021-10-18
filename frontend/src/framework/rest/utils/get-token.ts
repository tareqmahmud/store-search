import Cookies from 'js-cookie';

/**
 * Helper method to get the token from cookies
 */
export const getToken = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  return Cookies.get('token');
};
