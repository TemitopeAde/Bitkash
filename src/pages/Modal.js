import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

import "../components/Auth/auth.css";
import { handleKycEuro, handleKycUsd } from "../state/action-creators";

const animations = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const Signup = ({ children }) => {
  const kycMessage = useSelector((state) => state.auth.kycMessage);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "50%",
    p: 4,
    bgcolor: "#FFF9F1",
    border: "1px solid #FF9924",
    borderRadius: "20px",
  };

  if (window.innerWidth >= 820) {
    return (
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5 }}
      >
        <Box>
          <Modal
            open={true}
            // onClose={() => setOpen(!modal)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <Stack spacing={3}>
                  <Box>
                    <svg
                      width="83"
                      height="83"
                      viewBox="0 0 83 83"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M55.8638 6.90137H26.9484C14.3885 6.90137 6.90088 14.389 6.90088 26.9489V55.8298C6.90088 68.4242 14.3885 75.9118 26.9484 75.9118H55.8293C68.3892 75.9118 75.8768 68.4242 75.8768 55.8643V26.9489C75.9113 14.389 68.4237 6.90137 55.8638 6.90137ZM57.8996 33.4704L38.3351 53.0348C37.852 53.5179 37.1965 53.7939 36.5063 53.7939C35.8162 53.7939 35.1606 53.5179 34.6776 53.0348L24.9126 43.2699C23.9119 42.2692 23.9119 40.613 24.9126 39.6123C25.9132 38.6117 27.5695 38.6117 28.5701 39.6123L36.5063 47.5485L54.242 29.8128C55.2427 28.8122 56.8989 28.8122 57.8996 29.8128C58.9002 30.8135 58.9002 32.4352 57.8996 33.4704Z"
                        fill="#FF9924"
                      />
                    </svg>
                  </Box>

                  <Box>
                    <h6
                      style={{
                        fontSize: "32px",
                        lineHeight: "40px",
                        color: "#000000",
                      }}
                    >
                      {kycMessage}
                    </h6>

                    <p
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >
                      You're almost done. A KYC link will be sent to your mail
                      in 4 minutes
                    </p>

                    {/* <Link to="/banks">Go back to banks</Link> */}
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ut deserunt nam!</p>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Modal>
        </Box>
      </motion.div>
    );
  }
};

export default Signup;
