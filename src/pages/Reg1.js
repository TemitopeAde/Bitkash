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
    </motion.div>
  );
};

export default Register;
