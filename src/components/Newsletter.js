import { Box, Container, Stack } from "@mui/material";
import React, { useRef } from "react";
import Line from "../assets/images/line.png";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./buybitcoin.css";

const Newsletter = () => {
  const initialValues = {
    email: "",
  };

  const width = window.innerWidth;

  const inputRef = useRef();

  console.log(inputRef);

  // if (width <= 768) {
  //   inputRef.setAttribute('placeholder', '')
  // }

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

  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <Box className="newsletter newsletter-mobile">
      <Container className="newsletter-flex">
        <Box position="relative">
          <Stack spacing={2}>
            <h6 className="title-news">Subscribe</h6>
            <h3 className="para-news">
              Stay informed never missed an{" "}
              <span style={{ position: "relative" }}>
                update! <img src={Line} alt="" className="line" />
              </span>
            </h3>
          </Stack>
        </Box>

        <Box>
          <Stack className="form-box" spacing={6}>
<<<<<<< HEAD
            <h6 style={{ color: "#f5f5f5" }} className="mb-5">
              Sign Up For Our Free Newsletter. Once a week, we’ll send you
=======
            <h6 style={{ color: "#f5f5f5", fontSize: '13px', lineHeight: '24px' }} className="mb-5">
              Sign Up For Our Free Newsletter. Once a week, we will send you
>>>>>>> master
              Bitkash updates, news, and tips about crypto trading. Sign up to
              never miss an update or promotional offer. We promise not to bore
              you.
            </h6>

            <Box position="relative" className="newsletter-form mt-5">
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
                    <div ref={inputRef} className="container">
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="error"
                      />
                      <Form onSubmit={handleSubmit}>
                        {/* <input type="text" placeholder="Email Adress" /> */}
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.email && touched.email ? "input-error" : ""
                          }
                        />

                        <button type="submit" className="subscribe-btn">
                          Subscribe
                        </button>
                      </Form>
                    </div>
                  );
                }}
              </Formik>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Newsletter;
