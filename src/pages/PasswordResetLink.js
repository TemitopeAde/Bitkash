import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./register.css";
import logo from "../assets/icons/header-white.png";
import mark from "../assets/icons/mark-white.png";
import { Helmet } from "react-helmet";
import AuthHeader from "../components/AuthHeader";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const PasswordResetLink = () => {
  const width = window.innerWidth;

  if (width > 820) {
    return (
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
      >
        <Box className="register-page web-register-page">
          <Box position="relative">
            <Box className="register-sidebar">
              <Box className="register-title">
                <h3 style={{ textAlign: "center" }}>
                  Recover <br /> passoword
                </h3>
              </Box>
            </Box>

            <Box className="register-content-items">
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <Box>
                  <img
                    src={mark}
                    alt=""
                    style={{
                      height: "83px",
                      width: "83px",
                      marginBottom: "1.7rem",
                    }}
                  />
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
                    bitkash@gmail.com
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
                  Back to{" "}
                  <Link
                    style={{ color: "#ff9924", textDecoration: "none" }}
                    to="/login"
                  >
                    login
                  </Link>
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    );
  }

  if (width <= 820) {
    return (
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
      >
        <Helmet>
          <title>Password link sent</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
          <body class="mobile-background" />
        </Helmet>

        <div className="mobile-register-page">
          <AuthHeader />
          <Box>
            <Box mt="8rem">
              <h3>Recover password</h3>

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
                        href="mailto:bitkash@gmail.com"
                      >
                        bitkash@gmail.com
                      </a>{" "}
                      to recover your password
                    </p>
                    <p
                      style={{
                        fontWeight: "16px",
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#000",
                      }}
                    >
                      Back to{" "}
                      <Link
                        style={{
                          color: "#ff9924",
                          textDecoration: "none",
                          fontWeight: "400",
                        }}
                        to="/login"
                      >
                        login
                      </Link>
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

export default PasswordResetLink;
