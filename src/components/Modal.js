import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import "./modal.css";
import mark from "../assets/icons/mark.png";

const Modal = () => {
  
  const showModal = useSelector((state) => state.auth.showModal);
  const message = useSelector((state) => state.auth.kycMessage);
  const [modal, setModal] = useState(showModal);

  return (
    <div>
      {modal ? (
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
                  onClick={() => setModal(false)}
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
            </Box>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </div>
  );
};

export default Modal;
