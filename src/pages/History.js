import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import logo from "../assets/icons/header-white.png";
import icon1 from "../assets/icons/note-2.png";
import user from "../assets/images/ellipse.png";
import notification from "../assets/images/notification.png";
import History from "../components/History";

const Buy = () => {
  return (
    <Box className="dashboard">
      <Box className="dashboard-grid">
        <Box className="sidebar">
          <Container>
            <img className="logo" src={logo} alt="bitkash" />

            <ul className="nav-icons">
              <li>
                <Link to="/">
                  <Stack
                    className="sidebar-nav-flex"
                    alignItems="center"
                    direction="row"
                    spacing={1}
                  >
                    <img src={icon1} alt="" />
                    <h6>Buy</h6>
                  </Stack>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Stack
                    className="sidebar-nav-flex"
                    alignItems="center"
                    direction="row"
                    spacing={1}
                  >
                    <img src={icon1} alt="" />
                    <h6>Transaction History</h6>
                  </Stack>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Stack
                    className="sidebar-nav-flex"
                    alignItems="center"
                    direction="row"
                    spacing={1}
                  >
                    <img src={icon1} alt="" />
                    <h6>My Payments</h6>
                  </Stack>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Stack
                    className="sidebar-nav-flex"
                    alignItems="center"
                    direction="row"
                    spacing={1}
                  >
                    <img src={icon1} alt="" />
                    <h6>Pasword and security</h6>
                  </Stack>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Stack
                    className="sidebar-nav-flex"
                    alignItems="center"
                    direction="row"
                    spacing={1}
                  >
                    <img src={icon1} alt="" />
                    <h6>Activities</h6>
                  </Stack>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Stack
                    className="sidebar-nav-flex"
                    alignItems="center"
                    direction="row"
                    spacing={1}
                  >
                    <img src={icon1} alt="" />
                    <h6>Logout</h6>
                  </Stack>
                </Link>
              </li>
            </ul>
          </Container>
        </Box>

        <Box className="dashboard-content">
          <Box className="dashboard-header">
            <Container style={{display: 'flex', justifyContent: 'flex-end'}} className="dashboard-container">
              <Box className="dashboard-container">
                <Stack spacing={2} direction="row">
                  <img className="user" src={user} alt="" />
                  <Stack>
                    <h6>Olubanjo Oluseyi</h6>
                    <p>Verified</p>
                  </Stack>
                  <Box paddingTop="6px">
                    <img className="notify" src={notification} alt="" />
                  </Box>
                </Stack>
              </Box>
            </Container>
          </Box>

          <History />
        </Box>
      </Box>
    </Box>
  );
};

export default Buy;
