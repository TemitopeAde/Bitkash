import { Box } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link, Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submitNewPassword } from "../state/action-creators";
import Spinner from "../components/Spinner";
import AuthHeader from "../components/AuthHeader";

const animations = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

const RecoverPasswordConfirm = () => {
  const validate = (values) => {
    let errors = {};

    if (!values.password) {
      errors.password = "Enter your password";
    } else if (values.password.length < 6) {
      errors.password = "Password too short";
    }

    if (!values.password2) {
      errors.password2 = "Enter confirm password";
    } else if (values.password2 < 6) {
      errors.password2 = "Password is too short";
    } else if (values.password !== values.password2) {
      errors.password2 = "Passwords do not match";
    }

    return errors;
  };

  const { token, id } = useParams();
  console.log(token);

  const initialValues = {
    password: "",
    password2: "",
  };

  const width = window.innerWidth;

  const dispatch = useDispatch();
  const message = useSelector((state) => state.auth.message);
  const submitSuccess = useSelector(
    (state) => state.recover.submitNewPassoword
  );
  const loading = useSelector((state) => state.loader.loading);

  const submitForm = (values) => {
    const payload = {
      password: values.password,
      token: token,
      id: id,
    };

    dispatch(submitNewPassword(payload));
  };

  console.log(message);

  if (loading) {
    return <Spinner />;
  }

  if (submitSuccess) {
    return <Navigate to="/login" />;
  }

  if (width > 820) {
    return (
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
      >
        <Helmet>
          <title>Recover password</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>

        <Box className="register-page">
          <Box position="relative">
            <Box className="register-sidebar">
              <Box className="register-title">
                <h3>
                  Recover <br />
                  Password
                </h3>
              </Box>
            </Box>

            <Box className="otp-register register-content-form">
              <Box className="register-content">
                <h6 className="mb-5 title-auth">Recover password</h6>
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
                          <label htmlFor="email">Password</label>
                          <Field
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.password && touched.password
                                ? "input-error form-control"
                                : "form-control"
                            }
                          />
                          <ErrorMessage
                            name="password"
                            component="span"
                            className="error"
                          />
                        </Box>

                        <Box sx={{ marginBottom: "23px" }}>
                          <label htmlFor="email">Confirm new password</label>
                          <Field
                            type="password"
                            name="password2"
                            value={values.password2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.password2 && touched.password2
                                ? "input-error form-control"
                                : "form-control"
                            }
                          />
                          <ErrorMessage
                            name="password2"
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
                            Submit
                          </button>
                        </Box>
                      </Form>
                    );
                  }}
                </Formik>

                <Box mt="3rem" sx={{ textAlign: "center" }}>
                  <p>
                    Don’t have an account?{" "}
                    <Link
                      style={{ textDecoration: "none", color: "#ff9924" }}
                      to="/register"
                    >
                      Sign up
                    </Link>
                  </p>
                </Box>
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
          <title>Recover password</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
          <body class="mobile-background" />
        </Helmet>

        <div className="mobile-register-page">
          <AuthHeader />
          <Box>
            <Box mt="8rem">
              <h3>New password</h3>
              {message && (
                  <div className="error-container">
                    <h6 className="error-message">{message}</h6>
                  </div>
                )}
              <Box>
                <Box
                  className="mobile-register-form active"
                  style={{ padding: "3rem 1.5rem" }}
                >
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
                            <label htmlFor="email">Enter new password</label>
                            <Field
                              type="password"
                              name="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                errors.password && touched.password
                                  ? "input-error form-control"
                                  : "form-control"
                              }
                            />
                            <ErrorMessage
                              name="password"
                              component="span"
                              className="error"
                            />
                          </Box>

                          <Box sx={{ marginBottom: "23px" }}>
                            <label htmlFor="email">Confirm new password</label>
                            <Field
                              type="password"
                              name="password2"
                              value={values.password2}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                errors.password2 && touched.password2
                                  ? "input-error form-control"
                                  : "form-control"
                              }
                            />
                            <ErrorMessage
                              name="password2"
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
                              Submit
                            </button>
                          </Box>
                        </Form>
                      );
                    }}
                  </Formik>

                  <Box mt="1rem" className="text-center">
                    <p style={{ fontSize: "16px", fontWeight: "400" }}>
                      Back to{" "}
                      <Link
                        to="/login"
                        style={{ color: "#ff9924", textDecoration: "none" }}
                      >
                        login
                      </Link>
                    </p>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </motion.div>
    );
  }
};

export default RecoverPasswordConfirm;
