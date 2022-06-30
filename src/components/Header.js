import React, { useState } from "react";
import { Container, Stack } from "@mui/material";
import { Box } from "@mui/material";
import Logo from "../assets/icons/header.png";
import { Link } from "react-router-dom";
import hamburger from "../assets/icons/hamburger.png";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const [showNav, setShowNav] = useState(false);

  return (
    <Box className="navbar">
      <Container>
        <Box className="header">
          <Link to="/">
            <img style={{ width: "200px" }} src={Logo} alt="Logo" />
          </Link>

          <Box paddingTop="1rem" className="web-header">
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

          <Box className="web-header">
            <Stack
              justifyContent="space-between"
              alignItems="center"
              sapcing={2}
              direction="row"
            >
              <li style={{ marginRight: "2rem" }}>
                <Link
                  style={{ textDecoration: "none", color: "#FF9924" }}
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li>
                <button
                  onClick={() => navigate("/register")}
                  className="btn btn-primary"
                >
                  Sign Up
                </button>
              </li>
            </Stack>
          </Box>

          <Box onClick={() => setShowNav(!showNav)} position="absolute" className="hamburger">
            <img src={hamburger} alt="" />
          </Box>

          <Box
            position="absolute"
            className={
              showNav
                ? "shadow p-4 mobile-navlist"
                : "shadow p-4 mobile-navlist toggle"
            }
          >
            <div>
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
                <li style={{ marginRight: "2rem" }}>
                  <Link
                    style={{ textDecoration: "none", color: "#FF9924" }}
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/register")}
                    className="btn btn-primary"
                  >
                    Sign Up
                  </button>
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
