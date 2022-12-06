import { Box, Container } from "@mui/material";
import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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
          <Box className="dashboard-inner py-5">
            <Container className="mobile-padding"></Container>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default Security;
