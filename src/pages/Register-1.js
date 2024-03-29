import { Box, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./register.css";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

const animations = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const Register1 = ({
  setForm,
  setFormData,
  formData,
  handleChange,
  errors,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);

  console.log(formData)

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <div>
        <h6 className="step-one mb-3">Step 1 of 2</h6>
        <h5 className="step-one-title mb-5">Personal Details</h5>
      </div>

      <div className="register-grid">
        <div className="register-row">
          <div className="register-name">
            <label htmlFor="first-name">First name</label>
            <input
              name="first_name"
              className="form-control"
              id="first-name"
              type="text"
              onChange={handleChange}
              value={formData.first_name}
            />
            <p className="form-error">{errors?.first_name}</p>
          </div>

          <div className="register-last-name">
            <label htmlFor="last-name">Last name</label>
            <input
              className="form-control"
              name="last_name"
              id="last-name"
              type="text"
              onChange={handleChange}
              value={formData.last_name}
            />
            <p className="form-error">{errors?.last_name}</p>
          </div>
        </div>

        <div className="register-row">
          <div className="register-name">
            <label htmlFor="register-email-address">Email</label>
            <input
              name="email"
              className="form-control"
              id="register-email-address"
              type="email"
              onChange={handleChange}
              value={formData.email}
            />
            <p className="form-error">{errors.email}</p>
          </div>
          <div className="register-last-name">
            <label htmlFor="register-phone">Phone</label>

            <PhoneInput
              inputProps={{
                name: " phone_number",
              }}
              country={"us"}
              value={formData.phone_number}
              onChange={(e) => setFormData({ ...formData, phone_number: e })}
            />
            <p className="form-error">{errors?.phone_number}</p>
          </div>
        </div>

        <div className="register-row">
          <div className="register-name">
            <label htmlFor="register-password">Password</label>

            <Box position="relative">
              <input
                name="password"
                className="form-control"
                type={passwordShown ? "text" : "password"}
                id="register-password"
                onChange={handleChange}
                value={formData.password}
              />
              <p className="form-error">{errors?.password}</p>
              <Box position="absolute" sx={{ right: "20px", top: "13px" }}>
                {passwordShown ? (
                  <button
                    style={{
                      background: "none",
                      outline: "none",
                      border: "none",
                    }}
                    onClick={togglePassword}
                  >
                    <AiFillEye />
                  </button>
                ) : (
                  <button
                    style={{
                      background: "none",
                      outline: "none",
                      border: "none",
                    }}
                    onClick={togglePassword}
                  >
                    <AiFillEyeInvisible />
                  </button>
                )}
              </Box>
            </Box>
          </div>
          <div className="register-last-name">
            <label htmlFor="regsiter-confirm-password">Confirm password</label>

            <Box position="relative">
              <input
                name="confirm_password"
                className="form-control"
                type={passwordShown ? "text" : "password"}
                id="regsiter-confirm-password"
                value={formData.confirm_password}
                onChange={handleChange}
              />
              <p className="form-error">{errors?.confirm_password}</p>
              <Box position="absolute" sx={{ right: "20px", top: "14px" }}>
                {passwordShown ? (
                  <button
                    style={{
                      background: "none",
                      outline: "none",
                      border: "none",
                    }}
                    onClick={togglePassword}
                  >
                    <AiFillEye />
                  </button>
                ) : (
                  <button
                    style={{
                      background: "none",
                      outline: "none",
                      border: "none",
                    }}
                    onClick={togglePassword}
                  >
                    <AiFillEyeInvisible />
                  </button>
                )}
              </Box>
            </Box>
          </div>
        </div>

        <div className="register-row">
          <div className="register-name">
            <label htmlFor="register-currency">Currency</label>
            <select
              name="currency"
              id="register-currency"
              className="form-control"
              onChange={handleChange}
              value={formData.currency}
            >
              <option disabled value="">
                Select currency
              </option>
              <option>EUR</option>
              <option>USD</option>
            </select>
            <p className="form-error">{errors?.currency}</p>
          </div>
          <div className="register-last-name">
            <label htmlFor="register-language">Preffered language</label>
            <select
              className="form-control"
              name="preferred_language"
              id="register-language"
              onChange={handleChange}
              value={formData.preferred_language}
            >
              <option disabled value="">
                Select language
              </option>
              <option>ENG</option>
              <option>FRA</option>
            </select>
            <p className="form-error">{errors?.preferred_language}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 register-next mb-5">
        <button className="btn btn-lg" type="button" onClick={() => setForm(2)}>
          Next
        </button>
      </div>

      <Link style={{ color: "black", textDecoration: "none" }} to="/login">
        <h6 className="mb-5" style={{ fontWeight: "400", fontSize: "14px" }}>
          Have an account? <span style={{ color: "#FF9924" }}>Login</span>
        </h6>
      </Link>
    </>
  );
};

export default Register1;
