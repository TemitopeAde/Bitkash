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
import phone from "../assets/images/phone-gray.png";
import Sidebar from "../components/Sidebar";

const PhoneOTP = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  
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
            <Sidebar />

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
                            style={{ width: "12px", height: "17px" }}
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

                      <Box mt="1rem" mb="2rem">
                        <p style={{ fontSize: "16px", fontWeight: "400" }}>
                          A 4 digit OTP code has been sent to this number {" "}
                          <a
                            style={{ color: "#ff9924" }}
                            href="tel:++1234567890"
                          >
                             +1234567890
                          </a>
                          , <br />
                          Kindly input the code here
                        </p>
                      </Box>

                      <Box className="enter-otp-title mb-5">
                        <label htmlFor="phone-otp">
                          Enter the phone OTP code
                        </label>
                        <Box className="phone-otp mt-3">
                          <form>
                            <div className="phone-otp-flex">
                              {otp.map((data, index) => {
                                return (
                                  <input
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    className="input-otp"
                                    key={index}
                                    value={data}
                                    onFocus={(e) => e.target.select()}
                                    onChange={(e) =>
                                      handleChange(e.target, index)
                                    }
                                  />
                                );
                              })}
                            </div>

                            <button className="mt-3" style={{width: '200px'}} type="submit">Verify</button>
                          </form>
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

export default PhoneOTP;
