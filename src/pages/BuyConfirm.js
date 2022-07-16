import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./dashboard.css";
import logo from "../assets/icons/header-white.png";
import icon1 from "../assets/icons/note-2.png";
import user from "../assets/images/ellipse.png";
import notification from "../assets/images/notification.png";
import MobileNav from "../components/mobileNav";
import { BsArrowDown } from "react-icons/bs";

const BuyConfirm = () => {
  if (window.innerWidth > 820) {
    return (
      <Box>
        <Helmet>
          <title>Payment Details</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
          {/* <body class="buy-background" /> */}
        </Helmet>
        <Box className="dashboard">
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

              <Box style={{ top: "90px" }} className="dashboard-inner py-5">
                <Container className="buy-padding">
                  <Stack spacing={2} className="confirm-buy">
                    <Box>
                      <h6
                        style={{
                          fontWeight: "600",
                          fontSize: "20px",
                          lineHeight: "40px",
                          color: "#000000",
                        }}
                      >
                        Please send your money ($5000) to
                      </h6>
                    </Box>
                    <Box className="ach-transfer mt-5">
                      <h6
                        className="color-yellow"
                        style={{ fontWeight: "600", fontSize: "20px" }}
                      >
                        ACH Transfers
                      </h6>
                      <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
                        <span>Beneficiary account name -</span> Bitkash Ou{" "}
                      </h6>
                      <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
                        <span>Bank name -</span> Metropolitan Commercial Bank{" "}
                      </h6>
                      <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
                        <span>Bank address -</span> 2099 Park Avenue, New York,
                        NY 12345{" "}
                      </h6>
                      <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
                        <span>Routing/ABA -</span> 1234567890{" "}
                      </h6>
                      <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
                        <span>Reference -</span> 24559599303299i4MDET54{" "}
                      </h6>
                    </Box>

                    <Box className="ach-transfer mt-5">
                      <h6
                        className="color-yellow"
                        style={{ fontWeight: "600", fontSize: "20px" }}
                      >
                        International Transfers
                      </h6>
                      <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
                        <span>Beneficiary account name -</span> Bitkash Ou{" "}
                      </h6>
                      <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
                        <span>Bank name -</span> Metropolitan Commercial Bank{" "}
                      </h6>
                      <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
                        <span>Bank address -</span> 2099 Park Avenue, New York,
                        NY 12345{" "}
                      </h6>
                      <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
                        <span>SWIFT Code -</span> 1234567890{" "}
                      </h6>
                      <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
                        <span>Routing/ABA -</span> 24559599303299i4MDET54{" "}
                      </h6>
                      <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
                        <span>Account Number -</span> 1234567890{" "}
                      </h6>
                      <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
                        <span>Reference -</span> 2455
                      </h6>
                    </Box>

                    <Box className="ach-transfer mt-5">
                      <h6
                        className="color-yellow"
                        style={{ fontWeight: "600", fontSize: "20px" }}
                      >
                        Important
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id autem laborum, exercitationem delectus quae harum
                        excepturi aliquam nesciunt iste adipisci, velit quos
                        vero voluptates sapiente laudantium dicta aut
                        consequuntur ducimus?
                      </p>

                      <Box mt="3rem">
                        <Box
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                          }}
                        >
                          <button
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "CENTER",
                            }}
                            className="btn btn-save-pdf"
                          >
                            <BsArrowDown />
                            Save as PDF
                          </button>
                          <button className="btn btn-save-pdf-outline">
                            Back
                          </button>
                        </Box>
                      </Box>
                    </Box>
                  </Stack>
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
        <div
          style={{
            width: "100%",
            right: 0,
            left: 0,
            top: "80px",
            position: "absolute",
            background: "#ff9924",
            height: "1px",
            content: "",
          }}
        ></div>
        <Box px="1rem" mt="5rem">
          <Box pt="10px">
            <h6
              style={{
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "40px",
                color: "#000000",
                fontFamily: "Poppins",
              }}
            >
              Please send your money ($5000) to
            </h6>
          </Box>
        </Box>

        <Box mb="5rem" px="1rem" style={{ fontFamily: "Poppins" }}>
          <Box
            p="1rem"
            className="ach-transfer mt-3"
            style={{ background: "#fff8ee", borderRadius: "5px" }}
          >
            <h6
              className="color-yellow"
              style={{ fontWeight: "600", fontSize: "20px" }}
            >
              ACH Transfers
            </h6>
            <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
              <span>Beneficiary account name -</span> Bitkash Ou{" "}
            </h6>
            <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
              <span>Bank name -</span> Metropolitan Commercial Bank{" "}
            </h6>
            <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
              <span>Bank address -</span> 2099 Park Avenue, New York, NY 12345{" "}
            </h6>
            <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
              <span>Routing/ABA -</span> 1234567890{" "}
            </h6>
            <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
              <span>Reference -</span> 24559599303299i4MDET54{" "}
            </h6>
          </Box>

          <Box
            p="1rem"
            className="ach-transfer mt-3"
            style={{ background: "#fff8ee", borderRadius: "5px" }}
          >
            <h6
              className="color-yellow"
              style={{ fontWeight: "600", fontSize: "20px" }}
            >
              International Transfers
            </h6>
            <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
              <span>Beneficiary account name -</span> Bitkash Ou{" "}
            </h6>
            <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
              <span>Bank name -</span> Metropolitan Commercial Bank{" "}
            </h6>
            <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
              <span>Bank address -</span> 2099 Park Avenue, New York, NY 12345{" "}
            </h6>
            <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
              <span>SWIFT Code -</span> 1234567890{" "}
            </h6>
            <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
              <span>Routing/ABA -</span> 24559599303299i4MDET54{" "}
            </h6>
            <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
              <span>Account Number -</span> 1234567890{" "}
            </h6>
            <h6 style={{ fontWeight: "500", fontSize: "16px" }}>
              <span>Reference -</span> 2455
            </h6>
          </Box>

          <Box style={{ paddingBottom: "6rem" }} className="ach-transfer mt-3">
            <h6
              className="color-yellow"
              style={{ fontWeight: "600", fontSize: "20px" }}
            >
              Important
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem
              laborum, exercitationem delectus quae harum excepturi aliquam
              nesciunt iste adipisci, velit quos vero voluptates sapiente
              laudantium dicta aut consequuntur ducimus?
            </p>

            <Box mt="3rem">
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                  }}
                  className="btn btn-save-pdf mobile"
                >
                  Save as PDF
                </button>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    
                  }}
                  className="btn btn-save-pdf-outline mobile"
                >
                  Back
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default BuyConfirm;
