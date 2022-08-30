import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector } from "react-redux";

import "./dashboard.css";
import user from "../assets/images/ellipse.png";
import notification from "../assets/images/notification.png";
import MobileNav from "../components/mobileNav";
import Sidebar from "../components/Sidebar";

const Buy = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const initialValues = {
    bitcoin: "567",
    price: "",
    currency: "",
    wallet: "",
    toggle: false,
  };

  const submitForm = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    let errors = {};

    if (values.toggle === false) {
      errors.toggle = "Accept the ...";
    }

    if (!values.price) {
      errors.price = "Price is required";
    } else if (values.price < 100) {
      errors.price = "Invalid Price";
    }

    if (!values.wallet) {
      errors.wallet = "Bitcoin wallet address is required";
    } else if (values.wallet.length < 26) {
      errors.wallet = "Invalid wallet address";
    } else if (values.wallet.length > 35) {
      errors.wallet = "Invalid wallet address";
    }

    return errors;
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (window.innerWidth > 820) {
    return (
      <Box>
        <Helmet>
          <title>Buy Bitcoin</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
          <body class="buy-background" />
        </Helmet>
        <Box className="dashboard">
          <Box className="dashboard-grid">
            <Sidebar />

            <Box className="dashboard-content">
              <Box className="dashboard-header">
                <Container
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Box className="dashboard-container">
                    <Stack spacing={2} direction="row">
                      <img className="user" src={user} alt="" />
                      <Stack>
                        <h6>Olubanjo Oluseyi</h6>
                        <p>Verified</p>
                      </Stack>
                      <Box paddingTop="6px">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0201 2.91016C8.71009 2.91016 6.02009 5.60016 6.02009 8.91016V11.8002C6.02009 12.4102 5.76009 13.3402 5.45009 13.8602L4.30009 15.7702C3.59009 16.9502 4.08009 18.2602 5.38009 18.7002C9.69009 20.1402 14.3401 20.1402 18.6501 18.7002C19.8601 18.3002 20.3901 16.8702 19.7301 15.7702L18.5801 13.8602C18.2801 13.3402 18.0201 12.4102 18.0201 11.8002V8.91016C18.0201 5.61016 15.3201 2.91016 12.0201 2.91016Z"
                            stroke="#4C4C4C"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                          />
                          <path
                            d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z"
                            stroke="#4C4C4C"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
                            stroke="#4C4C4C"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                          />
                        </svg>
                      </Box>
                    </Stack>
                  </Box>
                </Container>
              </Box>

              <Box
                className="dashboard-inner py-5 dashboard-padding"
                sx={{ background: "none" }}
              >
                <Container style={{paddingTop: '3rem'}}>
                  <Box className="overview">
                    <h4 className="mb-4">
                      You are buying Bitcoin at <span>$24,000</span>{" "}
                    </h4>
                    <p>The Bitcoin exchange rate will refresh in 10 minutes</p>
                  </Box>

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
                          <Box className="dashboard-form">
                            <Box>
                              <label htmlFor="dashboard-price">Currency</label>
                              <Field
                                as="select"
                                name="currency"
                                onBlur={handleBlur}
                                className={
                                  errors.currency && touched.currency
                                    ? "input-error form-control"
                                    : "form-control"
                                }
                              >
                                {/* <option disabled value="">
                                  Select a currency
                                </option> */}
                                <option>EUR</option>
                                <option>USD</option>
                              </Field>
                              <ErrorMessage
                                name="currency"
                                component="span"
                                className="error"
                              />
                            </Box>

                            <Box>
                              <label htmlFor="dashboard-price">Price</label>
                              <Field
                                type="number"
                                name="price"
                                value={values.price}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                  errors.price && touched.price
                                    ? "input-error form-control"
                                    : "form-control"
                                }
                              />
                              <ErrorMessage
                                name="password"
                                component="span"
                                className="error"
                              />
                            </Box>

                            <Box>
                              <label htmlFor="dashboard-price">
                                Bitcoin Equivalent
                              </label>
                              <Field
                                type="number"
                                name="bitcoin"
                                readOnly
                                value={values.bitcoin}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                  errors.bitcoin && touched.bitcoin
                                    ? "input-error form-control"
                                    : "form-control"
                                }
                              />
                              <ErrorMessage
                                name="password"
                                component="span"
                                className="error"
                              />
                            </Box>
                          </Box>

                          <Box className="wallet-address-grid">
                            <Box className="mb-5 mt-5 dashboard-form-single">
                              <label htmlFor="wallet-adresss">
                                Bitcoin Wallet Addresss
                              </label>
                              <Field
                                type="text"
                                name="wallet"
                                value={values.wallet}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                  errors.wallet && touched.wallet
                                    ? "input-error form-control"
                                    : "form-control"
                                }
                              />
                              <ErrorMessage
                                name="wallet"
                                component="span"
                                className="error"
                              />
                            </Box>
                          </Box>

                          <Box>
                            <Stack className="mb-4" direction="row" spacing={2}>
                              {/* <input type="checkbox" /> */}
                              <Field name="toggle" type="checkbox" />
                              <h6 className="checkbox-text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Animi libero laboriosam neque
                                ipsam, voluptate omnis non. Lorem ipsum dolor
                                sit amet consectetur adipisicing elit. Animi
                                libero laboriosam neque ipsam, voluptate omnis
                                non.
                              </h6>
                            </Stack>
                            <ErrorMessage
                              name="toggle"
                              component="span"
                              className="error"
                            />
                          </Box>

                          <button
                            onClick={() => handleSubmit}
                            type="submit"
                            className={
                              dirty && isValid
                                ? "dashboard-buy"
                                : "dashboard-buy disabled-btn"
                            }
                            disabled={!(dirty && isValid)}
                            style={{ flexBasis: "35%" }}
                          >
                            Buy
                          </button>
                        </Form>
                      );
                    }}
                  </Formik>
                </Container>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  if (window.innerWidth <= 820 && isAuthenticated) {
    return (
      <Box>
        <MobileNav />

        <Box>
          <Box className="dashboard-inner py-5">
            <Container className="mobile-padding">
              <Box
                className="overview"
                style={{ background: "#FFF8EE", borderRadius: "10px" }}
              >
                <h4 className="mb-4">
                  You are buying Bitcoin at <span>$24,000</span>{" "}
                </h4>
                <p>The Bitcoin exchange rate will refresh in 10 minutes</p>
              </Box>
              <form>
                <Box>
                  <Box className="dashboard-form mobile">
                    <Box>
                      <label className="mb-3" htmlFor="currency-dashboard">
                        Currency
                      </label>
                      <select id="currency-dashboard" className="form-control">
                        <option>USD</option>
                        <option>EUR</option>
                      </select>
                    </Box>

                    <Stack
                      spacing={2}
                      direction="row"
                      justifyContent="space-between"
                      className="mt-5"
                    >
                      <Box>
                        <label className="mb-3" htmlFor="dashboard-price">
                          Price
                        </label>
                        <input
                          type="number"
                          id="dashboard-price"
                          className="form-control"
                        />
                      </Box>

                      <Box>
                        <label className="mb-3" htmlFor="bitcoin-equ">
                          Bitcoin Equivalent
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="bitcoin-equ"
                        />
                      </Box>
                    </Stack>
                  </Box>

                  <Box
                    className="mb-5 mt-5 dashboard-form-single"
                    sx={{ position: "relative" }}
                  >
                    <label className="mb-3" htmlFor="wallet-adresss">
                      Bitcoin Wallet Addresss
                    </label>
                    <input
                      type="text"
                      className="form-control paste-container"
                      id="wallet-address"
                    />

                    {/* <button
                      style={{ position: "absolute", top: "0" }}
                      className="paste-btn"
                      // onClick={handlePaste}
                    >
                      Paste
                    </button> */}
                  </Box>

                  <Stack
                    className="mb-4"
                    alignItems="center"
                    direction="row"
                    spacing={5}
                  >
                    <input
                      type="checkbox"
                      style={{ transform: "scale(1.5)" }}
                    />
                    <h6 className="checkbox-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Animi libero laboriosam neque ipsam, voluptate omnis non.
                    </h6>
                  </Stack>

                  <button type="submit" className="dashboard-buy-mobile mt-4">
                    Buy
                  </button>
                </Box>
              </form>
            </Container>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default Buy;
