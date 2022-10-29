import { Box, Stack } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import "./success.css";
import check from "../assets/images/check.png";
import { Link } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";

const animations = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const SucessRegistrationPage = () => {
  if (window.innerWidth > 820) {
    return (
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
      >
        <Helmet>
          <title>Registration Successful</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>                    
        <Box>
          <Box>
            <Header />
            <Box className="success-registration-flex-center">
              <Box>
                <Stack spacing={4}>
                  <Box>
                    <img src={check} alt="" />
                  </Box>

                  <h6>Congratulations Olubanjo Oluseyi</h6>
                  <p>
                    Your registration to Bitkash is successful <br /> click here
                    to visit your{" "}
                    <Link className="color-yellow" to="/dashboard">
                      dashboard
                    </Link>
                  </p>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>                                 
    );
  }        

  if (window.innerWidth <= 820) {
    return (
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
      >
        <Helmet>
          <title>Registration Successful</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
          <body class="mobile-background" />
        </Helmet>

        <div className="mobile-register-page">
          <AuthHeader />
          <Box sx={{fontFamily: 'Poppins'}}>
            <Box mt="8rem">
              <h3>Update Email</h3>

              <Box>
                <Box
                  className="mobile-register-form active login-form"
                  style={{ padding: "3rem 1.5rem" }}
                >
                  <Stack spacing={4} textAlign="center" className="flex-success" >
                    <Box>
                      <svg
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M51.1095 0H20.9264C7.81589 0 0 7.812 0 20.916V51.048C0 64.188 7.81589 72 20.9264 72H51.0735C64.184 72 71.9999 64.188 71.9999 51.084V20.916C72.0359 7.812 64.22 0 51.1095 0ZM53.2345 27.72L32.8123 48.132C32.3081 48.636 31.6238 48.924 30.9034 48.924C30.183 48.924 29.4987 48.636 28.9944 48.132L18.8014 37.944C17.7568 36.9 17.7568 35.172 18.8014 34.128C19.8459 33.084 21.5747 33.084 22.6193 34.128L30.9034 42.408L49.4166 23.904C50.4611 22.86 52.19 22.86 53.2345 23.904C54.279 24.948 54.279 26.64 53.2345 27.72Z"
                          fill="#FF9924"
                        />
                      </svg>
                    </Box>

                    <h6>Congratulations <br /> Olubanjo Oluseyi</h6>
                    <p>
                      Your registration to Bitkash is successful click here to
                      visit your{" "}
                      <Link className="color-yellow" to="/dashboard">
                        dashboard
                      </Link>
                    </p>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>

        {/* <Box sx={{ textAlign: "center" }}>
          <Header />
          <Box>
            <Helmet>
              <title>Sign up</title>
              <meta name="description" content="App Description" />
              <meta name="theme-color" content="#008f68" />
              <body class="mobile-background" />
            </Helmet>
          </Box>

          <Box className="mobile-registration-success">
            <h6 className="title-mobile">Registration Successful</h6>
            <Box>
              <Box className="mobile-success-box">
                <Box>
                  <Stack spacing={4}>
                    <Box>
                      <img src={check} alt="" />
                    </Box>

                    <h6>Congratulations Olubanjo Oluseyi</h6>
                    <p>
                      Your registration to Bitkash is successful click here to
                      visit your{" "}
                      <Link className="color-yellow" to="/dashboard">
                        dashboard
                      </Link>
                    </p>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box> */}
      </motion.div>
    );
  }
};

export default SucessRegistrationPage;
