import React from "react";
import { Box, Stack } from "@mui/material";
import "../components/Auth/auth.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { motion } from "framer-motion";

const animations = {
  initial: {opacity: 0, x: 1000},
  animate: {opacity: 1, x:0},
  exit: { opacity: 0, x: -1000}
}


const Login = ({children}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{duration: 0.5}}
    >
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

                <button onClick={() => handleSubmit} type="submit" className="btn btn-wide">
                  Login
                </button>

                <Box
                  className="mt-4 mb-4"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box
                    gap="8px"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <input
                      style={{ transform: "scale(1.6)" }}
                      type="checkbox"
                      id="remember-me"
                    />
                    <label htmlFor="remember-me">Remember me</label>
                  </Box>
                  <Box>
                    <Link style={{ color: "#FF9924" }} to="/recover-password">
                      Forgot password?
                    </Link>
                  </Box>
                </Box>

                <div className="mt-3">
                  <p>
                    Don't have an account?{" "}
                    <Link
                      style={{ color: "#FF9924", textDecoration: "none" }}
                      to="/register"
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
    </motion.div>
  );
};

export default Login;
