import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import "./dashboard.css";
import Sidebar from "../components/Sidebar";
import Bank from "../components/Banks";
import { getUserBank } from "../state/action-creators";
import DashboardHeader from "../components/DashboardHeader";
import MobileNav from "../components/mobileNav";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Banks = () => {
  const dispatch = useDispatch();
  const userBanks = useSelector((state) => state.auth.userBanks);
  const loading = useSelector((state) => state.loader.loading);

  useEffect(() => {
    dispatch(getUserBank());
  }, []);

  // if (loading) return <SpinnerTwo />;

  if (window.innerWidth >= 820) {
    return (
      <Box className="dashboard">
        <Box className="dashboard-grid">
          <motion.div
            variants={animation}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
          >
            <Sidebar />
          </motion.div>

          <Box className="dashboard-content">
            <DashboardHeader />

            <motion.div
              variants={animations}
              initial="initial"
              animate="animate"
              transition={{ duration: 1 }}
            >
              <Bank userBanks={userBanks} />
            </motion.div>
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
          <Box className="dashboard-inner" sx={{ paddingTop: "3rem" }}>
            <Container
              className="mobile-padding banks-mobile"
              style={{ marginTop: "3rem" }}
            >
              <div className="buy-title-mobile">
                <div className="title-div">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 21.0421H7C4 21.0421 2 19.5025 2 15.9099V8.72477C2 5.1322 4 3.59253 7 3.59253H17C20 3.59253 22 5.1322 22 8.72477V15.9099C22 19.5025 20 21.0421 17 21.0421Z"
                      stroke="black"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15.3967C13.6569 15.3967 15 14.0181 15 12.3174C15 10.6167 13.6569 9.23804 12 9.23804C10.3431 9.23804 9 10.6167 9 12.3174C9 14.0181 10.3431 15.3967 12 15.3967Z"
                      stroke="black"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 6.15869H7C5.62 6.15869 4.5 7.30831 4.5 8.72481V10.2645"
                      stroke="black"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5 6.15869H17C18.38 6.15869 19.5 7.30831 19.5 8.72481V10.2645"
                      stroke="black"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 18.4762H7C5.62 18.4762 4.5 17.3265 4.5 15.91V14.3704"
                      stroke="black"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5 18.4762H17C18.38 18.4762 19.5 17.3265 19.5 15.91V14.3704"
                      stroke="black"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h5 style={{ margin: 0 }}>Banks</h5>
                </div>
                <div>
                  <button className="add-bank-mobile">Add bank</button>
                </div>
              </div>

              <div
                className="banks-mobile-container"
                style={{ paddingBottom: ".2rem" }}
              >
                <div className="mobile-banks-flex">
                  <h5 style={{ color: "#FF9924" }}>USD-SWIFT</h5>
                  <h5>HSBC UK</h5>
                  <h5>12345678900</h5>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3334 9.99992C18.3334 5.39755 14.6025 1.66659 10.0001 1.66659C5.39771 1.66659 1.66675 5.39755 1.66675 9.99992C1.66675 14.6023 5.39771 18.3333 10.0001 18.3333C14.6025 18.3333 18.3334 14.6023 18.3334 9.99992Z"
                        stroke="#292D32"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.94995 12.9417L11.8833 9.99998L8.94995 7.05832"
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mobile-banks-flex">
                  <h5 style={{ color: "#FF9924" }}>USD-SWIFT</h5>
                  <h5>HSBC UK</h5>
                  <h5>12345678900</h5>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3334 9.99992C18.3334 5.39755 14.6025 1.66659 10.0001 1.66659C5.39771 1.66659 1.66675 5.39755 1.66675 9.99992C1.66675 14.6023 5.39771 18.3333 10.0001 18.3333C14.6025 18.3333 18.3334 14.6023 18.3334 9.99992Z"
                        stroke="#292D32"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.94995 12.9417L11.8833 9.99998L8.94995 7.05832"
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mobile-banks-flex">
                  <h5 style={{ color: "#FF9924" }}>USD-SWIFT</h5>
                  <h5>HSBC UK</h5>
                  <h5>12345678900</h5>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3334 9.99992C18.3334 5.39755 14.6025 1.66659 10.0001 1.66659C5.39771 1.66659 1.66675 5.39755 1.66675 9.99992C1.66675 14.6023 5.39771 18.3333 10.0001 18.3333C14.6025 18.3333 18.3334 14.6023 18.3334 9.99992Z"
                        stroke="#292D32"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.94995 12.9417L11.8833 9.99998L8.94995 7.05832"
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mobile-banks-flex">
                  <h5 style={{ color: "#FF9924" }}>USD-SWIFT</h5>
                  <h5>HSBC UK</h5>
                  <h5>12345678900</h5>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3334 9.99992C18.3334 5.39755 14.6025 1.66659 10.0001 1.66659C5.39771 1.66659 1.66675 5.39755 1.66675 9.99992C1.66675 14.6023 5.39771 18.3333 10.0001 18.3333C14.6025 18.3333 18.3334 14.6023 18.3334 9.99992Z"
                        stroke="#292D32"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.94995 12.9417L11.8833 9.99998L8.94995 7.05832"
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mobile-banks-flex">
                  <h5 style={{ color: "#FF9924" }}>USD-SWIFT</h5>
                  <h5>HSBC UK</h5>
                  <h5>12345678900</h5>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3334 9.99992C18.3334 5.39755 14.6025 1.66659 10.0001 1.66659C5.39771 1.66659 1.66675 5.39755 1.66675 9.99992C1.66675 14.6023 5.39771 18.3333 10.0001 18.3333C14.6025 18.3333 18.3334 14.6023 18.3334 9.99992Z"
                        stroke="#292D32"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.94995 12.9417L11.8833 9.99998L8.94995 7.05832"
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mobile-banks-flex">
                  <h5 style={{ color: "#FF9924" }}>USD-SWIFT</h5>
                  <h5>HSBC UK</h5>
                  <h5>12345678900</h5>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3334 9.99992C18.3334 5.39755 14.6025 1.66659 10.0001 1.66659C5.39771 1.66659 1.66675 5.39755 1.66675 9.99992C1.66675 14.6023 5.39771 18.3333 10.0001 18.3333C14.6025 18.3333 18.3334 14.6023 18.3334 9.99992Z"
                        stroke="#292D32"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.94995 12.9417L11.8833 9.99998L8.94995 7.05832"
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mobile-banks-flex">
                  <h5 style={{ color: "#FF9924" }}>USD-SWIFT</h5>
                  <h5>HSBC UK</h5>
                  <h5>12345678900</h5>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3334 9.99992C18.3334 5.39755 14.6025 1.66659 10.0001 1.66659C5.39771 1.66659 1.66675 5.39755 1.66675 9.99992C1.66675 14.6023 5.39771 18.3333 10.0001 18.3333C14.6025 18.3333 18.3334 14.6023 18.3334 9.99992Z"
                        stroke="#292D32"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.94995 12.9417L11.8833 9.99998L8.94995 7.05832"
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mobile-banks-flex">
                  <h5 style={{ color: "#FF9924" }}>USD-SWIFT</h5>
                  <h5>HSBC UK</h5>
                  <h5>12345678900</h5>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3334 9.99992C18.3334 5.39755 14.6025 1.66659 10.0001 1.66659C5.39771 1.66659 1.66675 5.39755 1.66675 9.99992C1.66675 14.6023 5.39771 18.3333 10.0001 18.3333C14.6025 18.3333 18.3334 14.6023 18.3334 9.99992Z"
                        stroke="#292D32"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.94995 12.9417L11.8833 9.99998L8.94995 7.05832"
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mobile-banks-flex">
                  <h5 style={{ color: "#FF9924" }}>USD-SWIFT</h5>
                  <h5>HSBC UK</h5>
                  <h5>12345678900</h5>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3334 9.99992C18.3334 5.39755 14.6025 1.66659 10.0001 1.66659C5.39771 1.66659 1.66675 5.39755 1.66675 9.99992C1.66675 14.6023 5.39771 18.3333 10.0001 18.3333C14.6025 18.3333 18.3334 14.6023 18.3334 9.99992Z"
                        stroke="#292D32"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.94995 12.9417L11.8833 9.99998L8.94995 7.05832"
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mobile-banks-flex">
                  <h5 style={{ color: "#FF9924" }}>USD-SWIFT</h5>
                  <h5>HSBC UK</h5>
                  <h5>12345678900</h5>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3334 9.99992C18.3334 5.39755 14.6025 1.66659 10.0001 1.66659C5.39771 1.66659 1.66675 5.39755 1.66675 9.99992C1.66675 14.6023 5.39771 18.3333 10.0001 18.3333C14.6025 18.3333 18.3334 14.6023 18.3334 9.99992Z"
                        stroke="#292D32"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.94995 12.9417L11.8833 9.99998L8.94995 7.05832"
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </Container>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default Banks;
