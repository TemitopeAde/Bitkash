import React from "react";
import { Box } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import "../components/Auth/auth.css";
import { changeEmail } from "../state/action-creators";
import Spinner from "../components/Spinner";
import AuthHeader from "../components/AuthHeader";

const animations = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const ChangeEmail = () => {
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }

    return errors;
  };

  const dispatch = useDispatch();
  const loader = useSelector((state) => state.loader.loading);
  const recover = useSelector((state) => state.recover.recovered);
  const message = useSelector((state) => state.auth.message);
  const width = window.innerWidth;

  const initialValues = {
    email: "",
  };

  const submitForm = (values) => {
    const payload = {
      email: values.email,
      uid: localStorage.getItem("uid"),
    };

    dispatch(changeEmail(payload));
  };

  if (loader) {
    return <Spinner />;
  }

  if (recover) {
    return <Navigate to="/password-reset-link-sent" />;
  }

  if (width > 820) {
    return (
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8 }}
      >
        <Helmet>
          <title>Change Email</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>

        <Box className="register-page">
          <Box position="relative">
            <Box className="register-sidebar">
              <Box className="register-title">
                <h3>
                  Update <br />
                  Email
                </h3>
              </Box>
            </Box>

            <Box className="otp-register register-content-form">
              <Box className="register-content">
                <h6 className="mb-5 title-auth">Update Email</h6>

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
                            className={
                              dirty && isValid
                                ? "btn login-btn"
                                : "login-btn disabled-btn"
                            }
                            disabled={!(dirty && isValid)}
                            style={{ flexBasis: "35%" }}
                          >
                            Change
                          </button>
                        </Box>
                      </Form>
                    );
                  }}
                </Formik>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    );
  }

  if (width <= 820) {
    return (
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
      >
        <Helmet>
          <title>Sign up</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
          <body class="mobile-background" />
        </Helmet>

        <div className="mobile-register-page">
          <AuthHeader />
          <Box>
            <Box mt="8rem">
              <h3>Update Email</h3>

              <Box>
                <Box
                  className="mobile-register-form active login-form"
                  style={{ padding: "3rem 1.5rem" }}
                >
                  {message && (
                    <div className="error-container">
                      <h6 className="error-message">{message}</h6>
                    </div>
                  )}

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
                              className={
                                dirty && isValid
                                  ? "btn login-btn"
                                  : "login-btn disabled-btn"
                              }
                              disabled={!(dirty && isValid)}
                              style={{ flexBasis: "35%" }}
                            >
                              Update
                            </button>
                          </Box>
                        </Form>
                      );
                    }}
                  </Formik>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </motion.div>
    );
  }
};

export default ChangeEmail;
