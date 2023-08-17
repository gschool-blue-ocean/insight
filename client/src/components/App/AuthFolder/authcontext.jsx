import React, { createContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentProfile, setCurrentProfile] = useState("");
  const [currentAccessToken, setCurrentAccessToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const loginProfile = (token) => {
    setCurrentAccessToken(token.accessToken);
    const decodedToken = jwtDecode(token.accessToken);
    setCurrentProfile({ userid: decodedToken.userid, role: decodedToken.role });
    setIsAuthenticated(true);
  };

  const logoutProfile = async () => {
    const logoutRefreshToken = async () => {
      await fetch(`${API_URL}/logout`, {
        credentials: "include", // include this on ALL PROTECTED ROUTES
      });
    };

    await logoutRefreshToken();
    setCurrentAccessToken();
    setCurrentProfile();
    setIsAuthenticated(false);
  };

  const navByRole = (role) => {
    console.log(role);
    switch (role) {
      case "admin":
        navigate("/Admin");
        break;

      case "instructor":
        navigate("/Instructor");
        break;

      case "student":
        navigate("/students");
        break;
    }
  };

  useEffect(() => {
    navByRole(currentProfile.role);
  }, [currentProfile]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentProfile,
        currentAccessToken,
        loginProfile,
        logoutProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
