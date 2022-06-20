import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import arrow from "../assets/images/arrow.png";
import "./hero.css";


const Hero = () => {
  

  return (
    <Box className="hero">
      <Container>
        <Box className="hero-flex">
          <Stack
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
            spacing={2}
          >
            <h3 className="box">
              Buy <span className="hero-brown">Bitcoin</span> in a<br /> minute with
              your <br />bank
            </h3>
            <Typography
              style={{ width: "80%" }}
              variant="body1"
              className="hero-text"
            >
              Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. Esse
              voluptatem unde blanditiis?
            </Typography>
          </Stack>

          <Box className="form-flex" data-aos="fade-left" data-aos-easing="ease-in-sine"
            data-aos-duration="1500">
            <Box
              className="form-header p-3"
              sx={{ borderRadius: "10px 10px 0px 0px", color: "#fff" }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                explicabo placeat necessitatibus?
              </p>
            </Box>

            <Box className="form-body p-3">
              <form>
                <label htmlFor="amount">Currency</label>
                <Box position="relative">
                  <select
                    style={{
                      textAlign: "end",
                      paddingRight: "30px",
                      borderRadius: "15px",
                    }}
                    className="custom-select select-div form-control"
                  >
                    <option>USD</option>
                    <option>EUR</option>
                  </select>
                  <div className="arrow-down">
                    <img src={arrow} alt="arrow" className="select-icon" />
                  </div>
                </Box>
                <label htmlFor="email">Amount</label>
                <input
                  style={{ borderRadius: "15px" }}
                  type="number"
                  className="form-control"
                />
                <label htmlFor="email">Email</label>
                <input
                  style={{ borderRadius: "15px" }}
                  type="email"
                  className="form-control"
                />

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
