import { Box, Container } from "@mui/material";
import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";

import "./dashboard.css";
import MobileNav from "../components/mobileNav";
import profile from "../assets/images/profile.png";
import edit from "../assets/images/edit-2.png";

import Spinner from "../components/Spinner";

const Profile = () => {
  const loading = useSelector((state) => state.loader.loading);
  const [image, setImage] = useState("");
  const formRef = useRef(null);
  const fileRef = useRef(null);
  const btnRef = useRef(null);
  const uploadRef = useRef(null);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const dispatch = useDispatch();

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
                      d="M12 12.0005C14.7614 12.0005 17 9.76191 17 7.00049C17 4.23906 14.7614 2.00049 12 2.00049C9.23859 2.00049 7.00002 4.23906 7.00002 7.00049C7.00002 9.76191 9.23859 12.0005 12 12.0005Z"
                      stroke="#292D32"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.5902 22C20.5902 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22"
                      stroke="#292D32"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h5
                    style={{ margin: 0, fontWeight: "600", fontSize: "18px" }}
                  >
                    Profile
                  </h5>
                </div>
              </div>

              <div className="mt-5">
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
                          Change Picture
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
                    </Box>
                  </Box>
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

                  <Box>
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: "400",
                        fontFamily: "Poppins",
                        textAlign: 'center'
                      }}
                    >
                      Maximum file size for profile picture is 20MB
                    </p>
                  </Box>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.6rem",
                    }}
                    className="mt-4"
                  >
                    <div>
                      <label htmlFor="firstName">First name</label>
                      <input
                        type="text"
                        id="firstName"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName">Last name name</label>
                      <input
                        type="text"
                        id="lastName"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <label htmlFor="email-address">Email</label>
                      <input
                        type="email"
                        id="email-address"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone">Phone number</label>
                      <input
                        type="number"
                        id="phone"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <button type="submit" className="btn profile-submit">
                        Edit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Container>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default Profile;
