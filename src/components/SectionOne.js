import { Box } from "@mui/material";
import React from "react";
import {Stack} from "@mui/material";
import HeroImage from "../assets/images/phone.svg";
import { Container } from "@mui/system";
import Logo from '../assets/icons/header.png';

import './section.css';

const SectionOne = () => {
  return (
    <Box>
      <Container className="p-4">
        <Box className="hero-grid">
          <Box position="relative">
            <img className="phone-img" src={HeroImage} alt="hero" />
            <Box >
                <img postion="absolute" className="logo-img" src={Logo} alt="logo" />
            </Box>
          </Box>

          <Box>
            <Stack spacing={2}>
              <h3 style={{display: 'flex', justifyContent: 'flex-end'}}>
                <span className="hero-brown">About</span> Bitkash
              </h3>

              <p>
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
