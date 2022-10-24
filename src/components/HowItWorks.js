import { Box, Container } from "@mui/material";
import React from "react";
import One from "../assets/images/one.png";
import Two from "../assets/images/two.png";
import Three from "../assets/images/three.png";

import "./howitworks.css";

const HowItWorks = () => {
  return (
    <Box className="section-2">
      <Container>
        <h3 className="text-center title">How it Works</h3>

        <div className="mt-5 flex-box">
          <div className="flexitems">
            <div className="number">
              <img src={One} alt="one" />
            </div>
            <div className="text-number">
              <h6>1</h6>
            </div>
            <h3>Sign up</h3>
            <p>
              Here’s where we get to know you and welcome you to the Bitkash
              family. Don’t worry your details are a hundred percent safe with
              us. Learn more.
            </p>
          </div>
          <div className="flexitems">
            <div className="number">
              <img src={Two} alt="one" />
            </div>
            <div className="text-number">
              <h6>2</h6>
            </div>
            <h3>KYC</h3>
            <p>
              The KYC verification allows us to protect you and your portfolio.
              It takes only a few minutes and you’re officially ready to trade!
            </p>
          </div>
          <div className="flexitems">
            <div className="number">
              <img src={Three} alt="one" />
            </div>
            <div className="text-number">
              <h6>3</h6>
            </div>
            <h3>Buy</h3>
            <p>
              Once payment is made, your coins will be delivered in x minutes.
              Currently, we accept only bank transfers but we’re working on
              making more payment options available.
            </p>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default HowItWorks;
