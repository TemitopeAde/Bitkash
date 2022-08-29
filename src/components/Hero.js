import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

import "./hero.css";

const Hero = () => {
  return (
    <Box className="hero">
      <Box className="hero-flex-container">
        <Container sx={{margin: '0px', width: '64%'}}>
          <Box className="hero-flex-new">
            <h4>
              Buy <span>Bitcoin</span> The Fast and Secure Way
            </h4>
            <p>
              With Bitkash, you can buy cryptocurrency through your bank. We
              make it easy, fast, and 100% secure. Bitkash is one of the
              fastest-growing brokerage firms worldwide.
            </p>
            <Link to="/register">Get Started Now</Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
