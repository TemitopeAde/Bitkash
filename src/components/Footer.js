import { Box, Container, Link, Stack } from "@mui/material";
import React from "react";
import Logo from "../assets/icons/header.png";
import instagram from "../assets/icons/instagram.png";
import phone from "../assets/icons/phone.png";
import "./footer.css";

const Footer = () => {
  return (
    <Box className="footer">
      <Container>
        <Box className="footer-grid">
          <Box>
            <Stack spacing={5}>
              <img className="logo" src={Logo} alt="logo" />

              <h6 className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
                commodi beatae? Eaque, iure fuga.
              </h6>

              <Stack className="social-icons" spacing={3} direction="row">
                <Link to="/">
                  <img src={instagram} alt="instagram" />
                </Link>
                <Link to="/">
                  <img src={phone} alt="facebook" />
                </Link>
                <Link to="/">
                  <img src={phone} alt="telephone" />
                </Link>
              </Stack>
            </Stack>
          </Box>
          <Box>
            <Stack spacing={1}>
              <Link to="/">Home</Link>
              <Link to="/">Product</Link>
              <Link to="/">Industries</Link>
              <Link to="/">About</Link>
              <Link to="/">Blog</Link>
            </Stack>
          </Box>
          <Box>
            <Stack spacing={1}>
              <Link to="/">FAQ</Link>
              <Link to="/">Community</Link>
              <Link to="/">Join the team</Link>
              <Link to="/">Legal Stuff</Link>
              <Link to="/">Terms of service</Link>
            </Stack>
          </Box>
          <Box>
            <Stack spacing={1}>
              <Link to="/">FAQ</Link>
              <Link to="/">Community</Link>
              <Link to="/">Join the team</Link>
              <Link to="/">Legal Stuff</Link>
              <Link to="/">Terms of service</Link>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
