import { Box, Container, Stack } from "@mui/material";
import React, {useRef} from "react";
import Line from "../assets/images/line.png";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./buybitcoin.css";

const Newsletter = () => {
  const initialValues = {
    email: "",
  };

  const width = window.innerWidth;

  const inputRef = useRef()

  console.log(inputRef)

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
            <h6 style={{color: '#f5f5f5'}} className="mb-5">
              Once each month we'll send you recent episodes of our Financial
              information covering the optimization of digital technology and
              irresistible people delivering a great customer experience that
              impacts the bottom line.
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

                        
                        <button type="submit" className="subscribe-btn">Subscribe</button>
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
