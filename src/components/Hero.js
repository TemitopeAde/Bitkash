import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

import "./hero.css";

const Hero = () => {
  return (
    <Box className="py-5 hero">
      <Container>
        <Box className="hero-flex">
          <Stack spacing={2}>
            <h3>
              Buy <span className="hero-brown">Bitcoin</span> in a minute with
              your bank
            </h3>
            <Typography variant="body1" className="hero-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              voluptatem unde blanditiis?
            </Typography>
          </Stack>

          <Box className="form-flex">
            <Box
              className="form-header p-4"
              sx={{ borderRadius: "10px 10px 0px 0px", color: "#fff" }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                explicabo placeat necessitatibus?
              </p>
            </Box>

            <Box className="form-body p-4">
              <form>
                <label htmlFor="amount">Amount</label>
                <input type="number" className="form-control" />

                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" />

                <button className="mt-4 btn btn-full">Buy Bitcoin</button>
              </form>
            </Box>
          </Box>
        </Box>
      </Container>

     
    </Box>
  );
};

export default Hero;
