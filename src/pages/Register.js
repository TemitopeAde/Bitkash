import { Box } from "@mui/material";
import React, {useState} from "react";
import logo from "../assets/icons/header-white.png";
import Register1 from "./Register-1";
import Register2 from "./Register-2";

import "./register.css";

const Register = () => {
    const [form,setForm] = useState(1)
  return (
    <Box className="register-page">
      <Box position="relative">
        <Box className="register-sidebar">
          <img src={logo} alt="" />

          <Box className="register-title">
            <h3>Sign up</h3>
          </Box>
        </Box>
        {
            form===1? <Register1 setform={setForm} />: <Register2 setform={setForm} />
        }
      </Box>
    </Box>
  );
};

export default Register;
