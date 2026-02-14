import { createContext, useState } from "react";
import { setCookie, getCookie, removeCookie } from "../utils/cookies";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  });

  // Current user from cookie
  const [currentUser, setCurrentUser] = useState(() => getCookie("currentUser"));

  // Login
 // Login
const login = (email, password) => {
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    setCurrentUser(user);
    setCookie("currentUser", user); 
    return true;
  }
  return false;
};


  // Signup
  const signup = (userData) => {
    const exists = users.find(u => u.email === userData.email);
    if (exists) return false;

    const updatedUsers = [...users, userData];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    return true;
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
