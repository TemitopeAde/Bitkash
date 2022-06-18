import React from "react";
import { Container, Stack } from "@mui/material";
import { Box } from "@mui/material";
import Logo from "../assets/icons/header.png";
import { Link } from "react-router-dom";

import './header.css';


const Header = () => {
  return (
    <Box className="navbar">
      <Container>
        <Box className="header">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>

          <Box>
            <div className="navlist">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
                <li>
                  <Link to="/">FAQs</Link>
                </li>
                <li>
                  <Link to="/">How to buy Bitcoins</Link>
                </li>
                <li>
                  <button className="btn btn-primary">Sign Up</button>
                </li>
              </ul>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
