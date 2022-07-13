import { Box, Container, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import logo from "../assets/icons/header-white.png";
import icon1 from "../assets/icons/note-2.png";
import user from "../assets/images/ellipse.png";
import notification from "../assets/images/notification.png";
import MobileNav from "../components/mobileNav";

const Buy = () => {
  // const handlePaste = (e) => {
  //   e.preventDefault();
  //   document.addEventListener("DOMContentLoaded", function () {
  //     let pasteButton = document.querySelector(".paste-btn");
  //     pasteButton.addEventListener("click", function () {
  //       navigator.clipboard.readText().then(
  //         (cliptext) =>
  //           (document.querySelector("#wallet-address").value = cliptext),
  //         (err) => console.log(err)
  //       );
  //     });
  //   });
  // };

  if (window.innerWidth > 820) {
    return (
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

            <Box className="dashboard-inner py-5">
              <Container className="buy-padding">
                <Box className="overview">
                  <h4 className="mb-4">
                    You are buying Bitcoin at <span>$24,000</span>{" "}
                  </h4>
                  <p>The Bitcoin exchange rate will refresh in 10 minutes</p>
                </Box>
                <form>
                  <Box>
                    <Box className="dashboard-form">
                      <Box>
                        <label htmlFor="currency-dashboard">Currency</label>
                        <select
                          id="currency-dashboard"
                          className="form-control"
                        >
                          <option>USD</option>
                          <option>EUR</option>
                        </select>
                      </Box>
                      <Box>
                        <label htmlFor="dashboard-price">Price</label>
                        <input
                          type="number"
                          id="dashboard-price"
                          className="form-control"
                        />
                      </Box>

                      <Box>
                        <label htmlFor="bitcoin-equ">Bitcoin Equivalent</label>
                        <input
                          type="number"
                          className="form-control"
                          id="bitcoin-equ"
                        />
                      </Box>
                    </Box>

                    <Box className="mb-5 mt-5 dashboard-form-single">
                      <label htmlFor="wallet-adresss">
                        Bitcoin Wallet Addresss
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="wallet-address"
                      />
                    </Box>

                    <Stack
                      className="mb-4"
                      alignItems="center"
                      direction="row"
                      spacing={5}
                    >
                      <input type="checkbox" />
                      <h6 className="checkbox-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi libero laboriosam neque ipsam, voluptate omnis
                        non.
                      </h6>
                    </Stack>

                    <button type="submit" className="dashboard-buy">
                      Buy
                    </button>
                  </Box>
                </form>
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
            <Container className="mobile-padding">
              <Box
                className="overview"
                style={{ background: "#FFF8EE", borderRadius: "10px" }}
              >
                <h4 className="mb-4">
                  You are buying Bitcoin at <span>$24,000</span>{" "}
                </h4>
                <p>The Bitcoin exchange rate will refresh in 10 minutes</p>
              </Box>
              <form>
                <Box>
                  <Box className="dashboard-form mobile">
                    <Box>
                      <label className="mb-3" htmlFor="currency-dashboard">
                        Currency
                      </label>
                      <select id="currency-dashboard" className="form-control">
                        <option>USD</option>
                        <option>EUR</option>
                      </select>
                    </Box>

                    <Stack
                      spacing={2}
                      direction="row"
                      justifyContent="space-between"
                      className="mt-5"
                    >
                      <Box>
                        <label className="mb-3" htmlFor="dashboard-price">
                          Price
                        </label>
                        <input
                          type="number"
                          id="dashboard-price"
                          className="form-control"
                        />
                      </Box>

                      <Box>
                        <label className="mb-3" htmlFor="bitcoin-equ">
                          Bitcoin Equivalent
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="bitcoin-equ"
                        />
                      </Box>
                    </Stack>
                  </Box>

                  <Box
                    className="mb-5 mt-5 dashboard-form-single"
                    sx={{ position: "relative" }}
                  >
                    <label className="mb-3" htmlFor="wallet-adresss">
                      Bitcoin Wallet Addresss
                    </label>
                    <input
                      type="text"
                      className="form-control paste-container"
                      id="wallet-address"
                    />

                    {/* <button
                      style={{ position: "absolute", top: "0" }}
                      className="paste-btn"
                      // onClick={handlePaste}
                    >
                      Paste
                    </button> */}
                  </Box>

                  <Stack
                    className="mb-4"
                    alignItems="center"
                    direction="row"
                    spacing={5}
                  >
                    <input
                      type="checkbox"
                      style={{ transform: "scale(1.5)" }}
                    />
                    <h6 className="checkbox-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Animi libero laboriosam neque ipsam, voluptate omnis non.
                    </h6>
                  </Stack>

                  <button type="submit" className="dashboard-buy-mobile mt-4">
                    Buy
                  </button>
                </Box>
              </form>
            </Container>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default Buy;
