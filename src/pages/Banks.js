<<<<<<< HEAD
import { Box, Container, Stack } from "@mui/material";
=======
import { Box } from "@mui/material";
>>>>>>> master
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

<<<<<<< HEAD
import "./dashboard.css";
import user from "../assets/images/ellipse.png";
import notification from "../assets/images/notification.png";
import Sidebar from "../components/Sidebar";
import Bank from "../components/Banks";
import { getAccount } from "../state/action-creators";
import { getUserBank, getAllAccount } from "../state/action-creators";
=======

import "./dashboard.css";
import Sidebar from "../components/Sidebar";
import Bank from "../components/Banks";
import { getUserBank } from "../state/action-creators";
import DashboardHeader from "../components/DashboardHeader";

>>>>>>> master

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
<<<<<<< HEAD

  useEffect(() => {
    // dispatch(getAllAccount());
    // dispatch(getAccount());
    dispatch(getUserBank())
  }, []);

=======
  const userBanks = useSelector((state) => state.auth.userBanks);
  const loading = useSelector((state) => state.loader.loading);
  console.log(userBanks)

  useEffect(() => {
   
    dispatch(getUserBank())
  }, []);

  // if (loading) return <SpinnerTwo />;

>>>>>>> master
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
<<<<<<< HEAD
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
=======
          <DashboardHeader />
>>>>>>> master

          <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            transition={{ duration: 1 }}
          >
<<<<<<< HEAD
            <Bank />
=======
            <Bank userBanks={userBanks} />

           
>>>>>>> master
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Banks;
