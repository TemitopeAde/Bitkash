import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./register.css";
import { motion } from "framer-motion";
import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";
import { Field, ErrorMessage } from "formik";
import "antd/dist/antd.css";
import "antd-country-phone-input/dist/index.css";

const animations = {
  initial: { opacity: 0, x: 1000 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -1000 },
};

const Register1 = ({
  dirty,
  isValid,
  touched,
  values,
  errors,
  handleBlur,
  handleChange,
  children,
  setForm,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  console.log(isValid)

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
    >
      <Box style={{ paddingBottom: "5rem" }} className="register-content">
        <Container>
          <Box position="relative">
            <Box className="register-form" id="form1">
              <p className="step-one mb-3">Step 1 of 2</p>
              <p className="step-one-title mb-5">Personal Details</p>

              <Box className="register-form-grid">
                <Box className="register-grid">
                  <div className="register-row">
                    <div className="register-name">
                      <label htmlFor="first-name">First name</label>
                      <Field
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.firstName && touched.firstName
                            ? "input-error form-control"
                            : "form-control"
                        }
                        id="first-name"
                        type="text"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="span"
                        className="error"
                      />
                    </div>
                    <div className="register-last-name">
                      <label htmlFor="last-name">Last name</label>
                      <Field
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.lastName && touched.lastName
                            ? "input-error form-control"
                            : "form-control"
                        }
                        name="lastName"
                        id="last-name"
                        type="text"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="span"
                        className="error"
                      />
                    </div>
                  </div>
                  <div className="register-row">
                    <div className="register-name">
                      <label htmlFor="register-email-address">Email</label>
                      <Field
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.email && touched.email
                            ? "input-error form-control"
                            : "form-control"
                        }
                        id="register-email-address"
                        type="email"
                      />

                      <ErrorMessage
                        name="email"
                        component="span"
                        className="error"
                      />
                    </div>
                    <div className="register-last-name">
                      <label htmlFor="register-phone">Phone</label>

                      <ConfigProvider locale={en}>
                        <CountryPhoneInput
                          // className="form-control"
                         
                          id="register-phone"
                          name="phoneNumber"
                          
                        />
                        
                      </ConfigProvider>
                    </div>
                  </div>
                  <div className="register-row">
                    <div className="register-name">
                      <label htmlFor="register-password">Password</label>

                      <Box position="relative">
                        <Field
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.password && touched.password
                              ? "input-error form-control"
                              : "form-control"
                          }
                          type={passwordShown ? "text" : "password"}
                          id="register-password"
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
                    </div>
                    <div className="register-last-name">
                      <label htmlFor="regsiter-confirm-password">
                        Confirm password
                      </label>

                      <Box position="relative">
                        <Field
                          name="password2"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.password2 && touched.password2
                              ? "input-error form-control"
                              : "form-control"
                          }
                          type={passwordShown ? "text" : "password"}
                          id="regsiter-confirm-password"
                        />
                        <ErrorMessage
                          name="password2"
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
                    </div>
                  </div>
                  <div className="register-row">
                    <div className="register-name">
                      <label htmlFor="register-currency">Currency</label>
                      <Field
                        as="select"
                        name="currency"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.currency && touched.currency
                            ? "input-error form-control"
                            : "form-control"
                        }
                        id="register-currency"
                      >
                        <option>EUR</option>
                        <option>USD</option>
                      </Field>
                      <ErrorMessage
                        name="currency"
                        component="span"
                        className="error"
                      />
                    </div>
                    <div className="register-last-name">
                      <label htmlFor="register-language">
                        Preffered language
                      </label>
                      <Field
                        as="select"
                        name="language"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.language && touched.language
                            ? "input-error form-control"
                            : "form-control"
                        }
                        id="register-language"
                      >
                        <option>ENG</option>
                        <option>FRA</option>
                      </Field>
                      <ErrorMessage
                        name="language"
                        component="span"
                        className="error"
                      />
                    </div>
                  </div>
                  <div className="mt-3 register-next">
                    <button
                      // className="btn btn-lg"
                      type="button"
                      className={
                        isValid
                          ? "btn btn-lg"
                          : "disabled-btn btn btn-lg"
                      }
                      disabled={!(isValid)}
                      
                      onClick={() => setForm(2)}
                    >
                      Next
                    </button>
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Register1;
