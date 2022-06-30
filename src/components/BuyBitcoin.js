import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Bitcoin from "../assets/images/bit.png";
import "./buybitcoin.css";

const BuyBitcoin = () => {
  return (
    <Box className="buy-bitcoin">
      <Container className="buy-flex">
        <Stack>
          <h3>Buy your first bitcoin today</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
            eget blandit porttitor in scelerisque. Sem amet at hac vitae orci
            neque enim. Integer egestas mauris sit tincidunt quisque enim.{" "}
          </p>
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
