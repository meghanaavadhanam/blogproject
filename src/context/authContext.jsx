import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("userName")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post("http://localhost:8801/api/auth/login", inputs);
    setCurrentUser(res.data.username);
  };

  const logout = async (inputs) => {
    await axios.post("http://localhost:8801/api/auth/logout");
    setCurrentUser(null);
    // localStorage.setItem("userName", null);
  };

  useEffect(() => {
    localStorage.setItem("userName", JSON.stringify(currentUser));
  }, [currentUser]); 

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};