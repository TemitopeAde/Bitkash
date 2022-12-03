import { Box, Container } from "@mui/material";
import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import "./dashboard.css";
import MobileNav from "../components/mobileNav";
import key from "../assets/images/key-square.png";
import edit from "../assets/images/edit-2.png";
import profile from "../assets/images/profile.png";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";

const Security = () => {
  const [tab, setTab] = useState(0);
  const [image, setImage] = useState("");
  const formRef = useRef(null);
  const fileRef = useRef(null);
  const btnRef = useRef(null);
  const uploadRef = useRef(null);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log(image.name);

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

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" />
  // }

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
                      <img src={key} alt="" className="icon" />
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
                              gap: '2rem'
                            }}
                          >
                            <p>
                              Add an extra layer of security and protection to
                              your Bitkash account to protect it from
                              unauthorized transaction
                            </p>
                            <div className="checked-box">
                              <input type="checkbox" id="toggle" />
                              <label htmlFor="toggle"></label>
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
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.00004 14.6667C11.6667 14.6667 14.6667 11.6667 14.6667 8.00004C14.6667 4.33337 11.6667 1.33337 8.00004 1.33337C4.33337 1.33337 1.33337 4.33337 1.33337 8.00004C1.33337 11.6667 4.33337 14.6667 8.00004 14.6667Z"
                                stroke="#008545"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5.16663 7.99995L7.05329 9.88661L10.8333 6.11328"
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
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.00004 14.6666C11.6667 14.6666 14.6667 11.6666 14.6667 7.99992C14.6667 4.33325 11.6667 1.33325 8.00004 1.33325C4.33337 1.33325 1.33337 4.33325 1.33337 7.99992C1.33337 11.6666 4.33337 14.6666 8.00004 14.6666Z"
                                stroke="#008545"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5.16663 7.99995L7.05329 9.88661L10.8333 6.11328"
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
                        >
                          <h6>KYC</h6>
                          {userDetails?.has_completed_kyc ? (
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.55622 1.39385L3.43747 2.56259C2.71872 2.83134 2.13123 3.68134 2.13123 4.45009V9.09383C2.13123 9.83133 2.61873 10.8001 3.21248 11.2438L5.89997 13.2501C6.78122 13.9126 8.23121 13.9126 9.11246 13.2501L11.8 11.2438C12.3937 10.8001 12.8812 9.83133 12.8812 9.09383V4.45009C12.8812 3.68134 12.2937 2.83134 11.575 2.56259L8.45622 1.39385C7.92497 1.2001 7.07497 1.2001 6.55622 1.39385Z"
                                stroke="#292D32"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.50005 6.82501C7.47505 6.82501 7.4438 6.82501 7.4188 6.82501C6.8313 6.80626 6.36255 6.31876 6.36255 5.72501C6.36255 5.11876 6.8563 4.625 7.46255 4.625C8.0688 4.625 8.56256 5.11876 8.56256 5.72501C8.55631 6.32501 8.08755 6.80626 7.50005 6.82501Z"
                                stroke="#292D32"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M6.25627 8.5751C5.65627 8.9751 5.65627 9.63134 6.25627 10.0313C6.93752 10.4876 8.05628 10.4876 8.73753 10.0313C9.33753 9.63134 9.33753 8.9751 8.73753 8.5751C8.06253 8.11885 6.94377 8.11885 6.25627 8.5751Z"
                                stroke="#292D32"
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
          <Box className="dashboard-inner py-5">
            <Container className="mobile-padding"></Container>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default Security;
