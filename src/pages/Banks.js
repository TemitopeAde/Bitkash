import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

import "./dashboard.css";
import user from "../assets/images/ellipse.png";
import notification from "../assets/images/notification.png";
import Sidebar from "../components/Sidebar";
import Bank from "../components/Banks";

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
          <Box className="dashboard-header">
            <Container
              style={{ display: "flex", justifyContent: "flex-end" }}
              className="dashboard-container"
            >
              <motion.div
                variants={animations}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5 }}
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
              </motion.div>
            </Container>
          </Box>

          <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            transition={{ duration: 1 }}
          >
            <Bank />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Banks;
