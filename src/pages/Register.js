import { Box } from "@mui/material";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import Register1 from "./Register-1";
import Register2 from "./Register-2";
import "./register.css";
import logo from "../assets/icons/header-white.png";
import { register } from "../state/action-creators";
import { showLoader } from "../state/action-creators";
import { hideLoader } from "../state/action-creators";
import Spinner from "../components/Spinner";

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
    password: "temade123",
    password2: "temade123",
    currency: "USD",
    lastName: "mkkee3",
    phone: "2347038347584",
    language: "ENG",
    country: "nig",
    state: "osun",
    city: "ife",
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
    dispatch(showLoader());
    dispatch(register(formData));

    setTimeout(() => {
      dispatch(hideLoader());
    }, 4000);
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



  if (loader) {
    return <Spinner />;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              <Link to="/">
                <img src={logo} alt="" />
              </Link>

              <Box className="register-title">
                <h3>Sign up</h3>
              </Box>
            </Box>

            <Box className="register-content-form">
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

  if (width <= 820 && !isAuthenticated) {
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
                          ? "forms-ref form-one form-toggle"
                          : "forms-ref form-one"
                      }
                      style={{ padding: "3rem 1.5rem" }}
                    >
                      <Register1
                        formData={formData}
                        setFormData={setFormData}
                        handleChange={handleChange}
                        setForm={setForm}
                        phone={phone}
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
                      />
                    </Box>
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
