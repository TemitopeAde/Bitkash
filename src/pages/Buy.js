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
                        <img className="notify" src={notification} alt="" />
                      </Box>
                    </Stack>
                  </Box>
                </Container>
              </Box>

              <Box
                className="dashboard-inner py-5 dashboard-padding"
                sx={{ background: "none" }}
              >
                <Container>
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
