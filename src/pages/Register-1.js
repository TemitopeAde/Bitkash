import { Box, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./register.css";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const animations = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const Register1 = ({
  setForm,
  phone,
  setFormData,
  formData,
  handleChange,
  errors,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);

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
      // className="mobile-white"
      style={{ borderRadius: "10px", paddingBottom: "0rem" }}
    >
      <Box style={{ paddingBottom: "0rem" }} className="register-content" id="form1">
        <Container>
          <Box position="relative" style={{ paddingBottom: "4rem" }}>
            <Box
              className="register-form"
              id="form1"
              style={{ borderRadius: "10px", paddingBottom: "3rem" }}
            >
              <Stack>
                <p className="step-one mb-3">Step 1 of 2</p>
                <p className="step-one-title mb-5">Personal Details</p>
                
              </Stack>

              <Box className="register-form-grid">
                <Box className="register-grid">
                  <div className="register-row">
                    <div className="register-name">
                      <label htmlFor="first-name">First name</label>
                      <input
                        name="firstName"
                        className="form-control"
                        id="first-name"
                        type="text"
                        onChange={handleChange}
                        value={formData.firstName}
                      />
                      <p className="form-error">{errors?.firstName}</p>
                    </div>
                    <div className="register-last-name">
                      <label htmlFor="last-name">Last name</label>
                      <input
                        className="form-control"
                        name="lastName"
                        id="last-name"
                        type="text"
                        onChange={handleChange}
                        value={formData.lastName}
                      />
                      <p className="form-error">{errors?.LastName}</p>
                    </div>
                  </div>
                  <div className="register-row">
                    <div className="register-name">
                      <label htmlFor="register-email-address">Email</label>
                      <input
                        name="email"
                        className="form-control"
                        id="register-email-address"
                        type="email"
                        onChange={handleChange}
                        value={formData.email}
                      />
                      <p className="form-error">{errors.email}</p>
                    </div>
                    <div className="register-last-name">
                      <label htmlFor="register-phone">Phone</label>

                      <PhoneInput
                        inputProps={{
                          name: "phone",
                        }}
                        country={"us"}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e })}
                      />
                      <p className="form-error">{errors?.phone}</p>
                    </div>
                  </div>
                  <div className="register-row">
                    <div className="register-name">
                      <label htmlFor="register-password">Password</label>

                      <Box position="relative">
                        <input
                          name="password"
                          className="form-control"
                          type={passwordShown ? "text" : "password"}
                          id="register-password"
                          onChange={handleChange}
                          value={formData.password}
                        />
                        <p className="form-error">{errors?.password}</p>
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
                    </div>
                    <div className="register-last-name">
                      <label htmlFor="regsiter-confirm-password">
                        Confirm password
                      </label>

                      <Box position="relative">
                        <input
                          name="password2"
                          className="form-control"
                          type={passwordShown ? "text" : "password"}
                          id="regsiter-confirm-password"
                          value={formData.password2}
                          onChange={handleChange}
                        />
                        <p className="form-error">{errors?.password2}</p>
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
                      <select
                        name="currency"
                        id="register-currency"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.currency}
                      >
                        <option>EUR</option>
                        <option>USD</option>
                      </select>
                      <p className="form-error">{errors?.currency}</p>
                    </div>
                    <div className="register-last-name">
                      <label htmlFor="register-language">
                        Preffered language
                      </label>
                      <select
                        className="form-control"
                        name="language"
                        id="register-language"
                        onChange={handleChange}
                        value={formData.language}
                      >
                        <option>ENG</option>
                        <option>FRA</option>
                      </select>
                      <p className="form-error">{errors?.language}</p>
                    </div>
                  </div>
                  <div className="mt-3 register-next">
                    <button
                      className="btn btn-lg"
                      type="button"
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
