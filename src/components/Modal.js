import React, {useState} from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Box } from "@mui/material";
import './modal.css';
import { Link } from "react-router-dom";
import mark from "../assets/icons/mark.png";


const Modal = () => {
    const [modal, setModal] = useState(true);
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
              <h3>Verification Completed</h3>
              <p>
                Check your email for the link{" "}
                <Link style={{ color: "rgba(255, 153, 36, 1)" }} to="/">
                  here
                </Link>
              </p>
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
