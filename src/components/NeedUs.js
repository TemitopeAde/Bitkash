import { Box, Container } from "@mui/material";
import React from "react";
import CountUp from 'react-countup';
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
            <h3>
                <CountUp delay={0} end={100} duration={2}/>
                %
              </h3>
            <p>Support</p>
          </Box>
          <Box className="box-flex">
            <h3>
            <CountUp delay={2} end={50000} duration={2.75}/>
              +
            </h3>
            <p>Transactions</p>
          </Box>
          <Box className="box-flex">
            <h3>
            <CountUp delay={4.75} end={500} duration={2.75}/>
            +
            </h3>
            <p>Customers</p>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NeedUs;
