import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "../components/Header";

import "./success.css";
import check from "../assets/images/check.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const SucessRegistrationPage = () => {
  if (window.innerWidth > 820) {
    return (
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
    );
  }

  if (window.innerWidth <= 820) {
    return (
      <Box sx={{ textAlign: "center" }}>
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
      </Box>
    );
  }
};

export default SucessRegistrationPage;
