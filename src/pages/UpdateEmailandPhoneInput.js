import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./register.css";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import "./emailandphone.css";
import { Field, Form, Formik } from "formik";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const UpdateEmailAndPhoneInput = ({ children }) => {
  const initialValues = {
    email: "",
    phoneNumber: "",
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "Enter your phone number";
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
              <Formik>
                {(formik) => {
                  const {
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    handleBlur,
                    isValid,
                    dirty,
                  } = formik;

                  return (
                    <Form initialValues={initialValues} validate={validate}>
                      <Box className="update-phone-email">
                        <Box>
                          <h6>Email and Phone Verification</h6>
                          <p>
                            A 4 digit OTP code has been sent to your mail{" "}
                            <a className="color-yellow" href="mailto:">
                              bitkash@gmail.com
                            </a>
                            and phone numnber{" "}
                            <a className="color-yellow" href="tel:+1234567890">
                              +1234567890
                            </a>
                          </p>
                        </Box>

                        <Box>
                          <label
                            className="mb-3 mt-4"
                            htmlFor="email-address-otp"
                          >
                            Email address
                          </label>
                          <Field
                            type="email"
                            className="form-control"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{ marginBottom: "30px" }}
                          />

                          <label className="mb-3" htmlFor="email-address-otp">
                            Phone Number
                          </label>
                          <Field
                            type="number"
                            className="form-control mb-5"
                            name="phoneNumber"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />

                          <button className="update-otp-submit" type="submit">
                            Update
                          </button>
                        </Box>
                      </Box>
                    </Form>
                  );
                }}
              </Formik>
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

        <Box style={{ marginTop: "6rem", fontFamily: "Poppins" }}>
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

          <Box style={{ width: "90vw", margin: "0 auto" }}>
            <Box className="p-2" style={{ background: "white", borderRadius: '10px' }}>
              <Box style={{ padding: "2rem 1rem" }}>
                <Formik>
                  {(formik) => {
                    const {
                      values,
                      handleChange,
                      handleSubmit,
                      errors,
                      touched,
                      handleBlur,
                      isValid,
                      dirty,
                    } = formik;

                    return (
                      <Form initialValues={initialValues} validate={validate}>
                        <Box className="">
                          <Box>
                            {/* <h6>Email and Phone Verification</h6> */}
                            <p>
                              A 4 digit OTP code has been sent to your mail{" "}
                              <a className="color-yellow" href="mailto:">
                                bitkash@gmail.com
                              </a>
                              and phone numnber{" "}
                              <a
                                className="color-yellow"
                                href="tel:+1234567890"
                              >
                                +1234567890
                              </a>
                            </p>
                          </Box>

                          <Box>
                            <label
                              className="mb-3 mt-4"
                              htmlFor="email-address-otp"
                            >
                              Email address
                            </label>
                            <Field
                              type="email"
                              className="form-control"
                              name="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              style={{ marginBottom: "30px" }}
                            />

                            <label className="mb-3" htmlFor="email-address-otp">
                              Phone Number
                            </label>
                            <Field
                              type="number"
                              className="form-control mb-5"
                              name="phoneNumber"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />

                            <button className="update-otp-submit" type="submit">
                              Update
                            </button>
                          </Box>
                        </Box>
                      </Form>
                    );
                  }}
                </Formik>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default UpdateEmailAndPhoneInput;
