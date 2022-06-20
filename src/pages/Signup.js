import { Box, Container } from "@mui/material";
import React from "react";

import "../components/Auth/auth.css";

const Signup = () => {
  return (
    <Box className="sign-up">
      <Container>
        <h3 className="mb-5">Complete your KYC Verification</h3>

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

          <button type="submit" className="submit">Submit</button>
        </form>
      </Container>
    </Box>
  );
};

export default Signup;
