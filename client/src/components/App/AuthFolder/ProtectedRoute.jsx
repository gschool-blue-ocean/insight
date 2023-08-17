import { Navigate, Outlet } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "./authcontext";

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
