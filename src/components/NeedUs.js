import { Box, Container } from "@mui/material";
import React from "react";

import './needus.css';

const NeedUs = () => {
  return (
    <Box className="need-us">
      <Container className="flex-need">
        <Box className="title">
          <h3>Why You Need Us</h3>
        </Box>
        <Box className="need-flex">
          <Box className="box-flex">
            <h3>100%</h3>
            <p>Support</p>
          </Box>
          <Box className="box-flex">
            <h3>50,000+</h3>
            <p>Transactions</p>
          </Box>
          <Box className="box-flex">
            <h3>500+</h3>
            <p>Customers</p>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NeedUs;
