import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import OTPInput from "otp-input-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, submitOTP, verifyEmail} from "../state/action-creators";

import "./register.css";
import Header from "../components/Header";
import "./emailandphone.css";
import Spinner from "../components/Spinner";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const EmailAndPhone = ({ children }) => {
  const [Otp, setOtp] = useState("");
  const [phoneNumber] = useState("");
  // const userDetails = JSON.parse(localStorage.getItem("user"));
  const verified = useSelector((state) => state.auth.phoneAndEmailVerified);
  const message = useSelector((state) => state.auth.message);
  const loading = useSelector((state) => state.loader.loading);
  console.log(verified);
  
  const handleSendOtp = (e) => {
    e.preventDefault();
    dispatch(sendOtp(uid));
  };

  
  
  const { uid } = useParams();
  console.log(uid);
  
  const dispatch = useDispatch();
  const payload = {
    token: Otp,
    uid: uid,
  };

  const submitToken = (e) => {
    e.preventDefault();
    dispatch(submitOTP(payload));
  };

  useEffect(() => {
    dispatch(sendOtp(uid));
    dispatch(verifyEmail(uid));
  }, []);


  if (loading) {
    return <Spinner />;
  }

  if (verified) {
    return <Navigate to="/login" />;
  }

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
              {message && (
                <div className="error-wrap">
                  <button disabled>{message}</button>
                </div>
              )}
              <form>
                <Box className="otp-number-div mb-5">
                  <h6 className="otp-title">Phone Verification</h6>
                  <p>
                    A 4 digit OTP code has been sent to your phone number <br />
                    <span
                      style={{ textDecoration: "none" }}
                      className="color-yellow"
                    >
                      {/* {userDetails?.phone_number} */}
                    </span>
                  </p>
                </Box>

                <Box className="enter-otp-title mb-5">
                  <label htmlFor="phone-otp">Enter the phone OTP code</label>
                  <Box className="phone-otp mt-3">
                    <div className="phone-otp-flex">
                      <OTPInput
                        value={Otp}
                        onChange={setOtp}
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

                <div className="mt-3 mb-3">
                  <p>
                    Gave us the wrong number? No problem! <br />
                    <Link
                      className="color-yellow"
                      style={{ background: "none", border: "none" }}
                      to="/update-phone"
                    >
                      click here
                    </Link>
                  </p>
                </div>

                <div
                  style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}
                >
                  <div>
                    <input
                      type="submit"
                      value="Submit"
                      className="otp-submit btn"
                      onClick={submitToken}
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

                <div style={{ marginBottom: "2rem" }}>
                  <p>
                    Didn't get an OTP?{" "}
                    <button
                      style={{
                        color: "#ff9924",
                        textDecoration: "none",
                        background: "none",
                        border: "none",
                      }}
                    >
                      Send Again
                    </button>
                  </p>
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
            <title>Phone verification</title>
            <meta name="description" content="App Description" />
            <meta name="theme-color" content="#008f68" />
            <body class="mobile-background" />
          </Helmet>
        </Box>

        <Box
          style={{
            marginTop: "8rem",
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
              marginBottom: "3rem",
            }}
            className="text-center"
          >
            Phone verification
          </h6>

          <Box
            style={{
              width: "90vw",
              margin: "0 auto",
              paddingBottom: "5rem",
              textAlign: "left",
            }}
          >
            <Box
              className="p-2"
              style={{ background: "white", borderRadius: "10px" }}
            >
              <Box style={{ padding: "2rem 1rem" }}>
                <form>
                  <Box className="otp-number-div mb-5">
                    <p>
                      A 4 digit OTP code has been sent to your mail phone number{" "}
                      <span className="color-yellow">{phoneNumber}</span>
                    </p>
                  </Box>

                  <Box className="enter-otp-title mb-5">
                    <label htmlFor="phone-otp">Enter the phone OTP code</label>

                    <Box className="phone-otp mt-3">
                      <div className="phone-otp-flex">
                        <OTPInput
                          value={Otp}
                          onChange={setOtp}
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

                  <div className="mt-3 mb-3">
                    <p style={{ margin: 0 }}>
                      Made a mistake in your phone number or email address?
                    </p>

                    <Link
                      to="/"
                      className="color-yellow"
                      style={{ background: "none", border: "none" }}
                    >
                      click here
                    </Link>
                  </div>

                  <div>
                    <button
                      style={{
                        width: "129px",
                        height: "40px",
                        background: "#FF9924",
                        border: "1px solid #FC8218",
                        borderRadius: " 5px",
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        color: "#000000",
                        outline: "none",
                      }}
                      onClick={submitOTP}
                    >
                      Submit
                    </button>
                  </div>

                  <div className="mt-3 mb-3">
                    <p style={{ margin: 0 }}>
                      if you can’t get an OTP code Kindly
                    </p>

                    <button
                      className="color-yellow"
                      style={{ background: "none", border: "none" }}
                      onClick={handleSendOtp}
                    >
                      resend
                    </button>
                  </div>

                  <div className="mt-3 mb-3">
                    <p style={{ margin: 0 }}>
                      Note: The OTP code expires in <br /> 2 minutes
                    </p>
                  </div>
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
