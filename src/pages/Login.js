import React, { useState } from "react";
import { Box } from "@mui/material";
import "../components/Auth/auth.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Login = ({ children }) => {
  const initialValues = {
    email: "",
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

  const submitForm = (values) => {
    console.log(values);
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
    >
      <Box>
        <Header />
        <Box className="login">
          <Box className="login-wrap">
            <Box className="login-box p-5">
              <h3 className="text-center login-title">Login</h3>
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
                          sx={{ right: "20px", top: "7px" }}
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

                      <Box className="d-flex justify-content-center">
                        <button
                          onClick={() => handleSubmit}
                          type="submit"
                          // className="btn-lg btn btn-wide"
                          className={
                            dirty && isValid
                              ? "btn btn-wide login-btn"
                              : "disabled-btn btn btn-wide login-btn"
                          }
                          disabled={!(dirty && isValid)}
                        >
                          Login
                        </button>
                      </Box>

                      <Box
                        className="mt-4 mb-4"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box
                          gap="8px"
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <input
                            style={{ transform: "scale(1)" }}
                            type="checkbox"
                            id="remember-me"
                          />
                          <label
                            style={{ fontSize: "0.8rem" }}
                            htmlFor="remember-me"
                          >
                            Remember me
                          </label>
                        </Box>
                        <Box>
                          <Link
                            style={{ fontSize: "0.8rem", color: "#FF9924" }}
                            to="/recover-password"
                          >
                            Forgot password?
                          </Link>
                        </Box>
                      </Box>

                      <div className="mt-3">
                        <p style={{ fontSize: "0.8rem" }}>
                          Don't have an account?{" "}
                          <Link
                            style={{
                              fontSize: "0.8rem",
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
        </Box>
      </Box>
    </motion.div>
  );
};

export default Login;
