import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Box, Container, Stack } from "@mui/material";

import Sidebar from "../components/Sidebar";
import user from "../assets/images/ellipse.png";
import notification from "../assets/images/notification.png";
import Activity from "../components/Activities";
import DashboardHeader from "../components/DashboardHeader";

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

const Activities = () => {
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
            <Activity />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Activities;
