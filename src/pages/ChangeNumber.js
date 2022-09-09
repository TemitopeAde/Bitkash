import React, { useState } from "react";
import { Box } from "@mui/material";
import { Formik, Form } from "formik";
import PhoneInput from "react-phone-input-2";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import "../components/Auth/auth.css";
import { changeNumber } from "../state/action-creators";
import Spinner from "../components/Spinner";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const ChangePhoneNumber = () => {

  const dispatch = useDispatch();
  const loader = useSelector((state) => state.loader.loading);
  const recover = useSelector((state) => state.recover.recovered);

  const [formData, setFormData] = useState({
    phone: "2347038347584",
  });

  const { phone } = formData;

  const submitForm = (e) => {
    e.preventDefault();
    const payload = {
      phone: phone,
      uid: localStorage.getItem("uid"),
    };
    dispatch(changeNumber(payload));
  };

  if (loader) {
    return <Spinner />;
  }

  if (recover) {
    return <Navigate to="/password-reset-link-sent" />;
  }

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.8 }}
    >
      <Helmet>
        <title>Change Phone Number</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>

      <Box className="register-page">
        <Box position="relative">
          <Box className="register-sidebar">
            <Box className="register-title">
              <h3>
                Change <br />
                Phone Number
              </h3>
            </Box>
          </Box>

          <Box className="otp-register register-content-form">
            <Box className="register-content">
              <h6 className="mb-5 title-auth">Change Phone Number</h6>

              <form onSubmit={submitForm}>
                <Box sx={{ marginBottom: "23px" }}>
                  <label htmlFor="email">Phone Number</label>
                  <PhoneInput
                    inputProps={{
                      name: "phone",
                    }}
                    country={"us"}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e })}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "30%",
                    marginTop: "23px",
                  }}
                  className="login-button-box"
                >
                  <button
                    type="submit"
                    //   className={
                    //     dirty && isValid
                    //       ? "btn login-btn"
                    //       : "login-btn disabled-btn"
                    //   }
                    className="login-btn"
                    //   disabled={!(dirty && isValid)}
                    style={{ flexBasis: "35%" }}
                  >
                    Change
                  </button>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ChangePhoneNumber;
