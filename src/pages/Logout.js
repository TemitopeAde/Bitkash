import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import { logout } from "../state/action-creators";
import DashboardHeader from "../components/DashboardHeader";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (isAuthenticated) {
    return (
      <Box>
        <Helmet>
          <title>Logout</title>
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
                sx={{ background: "none", top: "90px !important" }}
              >
                <Container>
                  <Box className="security-box active">
                    <Box className="p-5">
                      <Box>
                        <Stack
                          spacing={5}
                          sx={{ textAlign: "center", padding: "6rem" }}
                          className="logout-container"
                        >
                          <Box>
                            <svg
                              width="73"
                              height="73"
                              viewBox="0 0 73 73"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M30.4766 53.2901C31.8757 55.0847 34.0657 56.271 36.4991 56.271C40.6966 56.271 44.1032 52.8643 44.1032 48.6668C44.1032 46.933 43.5253 45.321 42.552 44.0435"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.57815 63.2665C6.72273 60.9548 6.08398 57.2744 6.08398 51.7082V45.6248C6.08398 33.4582 9.12565 30.4165 21.2923 30.4165H51.709C52.804 30.4165 53.8077 30.4469 54.7506 30.5078C64.3927 31.0553 66.9173 34.5532 66.9173 45.6248V51.7082C66.9173 63.8748 63.8756 66.9165 51.709 66.9165H21.2923C20.1973 66.9165 19.1936 66.8861 18.2507 66.8253"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M18.25 30.4168V24.3335C18.25 14.2656 21.2917 6.0835 36.5 6.0835C49.1229 6.0835 53.3508 10.281 54.4458 16.9118"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M66.9173 6.0835L6.08398 66.9168"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Box>
                          <p
                            style={{
                              fontSize: "24px",
                              lineHeight: "30px",
                              color: "#000",
                            }}
                          >
                            Are you sure you want to logout?
                          </p>
                          <Box
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <Stack direction="row" spacing={3}>
                              <button
                                style={{
                                  background: "#ff9924",
                                  border: "none",
                                  height: "64px",
                                  width: "224px",
                                  color: "#fff",
                                  fontSize: "24px",
                                  fontFamily: "Poppins",
                                }}
                                onClick={handleLogout}
                              >
                                Yes
                              </button>
                              <button
                                style={{
                                  background: "transparent",
                                  border: "1px solid #ff9924",
                                  height: "64px",
                                  width: "224px",
                                  color: "#000",
                                  fontSize: "24px",
                                  fontFamily: "Poppins",
                                }}
                                onClick={() => navigate("/user-dashboard")}
                              >
                                No
                              </button>
                            </Stack>
                          </Box>
                        </Stack>
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

  if (!isAuthenticated) {
    return <Navigate to="/" />
  }
};

export default Logout;
