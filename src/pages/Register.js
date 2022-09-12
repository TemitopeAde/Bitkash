import { Box, Stack } from "@mui/material";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import Register1 from "./Register-1";
import Register2 from "./Register-2";
import "./register.css";
import { register } from "../state/action-creators";
import Spinner from "../components/Spinner";
import PhoneInput from "react-phone-input-2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Register = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const form1 = useRef();
  const form2 = useRef();
  const [formData, setFormData] = useState({
    firstName: "djkw",
    email: "adesiyantope2014@gmail.com",
    password: "123456",
    password2: "123456",
    currency: "USD",
    lastName: "mkkee3",
    phone: "2347038347584",
    language: "ENG",
    country: "jjs",
    state: "osu",
    city: "drr",
    zipCode: "23412",
    streetAddress: "nnnnnnnnnnnnnnnnn",
    role: 1,
    terms: false,
  });
  const {
    firstName,
    email,
    password,
    password2,
    currency,
    lastName,
    phone,
    language,
    country,
    state,
    city,
    zipCode,
    streetAddress,
    terms,
  } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    dispatch(register(formData));
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }

    if (!values.firstName) {
      errors.firstName = "Firstname is required";
    } else if (values.firstName.length < 2) {
      errors.firstName = "Firstname is too short";
    } else if (/\d/.test(values.firstName)) {
      errors.firstName = "Firstname should not contain number";
    }

    if (!values.lastName) {
      errors.LastName = "Lastname is required";
    } else if (values.lastName.length < 2) {
      errors.lastName = "Lastname is too short";
    } else if (/\d/.test(values.firstName)) {
      errors.lastName = "Lastname should not contain number";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password length is too short";
    }

    if (!values.phone) {
      errors.password = "Phone number is required";
    } else if (values.phone.length > 13) {
      errors.password = "Enter a valid phone number";
    }

    if (!values.password2) {
      errors.password2 = "Password is required";
    } else if (values.password2.length < 6) {
      errors.password2 = "Password length is too short";
    } else if (values.password !== values.password2) {
      errors.password2 = "Passwords do not match";
    }

    if (!values.state) {
      errors.state = "Enter your home state";
    }

    if (!values.country) {
      errors.country = "Select your home country";
    }

    if (!values.zipCode) {
      errors.zipCode = "Enter your zip code";
    } else if (/[a-zA-Z]/.test(values.zipCode)) {
      errors.zipCode = "Enter a valid zip code";
    } else if (values.zipCode.length !== 5) {
      errors.zipCode = "Enter a valid zip code";
    }

    if (!values.city) {
      errors.city = "Enter your city";
    } else if (values.city.length === 1) {
      errors.city = "Enter a valid city";
    }

    if (!values.streetAddress) {
      errors.streetAddress = "Enter your street address";
    }

    if (values.terms === false) {
      errors.terms = "Kindly accept the terms and conditions";
    }

    return errors;
  };
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loader = useSelector((state) => state.loader.loading);
  const message = useSelector((state) => state.auth.message);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  if (loader) {
    return <Spinner />;
  }

  if (width > 820 && !isAuthenticated) {
    return (
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8 }}
      >
        <Box className="register-page web-register-page">
          <Box position="relative">
            <Box className="register-sidebar">
              <Box className="register-title">
                <h3>Sign up</h3>
              </Box>
            </Box>

            <Box className="register-content-form">
              {message && (
                <div className="error-container">
                  <h6 className="error-message">{message}</h6>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <Box
                  ref={form1}
                  className={
                    form === 1
                      ? "forms-ref form-one form-toggle"
                      : "forms-ref form-one"
                  }
                >
                  <Register1
                    formData={formData}
                    setFormData={setFormData}
                    handleChange={handleChange}
                    setForm={setForm}
                    phone={phone}
                    handleSubmit={handleSubmit}
                    errors={errors}
                  />
                </Box>
                <Box
                  ref={form2}
                  className={
                    form === 2
                      ? "forms-ref form-two form-toggle"
                      : "forms-ref form-two"
                  }
                >
                  <Register2
                    handleChange={handleChange}
                    setForm={setForm}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    formData={formData}
                    loading={loading}
                    setLoading={setLoading}
                  />
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </motion.div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/email-verification" />;
  }

  if (width <= 820) {
    console.log("small screen");
    return (
      <Box>
        <Helmet>
          <title>Sign up</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
          <body class="mobile-background" />
        </Helmet>

        <div className="mobile-register-page">
          <Box>
            <Box>
              <h3>Sign up</h3>

              <Box>
                <Box>
                  <form>
                    <Box
                      ref={form1}
                      className={
                        form === 1
                          ? "mobile-register-form"
                          : "mobile-register-form"
                      }
                      style={{ padding: "3rem 1.5rem" }}
                    >
                      <div className="register-name mobile-register-field">
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
                      <div className="register-last-name mobile-register-field">
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
                      <div className="register-name mobile-register-field">
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
                      <div className="register-last-name mobile-register-field">
                        <label htmlFor="register-phone">Phone</label>

                        <PhoneInput
                          inputProps={{
                            name: "phone",
                          }}
                          country={"us"}
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e })
                          }
                        />
                        <p className="form-error">{errors?.phone}</p>
                      </div>
                      <div className="register-name mobile-register-field">
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
                      <div className="register-last-name mobile-register-field">
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
                      <div className="register-name mobile-register-field">
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
                      <div className="register-last-name mobile-register-field">
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
                      <div className="register-last-name mobile-register-field">
                        <button
                          className="btn"
                          type="button"
                          onClick={() => setForm(2)}
                          style={{
                            width: "129px",
                            background: "#FF9924",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: '#000000',
                            fontWeight: '400', 
                            fontSize: '14px'
                          }}
                        >
                          Next
                        </button>
                      </div>
                    </Box>
                    <Box ref={form2} className={form === 2 ? "" : ""}></Box>
                  </form>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
    );
  }
};

export default Register;
