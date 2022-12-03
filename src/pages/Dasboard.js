import { Box, Container, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobileNav from "../components/mobileNav";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Helmet } from "react-helmet";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import { useSelector, useDispatch } from "react-redux";

import shield from "../assets/images/shield.png";
import curate from "../assets/images/cuate.png";
import "./dashboard.css";
import cuate2 from "../assets/images/cuate2.png";
import Sidebar from "../components/Sidebar";
import { fetchUser } from "../state/action-creators/index";
import DashboardHeader from "../components/DashboardHeader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    xAxis: {
      display: false,
    },
    yAxis: {
      display: true,
      ticks: {
        callback: function (value, index, ticks) {
          return "$" + value;
        },
      },
    },
  },
};

export const mobileOptions = {
  responsive: true,
  scales: {
    xAxis: {
      display: false,
    },
    yAxis: {
      display: true,
      ticks: {
        callback: function (value, index, ticks) {
          return "$" + value;
        },
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const barData = [500, 380, 350, 200, 100, 40, 100, 204, 19, 400, 200, 460];

export const data = {
  labels,
  datasets: [
    {
      data: barData,
      backgroundColor: "#FF9924",
      barPercentage: 0.7,
      barThickness: 20,
      // label: 'Celcius '
    },
  ],
};

export const mobiledata = {
  labels,
  datasets: [
    {
      data: barData,
      backgroundColor: "#FF9924",
      barPercentage: 0.7,
      barThickness: 7,
      // label: 'Celcius'
    },
  ],
};

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currency, setCurrency] = React.useState("USD");
  const userDetails = useSelector((state) => state.auth.userDetails);

  
  const options = {
    type: "loop",
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    arrow: false,
  };

  const handleChange = (e) => {
    setCurrency(e.target.value);
  }

  if (window.innerWidth > 820) {
    return (
      <Box className="dashboard">
        <Helmet>
          <title>User Dashboard</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
          <body class="dashboard-background" />
        </Helmet>
        <Box className="dashboard-grid">
          <Sidebar />

          <Box className="dashboard-content">
            <DashboardHeader />

            <Box className="dashboard-inner py-5 dashboard-inner-white">
              <Container className="buy-padding dashboard-padding">
                <Box className="dashboard-container-box">
                  <Splide options={options}>
                    <SplideSlide>
                      <Box
                        padding={{ sm: 2, md: 4 }}
                        sx={{ background: "#FFF8EE", borderRadius: "5px" }}
                      >
                        <Stack
                          spacing={{ xs: 1, sm: 2, md: 4 }}
                          direction={{ xs: "column", sm: "row" }}
                          justifyContent="space-between"
                        >
                          <Box>
                            <Stack>
                              <h6 className="name-account">
                                {/* Hello <span>{first_name}</span> {last_name} */}
                              </h6>
                              <p className="welcome-account">
                                Welcome to your dashboard
                              </p>
                              <p className="verify-account">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Eligendi sed nemo tenetur ad
                                in error nesciunt.
                              </p>

                              {userDetails?.has_completed_kyc && (
                                <button className="btn verify-account-button">
                                  Verify account
                                </button>
                              )}
                            </Stack>
                          </Box>
                          <Box>
                            <img src={curate} alt="" />
                          </Box>
                        </Stack>
                      </Box>
                    </SplideSlide>

                    <SplideSlide>
                      <Box
                        padding={{ sm: 2, md: 4 }}
                        sx={{ background: "#FFF8EE", borderRadius: "5px" }}
                      >
                        <Stack
                          spacing={{ xs: 1, sm: 2, md: 4 }}
                          direction={{ xs: "column", sm: "row" }}
                          justifyContent="space-between"
                        >
                          <Box>
                            <Stack>
                              <h6 className="name-account">
                                Tips on how to strenghten your account
                              </h6>
                              {/* <p className="welcome-account">
                                Welcome to your dashboard
                              </p> */}
                              <p className="verify-account">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Eligendi sed nemo tenetur ad
                                in error nesciunt.
                              </p>
                              <button
                                onClick={() =>
                                  navigate("/pasword-and-security")
                                }
                                className="btn verify-account-button"
                              >
                                Go to security
                              </button>
                            </Stack>
                          </Box>
                          <Box>
                            <img src={cuate2} alt="" />
                          </Box>
                        </Stack>
                      </Box>
                    </SplideSlide>
                  </Splide>

                  <Box paddingY="2rem">
                    <Box>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3,1fr)",
                          gap: "2rem",
                        }}
                      >
                        <Box
                          padding=".7rem 1.5rem"
                          sx={{
                            background: "rgba(255, 243, 227, 0.61)",
                            borderRadius: "5px",
                            border: "1px solid #FF9924",
                          }}
                          className="transactions-number"
                        >
                          <h6>No of transactions this week</h6>
                          <p>0</p>
                        </Box>
                        <Box
                          padding=".7rem 1.5rem"
                          sx={{
                            background: "rgba(255, 243, 227, 0.61)",
                            borderRadius: "5px",
                            border: "1px solid #FF9924",
                          }}
                          className="transactions-number"
                        >
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <h6>Fiat Transactions</h6>
                            <form>
                              <select
                                value={currency}
                                onChange={handleChange}
                                className="fiat-btn"
                              >
                                <option>$ USD</option>
                                <option>€ EUR</option>
                              </select>
                            </form>
                          </Box>

                          {currency === "USD" ? <p>$20k</p> : <p>€20k</p>}
                        </Box>
                        <Box
                          padding=".7rem 1.5rem"
                          sx={{
                            background: "rgba(255, 243, 227, 0.61)",
                            borderRadius: "5px",
                            border: "1px solid #FF9924",
                          }}
                          className="transactions-number"
                        >
                          <h6>Total Bitcoin purchased</h6>
                          <p>0</p>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ paddingBottom: "5rem" }}>
                    <Box className="chart-flex-container">
                      <Box className="chart-container">
                        <Stack>
                          <Stack direction="row" justifyContent="space-between">
                            <Box>
                              <h6
                                style={{
                                  fontWeight: "600",
                                  fontSize: "16px",
                                  lineHeight: "32px",
                                  color: "#000000",
                                  marginBottom: "0px",
                                }}
                              >
                                Reports
                              </h6>
                              <form>
                                <div className="selectdiv ">
                                  <label style={{ marginBottom: "0px" }}>
                                    <select>
                                      <option> Monthly </option>
                                      <option>Weekly</option>
                                      <option>Daily</option>
                                    </select>
                                  </label>
                                </div>
                              </form>
                            </Box>

                            <Stack
                              stack={2}
                              direction="row"
                              justifyContent="space-between"
                            >
                              <div
                                style={{
                                  width: "10px",
                                  height: "10px",
                                  background: "#FF9924",
                                  borderRadius: "50%",
                                  marginRight: "2px",
                                }}
                              ></div>
                              <p
                                style={{
                                  fontFamily: "Inter",
                                  fontStyle: "normal",
                                  fontWeight: "400",
                                  fontSize: "10.0295px",
                                  lineHeight: "12px",
                                  color: "#25233A",
                                  mixBlendMode: "normal",
                                  opacity: "0.4",
                                }}
                              >
                                Volume of BTC bought per month
                              </p>
                            </Stack>
                          </Stack>

                          <Bar options={options} data={data} />
                        </Stack>
                      </Box>
                      <Box className="chart-other">
                        <Box className="chart-verification-page">
                          <Box className="verification-status">
                            <Box padding="1.4rem">
                              <img src={shield} alt="" />
                              <h6
                                style={{
                                  color: "#fff",
                                  fontWeight: "500",
                                  fontSize: "16px",
                                }}
                              >
                                Verification status
                              </h6>
                            </Box>
                          </Box>
                          <Box className="verification-two">
                            <Box className="verification-status-two">
                              <Stack spacing={3}>
                                <Stack
                                  alignItems="center"
                                  direction="row"
                                  spacing={1}
                                >
                                  <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.625 12.8125H4.375C2.5 12.8125 1.25 11.875 1.25 9.6875V5.3125C1.25 3.125 2.5 2.1875 4.375 2.1875H10.625C12.5 2.1875 13.75 3.125 13.75 5.3125V9.6875C13.75 11.875 12.5 12.8125 10.625 12.8125Z"
                                      stroke="#292D32"
                                      strokeMiterlimit="10"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M10.625 5.625L8.66875 7.1875C8.025 7.7 6.96875 7.7 6.325 7.1875L4.375 5.625"
                                      stroke="#292D32"
                                      strokeMiterlimit="10"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>

                                  <p>Email</p>
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
                                </Stack>
                                <Stack
                                  alignItems="center"
                                  direction="row"
                                  spacing={1}
                                >
                                  <svg
                                    width="9"
                                    height="15"
                                    viewBox="0 0 9 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M1.37192 0.625L7.62192 0.63125C8.30942 0.63125 8.87192 1.1875 8.87192 1.875V13.125C8.87192 13.8125 8.30942 14.375 7.62192 14.375H1.37192C0.684424 14.375 0.128174 13.8125 0.128174 13.125V1.875C0.128174 1.1875 0.684424 0.625 1.37192 0.625ZM1.37192 11.875H7.62192V3.125H1.37192V11.875Z"
                                      fill="black"
                                      fillOpacity="0.54"
                                    />
                                  </svg>

                                  <p>Phone Number</p>

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
                                </Stack>
                                <Stack
                                  alignItems="center"
                                  direction="row"
                                  spacing={1}
                                >
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

                                  <p>KYC Verification</p>
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
                                </Stack>
                              </Stack>

                              <Link
                                className="btn mt-5"
                                style={{
                                  color: "black",
                                  background: "#ff9924",
                                  borderRadius: "5px",
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                }}
                                to="/verification"
                              >
                                Verification page
                              </Link>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Container>
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
            <Container>
              <Box className="mobile-padding">
                <Box className="mobile-dashboard">
                  <Splide options={options}>
                    <SplideSlide>
                      <Box
                        padding="1rem"
                        sx={{ background: "#FFF8EE", borderRadius: "5px" }}
                        className="splide-item"
                      >
                        <Box>
                          <Stack spacing={2}>
                            <h6 className="name-account">
                              {/* Hello <span>{first_name}</span> {last_name} */}
                            </h6>
                            <p className="welcome-account">
                              Welcome to your dashboard
                            </p>
                            <p className="verify-account">
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Eligendi sed nemo tenetur ad in
                              error nesciunt.
                            </p>
                          </Stack>
                          <Stack
                            margin="1.5rem 0"
                            justifyContent="space-between"
                            direction="row"
                          >
                            <Box>
                              <button className="btn btn-overview">
                                Buy Bitcoin
                              </button>
                            </Box>
                            <Box className="tiktik">
                              <svg
                                width="74"
                                height="73"
                                viewBox="0 0 74 73"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                              </svg>
                            </Box>
                          </Stack>
                        </Box>
                      </Box>
                    </SplideSlide>

                    <SplideSlide>
                      <Box
                        padding="1rem"
                        sx={{ background: "#FFF8EE", borderRadius: "5px" }}
                        className="splide-item"
                      >
                        <Box>
                          <Stack spacing={2}>
                            <h6 className="name-account">
                              Tips on how to strenghten your account
                            </h6>

                            <p className="verify-account">
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Eligendi sed nemo tenetur ad in
                              error nesciunt.
                            </p>
                          </Stack>

                          <Stack
                            margin="1.5rem 0"
                            gap="2rem"
                            justifyContent="space-between"
                            direction="row"
                          >
                            <Box>
                              <button
                                onClick={() =>
                                  navigate("/pasword-and-security")
                                }
                                className="btn btn-overview"
                              >
                                Go to Security
                              </button>
                            </Box>
                            <Box className="tiktik">
                              <svg
                                width="74"
                                height="73"
                                viewBox="0 0 74 73"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="0.195312"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="8.13464"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="16.0741"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="24.0134"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="31.9528"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="39.8922"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="7.93945"
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="15.8789"
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="23.8184"
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="31.7578"
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="39.6973"
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="47.6377"
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="55.5762"
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="63.5166"
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="47.8315"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="55.4888"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="63.1461"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                                <rect
                                  x="71.4561"
                                  y="70.8033"
                                  width="1.98488"
                                  height="1.98488"
                                  rx="0.992438"
                                  fill="#FF9924"
                                />
                              </svg>
                            </Box>
                          </Stack>
                        </Box>
                      </Box>
                    </SplideSlide>
                  </Splide>
                </Box>

                <Box margin="1.5rem 0">
                  <Box>
                    <Box className="history-div">
                      <Splide
                        options={{
                          rewind: false,
                          perPage: 1,
                          perMove: 1,
                          gap: "2rem",
                          // padding: '0 5rem 0 0',
                          padding: "5rem",
                          pagination: false,
                          type: "loop",
                        }}
                      >
                        <SplideSlide>
                          <Box
                            padding=".7rem"
                            sx={{
                              background: "rgba(255, 243, 227, 0.61)",
                              borderRadius: "5px",
                              border: "1px solid #FF9924",
                              width: "200px",
                              height: "120px",
                            }}
                            className="transactions-number"
                          >
                            <h6>No of transactions this week</h6>
                            <p>0</p>
                          </Box>
                        </SplideSlide>
                        <SplideSlide>
                          <Box
                            padding=".7rem"
                            sx={{
                              background: "rgba(255, 243, 227, 0.61)",
                              borderRadius: "5px",
                              border: "1px solid #FF9924",

                              height: "120px",
                            }}
                            className="transactions-number"
                          >
                            <h6>Bitcoin sent out</h6>
                            <p>0</p>
                          </Box>
                        </SplideSlide>
                        <SplideSlide>
                          <Box
                            padding=".7rem"
                            sx={{
                              background: "rgba(255, 243, 227, 0.61)",
                              borderRadius: "5px",
                              border: "1px solid #FF9924",

                              height: "120px",
                            }}
                            className="transactions-number"
                          >
                            <h6>No of transactions this week</h6>
                            <p>0</p>
                          </Box>
                        </SplideSlide>
                      </Splide>
                    </Box>
                  </Box>
                </Box>

                <Box
                  marginBottom="1.5rem"
                  style={{
                    border: "1px solid rgba(255, 153, 36, 1)",
                    borderRadius: "5px",
                  }}
                >
                  <Box
                    sx={{ background: "rgba(255, 248, 238, 1)" }}
                    padding="0.1rem"
                  >
                    <Bar options={mobileOptions} data={mobiledata} />
                  </Box>
                </Box>

                <Box
                  padding="1.5rem"
                  sx={{ background: "#ff9924", border: "0.5px solid #ff9924" }}
                >
                  <Box>
                    <Box className="verification-status">
                      <Box>
                        <Box
                          mb="1.3rem"
                          alignItems="center"
                          display="flex"
                          justifyContent="flex-start"
                          gap="1rem"
                        >
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 35 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.2977 3.25203L8.02057 5.99369C6.34349 6.62078 4.97266 8.60411 4.97266 10.3833V21.2187C4.97266 22.9395 6.11016 25.1999 7.49557 26.2354L13.7664 30.9166C15.8227 32.4624 19.206 32.4624 21.2622 30.9166L27.5331 26.2354C28.9185 25.1999 30.056 22.9395 30.056 21.2187V10.3833C30.056 8.58953 28.6852 6.60619 27.0081 5.97911L19.731 3.25203C18.4914 2.79994 16.5081 2.79994 15.2977 3.25203Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.4997 18.2292C19.1105 18.2292 20.4163 16.9234 20.4163 15.3125C20.4163 13.7017 19.1105 12.3959 17.4997 12.3959C15.8888 12.3959 14.583 13.7017 14.583 15.3125C14.583 16.9234 15.8888 18.2292 17.4997 18.2292Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.5 18.2291V22.6041"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <h6
                            style={{
                              color: "#fff",
                              fontWeight: "600",
                              fontSize: "16px",
                              lineHeight: "30px",
                            }}
                          >
                            Verification status
                          </h6>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="verification-two">
                      <Box className="verification-status-two mobile">
                        <Box className="verification">
                          <Stack
                            alignItems="center"
                            direction="row"
                            spacing={1}
                          >
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.625 12.8125H4.375C2.5 12.8125 1.25 11.875 1.25 9.6875V5.3125C1.25 3.125 2.5 2.1875 4.375 2.1875H10.625C12.5 2.1875 13.75 3.125 13.75 5.3125V9.6875C13.75 11.875 12.5 12.8125 10.625 12.8125Z"
                                stroke="white"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.625 5.625L8.66875 7.1875C8.025 7.7 6.96875 7.7 6.325 7.1875L4.375 5.625"
                                stroke="white"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>

                            <p>Email</p>

                            {userDetails?.has_verified_email ? (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.99967 14.6667C11.6663 14.6667 14.6663 11.6667 14.6663 8.00004C14.6663 4.33337 11.6663 1.33337 7.99967 1.33337C4.33301 1.33337 1.33301 4.33337 1.33301 8.00004C1.33301 11.6667 4.33301 14.6667 7.99967 14.6667Z"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5.16699 7.99995L7.05366 9.88661L10.8337 6.11328"
                                  stroke="white"
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
                          </Stack>
                          <Stack
                            alignItems="center"
                            direction="row"
                            spacing={1}
                          >
                            <svg
                              width="9"
                              height="15"
                              viewBox="0 0 9 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.37168 0.625L7.62168 0.63125C8.30918 0.63125 8.87168 1.1875 8.87168 1.875V13.125C8.87168 13.8125 8.30918 14.375 7.62168 14.375H1.37168C0.68418 14.375 0.12793 13.8125 0.12793 13.125V1.875C0.12793 1.1875 0.68418 0.625 1.37168 0.625ZM1.37168 11.875H7.62168V3.125H1.37168V11.875Z"
                                fill="white"
                              />
                            </svg>

                            <p>Phone Number</p>

                            {userDetails?.has_verified_phone_number ? (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.99967 14.6667C11.6663 14.6667 14.6663 11.6667 14.6663 8.00004C14.6663 4.33337 11.6663 1.33337 7.99967 1.33337C4.33301 1.33337 1.33301 4.33337 1.33301 8.00004C1.33301 11.6667 4.33301 14.6667 7.99967 14.6667Z"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5.16699 7.99995L7.05366 9.88661L10.8337 6.11328"
                                  stroke="white"
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
                          </Stack>
                          <Stack
                            alignItems="center"
                            direction="row"
                            spacing={1}
                          >
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.55585 1.39373L3.43711 2.56247C2.71836 2.83122 2.13086 3.68122 2.13086 4.44997V9.09371C2.13086 9.83121 2.61837 10.8 3.21212 11.2437L5.89961 13.25C6.78086 13.9125 8.23085 13.9125 9.1121 13.25L11.7996 11.2437C12.3934 10.8 12.8808 9.83121 12.8808 9.09371V4.44997C12.8808 3.68122 12.2934 2.83122 11.5746 2.56247L8.45586 1.39373C7.92461 1.19998 7.0746 1.19998 6.55585 1.39373Z"
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.50079 6.82501C7.47579 6.82501 7.44453 6.82501 7.41953 6.82501C6.83203 6.80626 6.36328 6.31876 6.36328 5.72501C6.36328 5.11876 6.85704 4.625 7.46329 4.625C8.06954 4.625 8.56329 5.11876 8.56329 5.72501C8.55704 6.32501 8.08829 6.80626 7.50079 6.82501Z"
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M6.25664 8.57498C5.65664 8.97498 5.65664 9.63122 6.25664 10.0312C6.93789 10.4875 8.05664 10.4875 8.73789 10.0312C9.33789 9.63122 9.33789 8.97498 8.73789 8.57498C8.06289 8.11873 6.94414 8.11873 6.25664 8.57498Z"
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>

                            <p>KYC Verification</p>

                            {userDetails?.has_completed_kyc ? (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.99967 14.6667C11.6663 14.6667 14.6663 11.6667 14.6663 8.00004C14.6663 4.33337 11.6663 1.33337 7.99967 1.33337C4.33301 1.33337 1.33301 4.33337 1.33301 8.00004C1.33301 11.6667 4.33301 14.6667 7.99967 14.6667Z"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5.16699 7.99995L7.05366 9.88661L10.8337 6.11328"
                                  stroke="white"
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
                          </Stack>
                        </Box>

                        <Link
                          className="btn mt-3"
                          style={{
                            color: "black",
                            background: "#ffffff",
                            borderRadius: "5px",
                            fontSize: "14px",
                            lineHeight: "28px",
                            fontWeight: "400",
                          }}
                          to="/verification"
                        >
                          Verification page
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default Dashboard;
