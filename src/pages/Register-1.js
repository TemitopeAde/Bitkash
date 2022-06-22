import { Box, Container } from "@mui/material";
import React from "react";

import "./register.css";

const Register1 = ({ setform }) => {
  return (
    <Box style={{ paddingBottom: "5rem" }} className="px-5 register-content">
      <Container>
        <Box position="relative">
          <Box className="register-form" id="form1">
            <p className="step-one mb-3">Step 1 of 2</p>
            <p className="step-one-title mb-5">Personal Details</p>
            <form onSubmit={() => setform(2)}>
              <Box className="register-form-grid">
                <Box className="register-grid">
                  <div className="register-row">
                    <div className="register-name">
                      <label htmlFor="first-name">First name</label>
                      <input
                        id="first-name"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="register-last-name">
                      <label htmlFor="last-name">Last name</label>
                      <input
                        id="last-name"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="register-row">
                    <div className="register-name">
                      <label htmlFor="register-email-address">Email</label>
                      <input
                        id="register-email-address"
                        type="email"
                        className="form-control"
                      />
                    </div>
                    <div className="register-last-name">
                      <label htmlFor="register-phone">Phone</label>
                      <input
                        id="register-phone"
                        type="number"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="register-row">
                    <div className="register-name">
                      <label htmlFor="register-password">Password</label>
                      <input
                        id="register-password"
                        type="password"
                        className="form-control"
                      />
                    </div>
                    <div className="register-last-name">
                      <label htmlFor="regsiter-confirm-password">
                        Confirm password
                      </label>
                      <input
                        id="regsiter-confirm-password"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="register-row">
                    <div className="register-name">
                      <label htmlFor="register-currency">First name</label>
                      <select className="form-control" id="register-currency">
                        <option>EUR</option>
                        <option>USD</option>
                      </select>
                    </div>
                    <div className="register-last-name">
                      <label htmlFor="register-language">
                        Preffered language
                      </label>
                      <select className="form-control" id="register-language">
                        <option>ENG</option>
                        <option>FRA</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-3 register-next">
                    <button type="submit">Next</button>
                  </div>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Register1;
