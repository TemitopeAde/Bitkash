import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import logo from "../assets/icons/header-white.png";
import icon1 from "../assets/icons/note-2.png";
import user from "../assets/images/ellipse.png";
import notification from "../assets/images/notification.png";
import Payment from "../components/Payment";
import Sidebar from "../components/Sidebar";

const Buy = () => {
  return (
    <Box className="dashboard">
      <Box className="dashboard-grid">
        <Sidebar />

        <Box className="dashboard-content">
          <Box className="dashboard-header">
            <Container
              style={{ display: "flex", justifyContent: "flex-end" }}
              className="dashboard-container"
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

          <Payment />
        </Box>
      </Box>
    </Box>
  );
};

export default Buy;
