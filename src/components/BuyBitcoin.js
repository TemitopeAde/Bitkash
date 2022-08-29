import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Bitcoin from "../assets/images/bit.png";
import "./buybitcoin.css";

const BuyBitcoin = () => {
  return (
    <Box className="buy-bitcoin">
      <Container className="buy-flex">
        <Stack>
          <h3>Get Started Now and Join The <span style={{ color: '#ff9924'}}>Bitkash</span> Family With Your First Purchase</h3>
          
          <Box className="buy-button">
            <button className="btn">Buy Bitcoins</button>
          </Box>
        </Stack>

        <Box>
          <img src={Bitcoin} alt="bitcoin" />
        </Box>
      </Container>
    </Box>
  );
};

export default BuyBitcoin;
