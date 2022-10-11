import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import "./register.css";
import { fetchUser } from "../state/action-creators";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const EmailVerification = () => {
  const [userData, setUserData] = JSON.parse(localStorage.getItem("user"));
 
  const {email} = userData;

  const dispatch = useDispatch();
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    dispatch(fetchUser(uid));
  }, []);

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.8 }}
    >
      <Box className="register-page web-register-page">
        <Box position="relative">
          <Box className="register-sidebar">
            <Box className="register-title">
              <h3 style={{ textAlign: "center" }}>
                Email <br /> verification
              </h3>
            </Box>
          </Box>

          <Box className="register-content-items">
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Box>
                <svg
                  width="84"
                  height="84"
                  viewBox="0 0 84 84"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M59.125 0H24.2083C9.04167 0 0 9.04167 0 24.2083V59.0833C0 74.2917 9.04167 83.3333 24.2083 83.3333H59.0833C74.25 83.3333 83.2917 74.2917 83.2917 59.125V24.2083C83.3333 9.04167 74.2917 0 59.125 0ZM61.5833 32.0833L37.9583 55.7083C37.375 56.2917 36.5833 56.625 35.75 56.625C34.9167 56.625 34.125 56.2917 33.5417 55.7083L21.75 43.9167C20.5417 42.7083 20.5417 40.7083 21.75 39.5C22.9583 38.2917 24.9583 38.2917 26.1667 39.5L35.75 49.0833L57.1667 27.6667C58.375 26.4583 60.375 26.4583 61.5833 27.6667C62.7917 28.875 62.7917 30.8333 61.5833 32.0833Z"
                    fill="#FF9924"
                  />
                </svg>
              </Box>
              <h6
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "#ff9924",
                }}
              >
                Email Verification
              </h6>
              <p
                style={{
                  fontWeight: "16px",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#000",
                }}
              >
                A link has been sent to your email{" "}
                <a
                  style={{ color: "#ff9924", textDecoration: "none" }}
                  href="mailto:bitkash@gmail.com"
                >
                  {email}
                </a>{" "}
              </p>
              <p
                style={{
                  fontWeight: "16px",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#000",
                }}
              >
                Made a mistake in your address?{" "}
                <Link
                  style={{ color: "#ff9924", textDecoration: "none" }}
                  to="/update-email"
                >
                  click here
                </Link>
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default EmailVerification;
