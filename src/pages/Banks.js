import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import "./dashboard.css";
import Sidebar from "../components/Sidebar";
import Bank from "../components/Banks";
import { getUserBank } from "../state/action-creators";
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

const Banks = () => {
  const dispatch = useDispatch();
  const userBanks = useSelector((state) => state.auth.userBanks);
  const loading = useSelector((state) => state.loader.loading);

  useEffect(() => {
    dispatch(getUserBank());
  }, []);

  // if (loading) return <SpinnerTwo />;

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
};

export default Banks;
