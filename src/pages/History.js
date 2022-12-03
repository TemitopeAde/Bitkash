import { Box } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";



import "./dashboard.css";
import History from "../components/History";
import Sidebar from "../components/Sidebar";
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



const Histories = () => {
  
 
  

  

  return (
    <>
      <Helmet>
        <title>Transaction History</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
       
      </Helmet>
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
              <History />
            </motion.div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Histories;
