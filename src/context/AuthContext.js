// src/context/AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Implement login and logout functionality
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContextProvider;
