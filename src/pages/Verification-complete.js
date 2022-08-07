import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "../components/Auth/auth.css";
import Header from "../components/Header";
import Modal from "../components/Modal";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
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

  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <Box>
      <Header />
      <Box className="sign-up" style={{ userSelect: 'none'}}>
        <Container style={{ width: "60%" }}>
          <Box className="title-flex" style={{ alignItems: "baseline" }}>
            <h3 className="mb-5">Complete your bank details</h3>
          </Box>
          <div className="mb-3" style={{ width: "100px" }}>
            <select
              value={currency}
              onChange={handleCurrencyChange}
              className="form-control"
              style={{ height: "50%" }}
            >
              <option value="eur"> £ EUR</option>
              <option value="usd">$ USD</option>
            </select>
          </div>

          {currency === "eur" ? (
            <motion.div
              variants={animations}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.4 }}
            >
              <form>
                <Box className="signup-grid">
                  <Box className="form-input">
                    <Box>
                      <input className="form-control" />
                    </Box>
                    <Box>
                      <input className="form-control" />
                    </Box>
                  </Box>
                  <Box className="form-input">
                    <Box>
                      <label htmlFor="holder-name">Account Holders Name</label>
                      <input id="holder-name" className="form-control" />
                    </Box>
                    <Box>
                      <label htmlFor="bank-name">Bank Name</label>
                      <input id="bank-name" className="form-control" />
                    </Box>
                  </Box>
                  <Box className="form-inputs">
                    <Box>
                      <label htmlFor="bank-branch-name">Bank branch name</label>
                      <input id="bank-branch-name" className="form-control" />
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
                      <input id="bank-address" className="form-control" />
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

                <button disabled type="submit" className="submit">
                  Save
                </button>
              </form>
            </motion.div>
          ) : (
            <form>
              <motion.div
                  variants={animations}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.9 }}
                >
              <Box className="signup-grid">
                <Box className="form-input">
                  <Box>
                    <input className="form-control" />
                  </Box>
                  <Box>
                    <input className="form-control" />
                  </Box>
                </Box>
                <Box className="form-input">
                  <Box>
                    <label htmlFor="holder-name">Account Holders Name</label>
                    <input id="holder-name" className="form-control" />
                  </Box>
                  <Box>
                    <label htmlFor="bank-name">Bank Name</label>
                    <input id="bank-name" className="form-control" />
                  </Box>
                </Box>
                <Box className="form-input">
                  <Box>
                    <label htmlFor="bank-2-branch-name">Account Number</label>
                    <input id="bank-2-branch-name" className="form-control" />
                  </Box>
                  <Box>
                    <label htmlFor="routing-number">Routing Number</label>
                    <input id="routing-number" className="form-control" />
                  </Box>
                </Box>

                <Box className="form-input">
                  <Box>
                    <label htmlFor="">Select account type</label>
                    <select className="form-control" style={{ height: "50%" }}>
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

              <button type="submit" disabled className="btn btn-primary submit">
                Save
              </button>
            </form>
          )}
        </Container>
      </Box>

      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5 }}
      >
        <Modal />
      </motion.div>
    </Box>
  );
};

export default Signup;
