import { Box, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./dashboard.css";
import logo from "../assets/icons/header-white.png";
import icon1 from "../assets/icons/note-2.png";
import user from "../assets/images/ellipse.png";
import notification from "../assets/images/notification.png";
import MobileNav from "../components/mobileNav";
import key from "../assets/images/key-square.png";
import tick from "../assets/images/tick-circle-2.png";

const VerificationSuccessful = () => {
  if (window.innerWidth > 820) {
    return (
      <Box>
        <Helmet>
          <title>Verifiaction Successful</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
          <body class="buy-background" />
        </Helmet>
        <Box className="dashboard">
          <Box className="dashboard-grid">
            <Box className="sidebar">
              <Container>
                <Link to="/">
                  <img className="logo" src={logo} alt="bitkash" />
                </Link>

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
                <Container
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
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

              <Box
                className="dashboard-inner py-5 dashboard-padding"
                sx={{ background: "none" }}
              >
                <Container>
                  <Box>
                    <Box className="title-flex mb-3">
                      <img src={key} alt="" className="icon" />
                      <h4 className="title">Phone Verification</h4>
                    </Box>
                  </Box>

                  <Box className="security-box active">
                    <Box className="p-5">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "3px",
                            textAlign: "center",
                          }}
                        >
                          <Box>
                            <img
                              src={tick}
                              alt=""
                              style={{ width: "82px", height: "82px" }}
                            />
                          </Box>

                          <h6 style={{ fontSize: "24px", fontWeight: "500" }}>
                            Verification successful
                          </h6>
                          <p style={{fontSize: '16px', lineHeight: '30px'}}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Minus dolores et voluptate.
                          </p>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  if (window.innerWidth <= 820) {
    return (
      <Box>
        <MobileNav />

        <Box>
          <Box className="dashboard-inner py-5">
            <Container className="mobile-padding"></Container>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default VerificationSuccessful;
