import { Box } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "../components/Auth/auth.css";

const animations = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const Signup = ({ children }) => {
  const defaultValue = () => {
    const value = "usd";
    return value;
  };
  const [currency, setCurrency] = useState(defaultValue);

  console.log(currency);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const initialValuesUsd = {
    businessType: "",
    accountHolderName: "",
    bankName: "",
    swiftCode: "",
    routingNumber: "",
    accountType: "usd",
    zipCode: "",
  };

  const validateUsd = (values) => {
    let errors = {};

    if (!values.businessType) {
      errors.businessType = "Businesss type is required";
    }

    if (!values.accountHolderName) {
      errors.accountHolderName = "Account holder name is required";
    }

    if (!values.bankName) {
      errors.bankName = "Bank name is required";
    }

    if (!values.swiftCode) {
      errors.swiftCode = "SWIFT/BIC Code is required";
    }

    if (!values.routingNumber) {
      errors.routingNumber = "Routing number is required";
    }

    if (!values.accountType) {
      errors.accountType = "Account type is required";
    }

    if (!values.zipCode) {
      errors.zipCode = "Zip code is required";
    }

    return errors;
  };

  const initialValuesEur = {
    businessType: "",
    accountHolderName: "",
    bankName: "",
    swiftCode: "",
    routingNumber: "",
    accountType: "",
    zipCode: "",
    bankAddress: "",
    bankCity: "",
    iban: "",
    bankBranchName: "",
  };

  const submitFormUsd = (values) => {
    console.log(values);
  };

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
    >
      <Box>
        <Helmet>
          <title>KYC</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
          <body class="kyc-background" />
        </Helmet>
        <Box className="sign-up">
          <Box className="signup-container-width">
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ flexBasis: "60%" }}>
                  <h3 className="">
                    To continue with KYC Verification, kindly Register your Bank
                    Details
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris in ultricies cras eu arcu sit in laoreet quisque.
                    Montes.
                  </p>
                </Box>
                <div className="mb-3">
                  <select
                    value={currency}
                    onChange={handleCurrencyChange}
                    className="form-control change-currency"
                    style={{ height: "50px", width: "180px" }}
                  >
                    <option value="eur"> £ EUR</option>
                    <option value="usd">$ USD</option>
                  </select>
                </div>
              </Box>

              {currency === "eur" ? (
                <motion.div
                  variants={animations}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.4 }}
                >
                  <Box className="mt-5">
                    <Box className="signup-grid">
                      <Box className="form-input radio-input radio-form-input">
                        <Box>
                          <input
                            type="radio"
                            name="account-type"
                            id="individual-input"
                            checked
                          />
                          <label htmlFor="individual-input">Individual</label>
                        </Box>
                        <Box>
                          <input
                            type="radio"
                            name="account-type"
                            id="business-input"
                          />
                          <label htmlFor="business-input">Business</label>
                        </Box>
                      </Box>
                      <Box className="form-input">
                        <Box>
                          <label htmlFor="holder-name">
                            Account Holders Name
                          </label>
                          <input id="holder-name" className="form-control" />
                        </Box>
                        <Box>
                          <label htmlFor="bank-name">Bank Name</label>
                          <input id="bank-name" className="form-control" />
                        </Box>
                      </Box>
                      <Box className="form-inputs">
                        <Box>
                          <label htmlFor="bank-branch-name">
                            Bank branch name
                          </label>
                          <input
                            id="bank-branch-name"
                            className="form-control"
                          />
                        </Box>
                        <Box>
                          <label htmlFor="iban">IBAN</label>
                          <input id="iban" className="form-control" />
                        </Box>
                        <Box>
                          <label htmlFor="swift-code">SWIFT/BIC Code</label>
                          <input id="swift-code" className="form-control" />
                        </Box>
                      </Box>

                      <Box className="form-input">
                        <Box>
                          <label htmlFor="bank-address">Bank Address</label>

                          <textarea
                            name="bank-address"
                            id="bank-address"
                            rows="3"
                            className="form-control"
                          ></textarea>
                        </Box>
                        <Box>
                          <label htmlFor="bank-city">Bank City</label>
                          <input id="bank-city" className="form-control" />
                        </Box>
                      </Box>

                      <Box className="form-zip">
                        <label htmlFor="zip-code">Zip/Postal Code</label>
                        <input id="zip-code" className="form-control" />
                      </Box>
                    </Box>

                    <button type="submit" className="btn btn-primary submit">
                      Save
                    </button>
                  </Box>
                </motion.div>
              ) : (
                <Box className="mt-5">
                  <motion.div
                    variants={animations}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.5 }}
                  >
                    <Formik
                      initialValues={initialValuesUsd}
                      validate={validateUsd}
                      onSubmit={submitFormUsd}
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
                            <Box className="signup-grid">
                              <Box className="form-input radio-input radio-form-input">
                                <Box>
                                  <Field
                                    type="radio"
                                    name="businessType"
                                    value="individual"
                                    id="individual-input"
                                    onBlur={handleBlur}
                                    className={
                                      errors.businessType &&
                                      touched.businessType
                                        ? "input-error"
                                        : ""
                                    }
                                  />

                                  <label htmlFor="individual-input">
                                    Individuals
                                  </label>
                                </Box>
                                <Box>
                                  <Field
                                    type="radio"
                                    name="businessType"
                                    value="business"
                                    id="business-input"
                                  />

                                  <label htmlFor="business-input">
                                    Business
                                  </label>
                                </Box>
                                <ErrorMessage
                                  name="businessType"
                                  component="span"
                                  className="error"
                                />
                              </Box>
                              <Box className="form-input">
                                <Box>
                                  <label htmlFor="holder-name">
                                    Account Holders Name
                                  </label>
                                  <Field
                                    id="holder-name"
                                    name="accountHolderName"
                                    type="text"
                                    onBlur={handleBlur}
                                    className={
                                      errors.accountHolderName &&
                                      touched.accountHolderName
                                        ? "input-error form-control"
                                        : "form-control"
                                    }
                                  />
                                  <ErrorMessage
                                    name="accountHolderName"
                                    component="span"
                                    className="error"
                                  />
                                </Box>
                                <Box>
                                  <label htmlFor="bank-name">Bank Name</label>
                                  <Field
                                    id="bank-name"
                                    name="bankName"
                                    type="text"
                                    onBlur={handleBlur}
                                    className={
                                      errors.bankName && touched.bankName
                                        ? "input-error form-control"
                                        : "form-control"
                                    }
                                  />
                                  <ErrorMessage
                                    name="bankName"
                                    component="span"
                                    className="error"
                                  />
                                </Box>
                              </Box>
                              <Box className="form-input">
                                <Box>
                                  <label htmlFor="bank-2-branch-name">
                                    SWIFT/BIC Code
                                  </label>
                                  <Field
                                    id="bank-2-branch-name"
                                    name="swiftCode"
                                    type="text"
                                    onBlur={handleBlur}
                                    className={
                                      errors.swiftCode && touched.swiftCode
                                        ? "input-error form-control"
                                        : "form-control"
                                    }
                                  />
                                  <ErrorMessage
                                    name="bankName"
                                    component="span"
                                    className="error"
                                  />
                                </Box>
                                <Box>
                                  <label htmlFor="routing-number">
                                    Routing Number
                                  </label>
                                  <Field
                                    id="routing-number"
                                    name="routingNumber"
                                    type="number"
                                    onBlur={handleBlur}
                                    className={
                                      errors.routingNumber &&
                                      touched.routingNumber
                                        ? "input-error form-control"
                                        : "form-control"
                                    }
                                  />
                                  <ErrorMessage
                                    name="routingNumber"
                                    component="span"
                                    className="error"
                                  />
                                </Box>
                              </Box>

                              <Box className="form-input">
                                <Box>
                                  <label htmlFor="">Select account type</label>
                                  <Field
                                    as="select"
                                    style={{ height: "50%" }}
                                    name="accountType"
                                    onBlur={handleBlur}
                                    className={
                                      errors.accountType && touched.accountType
                                        ? "input-error form-control"
                                        : "form-control"
                                    }
                                  >
                                    <option>USD</option>
                                    <option>EUR</option>
                                  </Field>
                                  <ErrorMessage
                                    name="accountType"
                                    component="span"
                                    className="error"
                                  />
                                </Box>
                                <Box>
                                  <label htmlFor="zip-postal">
                                    Zip/Postal Code
                                  </label>
                                  <Field
                                    type="number"
                                    id="zip-postal"
                                    name="zipCode"
                                    onBlur={handleBlur}
                                    className={
                                      errors.zipCode && touched.zipCode
                                        ? "input-error form-control"
                                        : "form-control"
                                    }
                                  />
                                  <ErrorMessage
                                    name="zipCode"
                                    component="span"
                                    className="error"
                                  />
                                </Box>
                              </Box>
                            </Box>

                            <button
                              type="submit"
                              className={
                                dirty && isValid
                                  ? "btn btn-primary submit"
                                  : "btn btn-primary submit disabled-btn"
                              }
                              disabled={!(dirty && isValid)}
                            >
                              Save
                            </button>
                          </Form>
                        );
                      }}
                    </Formik>
                  </motion.div>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Signup;
