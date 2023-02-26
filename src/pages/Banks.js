import { Box, Container, Modal, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./dashboard.css";
import Sidebar from "../components/Sidebar";
import Bank from "../components/Banks";
import { getUserBank } from "../state/action-creators/index";
import DashboardHeader from "../components/DashboardHeader";
import MobileNav from "../components/mobileNav";
import { deleteBank, toggleLoad } from "../state/action-creators/index";

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
  const [height, setHeight] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState(null);

  const navigate = useNavigate();
  const [id, setId] = useState();
  const toggle = (index) => {
    if (height === index) {
      return setHeight(null);
    }

    setHeight(index);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "206px",
    p: 4,
    bgcolor: "#FFF9F1",
    border: "2px solid #FF9924",
    borderRadius: "20px",
  };

  useEffect(() => {
    dispatch(getUserBank());
  }, []);

  const handleOpen = () => setOpen(true);
  const handleCloses = () => setOpen(false);

  const handleId = (id) => {
    setId(id);
  };

  // if (loading) return <SpinnerTwo />;

  if (window.innerWidth >= 820) {
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
  }

  if (window.innerWidth <= 820) {
    return (
      <Box>
        <MobileNav />

        <Box>
          <Box className="dashboard-inner" sx={{ paddingTop: "3rem" }}>
            <Container
              className="mobile-padding banks-mobile"
              style={{ marginTop: "3rem" }}
            >
              <div className="buy-title-mobile">
                <div className="title-div">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 21.0421H7C4 21.0421 2 19.5025 2 15.9099V8.72477C2 5.1322 4 3.59253 7 3.59253H17C20 3.59253 22 5.1322 22 8.72477V15.9099C22 19.5025 20 21.0421 17 21.0421Z"
                      stroke="black"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15.3967C13.6569 15.3967 15 14.0181 15 12.3174C15 10.6167 13.6569 9.23804 12 9.23804C10.3431 9.23804 9 10.6167 9 12.3174C9 14.0181 10.3431 15.3967 12 15.3967Z"
                      stroke="black"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 6.15869H7C5.62 6.15869 4.5 7.30831 4.5 8.72481V10.2645"
                      stroke="black"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5 6.15869H17C18.38 6.15869 19.5 7.30831 19.5 8.72481V10.2645"
                      stroke="black"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 18.4762H7C5.62 18.4762 4.5 17.3265 4.5 15.91V14.3704"
                      stroke="black"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5 18.4762H17C18.38 18.4762 19.5 17.3265 19.5 15.91V14.3704"
                      stroke="black"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h5
                    style={{ margin: 0, fontWeight: "600", fontSize: "18px" }}
                  >
                    Banks
                  </h5>
                </div>
                <div>
                  <button
                    onClick={() => navigate("/kyc-verification")}
                    className="add-bank-mobile"
                  >
                    Add bank
                  </button>
                </div>
              </div>

              <div
                className="banks-mobile-container"
                style={{ paddingBottom: ".2rem" }}
              >
                {userBanks.map((item, index) => {
                  return (
                    <div
                      className={
                        height === index ? "bank-height active" : "bank-height"
                      }
                      key={item.id}
                    >
                      <div className="mobile-bank-grid">
                        <div className="mobile-banks-flex">
                          <h5 style={{ color: "#FF9924" }}>{item.name}</h5>
                          <h5>{item.currency}</h5>
                          <h5>{item.account_number}</h5>
                          <button onClick={() => toggle(index)}>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.3334 9.99992C18.3334 5.39755 14.6025 1.66659 10.0001 1.66659C5.39771 1.66659 1.66675 5.39755 1.66675 9.99992C1.66675 14.6023 5.39771 18.3333 10.0001 18.3333C14.6025 18.3333 18.3334 14.6023 18.3334 9.99992Z"
                                stroke="#292D32"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.94995 12.9417L11.8833 9.99998L8.94995 7.05832"
                                stroke="#292D32"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={
                                  height === index
                                    ? "show-edit active"
                                    : "show-edit"
                                }
                              />
                            </svg>
                          </button>
                        </div>

                        <div className="edit-delete-container">
                          <button
                            onClick={() => {
                              setValue("edit");
                              handleOpen();
                              handleId(item.id);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              handleOpen();
                              handleId(item.id);
                              setValue("delete");
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Container>
          </Box>
        </Box>

        <Modal
          open={open}
          onClose={handleCloses}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {value === "delete" ? (
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
                  <h6
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "24px",
                      color: "#000000",
                    }}
                  >
                    Are you sure you want to delete bank details
                  </h6>

                  <Stack direction="row" spacing={3} justifyContent="center">
                    <button
                      style={{
                        width: "89px",
                        height: "40px",
                        background: "#ff9924",
                        border: "1px solid #ff9925",

                        color: "#ffffff",
                        fontFamily: "Poppins",
                        fontSize: "14px",
                      }}
                      onClick={() => {
                        handleCloses();
                        dispatch(deleteBank(id));
                        dispatch(getUserBank());
                        setOpen(false);
                      }}
                    >
                      Yes
                    </button>
                    <button
                      style={{
                        width: "89px",
                        height: "40px",
                        background: "#ff9924",
                        border: "1px solid #ff9925",

                        color: "#ffffff",
                        fontFamily: "Poppins",
                        fontSize: "14px",
                      }}
                      onClick={() => handleCloses()}
                    >
                      No
                    </button>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          ) : (
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
                  <h6
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "24px",
                      color: "#000000",
                    }}
                  >
                    Are you sure you want to edit bank details
                  </h6>

                  <Stack direction="row" spacing={3} justifyContent="center">
                    <button
                      style={{
                        width: "89px",
                        height: "40px",
                        background: "#ff9924",
                        border: "1px solid #ff9925",

                        color: "#ffffff",
                        fontFamily: "Poppins",
                        fontSize: "14px",
                      }}
                      onClick={() => {
                        handleCloses();
                        dispatch(deleteBank(id));
                        dispatch(getUserBank());
                        setOpen(false);
                      }}
                    >
                      Yes
                    </button>
                    <button
                      style={{
                        width: "89px",
                        height: "40px",
                        background: "#ff9924",
                        border: "1px solid #ff9925",

                        color: "#ffffff",
                        fontFamily: "Poppins",
                        fontSize: "14px",
                      }}
                      onClick={() => handleCloses()}
                    >
                      No
                    </button>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          )}
        </Modal>

        <Modal
          // open={openModal}
          // onClose={handleOnClose}
          // open={true}
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
                <h6
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "24px",
                    color: "#000000",
                  }}
                >
                  Hurray!
                </h6>
                <p style={{ marginTop: '10px', fontWeight: "400", fontSize: '16'}}>You have successfully deleted your bank details</p>
              </Stack>
            </Box>
          </Box>
        </Modal>
      </Box>
    );
  }
};

export default Banks;
