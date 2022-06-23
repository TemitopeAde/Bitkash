import React from "react";
import { Box } from "@mui/material";
import "../components/Auth/auth.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: 1000 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -1000 },
};

const RecoverPassword = () => {
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
            <Box className="login-box p-5">
              <h3 className="text-center">Recover Password</h3>

              <form>
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" />

                <button type="submit" className="btn btn-wide">
                  Recover
                </button>

                <Box
                  className="pt-4 pb-4"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <p style={{ fontSize: "16px" }}>
                    Back to{" "}
                    <Link
                      to="/login"
                      style={{
                        textDecoration: "none",
                        color: "rgba(255, 153, 36, 1)",
                      }}
                    >
                      login
                    </Link>{" "}
                  </p>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default RecoverPassword;
