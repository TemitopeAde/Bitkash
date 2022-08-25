import React, { useState } from "react";
import { Box } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { showLoader, hideLoader, login } from "../state/action-creators";
import Header from "../components/Header";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import logo from "../assets/icons/header-white.png";
import "../components/Auth/auth.css";
import Spinner from "../components/Spinner";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Login = ({ children }) => {
  const initialValues = {
    email: "adesiyantope2014@gmail.com",
    password: "",
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password length is too short";
    }

    return errors;
  };

  const dispatch = useDispatch();

  const submitForm = (values) => {
    // dispatch(showLoader());
    dispatch(login(values));
    // setTimeout(() => {
    //   dispatch(hideLoader());
    //   console.log("loading...");
    // }, 4000);
  };

  const [passwordShown, setPasswordShown] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.loader.loading);
  console.log(loading);

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  if (loading) {
    return <Spinner />;
  }

  if (isAuthenticated) {
    return <Navigate to="/buy" />
  }

  if (!isAuthenticated) {
    return (
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8 }}
      >
        <Helmet>
          <title>Login</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>

        <Box className="register-page web-register-page">
          <Box position="relative">
            <Box className="register-sidebar">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>

              <Box className="register-title">
                <h3>Sign up</h3>
              </Box>
            </Box>

            <Box className="register-content-form">
              <Box
                style={{ paddingBottom: "5rem" }}
                className="register-content"
              >
                <Container>
                  <Box position="relative">
                    <Box className="register-form">
                      <h6
                        className="mb-5"
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: "600",
                          fontSize: "20px",
                        }}
                      >
                        Login
                      </h6>

                      <Formik
                        initialValues={initialValues}
                        validate={validate}
                        onSubmit={submitForm}
                      >
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
                            <Form>
                              <Box sx={{ marginBottom: "23px" }}>
                                <label htmlFor="email">Email</label>
                                <Field
                                  type="email"
                                  // className="form-control"
                                  name="email"
                                  value={values.email}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    errors.email && touched.email
                                      ? "input-error form-control"
                                      : "form-control"
                                  }
                                />
                                <ErrorMessage
                                  name="email"
                                  component="span"
                                  className="error"
                                />
                              </Box>
                              <label htmlFor="password">Password</label>
                              <Box position="relative">
                                <Field
                                  type={passwordShown ? "text" : "password"}
                                  // className="form-control"
                                  name="password"
                                  value={values.password}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    errors.email && touched.email
                                      ? "input-error form-control"
                                      : "form-control"
                                  }
                                />
                                <ErrorMessage
                                  name="password"
                                  component="span"
                                  className="error"
                                />
                                <Box
                                  position="absolute"
                                  sx={{ right: "20px", top: "13px" }}
                                >
                                  {passwordShown ? (
                                    <button
                                      style={{
                                        background: "none",
                                        outline: "none",
                                        border: "none",
                                      }}
                                      onClick={togglePassword}
                                    >
                                      <AiFillEye />
                                    </button>
                                  ) : (
                                    <button
                                      style={{
                                        background: "none",
                                        outline: "none",
                                        border: "none",
                                      }}
                                      onClick={togglePassword}
                                    >
                                      <AiFillEyeInvisible />
                                    </button>
                                  )}
                                </Box>
                              </Box>

                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  gap: "30%",
                                  marginTop: "23px",
                                }}
                                className="login-button-box"
                              >
                                <button
                                  onClick={() => handleSubmit}
                                  type="submit"
                                  // className="btn-lg btn btn-wide"
                                  className={
                                    dirty && isValid
                                      ? "btn login-btn"
                                      : "login-btn disabled-btn"
                                  }
                                  disabled={!(dirty && isValid)}
                                  style={{ flexBasis: "35%" }}
                                >
                                  Log in
                                </button>

                                <Box
                                  style={{
                                    flexBasis: "35%",
                                    textAlign: "end",
                                    fontSize: "18px",
                                    lineHeight: "27px",
                                  }}
                                >
                                  <Box
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "10px",
                                      justifyContent: "end",
                                    }}
                                  >
                                    <input
                                      style={{ transform: "scale(1)" }}
                                      type="checkbox"
                                      id="remember-me"
                                    />
                                    <label
                                      style={{ marginBottom: "0" }}
                                      htmlFor="remember-me"
                                    >
                                      Remember me
                                    </label>
                                  </Box>
                                </Box>
                              </Box>

                              <div className="mt-5">
                                <p style={{ fontSize: "16px" }}>
                                  Don't have an account?{" "}
                                  <Link
                                    style={{
                                      fontSize: "16px",
                                      color: "#FF9924",
                                      textDecoration: "none",
                                    }}
                                    to="/register"
                                  >
                                    Sign up
                                  </Link>
                                </p>
                              </div>
                            </Form>
                          );
                        }}
                      </Formik>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    );
  }
};

export default Login;
