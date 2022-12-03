import { Box } from "@mui/material";
import React from "react";
import { Stack } from "@mui/material";
<<<<<<< HEAD
import HeroImage from "../assets/images/phone-small.png";
=======
import HeroImage from "../assets/images/Rectangle.svg";
>>>>>>> master
import { Container } from "@mui/system";

import "./section.css";

const SectionOne = () => {
  return (
    <Box className="about-bitkash">
      <Container className="p-4">
        <Box className="hero-grid">
          <Box>
            <img className="phone-img" src={HeroImage} alt="hero" />
          </Box>

          <Box>
            <Stack spacing={2}>
              <h3 className="about-bitkash-title">
                <span className="hero-brown" style={{ marginRight: "10px" }}>
                  About
                </span>
                Bitkash
              </h3>

              <p id="section-one-text">
                Bitkash is a team of professional cryptocurrency enthusiasts
                situated all around the globe. We are a brokerage firm
                steadfastly committed to making it easy and foolproof to
<<<<<<< HEAD
                purchase cryptocurrency anywhere in the world. Our team is made
                of dedicated crypto professionals working together in various
                units to ensure that you and every member of the Bitkash family
                enjoy fast, seamless, and safe transactions.
=======
                purchase cryptocurrency anywhere in the world. <br /> <br /> Our
                team is made of dedicated crypto professionals working together
                in various units to ensure that you and every member of the
                Bitkash family enjoy fast, seamless, and safe transactions.
>>>>>>> master
              </p>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionOne;
