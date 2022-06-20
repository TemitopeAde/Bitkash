import { Box } from "@mui/material";
import React from "react";
import { Stack } from "@mui/material";
import HeroImage from "../assets/images/phone.svg";
import { Container } from "@mui/system";
import Logo from "../assets/icons/header.png";

import "./section.css";

const SectionOne = () => {
  return (
    <Box>
      <Container className="p-4">
        <Box className="hero-grid">
          <Box
            position="relative"
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            data-aos-duration="1500"
          >
            <img className="phone-img" src={HeroImage} alt="hero" />
            <Box>
              <img
                postion="absolute"
                className="logo-img"
                src={Logo}
                alt="logo"
              />
            </Box>
          </Box>

          <Box
            data-aos="fade-down"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            data-aos-duration="1500"
          >
            <Stack spacing={2}>
              <h3 style={{ display: "flex", justifyContent: "flex-end" }}>
                <span className="hero-brown" style={{ marginRight: "10px" }}>
                  About
                </span>
                Bitkash
              </h3>

              <p id="section-one-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing enim elementum tincidunt eget. Ac suspendisse
                facilisi odio ultrices in. Vulputate mauris scelerisque ac sed
                at volutpat, blandit leo. Consectetur aliquet elementum
                tincidunt mattis malesuada vitae, senectus vitae. Nisl, quam ut
                ut mattis mi potenti. Vel a metus id id neque. Justo viverra
                laoreet cursus tortor.
              </p>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionOne;
