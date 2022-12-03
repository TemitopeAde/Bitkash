import { Box, Container, Stack } from "@mui/material";
import React, { useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./dashboard.css";
import logo from "../assets/icons/header-white.png";
import icon1 from "../assets/icons/note-2.png";
import user from "../assets/images/ellipse.png";
import notification from "../assets/images/notification.png";
=======
import { Helmet } from "react-helmet";

import "./dashboard.css";
import user from "../assets/images/ellipse.png";
>>>>>>> master
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
                          A 4 digit OTP code has been sent to this number{" "}
                          <a
                            style={{ color: "#ff9924" }}
<<<<<<< HEAD
                            href="tel:++1234567890"
=======
                            href="tel:+1234567890"
>>>>>>> master
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

                            <button
                              className="mt-3"
                              style={{ width: "200px" }}
                              type="submit"
                            >
                              Verify
                            </button>
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
