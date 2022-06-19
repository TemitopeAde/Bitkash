import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import arrow from "../assets/images/arrow.png";
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
            <Typography style={{width: '80%'}} variant="body1" className="hero-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              voluptatem unde blanditiis?
            </Typography>
          </Stack>

          <Box className="form-flex">
            <Box
              className="form-header p-3"
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
                <Box position="relative">
                  <select style={{ textAlign: "end", paddingRight: '30px' }} className="custom-select select-div form-control">
                    <option>USD</option>
                    <option>EUR</option>
                  </select>
                  <div className="arrow-down">
                    <img src={arrow} alt="arrow" className="select-icon" />
                  </div>
                </Box>

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
