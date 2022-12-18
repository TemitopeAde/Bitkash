import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Box, Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import "./modal.css";
import mark from "../assets/icons/mark.png";
import { Link } from "react-router-dom";
import { toggleLoad } from "../state/action-creators";

const ModalContainer = ({ setModal }) => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.auth.kycMessage);
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        <Box className="modal">
          <Box className="modal-content">
            <Box position="relative">
              <Box sx={{ position: "absolute", top: "20px", right: "20px" }}>
                <button
                  style={{
                    border: "none",
                    background: "none",
                    outline: "none",
                    fontSize: "24px",
                  }}
                  onClick={() => setOpen(false)}
                >
                  <AiOutlineCloseCircle />
                </button>
              </Box>
            </Box>

            <Box className="modal-center">
              <img src={mark} alt="" />
              {/* <h3>Hurray! you are almost there</h3> */}
              <h3>{message}</h3>
              <p>Kindly check your Mail, your KYC link will arrive in 3mins</p>
              <Link
                style={{
                  color: "#ff9924",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
                to="/banks"
                onClick={() => {
                  dispatch(toggleLoad());
                  setOpen(false);
                }}
              >
                Go to banks
              </Link>
            </Box>
          </Box>
        </Box>
      </div>
    </Modal>
  );
};

export default ModalContainer;
