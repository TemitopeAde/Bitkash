import { Box } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import "./register.css";
import AuthHeader from "../components/AuthHeader";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const EmailVerification = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const unverified = useSelector((state) => state.auth.unverifiedUser);

  // console.log(isAuthenticated)

  

  
  if (window.innerWidth >= 820) {
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
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: 'center' }}
              >
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
                    href={`mailto:${userData?.email}`}
                  >
                    {userData?.email}
                  </a>{" "}
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    );
  }

  if (window.innerWidth <= 820) {
    return (
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8 }}
      >
        <Helmet>
          <title>Email verification</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
          <body class="mobile-background" />
        </Helmet>

        <div className="mobile-register-page">
          <AuthHeader />
          <Box>
            <Box mt="8rem">
              <h3>Email verification</h3>

              <Box>
                <Box
                  className="mobile-register-form active login-form"
                  style={{ padding: "3rem 1.5rem" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      textAlign: "center",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                    }}
                  >
                    <Box>
                      <svg
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M51.1095 0H20.9264C7.81589 0 0 7.812 0 20.916V51.048C0 64.188 7.81589 72 20.9264 72H51.0735C64.184 72 71.9999 64.188 71.9999 51.084V20.916C72.0359 7.812 64.22 0 51.1095 0ZM53.2345 27.72L32.8123 48.132C32.3081 48.636 31.6238 48.924 30.9034 48.924C30.183 48.924 29.4987 48.636 28.9944 48.132L18.8014 37.944C17.7568 36.9 17.7568 35.172 18.8014 34.128C19.8459 33.084 21.5747 33.084 22.6193 34.128L30.9034 42.408L49.4166 23.904C50.4611 22.86 52.19 22.86 53.2345 23.904C54.279 24.948 54.279 26.64 53.2345 27.72Z"
                          fill="#FF9924"
                        />
                      </svg>
                    </Box>

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
                        href={`mailto:${userData?.email}`}
                      >
                        {userData?.email}
                      </a>
                    </p>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </motion.div>
    );
  }

  
};

export default EmailVerification;
