import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./dashboard.css";
import logo from "../assets/icons/header-white.png";
import icon1 from "../assets/icons/note-2.png";
import user from "../assets/images/ellipse.png";
import notification from "../assets/images/notification.png";
import MobileNav from "../components/mobileNav";
import key from "../assets/images/key-square.png";
import phone from "../assets/images/phone-gray.png";


const PhoneVerification = () => {
  if (window.innerWidth > 820) {
    return (
      <Box>
        <Helmet>
          <title>Phone Verification</title>
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
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            gap: "1rem",
                          }}
                        >
                          <img
                            src={phone}
                            alt=""
                            style={{ width: "30px", height: "30px" }}
                          />
                          <h6
                            style={{
                              fontWeight: "400",
                              fontSize: "16px",
                              margin: "0px",
                            }}
                          >
                            Phone Verification
                          </h6>
                        </Box>
                      </Box>

                      <Box>
                        <p
                          style={{
                            fontFamily: "Poppins",
                            fontWeight: "300",
                            fontSize: "13px",
                            lineHeight: "26px",
                            color: "#000000",
                            marginTop: "1rem",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Neque, senectus ut id non a proin ut feugiat.
                          Luctus vel amet natoque mattis dictum enim fermentum.
                          Enim, amet, facilisi feugiat ut sem id at. Vel
                          dignissim tincidunt lorem aliquet.
                        </p>
                      </Box>

                      <Box mt="2rem">
                        <form>
                          <Box style={{display: 'grid', gridTemplateColumns: "repeat(2,197px)", gap: '2rem', gridTemplateRows: "auto auto"}}>
                            <Box>
                              <label style={{ color: "#ff9424" }}>
                                Phone number
                              </label>
                              <input type="number" className="form-control" />
                            </Box>
                            <Box>
                              <label style={{ color: "#ff9424" }}>
                                Confirm phone number
                              </label>
                              <input type="number" className="form-control" />
                            </Box>

                            <Box>
                                <button style={{width: '100%'}} type="submit">Verify</button>
                            </Box>
                          </Box>
                        </form>
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

export default PhoneVerification;
