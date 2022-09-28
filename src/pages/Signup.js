import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

import "../components/Auth/auth.css";
import { handleKycEuro, handleKycUsd } from "../state/action-creators";
import Spinner from "../components/Spinner";

const animations = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const Signup = ({ children }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.loading);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "50%",
    p: 4,
    bgcolor: "#FFF9F1",
    border: "2px solid #FF9924",
    borderRadius: "20px",
  };

  const defaultValue = () => {
    const value = "usd";
    return value;
  };
  const [currency, setCurrency] = useState(defaultValue);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const initialValuesUsd = {
    businessType: "",
    accountHolderName: "eee",
    bankName: "eee",
    accountNumber: "4444",
    routingNumber: "333",
    accountType: "usd",
    zipCode: "123",
    swiftCode2: "1234",
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

    if (!values.swiftCode2) {
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

  const validateEur = (values) => {
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

    if (!values.zipCode) {
      errors.zipCode = "Zip code is required";
    }

    if (!values.bankAddress) {
      errors.bankAddress = "Bank address is required";
    }

    if (!values.bankCity) {
      errors.bankCity = "Bank city is required";
    }

    if (!values.iban) {
      errors.iban = "IBAN is required";
    }

    if (!values.accountNumber) {
      errors.accountNumber = "Account number is required";
    }

    if (!values.bankBranchName) {
      errors.bankBranchName = "Bank branch name is required";
    }

    return errors;
  };

  const initialValuesEur = {
    businessType: "",
    accountHolderName: "Timothy a",
    bankName: "Chase bank",
    swiftCode: "myeuro",
    accountType: "business",
    zipCode: "df3432",
    bankAddress: "main street",
    bankCity: "millwall london",
    iban: "2244224",
    bankBranchName: "manchester",
    accountNumber: "83783983"
  };

  const submitFormUsd = (values) => {
  
    const payload = {
      currency: "usd",
      acc_type: values.accountType,
      acc_option: values.businessType,
      acc_owner: values.accountHolderName,
      bank_name: values.bankName,
      acc_number: values.accountNumber,
      routing_number: values.routingNumber,
      zip_code: values.zipCode,
      swift_code: values.swiftCode2,
    };

    dispatch(handleKycUsd(payload));
    handleOpen();
  };

  const submitFormEur = (values) => {
    const payload = {
      currency: "eur",
      acc_type: values.accountType,
      acc_owner: values.accountHolderName,
      bank_name: values.bankName,
      bank_branch_name: values.bankBranchName,
      Iban: values.iban,
      swift_code: values.swiftCode,
      bank_address: values.bankAddress,
      bank_city: values.bankCity,
      zip_code: values.zipCode,
    };

    dispatch(handleKycEuro(payload));
    // handleOpen();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (loading) return <Spinner />;

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
                  <Formik
                    initialValues={initialValuesEur}
                    onSubmit={submitFormEur}
                    validate={validateEur}
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
                          <Box className="mt-5">
                            <Box className="signup-grid">
                              <Box className="form-input radio-input radio-form-input">
                                <Box>
                                  <Field
                                    type="radio"
                                    value="individual"
                                    name="businessType"
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
                                    Individual
                                  </label>
                                </Box>
                                <Box>
                                  <Field
                                    type="radio"
                                    value="business"
                                    name="businessType"
                                    id="business-input"
                                    onBlur={handleBlur}
                                    className={
                                      errors.businessType &&
                                      touched.businessType
                                        ? "input-error"
                                        : ""
                                    }
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
                                    className={
                                      errors.accountHolderName &&
                                      touched.accountHolderName
                                        ? "form-control input-error"
                                        : "form-control"
                                    }
                                    onBlur={handleBlur}
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
                                    className={
                                      errors.bankName && touched.bankName
                                        ? "form-control input-error"
                                        : "form-control"
                                    }
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="bankName"
                                    component="span"
                                    className="error"
                                  />
                                </Box>
                              </Box>
                              <Box className="form-inputs">
                                <Box>
                                  <label htmlFor="bank-branch-name">
                                    Bank branch name
                                  </label>
                                  <Field
                                    id="bank-branch-name"
                                    name="bankBranchName"
                                    className={
                                      errors.bankBranchName &&
                                      touched.bankBranchName
                                        ? "form-control input-error"
                                        : "form-control"
                                    }
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="bankBranchName"
                                    component="span"
                                    className="error"
                                  />
                                </Box>
                                <Box>
                                  <label htmlFor="iban">IBAN</label>
                                  <Field
                                    id="iban"
                                    name="iban"
                                    className={
                                      errors.iban && touched.iban
                                        ? "form-control input-error"
                                        : "form-control"
                                    }
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="iban"
                                    component="span"
                                    className="error"
                                  />
                                </Box>
                                <Box>
                                  <label htmlFor="swift-code">
                                    Account Number
                                  </label>
                                  <Field
                                    id="swift-code"
                                    name="accountNumber"
                                    className={
                                      errors.accountNumber &&
                                      touched.accountNumber
                                        ? "form-control input-error"
                                        : "form-control"
                                    }
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="accountNumber"
                                    component="span"
                                    className="error"
                                  />
                                </Box>
                              </Box>

                              <Box className="form-input">
                                <Box>
                                  <label htmlFor="bank-address">
                                    Bank Address
                                  </label>

                                  <Field
                                    name="bankAddress"
                                    id="bankAddress"
                                    rows="3"
                                    component="textarea"
                                    className={
                                      errors.bankAddress && touched.bankAddress
                                        ? "form-control input-error"
                                        : "form-control"
                                    }
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="bankAddress"
                                    component="span"
                                    className="error"
                                  />
                                </Box>
                                <Box>
                                  <label htmlFor="bank-city">Bank City</label>
                                  <Field
                                    id="bank-city"
                                    name="bankCity"
                                    className={
                                      errors.bankCity && touched.bankCity
                                        ? "form-control input-error"
                                        : "form-control"
                                    }
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="bankCity"
                                    component="span"
                                    className="error"
                                  />
                                </Box>
                              </Box>

                              <Box className="form-zip">
                                <label htmlFor="zip-code">
                                  Zip/Postal Code
                                </label>
                                <Field
                                  id="zip-code"
                                  name="zipCode"
                                  className={
                                    errors.zipCode && touched.zipCode
                                      ? "form-control input-error"
                                      : "form-control"
                                  }
                                  onBlur={handleBlur}
                                />
                                <ErrorMessage
                                  name="zipCode"
                                  component="span"
                                  className="error"
                                />
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
                          </Box>
                        </Form>
                      );
                    }}
                  </Formik>
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
                                    onBlur={handleBlur}
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
                                    Account Number
                                  </label>
                                  <Field
                                    id="bank-2-branch-name"
                                    name="accountNumber"
                                    type="text"
                                    onBlur={handleBlur}
                                    className={
                                      errors.accountNumber &&
                                      touched.accountNumber
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

                              <div className="form-input">
                                <Box>
                                  <label htmlFor="">SWIFT/BIC Code</label>
                                  <Field
                                    type="number"
                                    name="swiftCode2"
                                    onBlur={handleBlur}
                                    className={
                                      errors.swiftCode2 && touched.swiftCode2
                                        ? "input-error form-control"
                                        : "form-control"
                                    }
                                  />
                                  <ErrorMessage
                                    name="swiftCode"
                                    component="span"
                                    className="error"
                                  />
                                </Box>
                              </div>
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

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                textAlign: "center",
              }}
            >
              <Stack spacing={3}>
                <Box>
                  <svg
                    width="83"
                    height="83"
                    viewBox="0 0 83 83"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M55.8638 6.90137H26.9484C14.3885 6.90137 6.90088 14.389 6.90088 26.9489V55.8298C6.90088 68.4242 14.3885 75.9118 26.9484 75.9118H55.8293C68.3892 75.9118 75.8768 68.4242 75.8768 55.8643V26.9489C75.9113 14.389 68.4237 6.90137 55.8638 6.90137ZM57.8996 33.4704L38.3351 53.0348C37.852 53.5179 37.1965 53.7939 36.5063 53.7939C35.8162 53.7939 35.1606 53.5179 34.6776 53.0348L24.9126 43.2699C23.9119 42.2692 23.9119 40.613 24.9126 39.6123C25.9132 38.6117 27.5695 38.6117 28.5701 39.6123L36.5063 47.5485L54.242 29.8128C55.2427 28.8122 56.8989 28.8122 57.8996 29.8128C58.9002 30.8135 58.9002 32.4352 57.8996 33.4704Z"
                      fill="#FF9924"
                    />
                  </svg>
                </Box>

                <h6
                  style={{
                    fontSize: "32px",
                    lineHeight: "40px",
                    color: "#000000",
                  }}
                >
                  Bank Added Successfully
                </h6>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  Your account number is under review
                </p>
                <p>
                  Go to{" "}
                  <Link
                    style={{
                      fontWeight: "bold",
                      color: "#ff9924",
                      textDecoration: "none",
                    }}
                    to="/banks"
                  >
                    Banks
                  </Link>{" "}
                </p>
              </Stack>
            </Box>
          </Box>
        </Modal>
      </Box>
    </motion.div>
  );
};

export default Signup;
