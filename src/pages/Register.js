import { Box } from "@mui/material";
import React, { useState } from "react";
import logo from "../assets/icons/header-white.png";
import Register1 from "./Register-1";
import Register2 from "./Register-2";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom';
import "./register.css";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Register = ({ children }) => {
  const [form, setForm] = useState(1);
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.8 }}
    >
      <Box className="register-page">
        <Box position="relative">
          <Box className="register-sidebar">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>

            <Box className="register-title">
              <h3>Sign up</h3>
            </Box>
          </Box>
          {form === 1 ? (
            <Register1 setform={setForm} />
          ) : (
            <Register2 setform={setForm} />
          )}
        </Box>
      </Box>
    </motion.div>
  );
};

export default Register;
