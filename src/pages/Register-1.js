import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./register.css";
import { motion } from "framer-motion";
import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";

import "antd/dist/antd.css";
import "antd-country-phone-input/dist/index.css";

const animations = {
  initial: { opacity: 0, x: 1000 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -1000 },
};

const Register1 = ({ setform, children }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [value, setValue] = useState();

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
      <Box style={{ paddingBottom: "5rem" }} className="px-5 register-content">
        <Container>
          <Box position="relative">
            <Box className="register-form" id="form1">
              <p className="step-one mb-3">Step 1 of 2</p>
              <p className="step-one-title mb-5">Personal Details</p>
              <form onSubmit={() => setform(2)}>
                <Box className="register-form-grid">
                  <Box className="register-grid">
                    <div className="register-row">
                      <div className="register-name">
                        <label htmlFor="first-name">First name</label>
                        <input
                          id="first-name"
                          type="text"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="register-last-name">
                        <label htmlFor="last-name">Last name</label>
                        <input
                          id="last-name"
                          type="text"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="register-row">
                      <div className="register-name">
                        <label htmlFor="register-email-address">Email</label>
                        <input
                          id="register-email-address"
                          type="email"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="register-last-name">
                        <label htmlFor="register-phone">Phone</label>

                        <ConfigProvider locale={en}>
                          <CountryPhoneInput />
                        </ConfigProvider>
                      </div>
                    </div>
                    <div className="register-row">
                      <div className="register-name">
                        <label htmlFor="register-password">Password</label>

                        <Box position="relative">
                          <input
                            type={passwordShown ? "text" : "password"}
                            className="form-control"
                            id="register-password"
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
                          <input
                            type={passwordShown ? "text" : "password"}
                            className="form-control"
                            id="regsiter-confirm-password"
                            required
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
                        <select className="form-control" id="register-currency">
                          <option>EUR</option>
                          <option>USD</option>
                        </select>
                      </div>
                      <div className="register-last-name">
                        <label htmlFor="register-language">
                          Preffered language
                        </label>
                        <select className="form-control" id="register-language">
                          <option>ENG</option>
                          <option>FRA</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-3 register-next">
                      <button className="btn btn-lg" type="submit">
                        Next
                      </button>
                    </div>
                  </Box>
                </Box>
              </form>
            </Box>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Register1;
