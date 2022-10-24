import { Box, Container, Link, Stack } from "@mui/material";
import React from "react";
import Logo from "../assets/icons/header.png";
import instagram from "../assets/icons/instagram.png";
import phone from "../assets/icons/phone.png";
import facebook from "../assets/icons/facebook.png";
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
                Bitkash.io is a fast-rising global cryptocurrency broker that is
                dedicated to Bitcoin. Recognizing the bureaucracy of
                cryptocurrency, Bitkash.io believes that everyone must be a part
                of the decentralized blockchain
              </h6>

              <Stack className="social-icons" spacing={3} direction="row">
                <Link to="/">
                  <img src={instagram} alt="instagram" />
                </Link>
                <Link to="/">
                  <img src={facebook} alt="facebook" />
                </Link>
                <Link to="/">
                  <img src={phone} alt="telephone" />
                </Link>
              </Stack>
            </Stack>
          </Box>
          <Box>
            <Stack spacing={1} className="footer-flex-mobile">
              <Link style={{ color: "#46494D", fontWeight: "700" }} to="/">
                Buy Bitcoin
              </Link>
              <Link to="/">Get started</Link>
              <Link to="/">Chat with us</Link>
              <Link to="/">Why Bitcash</Link>
            </Stack>
          </Box>
          <Box className="hide">
            <Stack spacing={1}>
              <Link style={{ color: "#46494D", fontWeight: "700" }} to="/">Bitkash</Link>
              <Link to="/">FAQ</Link>
              <Link to="/">About Us</Link>
              <Link to="/">Delivery Policy</Link>
            </Stack>
          </Box>
          <Box className="hide">
            <Stack spacing={1}>
              <Link style={{ color: "#46494D", fontWeight: "700" }} to="/">Legal Terms</Link>
              <Link to="/">Privacy policy</Link>
              <Link to="/">Refund and Cancellation Policy</Link>
              <Link to="/">Risk and Safety Policy</Link>
            </Stack>
          </Box>
          <Box className="hide">
            <Stack spacing={1}>
              <Link style={{ color: "#46494D", fontWeight: "700" }} to="/">Contact</Link>
              <a href="mailto:contact@bitkash.com">contact@bitkash.com</a>
              <Link to="/">No 14, London, UK</Link>
              <a href="tel:+123456789">123456789</a>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
