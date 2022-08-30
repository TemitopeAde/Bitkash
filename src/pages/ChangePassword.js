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
            <Box
              className="sidebar"
              style={{ pointerEvents: "none", opacity: ".6" }}
            >
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
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0201 2.91016C8.71009 2.91016 6.02009 5.60016 6.02009 8.91016V11.8002C6.02009 12.4102 5.76009 13.3402 5.45009 13.8602L4.30009 15.7702C3.59009 16.9502 4.08009 18.2602 5.38009 18.7002C9.69009 20.1402 14.3401 20.1402 18.6501 18.7002C19.8601 18.3002 20.3901 16.8702 19.7301 15.7702L18.5801 13.8602C18.2801 13.3402 18.0201 12.4102 18.0201 11.8002V8.91016C18.0201 5.61016 15.3201 2.91016 12.0201 2.91016Z"
                            stroke="#4C4C4C"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                          />
                          <path
                            d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z"
                            stroke="#4C4C4C"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
                            stroke="#4C4C4C"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                          />
                        </svg>
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
