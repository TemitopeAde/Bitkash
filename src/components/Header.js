import React from "react";
import { Container, Stack } from "@mui/material";
import { Box } from "@mui/material";
import Logo from "../assets/icons/header.png";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <Box className="navbar">
      <Container>
        <Box className="header">
          <Link to="/">
            <img style={{ width: "200px" }} src={Logo} alt="Logo" />
          </Link>

          <Box paddingTop="1rem">
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
              </ul>
            </div>
          </Box>

          <Box>
            <Stack justifyContent="space-between" alignItems="center" sapcing={2} direction="row">
              <li style={{ marginRight: '2rem'}}>
                <Link style={{textDecoration: 'none', color: '#FF9924'}} to="/">Login</Link>
              </li>
              <li>
                <button className="btn btn-primary">Sign Up</button>
              </li>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
