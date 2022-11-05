import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const location = useLocation();
  // console.log(location);
  const isAuthenticated = useSelector((state) => state.auth.token);
  const token = useSelector((state) => state.auth.token);
  console.log(token)
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoute;
