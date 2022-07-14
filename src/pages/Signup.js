import { Box, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../components/Auth/auth.css";
import Header from "../components/Header";

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

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
    >
      <Box>
        <Header />
        <Helmet>
          <title>Bank Details</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
          <body class="kyc-background" />
        </Helmet>
        <Box className="sign-up">
          <Box className="signup-container-width">
            <Container>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", md: "center" }}
              >
                <Box sx={{ flexBasis: "70%" }}>
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
                <div className="mb-3" style={{ width: "100px" }}>
                  <select
                    value={currency}
                    onChange={handleCurrencyChange}
                    className="form-control change-currency"
                    style={{ height: "50%" }}
                  >
                    <option value="eur"> £ EUR</option>
                    <option value="usd">$ USD</option>
                  </select>
                </div>
              </Stack>

              {currency === "eur" ? (
                <motion.div
                  variants={animations}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.4 }}
                >
                  <form className="mt-5">
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
                  </form>
                </motion.div>
              ) : (
                <form className="mt-5">
                  <motion.div
                    variants={animations}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.5 }}
                  >
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
                            checked
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
                      <Box className="form-input">
                        <Box>
                          <label htmlFor="bank-2-branch-name">
                            SWIFT/BIC Code
                          </label>
                          <input
                            id="bank-2-branch-name"
                            className="form-control"
                          />
                        </Box>
                        <Box>
                          <label htmlFor="routing-number">Routing Number</label>
                          <input id="routing-number" className="form-control" />
                        </Box>
                      </Box>

                      <Box className="form-input">
                        <Box>
                          <label htmlFor="">Select account type</label>
                          <select
                            className="form-control"
                            style={{ height: "50%" }}
                          >
                            <option value="eur"> £ EUR</option>
                            <option value="usd">$ USD</option>
                          </select>
                        </Box>
                        <Box>
                          <label htmlFor="zip-postal">Zip/Postal Code</label>
                          <input
                            type="number"
                            id="zip-postal"
                            className="form-control"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>

                  <button type="submit" className="btn btn-primary submit">
                    Save
                  </button>
                </form>
              )}
            </Container>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Signup;
