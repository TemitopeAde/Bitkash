import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./register.css";
import logo from "../assets/icons/header-white.png";
import mark from "../assets/icons/mark-white.png";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const EmailVerification = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const {email} = userData

  
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
            <Link to="/">
              <img src={logo} alt="" />
            </Link>

            <Box className="register-title">
              <h3 style={{ textAlign: "center" }}>
                Email <br /> verification
              </h3>
            </Box>
          </Box>

          <Box className="register-content-items">
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Box>
                <img src={mark} alt="" style={{height: '83px', width: '83px', marginBottom: '1.7rem'}} />
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
                  to="/"
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
