import Cookies from "js-cookie";

// Set cookie
export const setCookie = (name, value, days = 1) => {
  Cookies.set(name, JSON.stringify(value), { expires: days });
};

// Get cookie
export const getCookie = (name) => {
  const cookie = Cookies.get(name);
  return cookie ? JSON.parse(cookie) : null;
};

// Remove cookie
export const removeCookie = (name) => {
  Cookies.remove(name);
};
