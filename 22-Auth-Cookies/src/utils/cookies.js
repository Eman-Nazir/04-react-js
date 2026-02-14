import Cookies from "js-cookie";

// Set cookie (session only if days not provided)
export const setCookie = (name, value, days) => {
  if (days) {
    Cookies.set(name, JSON.stringify(value), { expires: days });
  } else {
    Cookies.set(name, JSON.stringify(value)); // session cookie
  }
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
