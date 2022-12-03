import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

import "./hero.css";

const Hero = () => {
  return (
    <Box className="hero">
      <Container>
        <Box className="hero-flex-container">
          <Box className="hero-flex-new">
            <h4>
              Buy <span>Bitcoin</span> The Fast and Secure Way
            </h4>
            <p>
<<<<<<< HEAD
              With Bitkash, you can buy cryptocurrency through your bank. We
              make it easy, fast, and 100% secure. Bitkash is one of the
=======
              With Bitkash, you can buy cryptocurrency through your bank. <br />We
              make it easy, fast, and 100% secure. Bitkash is one of the <br />
>>>>>>> master
              fastest-growing brokerage firms worldwide.
            </p>
            <Link to="/register">Get Started Now</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
