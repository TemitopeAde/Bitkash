import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./register.css";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import "./emailandphone.css";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const EmailAndPhone = ({ children }) => {
  const form = useRef();

  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [otp2, setOtp2] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleChange2 = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp2([...otp2.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  if (window.innerWidth > 820) {
    return (
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8 }}
      >
        <Header />
        <Box className="register-page">
          <Box position="relative">
            <Box className="register-sidebar">
              <Box className="register-title">{/* <h3>Sign up</h3> */}</Box>
            </Box>

            <Box className="otp-register register-content-form">
              <form>
                <Box className="otp-number-div mb-5">
                  <h6 className="otp-title">Email and Phone Verification</h6>
                  <p>
                    A 4 digit OTP code has been sent to your mail <br />
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
                              onChange={(e) => handleChange(e.target, index)}
                            />
                          );
                        })}
                      </div>
                    </form>
                  </Box>
                </Box>

                <Box className="enter-otp-title">
                  <label htmlFor="phone-otp">Enter the Email OTP code</label>
                  <Box className="phone-otp mt-3">
                    <div className="phone-otp-flex">
                      {otp2.map((data, index) => {
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
                      })}
                    </div>
                  </Box>
                </Box>

                <div className="mt-5 mb-3">
                  <p>
                    Made a mistake in your phone number or <br /> email address?{" "}
                    <button
                      onClick={() => {
                        setOtp(new Array(4).fill(""));
                        setOtp2(new Array(4).fill(""));
                      }}
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
      </motion.div>
    );
  }

  if (window.innerWidth <= 820) {
    return (
      <Box>
        <Header />
        <Box>
          <Helmet>
            <title>Sign up</title>
            <meta name="description" content="App Description" />
            <meta name="theme-color" content="#008f68" />
            <body class="mobile-background" />
          </Helmet>
        </Box>

        <Box style={{  marginTop: "6rem", fontFamily: 'Poppins', textAlign: 'center' }}>
          <h6
            style={{
              color: "white",
              lineHeight: "40px",
              fontSize: "24px",
              fontWeight: "600",
            }}
            className="text-center mb-3 mt-4"
          >
            Email and phone <br /> verification
          </h6>

          <Box style={{ width: "90vw", margin: "0 auto", paddingBottom: '5rem' }}>
            <Box className="p-2" style={{ background: "white" }}>
              <Box style={{padding: '2rem 1rem'}}>
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
                                onChange={(e) => handleChange(e.target, index)}
                              />
                            );
                          })}
                        </div>
                      </form>
                    </Box>
                  </Box>

                  <Box className="enter-otp-title">
                    <label htmlFor="phone-otp">Enter the Email OTP code</label>
                    <Box className="phone-otp mt-3">
                      <div className="phone-otp-flex">
                        {otp2.map((data, index) => {
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
                        })}
                      </div>
                    </Box>
                  </Box>

                  <div className="mt-5 mb-3">
                    <p>
                      Made a mistake in your phone number or <br /> email
                      address?{" "}
                      <button
                        onClick={() => {
                          setOtp(new Array(4).fill(""));
                          setOtp2(new Array(4).fill(""));
                        }}
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
