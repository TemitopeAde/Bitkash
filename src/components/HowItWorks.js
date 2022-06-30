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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.</p>
          </div>
          <div className="flexitems">
            <div className="number">
              <img src={Two} alt="one" />
            </div>
            <div className="text-number">
              <h6>2</h6>
            </div>
            <h3>KYC</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.</p>
          </div>
          <div className="flexitems">
            <div className="number">
              <img src={Three} alt="one" />
            </div>
            <div className="text-number">
              <h6>3</h6>
            </div>
            <h3>Buy</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.</p>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default HowItWorks;
