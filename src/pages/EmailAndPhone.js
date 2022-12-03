import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
<<<<<<< HEAD
import OTPInput, { ResendOTP } from "otp-input-react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendOtp } from "../state/action-creators";
=======
import OTPInput from "otp-input-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, submitOTP, verifyEmail} from "../state/action-creators";
>>>>>>> master

import "./register.css";
import Header from "../components/Header";
import "./emailandphone.css";
<<<<<<< HEAD
import axios from "axios";
=======
import Spinner from "../components/Spinner";
>>>>>>> master

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const EmailAndPhone = ({ children }) => {
<<<<<<< HEAD
  const [OTP, setOTP] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  console.log(phoneNumber);

  const { uid } = useParams();
  const dispatch = useDispatch();

  const fetchUser = async () => {
    const url = `https://bitkash.herokuapp.com/user/${uid}`;
    
    await axios
      .get(url)
      .then((data) => {
        setPhoneNumber(data.data.data.phone);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  useEffect(() => {
    fetchUser();
    dispatch(sendOtp(uid));
  }, [uid]);
=======
  const [Otp, setOtp] = useState("");
  const [phoneNumber] = useState("");
  // const userDetails = JSON.parse(localStorage.getItem("user"));
  const verified = useSelector((state) => state.auth.phoneAndEmailVerified);
  const loading = useSelector((state) => state.loader.loading);
  
  
  const handleSendOtp = (e) => {
    e.preventDefault();
    dispatch(sendOtp(uid));
  };

  
  const { uid } = useParams();
  
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
>>>>>>> master

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
<<<<<<< HEAD
                    A 4 digit OTP code has been sent to your <br /> phone number{" "}
                    <span
                      style={{ textDecoration: "none" }}
                      className="color-yellow"

                    >
                      {phoneNumber}
=======
                    A 4 digit OTP code has been sent to your phone number <br />
                    <span
                      style={{ textDecoration: "none" }}
                      className="color-yellow"
                    >
                      {/* {userDetails?.phone_number} */}
>>>>>>> master
                    </span>
                  </p>
                </Box>

                <Box className="enter-otp-title mb-5">
                  <label htmlFor="phone-otp">Enter the phone OTP code</label>
                  <Box className="phone-otp mt-3">
                    <div className="phone-otp-flex">
                      <OTPInput
<<<<<<< HEAD
                        value={OTP}
                        onChange={setOTP}
=======
                        value={Otp}
                        onChange={setOtp}
>>>>>>> master
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

<<<<<<< HEAD
                <div className="mt-5 mb-3">
                  <p>
                    Made a mistake in your phone number or <br /> email address?{" "}
=======
                <div className="mt-3 mb-3">
                  <p>
                    Gave us the wrong number? No problem! <br />
>>>>>>> master
                    <Link
                      className="color-yellow"
                      style={{ background: "none", border: "none" }}
                      to="/update-phone"
                    >
                      click here
                    </Link>
                  </p>
                </div>

<<<<<<< HEAD
                <div style={{ marginBottom: "2rem" }}>
                  <p>
                    If you can't get an OTP code kindly{" "}
                    <a
                      style={{ color: "#ff9924", textDecoration: "none" }}
                      href="/"
                    >
                      resend
                    </a>{" "}
                  </p>
                </div>

=======
>>>>>>> master
                <div
                  style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}
                >
                  <div>
                    <input
                      type="submit"
<<<<<<< HEAD
                      value="confirm"
                      className="otp-submit btn"
=======
                      value="Submit"
                      className="otp-submit btn"
                      onClick={submitToken}
>>>>>>> master
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

<<<<<<< HEAD
=======
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

>>>>>>> master
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
<<<<<<< HEAD
            <title>OTP Verification</title>
=======
            <title>Phone verification</title>
>>>>>>> master
            <meta name="description" content="App Description" />
            <meta name="theme-color" content="#008f68" />
            <body class="mobile-background" />
          </Helmet>
        </Box>

        <Box
          style={{
<<<<<<< HEAD
            marginTop: "6rem",
=======
            marginTop: "8rem",
>>>>>>> master
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
<<<<<<< HEAD
            }}
            className="text-center mb-3 mt-4"
=======
              marginBottom: "3rem",
            }}
            className="text-center"
>>>>>>> master
          >
            Phone verification
          </h6>

          <Box
<<<<<<< HEAD
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
=======
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
>>>>>>> master
                    </p>
                  </Box>

                  <Box className="enter-otp-title mb-5">
                    <label htmlFor="phone-otp">Enter the phone OTP code</label>
<<<<<<< HEAD
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
=======

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
>>>>>>> master
                      </div>
                    </Box>
                  </Box>

<<<<<<< HEAD
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
=======
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
>>>>>>> master
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
