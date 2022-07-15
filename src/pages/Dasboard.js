import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
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

import shield from "../assets/images/shield.png";
import curate from "../assets/images/cuate.png";
import check from "../assets/images/tick-circle.png";
import email from "../assets/images/sms.png";
import shieldNew from "../assets/images/security-user.png";
import phone from "../assets/images/telephone.png";
import "./dashboard.css";
import logo from "../assets/icons/header-white.png";
import icon1 from "../assets/icons/note-2.png";
import user from "../assets/images/ellipse.png";
import notification from "../assets/images/notification.png";
import cuate2 from "../assets/images/cuate2.png";
import tik from "../assets/images/tik.png";
import whiteSms from "../assets/images/sms-white.png";
import whiteTick from "../assets/images/tick-white.png";
import whitePhone from "../assets/images/phone-white.png";
import whiteSecurity from "../assets/images/security-white.png";
// import whiteShield from '../assets/images/'

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
    xAxis : {
      display: false
    }
  }
};


export const mobileOptions = {
  responsive: true,
  scales: {
    xAxis : {
      display: false
    },
    yAxis: {
      display: true,
      ticks: {
        callback: function(value, index, ticks) {
            return '$' + value;
        }
    }
    }
  }
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
      // label: 'Celcius'
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
  const options = {
    type: "loop",
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    arrow: false,
  };

  if (window.innerWidth > 820) {
    return (
      <Box className="dashboard">
        <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
          <body class="dashboard-background" />
        </Helmet>
        <Box className="dashboard-grid">
          <Box className="sidebar">
            <Container>
              <Link to="/">
                <img className="logo" src={logo} alt="bitkash" />
              </Link>

              <ul className="nav-icons">
                <li>
                  <Link to="/">
                    <Stack
                      className="sidebar-nav-flex"
                      alignItems="center"
                      direction="row"
                      spacing={1}
                    >
                      <img src={icon1} alt="" />
                      <h6>Buy</h6>
                    </Stack>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Stack
                      className="sidebar-nav-flex"
                      alignItems="center"
                      direction="row"
                      spacing={1}
                    >
                      <img src={icon1} alt="" />
                      <h6>Transaction History</h6>
                    </Stack>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Stack
                      className="sidebar-nav-flex"
                      alignItems="center"
                      direction="row"
                      spacing={1}
                    >
                      <img src={icon1} alt="" />
                      <h6>My Payments</h6>
                    </Stack>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Stack
                      className="sidebar-nav-flex"
                      alignItems="center"
                      direction="row"
                      spacing={1}
                    >
                      <img src={icon1} alt="" />
                      <h6>Pasword and security</h6>
                    </Stack>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Stack
                      className="sidebar-nav-flex"
                      alignItems="center"
                      direction="row"
                      spacing={1}
                    >
                      <img src={icon1} alt="" />
                      <h6>Activities</h6>
                    </Stack>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Stack
                      className="sidebar-nav-flex"
                      alignItems="center"
                      direction="row"
                      spacing={1}
                    >
                      <img src={icon1} alt="" />
                      <h6>Logout</h6>
                    </Stack>
                  </Link>
                </li>
              </ul>
            </Container>
          </Box>

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
                    </Box>
                  </Stack>
                </Box>
              </Container>
            </Box>

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
                                Hello Olubanjo Oluseyi
                              </h6>
                              <p className="welcome-account">
                                Welcome to your dashboard
                              </p>
                              <p className="verify-account">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Eligendi sed nemo tenetur ad
                                in error nesciunt.
                              </p>
                              <button className="btn verify-account-button">
                                Verify account
                              </button>
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
                              <button className="btn verify-account-button">
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
                          <h6>Bitcoin sent out</h6>
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
                          <h6>No of transactions this week</h6>
                          <p>0</p>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Box>
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
                                      <option selected> Monthly </option>
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
                                  <img src={email} alt="" />
                                  <p>Email</p>
                                  <img src={check} alt="" />
                                </Stack>
                                <Stack
                                  alignItems="center"
                                  direction="row"
                                  spacing={1}
                                >
                                  <img src={phone} alt="" />
                                  <p>Phone Number</p>
                                  <img src={check} alt="" />
                                </Stack>
                                <Stack
                                  alignItems="center"
                                  direction="row"
                                  spacing={1}
                                >
                                  <img src={shieldNew} alt="" />
                                  <p>KYC Verification</p>
                                  <img src={check} alt="" />
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
                      >
                        <Box>
                          <Stack spacing={2}>
                            <h6 className="name-account">
                              Hello Olubanjo Oluseyi
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
                              <img src={tik} alt="" />
                            </Box>
                          </Stack>
                        </Box>
                      </Box>
                    </SplideSlide>

                    <SplideSlide>
                      <Box
                        padding="1rem"
                        sx={{ background: "#FFF8EE", borderRadius: "5px" }}
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
                              <button className="btn btn-overview">
                                Go to Security
                              </button>
                            </Box>
                            <Box className="tiktik">
                              <img src={tik} alt="" />
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
                          <img src={whiteSecurity} alt="" />
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
                            <img src={whiteSms} alt="" />
                            <p>Email</p>
                            <img src={whiteTick} alt="" />
                          </Stack>
                          <Stack
                            alignItems="center"
                            direction="row"
                            spacing={1}
                          >
                            <img src={whitePhone} alt="" />
                            <p>Phone Number</p>
                            <img src={whiteTick} alt="" />
                          </Stack>
                          <Stack
                            alignItems="center"
                            direction="row"
                            spacing={1}
                          >
                            <img src={whiteSecurity} alt="" />
                            <p>KYC Verification</p>
                            <img src={whiteTick} alt="" />
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
