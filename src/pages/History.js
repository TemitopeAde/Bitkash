<<<<<<< HEAD
import { Box, Container, Stack } from "@mui/material";
=======
import { Box } from "@mui/material";
>>>>>>> master
import React, {useEffect} from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getAllTransactions } from "../state/action-creators";

import "./dashboard.css";
<<<<<<< HEAD
import user from "../assets/images/ellipse.png";
import notification from "../assets/images/notification.png";
import History from "../components/History";
import Sidebar from "../components/Sidebar";
=======
import History from "../components/History";
import Sidebar from "../components/Sidebar";
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



const Histories = () => {
  
  const transactionHistory = useSelector((state) => state.transactions.history);
  const loader = useSelector((state) => state.loader.loading)
  const dispatch = useDispatch();
<<<<<<< HEAD
  console.log(transactionHistory, "trans history")
=======
  
>>>>>>> master

  useEffect(() => {
    // dispatch(getAllTransactions());
  }, []);

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
              <History loading = {loader} historyData = {transactionHistory} />
            </motion.div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Histories;
