import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import OTPInput, { ResendOTP } from "otp-input-react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendOtp } from "../state/action-creators";

import "./register.css";
import Header from "../components/Header";
import "./emailandphone.css";


const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const EmailAndPhone = ({ children }) => {
  const [OTP, setOTP] = useState("");
  const { uid } = useParams();
  const dispatch = useDispatch();

  console.log(uid)

  useEffect(() => {
    dispatch(sendOtp(uid))
  }, [])

  if (window.innerWidth > 820) {
    return (
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8 }}
      >
        <Box className="register-page">
          <Box position="relative">
            <Box className="register-sidebar">
              <Box className="register-title">
                <h3>
                  Phone <br />
                  Verification
                </h3>
              </Box>
            </Box>

            <Box className="otp-register register-content-form">
              <form>
                <Box className="otp-number-div mb-5">
                  <h6 className="otp-title">Phone Verification</h6>
                  <p>
                    A 4 digit OTP code has been sent to your <br /> phone number{" "}
                    <a
                      style={{ textDecoration: "none" }}
                      className="color-yellow"
                      href="tel:+123456789"
                    >
                      +123456789
                    </a>
                  </p>
                </Box>

                <Box className="enter-otp-title mb-5">
                  <label htmlFor="phone-otp">Enter the phone OTP code</label>
                  <Box className="phone-otp mt-3">
                    <div className="phone-otp-flex">
                      <OTPInput
                        value={OTP}
                        onChange={setOTP}
                        autoFocus
                        OTPLength={4}
                        otpType="number"
                        disabled={false}
                        secure
                        inputStyles={{
                          width: "70px",
                          height: "70px",
                          fontSize: "2rem",
                          borderRadius: "5px",
                          border: "1px solid #ff9924",
                        }}
                      />
                    </div>
                  </Box>
                </Box>

                <div className="mt-5 mb-3">
                  <p>
                    Made a mistake in your phone number or <br /> email address?{" "}
                    <Link
                      className="color-yellow"
                      style={{ background: "none", border: "none" }}
                      to="/change-phone"
                    >
                      click here
                    </Link>
                  </p>
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <p>
                    If you can't get an OTP code kindly{" "}
                    <a style={{ color: "#ff9924", textDecoration: 'none' }} href="/">
                      resend
                    </a>{" "}
                  </p>
                </div>

                <div
                  style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}
                >
                  <div>
                    <input
                      type="submit"
                      value="confirm"
                      className="otp-submit btn"
                    />
                  </div>

                  <Box>
                    <button
                      style={{
                        border: "1px solid #ff9924",
                        background: "transparent",
                      }}
                      type="submit"
                      className="btn otp-submit"
                    >
                      Back
                    </button>
                  </Box>
                </div>

                <h6>Note: The OTP code expires in 2 minutes</h6>
              </form>
            </Box>
          </Box>
        </Box>
      </motion.div>
    );
  }

  if (window.innerWidth <= 820) {
    return (
      <Box>
        <Header />
        <Box>
          <Helmet>
            <title>OTP Verification</title>
            <meta name="description" content="App Description" />
            <meta name="theme-color" content="#008f68" />
            <body class="mobile-background" />
          </Helmet>
        </Box>

        <Box
          style={{
            marginTop: "6rem",
            fontFamily: "Poppins",
            textAlign: "center",
          }}
        >
          <h6
            style={{
              color: "white",
              lineHeight: "40px",
              fontSize: "24px",
              fontWeight: "600",
            }}
            className="text-center mb-3 mt-4"
          >
            Phone verification
          </h6>

          <Box
            style={{ width: "90vw", margin: "0 auto", paddingBottom: "5rem" }}
          >
            <Box className="p-2" style={{ background: "white" }}>
              <Box style={{ padding: "2rem 1rem" }}>
                <form>
                  <Box className="otp-number-div mb-5">
                    {/* <h6 className="otp-title">Email and Phone Verification</h6> */}
                    <p>
                      A 4 digit OTP code has been sent to your mail
                      <a
                        style={{ marginRight: "6px" }}
                        className="color-yellow"
                        href="mailto:bitkash@gmail.com"
                      >
                        bitkash@gmail.com
                      </a>
                      and phone number{" "}
                      <a className="color-yellow" href="tel:+123456789">
                        +123456789
                      </a>
                    </p>
                  </Box>

                  <Box className="enter-otp-title mb-5">
                    <label htmlFor="phone-otp">Enter the phone OTP code</label>
                    <Box className="phone-otp mt-3">
                      <form>
                        <div className="phone-otp-flex"></div>
                      </form>
                    </Box>
                  </Box>

                  <Box className="enter-otp-title">
                    <label htmlFor="phone-otp">Enter the Email OTP code</label>
                    <Box className="phone-otp mt-3">
                      <div className="phone-otp-flex">
                        {/* {otp2.map((data, index) => {
                          return (
                            <input
                              type="text"
                              name="otp"
                              maxLength="1"
                              className="input-otp"
                              key={index}
                              value={data}
                              onFocus={(e) => e.target.select()}
                              onChange={(e) => handleChange2(e.target, index)}
                            />
                          );
                        })} */}
                      </div>
                    </Box>
                  </Box>

                  <div className="mt-5 mb-3">
                    <p>
                      Made a mistake in your phone number or <br /> email
                      address?{" "}
                      <button
                        className="color-yellow"
                        style={{ background: "none", border: "none" }}
                      >
                        click here
                      </button>
                    </p>
                  </div>

                  <Box>
                    <input
                      type="submit"
                      value="Submit"
                      className="btn otp-submit"
                    />
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default EmailAndPhone;
