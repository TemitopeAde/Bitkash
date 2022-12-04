import { Box, Container, Stack } from "@mui/material";
import React, {useEffect} from "react";
import { Helmet } from "react-helmet";
import { format } from "date-fns";

import "./dashboard.css";
import user from "../assets/images/ellipse.png";
import MobileNav from "../components/mobileNav";

import Sidebar from "../components/Sidebar";
import {
  getNotifications,
  markNotificationsAsRead,
} from "../state/action-creators";
import { useDispatch, useSelector } from "react-redux";

const Notification = () => {
  const dispatch = useDispatch();
  const allNotifications = useSelector((state) => state.auth.userNotifications);

  useEffect(() => {
    dispatch(getNotifications())
    
  }, [])


  if (window.innerWidth > 820) {
    return (
      <Box>
        <Helmet>
          <title>Verifiaction Successful</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
          <body class="buy-background" />
        </Helmet>
        <Box className="dashboard">
          <Box className="dashboard-grid">
            <Sidebar />

            <Box className="dashboard-content">
              <Box className="dashboard-header">
                <Container
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Box className="dashboard-container">
                    <Stack spacing={2} direction="row">
                      <img className="user" src={user} alt="" />
                      <Stack>
                        <h6>Olubanjo Oluseyi</h6>
                        <p>Verified</p>
                      </Stack>
                      <Box paddingTop="6px">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0201 2.91016C8.71009 2.91016 6.02009 5.60016 6.02009 8.91016V11.8002C6.02009 12.4102 5.76009 13.3402 5.45009 13.8602L4.30009 15.7702C3.59009 16.9502 4.08009 18.2602 5.38009 18.7002C9.69009 20.1402 14.3401 20.1402 18.6501 18.7002C19.8601 18.3002 20.3901 16.8702 19.7301 15.7702L18.5801 13.8602C18.2801 13.3402 18.0201 12.4102 18.0201 11.8002V8.91016C18.0201 5.61016 15.3201 2.91016 12.0201 2.91016Z"
                            stroke="#4C4C4C"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                          />
                          <path
                            d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z"
                            stroke="#4C4C4C"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
                            stroke="#4C4C4C"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                          />
                        </svg>
                      </Box>
                    </Stack>
                  </Box>
                </Container>
              </Box>

              <Box
                className="dashboard-inner py-5 dashboard-padding"
                sx={{ background: "none !important" }}
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
                          d="M12.0196 2.91C8.7096 2.91 6.0196 5.6 6.0196 8.91V11.8C6.0196 12.41 5.7596 13.34 5.4496 13.86L4.2996 15.77C3.5896 16.95 4.0796 18.26 5.3796 18.7C9.6896 20.14 14.3396 20.14 18.6496 18.7C19.8596 18.3 20.3896 16.87 19.7296 15.77L18.5796 13.86C18.2796 13.34 18.0196 12.41 18.0196 11.8V8.91C18.0196 5.61 15.3196 2.91 12.0196 2.91Z"
                          stroke="#4C4C4C"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        />
                        <path
                          d="M13.8699 3.2C13.5599 3.11 13.2399 3.04 12.9099 3C11.9499 2.88 11.0299 2.95 10.1699 3.2C10.4599 2.46 11.1799 1.94 12.0199 1.94C12.8599 1.94 13.5799 2.46 13.8699 3.2Z"
                          stroke="#4C4C4C"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.0195 19.06C15.0195 20.71 13.6695 22.06 12.0195 22.06C11.1995 22.06 10.4395 21.72 9.89953 21.18C9.35953 20.64 9.01953 19.88 9.01953 19.06"
                          stroke="#4C4C4C"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                        />
                      </svg>

                      <h4 className="title">Notifications</h4>
                    </Box>
                  </Box>

                  <Box className="">
                    <Box className="py-3">
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                        }}
                      >
                        {allNotifications?.map((items, index) => {
                          return (
                            <Box
                              className="notification-sent"
                              key={items.notificationRef}
                            >
                              <Box>
                                <h6>
                                  <span style={{ fontWeight: "600" }}>
                                    {items.message} {" "} on {" "}
                                  </span>
                                  <br />
                                  <span style={{ color: "#ff9924" }}>
                                    {

                                    format(new
                                    Date(items.created_at),
                                    "dd-MM-yyyy")
                                    }
                                  </span>
                                </h6>
                              </Box>
                              <Box>
                                <button
                                  type="button"
                                  style={{ background: "none", border: "none" }}
                                  onClick={() => {
                                    dispatch(
                                      markNotificationsAsRead(
                                        items.notificationRef
                                      )
                                    );
                                  }}
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                      stroke="#292D32"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.16992 14.83L14.8299 9.17001"
                                      stroke="#292D32"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M14.8299 14.83L9.16992 9.17001"
                                      stroke="#292D32"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </button>
                              </Box>
                            </Box>
                          );
                        })}
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

export default Notification;
