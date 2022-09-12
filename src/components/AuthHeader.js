import { Box, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import "./mobilenav.css";
import logo from "../assets/icons/header.png";


const AuthHeader = () => {
  return (
    <Box>
      <Box className="mobile-fixed-nav">
        <Stack
          direction="row"
          p={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Link to="/">
            <img src={logo} alt="logo" id="mobile-logo" />
          </Link>
        </Stack>
      </Box>
      
    </Box>
  );
};

export default AuthHeader;
