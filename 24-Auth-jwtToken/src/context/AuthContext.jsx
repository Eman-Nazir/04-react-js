import { createContext, useState, useEffect } from "react";
import jwtEncode from "jwt-encode";
import Cookies from "js-cookie";

export const AuthContext = createContext();
const SECRET_KEY = "frontend_secret";

export const AuthProvider = ({ children }) => {

  const [users, setUsers] = useState(() => {
    const data = localStorage.getItem("users");
    return data ? JSON.parse(data) : [];
  });

  const [user, setUser] = useState(() => {
    const stored = Cookies.get("user");
    return stored ? JSON.parse(stored) : null;
  });

  const [token, setToken] = useState(Cookies.get("token") || null);

  // Signup
  const signup = (formData) => {
    const exists = users.find(u => u.email === formData.email);
    if (exists) return false;

    const newUsers = [...users, formData];
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
    return true;
  };

  // Login
  const login = (email, password) => {
    const matched = users.find(
      u => u.email === email && u.password === password
    );
    if (!matched) return false;

    const jwt = jwtEncode(
      { email: matched.email, role: matched.role },
      SECRET_KEY
    );

    Cookies.set("token", jwt, { expires: 1 });
    Cookies.set("user", JSON.stringify(matched), { expires: 1 });

    setToken(jwt);
    setUser(matched);

    return true;
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ signup, login, logout, user, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
