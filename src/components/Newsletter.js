import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Line from "../assets/images/line.png";

import "./buybitcoin.css";

const Newsletter = () => {
  return (
    <Box className="newsletter">
      <Container className="newsletter-flex">
        <Box position="relative">
          <Stack spacing={2}>
            <h6 className="title-news">Subscribe</h6>
            <h3 className="para-news">Stay informed never missed an <span style={{position: 'relative'}}>update! <img src={Line} alt="" className="line" /></span></h3>
            
          </Stack>
        </Box>

        <Box>
          <Stack className="form-box" spacing={6}>
            <h6 className="mb-5">
              Once each month we'll send you recent episodes of our Financial
              information covering the optimization of digital technology and
              irresistible people delivering a great customer experience that
              impacts the bottom line.
            </h6>

            <Box position="relative" className="newsletter-form mt-5">
                <form>
                    <input type="text" placeholder="Email Adress" />

                    <button type="submit" className="subscribe-btn">Subscribe</button>
                </form>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Newsletter;
