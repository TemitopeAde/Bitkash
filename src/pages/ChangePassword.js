import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";
import Modal from "../components/Modal";

import "./dashboard.css";
import logo from "../assets/icons/header-white.png";
import icon1 from "../assets/icons/note-2.png";
import user from "../assets/images/ellipse.png";
import notification from "../assets/images/notification.png";
import MobileNav from "../components/mobileNav";
import key from "../assets/images/key-square.png";
import edit from "../assets/images/edit-2.png";
import profile from "../assets/images/profile.png";
import tick from "../assets/images/tick-circle.png";
import PasswordModal from "../components/PasswordModal";

const ChangePassword = () => {
  const [tab, setTab] = useState(1);

  if (window.innerWidth > 820) {
    return (
      <Box>
        <Helmet>
          <title>Change password</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
          <body class="buy-background" />
        </Helmet>
        <Box className="dashboard">
          <Box className="dashboard-grid">
            <Box className="sidebar" style={{ pointerEvents: "none", opacity: '.6' }}>
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
                      <h4 className="title">Security</h4>
                    </Box>
                  </Box>
                  <Box className="password-security-flex mb-5">
                    <button
                      className={
                        tab === 0
                          ? "flex-security-buttons active"
                          : "flex-security-buttons"
                      }
                      onClick={() => setTab(0)}
                    >
                      Profile
                    </button>
                    <button
                      className={
                        tab === 1
                          ? "flex-security-buttons active"
                          : "flex-security-buttons"
                      }
                      onClick={() => setTab(1)}
                    >
                      Security
                    </button>
                    <button
                      className={
                        tab === 2
                          ? "flex-security-buttons active"
                          : "flex-security-buttons"
                      }
                      onClick={() => setTab(2)}
                    >
                      Verification
                    </button>
                  </Box>

                  <Box
                    className={
                      tab === 0 ? "security-box active" : "security-box"
                    }
                  >
                    <Box className="p-5">
                      <Box className="profile-image-box">
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "10px",
                            textAlign: "center",
                          }}
                        >
                          <img src={profile} alt="" className="pro-img" />
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "start",
                              gap: "1rem",
                              alignItems: "center",
                            }}
                          >
                            <h6 style={{ color: "#ff9924", margin: "0px" }}>
                              Upload Picture
                            </h6>
                            <button
                              style={{ background: "none", border: "none" }}
                            >
                              <img
                                style={{ height: "12px", width: "12px" }}
                                src={edit}
                                alt=""
                              />
                            </button>
                          </Box>
                          <Box>
                            <p>Maximum file size for profile picture is 20MB</p>
                          </Box>
                        </Box>
                      </Box>

                      <form>
                        <Box className="profile-form">
                          <Box className="form-items">
                            <label>First name</label>
                            <input type="text" className="form-control" />
                          </Box>
                          <Box className="form-items">
                            <label>Last name</label>
                            <input type="text" className="form-control" />
                          </Box>
                          <Box className="form-items">
                            <label>Email address</label>
                            <input type="email" className="form-control" />
                          </Box>
                          <Box className="form-items">
                            <label>Phone number</label>
                            <input type="number" className="form-control" />
                          </Box>

                          <button className="" type="submit">
                            Edit
                          </button>
                        </Box>
                      </form>
                    </Box>
                  </Box>

                  <Box
                    className={
                      tab === 1 ? "security-box active" : "security-box"
                    }
                  >
                    <Box className="p-5">
                      <Box className="mb-5">
                        <Box>
                          <h5>SECURITY</h5>
                          <p>Change your old password to a new one</p>
                        </Box>
                        <Box>
                          <h6>Update Password</h6>
                          <Box
                            sx={{
                              alignItems: "center",
                              display: "flex",
                              justifyContent: "flex-start",
                              gap: "3rem",
                            }}
                          >
                            <p style={{ margin: "0px" }}>
                              Change your old password to a new one
                            </p>
                            <button
                              style={{
                                border: "1px solid #ff9924",
                                background: "transparent",
                                width: "200px",
                                height: "50px",
                              }}
                            >
                              Change password
                            </button>
                          </Box>
                        </Box>
                      </Box>

                      <Box className="mb-5">
                        <Box className="mb-3">
                          <h5>ACCOUNT PROTECTION</h5>
                          <Box
                            sx={{
                              alignItems: "center",
                              display: "flex",
                              justifyContent: "flex-start",
                              gap: "3rem",
                            }}
                          >
                            <h6 style={{ margin: "0px" }}>
                              Two-factor Authentication
                            </h6>
                            <button
                              style={{
                                width: "158px",
                                height: "40px",
                                background: "#ffeeee",
                                border: "1px solid #ffdfb8",
                              }}
                            >
                              Disabled
                            </button>
                          </Box>
                        </Box>
                        <Box>
                          <Box
                            sx={{
                              display: "grid",
                              gridTemplateColumns: "3fr 1fr",
                            }}
                          >
                            <p>
                              Add an extra layer of security and protection to
                              your Bitkash account to protect it from
                              unauthorized transaction
                            </p>
                            <div className="checked-box">
                              <input type="checkbox" id="toggle" />
                              <label for="toggle"></label>
                            </div>
                          </Box>
                        </Box>

                        <Box>
                          <button
                            style={{
                              width: "190px",
                              background: "#ff9924",
                              height: "50px",
                              border: "none",
                              fontSize: "16px",
                            }}
                          >
                            Set up your 2FA
                          </button>
                        </Box>
                      </Box>

                      <Box>
                        <h5>DELETE ACCOUNT</h5>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Adipisci.
                        </p>
                        <button
                          style={{
                            width: "190px",
                            background: "#ff9924",
                            height: "50px",
                            border: "none",
                            fontSize: "16px",
                          }}
                        >
                          Delete Account
                        </button>
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    className={
                      tab === 2 ? "security-box active" : "security-box"
                    }
                  >
                    <Box className="p-5 verification-security">
                      <Box>
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            gap: "2rem",
                          }}
                        >
                          <h6>Email Verification</h6>
                          <img src={tick} alt="" className="icon" />
                        </Box>

                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ab beatae veritatis omnis tempora sint quas
                        </p>
                      </Box>
                      <Box>
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            gap: "2rem",
                          }}
                        >
                          <h6>Phone number</h6>
                          <img src={tick} alt="" className="icon" />
                        </Box>

                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ab beatae veritatis omnis tempora sint quas
                        </p>
                      </Box>
                      <Box>
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            gap: "2rem",
                          }}
                        >
                          <h6>KYC</h6>
                          <img src={tick} alt="" className="icon" />
                        </Box>

                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ab beatae veritatis omnis tempora sint quas
                        </p>
                      </Box>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>
          </Box>

          <Box className="password-change-modal">
            <PasswordModal />
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

export default ChangePassword;
