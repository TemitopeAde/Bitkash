import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";

import Sidebar from "../components/Sidebar";
import user from "../assets/images/ellipse.png";
import notification from "../assets/images/notification.png";

const Logout = () => {
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
                      <img className="notify" src={notification} alt="" />
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
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
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
};

export default Logout;
