import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import "./dashboard.css";
import MobileNav from "../components/mobileNav";
import {
  deleteAcccount,
  enable2fa,
  disable2fa,
} from "../state/action-creators/index";

import Spinner from "../components/Spinner";

const Securities = () => {
  const loading = useSelector((state) => state.loader.loading);
  const dispatch = useDispatch();
  const [checkbox, setCheckBox] = useState("");

  const handle2fa = (e) => {
    console.log(e);

    if (e.target.checked) {
      dispatch(enable2fa());
    } else {
      console.log("unchecked");
      dispatch(disable2fa);
    }
  };


  if (loading) {
    return <Spinner />;
  }

  if (window.innerWidth > 820) {
    return <Navigate to="/pasword-and-security" replace={true} />;
  }

  if (window.innerWidth <= 820) {
    return (
      <Box>
        <MobileNav />

        <Box>
          <Box className="dashboard-inner" sx={{ paddingTop: "3rem" }}>
            <Container
              className="mobile-padding banks-mobile"
              style={{ marginTop: "3rem" }}
            >
              <div className="buy-title-mobile">
                <div className="title-div">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      stroke="#281F1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.28 13.6099C15.15 14.7399 13.53 15.0899 12.1 14.6399L9.51001 17.2199C9.33001 17.4099 8.96001 17.5299 8.69001 17.4899L7.49001 17.3299C7.09001 17.2799 6.73001 16.8999 6.67001 16.5099L6.51001 15.3099C6.47001 15.0499 6.60001 14.6799 6.78001 14.4899L9.36001 11.9099C8.92001 10.4799 9.26001 8.85989 10.39 7.72989C12.01 6.10989 14.65 6.10989 16.28 7.72989C17.9 9.33989 17.9 11.9799 16.28 13.6099Z"
                      stroke="#281F1E"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.45 16.2799L9.59998 15.4199"
                      stroke="#281F1E"
                      stroke-miterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3945 10.7H13.4035"
                      stroke="#281F1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h5
                    style={{ margin: 0, fontWeight: "600", fontSize: "18px" }}
                  >
                    Security
                  </h5>
                </div>
              </div>

              <div className="mt-5 securities">
                <Box className="">
                  <Box className="mb-5">
                    <Box>
                      <h5
                        className="mb-2"
                        style={{ fontWeight: "250", fontSize: "16px" }}
                      >
                        SECURITY
                      </h5>
                      <p className="mb-2">
                        Change your old password to a new one
                      </p>
                    </Box>
                    <Box>
                      <h6
                        className="mb-2"
                        style={{ fontWeight: "500", fontSize: "16px" }}
                      >
                        Update Password
                      </h6>
                      <Box>
                        <p style={{ margin: "0px" }} className="mb-2">
                          Change your old password to a new one
                        </p>
                        <button
                          style={{
                            border: "1px solid #ff9924",
                            background: "transparent",
                            width: "171px",
                            height: "40px",
                          }}
                        >
                          Change password
                        </button>
                      </Box>
                    </Box>
                  </Box>

                  <Box className="mb-5">
                    <Box className="mb-3">
                      <h5 style={{ fontWeight: "250", fontSize: "16px" }}>
                        ACCOUNT PROTECTION
                      </h5>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: ".5rem",
                        }}
                      >
                        <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
                          Two-factor Authentication
                        </h6>
                        <button
                          style={{
                            width: "158px",
                            height: "40px",
                            background: "#ffeeee",
                            border: "1px solid #ffdfb8",
                          }}
                        >
                          Disabled
                        </button>
                      </Box>
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "4fr .5fr",
                          
                        }}
                      >
                        <p>
                          Add an extra layer of security and protection to your
                          Bitkash account to protect it from unauthorized
                          transaction
                        </p>
                        <div className="checked-box">
                          <form>
                            <input
                              type="checkbox"
                              id="toggle"
                              value={checkbox}
                              onChange={handle2fa}
                            />
                            <label htmlFor="toggle"></label>
                          </form>
                        </div>
                      </Box>
                    </Box>

                    <Box>
                      <button
                        style={{
                          width: "190px",
                          background: "#ff9924",
                          height: "50px",
                          border: "none",
                          fontSize: "16px",
                        }}
                        className="mt-3"
                      >
                        Set up your 2FA
                      </button>
                    </Box>
                  </Box>

                  <Box>
                    <h5 style={{ fontWeight: "250", fontSize: "16px" }}>
                      DELETE ACCOUNT
                    </h5>
                    <p>Are you sure you want to delete your account?</p>
                    <button
                      style={{
                        width: "190px",
                        background: "#ff9924",
                        height: "50px",
                        border: "none",
                        fontSize: "16px",
                      }}
                      className="mt-3"
                      onClick={() => {
                        dispatch(deleteAcccount());
                      }}
                    >
                      Delete Account
                    </button>
                  </Box>
                </Box>
              </div>
            </Container>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default Securities;
