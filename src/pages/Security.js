import { Box, Container } from "@mui/material";
import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom'

import "./dashboard.css";
import MobileNav from "../components/mobileNav";
import edit from "../assets/images/edit-2.png";
import profile from "../assets/images/profile.png";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import {
  deleteAcccount,
  enable2fa,
  disable2fa,
} from "../state/action-creators/index";
import Spinner from "../components/Spinner";

const Security = () => {
  const [tab, setTab] = useState(1);
  const [image, setImage] = useState("");
  const formRef = useRef(null);
  const fileRef = useRef(null);
  const btnRef = useRef(null);
  const uploadRef = useRef(null);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const loading = useSelector((state) => state.loader.loading);
  const dispatch = useDispatch();
  const [checkbox, setCheckBox] = useState("");

  // console.log(image.name);

  

  const handleClick = (e) => {
    fileRef.current.click();
  };

  const handleChange = (e) => {
    // console.log(e.target.files);
    setImage(e.target.files[0]);
    // formRef.current.submit();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.name);
    console.log(formData);
  };

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
    return (
      <Box>
        <Helmet>
          <title>Security</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
          <body class="buy-background" />
        </Helmet>
        <Box className="dashboard">
          <Box className="dashboard-grid">
            <Sidebar />

            <Box className="dashboard-content">
              <DashboardHeader />

              <Box
                className="dashboard-inner py-5 dashboard-padding"
                sx={{ background: "none" }}
              >
                <Container>
                  <Box>
                    <Box className="title-flex mb-3">
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
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.2802 13.61C15.1502 14.74 13.5302 15.09 12.1002 14.64L9.5102 17.22C9.3302 17.41 8.9602 17.53 8.6902 17.49L7.4902 17.33C7.0902 17.28 6.7302 16.9 6.6702 16.51L6.5102 15.31C6.4702 15.05 6.6002 14.68 6.7802 14.49L9.3602 11.91C8.9202 10.48 9.2602 8.86001 10.3902 7.73001C12.0102 6.11001 14.6502 6.11001 16.2802 7.73001C17.9002 9.34001 17.9002 11.98 16.2802 13.61Z"
                          stroke="#281F1E"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.4496 16.28L9.59961 15.42"
                          stroke="#281F1E"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.3949 10.7H13.4039"
                          stroke="#281F1E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <h4 className="title">Security</h4>
                    </Box>
                  </Box>
                  <Box className="password-security-flex mb-5">
                    <button
                      className={
                        tab === 0
                          ? "flex-security-buttons active"
                          : "flex-security-buttons"
                      }
                      onClick={() => setTab(0)}
                    >
                      Profile
                    </button>
                    <button
                      className={
                        tab === 1
                          ? "flex-security-buttons active"
                          : "flex-security-buttons"
                      }
                      onClick={() => setTab(1)}
                    >
                      Security
                    </button>
                    <button
                      className={
                        tab === 2
                          ? "flex-security-buttons active"
                          : "flex-security-buttons"
                      }
                      onClick={() => setTab(2)}
                    >
                      Verification
                    </button>
                  </Box>

                  <Box
                    className={
                      tab === 0 ? "security-box active" : "security-box"
                    }
                  >
                    <Box className="p-5">
                      <Box className="profile-image-box">
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "10px",
                            textAlign: "center",
                          }}
                        >
                          <img src={profile} alt="" className="pro-img" />
                          <Box style={{ textAlign: "center" }}>
                            <Box
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "1rem",
                                alignItems: "center",
                              }}
                            >
                              <h6
                                onClick={() => fileRef.current.click()}
                                ref={uploadRef}
                                style={{
                                  color: "#ff9924",
                                  margin: "0px",
                                  cursor: "pointer",
                                }}
                              >
                                Upload Picture
                              </h6>
                              <button
                                onClick={handleClick}
                                ref={btnRef}
                                style={{ background: "none", border: "none" }}
                              >
                                <img
                                  style={{ height: "12px", width: "12px" }}
                                  src={edit}
                                  alt=""
                                />
                              </button>
                            </Box>

                            <form
                              className="profile-form-2"
                              ref={formRef}
                              encType="multipart/form-data"
                              onSubmit={handleSubmit}
                            >
                              <input
                                type="file"
                                id="my-file"
                                ref={fileRef}
                                onChange={handleChange}
                              />
                              <button type="submit">Submit</button>
                            </form>
                          </Box>
                          <Box>
                            <p
                              style={{
                                fontSize: "10px",
                                fontWeight: "400",
                                fontFamily: "Poppins",
                              }}
                            >
                              Maximum file size for profile picture is 20MB
                            </p>
                          </Box>
                        </Box>
                      </Box>

                      <div className="profile-items">
                        <div className="profile-flex-items">
                          <div>
                            <h6>First name:</h6>
                            <p>{userDetails?.first_name}</p>
                          </div>
                          <div>
                            <h6>Last name:</h6>
                            <p>{userDetails?.last_name}</p>
                          </div>
                        </div>

                        <div className="profile-flex-items">
                          <div>
                            <h6>Phone number:</h6>
                            <p>{userDetails?.phone_number}</p>
                          </div>
                          <div>
                            <h6>Email address:</h6>
                            <p>{userDetails?.email}</p>
                          </div>
                        </div>
                      </div>
                    </Box>
                  </Box>

                  <Box
                    className={
                      tab === 1 ? "security-box active" : "security-box"
                    }
                  >
                    <Box className="p-5">
                      <Box className="mb-5">
                        <Box>
                          <h5>SECURITY</h5>
                          <p>Change your old password to a new one</p>
                        </Box>
                        <Box>
                          <h6>Update Password</h6>
                          <Box
                            sx={{
                              alignItems: "center",
                              display: "flex",
                              justifyContent: "flex-start",
                              gap: "3rem",
                            }}
                          >
                            <p style={{ margin: "0px" }}>
                              Change your old password to a new one
                            </p>
                            <button
                              style={{
                                border: "1px solid #ff9924",
                                background: "transparent",
                                width: "200px",
                                height: "50px",
                              }}
                            >
                              Change password
                            </button>
                          </Box>
                        </Box>
                      </Box>

                      <Box className="mb-5">
                        <Box className="mb-3">
                          <h5>ACCOUNT PROTECTION</h5>
                          <Box
                            sx={{
                              alignItems: "center",
                              display: "flex",
                              justifyContent: "flex-start",
                              gap: "3rem",
                            }}
                          >
                            <h6 style={{ margin: "0px" }}>
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
                              gridTemplateColumns: "3fr 1fr",
                              gap: "2rem",
                            }}
                          >
                            <p>
                              Add an extra layer of security and protection to
                              your Bitkash account to protect it from
                              unauthorized transaction
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
                          >
                            Set up your 2FA
                          </button>
                        </Box>
                      </Box>

                      <Box>
                        <h5>DELETE ACCOUNT</h5>
                        <p>Are you sure you want to delete your account?</p>
                        <button
                          style={{
                            width: "190px",
                            background: "#ff9924",
                            height: "50px",
                            border: "none",
                            fontSize: "16px",
                          }}
                          onClick={() => {
                            dispatch(deleteAcccount());
                          }}
                        >
                          Delete Account
                        </button>
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    className={
                      tab === 2 ? "security-box active" : "security-box"
                    }
                  >
                    <Box className="p-5 verification-security">
                      <Box>
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            gap: "2rem",
                          }}
                        >
                          <h6>Email Verification</h6>
                          {userDetails?.has_verified_email ? (
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                                stroke="#008545"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5.8125 9L7.935 11.1225L12.1875 6.8775"
                                stroke="#008545"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                                stroke="#FF0202"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 6V9.75"
                                stroke="#FF0202"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.99609 12H9.00283"
                                stroke="#FF0202"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </Box>
                        {userDetails?.has_verified_email ? (
                          <p>Your email has been verified</p>
                        ) : (
                          <p>Your email has not been verified</p>
                        )}
                      </Box>
                      <Box>
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            gap: "2rem",
                          }}
                        >
                          <h6>Phone number</h6>
                          {userDetails?.has_verified_phone_number ? (
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                                stroke="#008545"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5.8125 9L7.935 11.1225L12.1875 6.8775"
                                stroke="#008545"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                                stroke="#FF0202"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 6V9.75"
                                stroke="#FF0202"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.99609 12H9.00283"
                                stroke="#FF0202"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </Box>
                        {userDetails?.has_verified_phone_number ? (
                          <p>Your phone number has been verified</p>
                        ) : (
                          <p>Your phone number has not been verified</p>
                        )}
                      </Box>
                      <Box>
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            gap: "2rem",
                          }}
                          className="kyc-box"
                        >
                          <h6>KYC</h6>
                          {userDetails?.has_completed_kyc ? (
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                                stroke="#008545"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5.8125 9L7.935 11.1225L12.1875 6.8775"
                                stroke="#008545"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                                stroke="#FF0202"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 6V9.75"
                                stroke="#FF0202"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.99609 12H9.00283"
                                stroke="#FF0202"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </Box>
                        {userDetails?.has_completed_kyc ? (
                          <p>You have completed the KYC verification</p>
                        ) : (
                          <p>You have not completed the KYC verification</p>
                        )}

                        {userDetails?.has_completed_kyc ? (
                          ""
                        ) : (
                          <button
                            style={{
                              width: "130px",
                              height: "50px",
                              background: "#FF9924",
                              border: "1px solid #FFDFB8",
                              borderRadius: "5px",
                              marginTop: "2rem",
                              fontWeight: "400",
                              fontSize: "16px",
                            }}
                          >
                            Verify
                          </button>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
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
                  <h5
                    style={{ margin: 0, fontWeight: "600", fontSize: "18px" }}
                  >
                    My Profile
                  </h5>
                </div>
              </div>

              <div className="mt-4">
                <div className="profile-cont-mobile">
                  <Link
                    to="/user-profile"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00002 8.00016C9.84097 8.00016 11.3334 6.50778 11.3334 4.66683C11.3334 2.82588 9.84097 1.3335 8.00002 1.3335C6.15907 1.3335 4.66669 2.82588 4.66669 4.66683C4.66669 6.50778 6.15907 8.00016 8.00002 8.00016Z"
                          stroke="#292D32"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.7268 14.6667C13.7268 12.0867 11.1601 10 8.0001 10C4.8401 10 2.27344 12.0867 2.27344 14.6667"
                          stroke="#292D32"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <h6>Profile</h6>
                    </div>
                    <div>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3333 9.99992C18.3333 5.39755 14.6024 1.66659 10 1.66659C5.39762 1.66659 1.66666 5.39755 1.66666 9.99992C1.66666 14.6023 5.39762 18.3333 10 18.3333C14.6024 18.3333 18.3333 14.6023 18.3333 9.99992Z"
                          stroke="#292D32"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.95 12.9417L11.8833 9.99998L8.95 7.05832"
                          stroke="#292D32"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    to="/"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.67999 11.68C6.98666 12.0733 7.46666 12.3333 7.99999 12.3333C8.91999 12.3333 9.66666 11.5867 9.66666 10.6667C9.66666 10.2867 9.53999 9.93332 9.32666 9.65332"
                          stroke="#263238"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.88001 13.8666C1.47334 13.36 1.33334 12.5533 1.33334 11.3333V9.99996C1.33334 7.33329 2.00001 6.66663 4.66668 6.66663H11.3333C11.5733 6.66663 11.7933 6.67329 12 6.68663C14.1133 6.80663 14.6667 7.57329 14.6667 9.99996V11.3333C14.6667 14 14 14.6666 11.3333 14.6666H4.66668C4.42668 14.6666 4.20668 14.66 4.00001 14.6466"
                          stroke="#263238"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 6.66671V5.33337C4 3.12671 4.66667 1.33337 8 1.33337C10.7667 1.33337 11.6933 2.25337 11.9333 3.70671"
                          stroke="#263238"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.6667 1.33337L1.33334 14.6667"
                          stroke="#263238"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <h6>Security</h6>
                    </div>
                    <div>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3333 9.99992C18.3333 5.39755 14.6024 1.66659 10 1.66659C5.39762 1.66659 1.66666 5.39755 1.66666 9.99992C1.66666 14.6023 5.39762 18.3333 10 18.3333C14.6024 18.3333 18.3333 14.6023 18.3333 9.99992Z"
                          stroke="#292D32"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.95 12.9417L11.8833 9.99998L8.95 7.05832"
                          stroke="#292D32"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    to="/"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.55625 1.39373L3.4375 2.56247C2.71875 2.83122 2.13126 3.68122 2.13126 4.44997V9.09371C2.13126 9.83121 2.61876 10.8 3.21251 11.2437L5.90001 13.25C6.78126 13.9125 8.23125 13.9125 9.1125 13.25L11.8 11.2437C12.3938 10.8 12.8812 9.83121 12.8812 9.09371V4.44997C12.8812 3.68122 12.2937 2.83122 11.575 2.56247L8.45625 1.39373C7.925 1.19998 7.075 1.19998 6.55625 1.39373Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.49999 6.82501C7.47499 6.82501 7.44374 6.82501 7.41874 6.82501C6.83124 6.80626 6.36249 6.31876 6.36249 5.72501C6.36249 5.11876 6.85624 4.625 7.46249 4.625C8.06874 4.625 8.5625 5.11876 8.5625 5.72501C8.55625 6.32501 8.08749 6.80626 7.49999 6.82501Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.25624 8.57498C5.65624 8.97498 5.65624 9.63122 6.25624 10.0312C6.93749 10.4875 8.05624 10.4875 8.73749 10.0312C9.33749 9.63122 9.33749 8.97498 8.73749 8.57498C8.06249 8.11873 6.94374 8.11873 6.25624 8.57498Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <h6>Verification</h6>
                    </div>
                    <div>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3333 9.99992C18.3333 5.39755 14.6024 1.66659 10 1.66659C5.39762 1.66659 1.66666 5.39755 1.66666 9.99992C1.66666 14.6023 5.39762 18.3333 10 18.3333C14.6024 18.3333 18.3333 14.6023 18.3333 9.99992Z"
                          stroke="#292D32"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.95 12.9417L11.8833 9.99998L8.95 7.05832"
                          stroke="#292D32"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    to="/"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0167 2.42505C7.25835 2.42505 5.01668 4.66672 5.01668 7.42505V9.83338C5.01668 10.3417 4.80001 11.1167 4.54168 11.55L3.58335 13.1417C2.99168 14.125 3.40001 15.2167 4.48335 15.5834C8.07501 16.7834 11.95 16.7834 15.5417 15.5834C16.55 15.25 16.9917 14.0584 16.4417 13.1417L15.4833 11.55C15.2333 11.1167 15.0167 10.3417 15.0167 9.83338V7.42505C15.0167 4.67505 12.7667 2.42505 10.0167 2.42505Z"
                          stroke="#4C4C4C"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11.5583 2.6667C11.3 2.5917 11.0333 2.53337 10.7583 2.50003C9.95834 2.40003 9.19167 2.45837 8.47501 2.6667C8.71667 2.05003 9.31667 1.6167 10.0167 1.6167C10.7167 1.6167 11.3167 2.05003 11.5583 2.6667Z"
                          stroke="#4C4C4C"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.5167 15.8833C12.5167 17.2583 11.3917 18.3833 10.0167 18.3833C9.33333 18.3833 8.7 18.1 8.25 17.65C7.8 17.2 7.51666 16.5666 7.51666 15.8833"
                          stroke="#4C4C4C"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                        />
                      </svg>

                      <h6>Notifications</h6>
                    </div>
                    <div>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3333 9.99992C18.3333 5.39755 14.6024 1.66659 10 1.66659C5.39762 1.66659 1.66666 5.39755 1.66666 9.99992C1.66666 14.6023 5.39762 18.3333 10 18.3333C14.6024 18.3333 18.3333 14.6023 18.3333 9.99992Z"
                          stroke="#292D32"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.95 12.9417L11.8833 9.99998L8.95 7.05832"
                          stroke="#292D32"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    to="/"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.35001 14.6C8.73334 15.0917 9.33334 15.4167 10 15.4167C11.15 15.4167 12.0833 14.4833 12.0833 13.3333C12.0833 12.8583 11.925 12.4167 11.6583 12.0667"
                          stroke="#263238"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.34999 17.3334C1.84166 16.7 1.66666 15.6917 1.66666 14.1667V12.5C1.66666 9.16671 2.49999 8.33337 5.83332 8.33337H14.1667C14.4667 8.33337 14.7417 8.34171 15 8.35837C17.6417 8.50837 18.3333 9.46671 18.3333 12.5V14.1667C18.3333 17.5 17.5 18.3334 14.1667 18.3334H5.83332C5.53332 18.3334 5.25832 18.325 4.99999 18.3084"
                          stroke="#263238"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 8.33329V6.66663C5 3.90829 5.83333 1.66663 10 1.66663C13.4583 1.66663 14.6167 2.81663 14.9167 4.63329"
                          stroke="#263238"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.3333 1.66663L1.66666 18.3333"
                          stroke="#263238"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <h6>Logout</h6>
                    </div>
                    <div>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3333 9.99992C18.3333 5.39755 14.6024 1.66659 10 1.66659C5.39762 1.66659 1.66666 5.39755 1.66666 9.99992C1.66666 14.6023 5.39762 18.3333 10 18.3333C14.6024 18.3333 18.3333 14.6023 18.3333 9.99992Z"
                          stroke="#292D32"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.95 12.9417L11.8833 9.99998L8.95 7.05832"
                          stroke="#292D32"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </Container>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default Security;
