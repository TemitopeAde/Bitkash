<<<<<<< HEAD
import { Box } from "@mui/material";
import React, { useState, useRef } from "react";
import { Formik, Form } from "formik";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import logo from "../assets/icons/header-white.png";
import Register1 from "./Register-1";
import Register2 from "./Register-2";
import "./register.css";



const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Register = ({ children }) => {
  const [form, setForm] = useState(1);

  const initialValues = {
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    currency: "EUR",
    lastName: "",
    phoneNumber: "",
    language: "ENG",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    streetAddress: "",
    terms: true,
  };

 
  const validate = (values) => {
    console.log(values)
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

    if (!values.password2) {
      errors.password2 = "Password is required";
    } else if (values.password2.length < 6) {
      errors.password2 = "Password length is too short";
    } else if (values.password !== values.password2) {
      errors.password2 = "Passwords do not match";
    }

    if (!values.state) {
      errors.state = "Enter your state";
    }

    if (!values.zipCode) {
      errors.zipCode = "Enter your zip code";
    } else if (/[a-zA-Z]/.test(values.zipCode)) {
      errors.zipCode = "Enter a valid zip code";
    }

    if (!values.city) {
      errors.city = "Enter your city";
    } else if (values.city.length === 1) {
      errors.city = "Enter a valid city";
    }

    if (values.terms === false) {
      errors.terms = "Kindly accept the terms and conditions";
    }

    return errors;
  };

  const form1 = useRef();
  const form2 = useRef();

=======
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

>>>>>>> master
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
<<<<<<< HEAD
      transition={{ duration: 0.8 }}
    >
      
      <Box className="register-page web-register-page">
        <Box position="relative">
          <Box className="register-sidebar">
            <button style={{ background: "none", border: "none" }}>
              <img src={logo} alt="logo" />
            </button>

            <Box className="register-title">
              <h3>Sign up</h3>
            </Box>
          </Box>

          <Box>
            <Formik initialValues={initialValues} validate={validate}>
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
                    <Box
                      ref={form1}
                      className={
                        form === 1
                          ? "forms-ref form-one form-toggle"
                          : "forms-ref form-one"
                      }
                    >
                      <Register1
                        isValid={isValid}
                        dirty={dirty}
                        values={values}
                        touched={touched}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        setForm={setForm}
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
                        isValid={isValid}
                        dirty={dirty}
                        values={values}
                        touched={touched}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        handleSubmit={handleSubmit}
                        setForm={setForm}
                      />
                    </Box>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Box>
      </Box>

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
                <Formik initialValues={initialValues} validate={validate}>
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
                        <Box
                          ref={form1}
                          className={
                            form === 1
                              ? "forms-ref form-one form-toggle"
                              : "forms-ref form-one"
                          }
                          style={{ padding: "3rem 1.5rem" }}
                        >
                          <Register1
                            isValid={isValid}
                            dirty={dirty}
                            values={values}
                            touched={touched}
                            errors={errors}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            setForm={setForm}
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
                            isValid={isValid}
                            dirty={dirty}
                            values={values}
                            touched={touched}
                            errors={errors}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            handleSubmit={handleSubmit}
                            setForm={setForm}
                          />
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
=======
      transition={{ duration: 0.5 }}
      // className="mobile-white"
      style={{ borderRadius: "10px", paddingBottom: "0rem" }}
    >
      <Box
        style={{ paddingBottom: "0rem" }}
        className="register-content"
        id="form1"
      >
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

              <Box className="register-form-grid register-one-fo">
                <Box className="register-grid">
                  <div className="register-row">
                    <div className="register-name">
                      <label htmlFor="first-name">First name</label>
                      <input
                        name="first_name"
                        className="form-control"
                        id="first-name"
                        type="text"
                        onChange={handleChange}
                        value={formData.first_name}
                      />
                      <p className="form-error">{errors?.first_name}</p>
                    </div>
                    <div className="register-last-name">
                      <label htmlFor="last-name">Last name</label>
                      <input
                        className="form-control"
                        name="last_name"
                        id="last-name"
                        type="text"
                        onChange={handleChange}
                        value={formData.last_name}
                      />
                      <p className="form-error">{errors?.last_name}</p>
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
                          name: "phone_number",
                        }}
                        country={"us"}
                        value={formData.phone_number}
                        onChange={(e) =>
                          setFormData({ ...formData, phone_number: e })
                        }
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
                          name="confirm_password"
                          className="form-control"
                          type={passwordShown ? "text" : "password"}
                          id="regsiter-confirm-password"
                          value={formData.confirm_password}
                          onChange={handleChange}
                        />
                        <p className="form-error">{errors?.confirm_password}</p>
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
                        <option disabled value="">
                          Select preferred currency
                        </option>
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
                        name="preferred_language"
                        id="register-language"
                        onChange={handleChange}
                        value={formData.preferred_language}
                      >
                        <option disabled value="">
                          Select your preferred language
                        </option>
                        <option>ENG</option>
                        <option>FRA</option>
                      </select>
                      <p className="form-error">{errors?.preferred_language}</p>
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
>>>>>>> master
    </motion.div>
  );
};

<<<<<<< HEAD
export default Register;
=======
export default Register1;

>>>>>>> master
