import React from "react";
import { Box } from "@mui/material";
import "../components/Auth/auth.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  return (
    <Box>
      <Header />
      <Box className="login">
        <Box className="login-wrap">
          <Box className="login-box p-5">
            <h3 className="text-center">Login</h3>

            <form>
              <label htmlFor="email">Email</label>
              <input type="email" className="form-controls" />

              <label htmlFor="password">Password</label>
              <input type="password" className="form-controls" />

              <button type="submit" className="btn btn-wide">
                Login
              </button>

              <div className="mt-3">
                <p>
                  Don't have an account?{" "}
                  <Link
                    style={{ color: "#FF9924", textDecoration: "none" }}
                    to="/"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
