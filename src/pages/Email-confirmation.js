import React from "react";
import { Box } from "@mui/material";
import "../components/Auth/auth.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import mark from "../assets/icons/mark.png";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const EmailConfirmation = () => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
    >
      <Box>
        <Header />
        <Box className="login">
          <Box className="login-wrap">
            <Box className="login-box p-3 email-verification-box">
              <Box className="d-flex justify-content-center align-items-center">
                <img
                  style={{ width: "72px", height: "72px" }}
                  className="mt-4 d-flex justify-content-center "
                  src={mark}
                  alt=""
                />
              </Box>

              <p className="mt-4 mb-4">
                A link has been sent to your email{" "}
                <a
                  style={{
                    color: "rgba(255, 153, 36, 1)",
                    textDecoration: "none",
                  }}
                  href="mailto:bitkash@gmail.com"
                >
                  bitkash@gmail.com
                </a>{" "}
                to recover your password
              </p>

              <Box
                className="pt-2 pb-4"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <p style={{ fontSize: "16px" }}>
                  Back to{" "}
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "rgba(255, 153, 36, 1)",
                    }}
                  >
                    login
                  </Link>{" "}
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default EmailConfirmation;
