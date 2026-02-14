import { createContext, useState } from "react";
import { setCookie, getCookie, removeCookie } from "../utils/cookies";
import { v4 as uuidv4 } from "uuid";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  });

  const [currentUser, setCurrentUser] = useState(() => getCookie("currentUser"));

  // Signup
  const signup = (userData) => {
    const exists = users.find(u => u.email === userData.email);
    if (exists) return false;
    const updatedUsers = [...users, userData];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    return true;
  };

  // Login
  const login = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      const token = uuidv4(); // UUID token
      const userWithToken = { ...user, token };
      setCurrentUser(userWithToken);
      setCookie("currentUser", userWithToken, 1);
      return true;
    }
    return false;
  };

  // Logout
  const logout = () => {
    setCurrentUser(null);
    removeCookie("currentUser");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
