import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Box } from "@mui/material";
import "./modal.css";
import mark from "../assets/icons/mark.png";

const PasswordModal = () => {
  const [modal, setModal] = useState(true);

  return (
    <div>
      {modal ? (
        <Box className="modal" sx={{ textAlign: "left" }}>
          <Box
            className="modal-content"
            sx={{ width: "500px", height: "auto" }}
          >
            

            <Box className="modal-center-password">
              <h6
                style={{
                  textAlign: "center",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
                className="mb-4"
              >
                Change Password
              </h6>

              <form action="">
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <Box>
                    <label>Enter your old password</label>
                    <input type="password" className="form-control" />
                  </Box>
                  <Box>
                    <label>Enter your new password</label>
                    <input type="password" className="form-control" />
                  </Box>
                  <Box>
                    <label>Confirm new password</label>
                    <input type="password" className="form-control" />
                  </Box>
                </Box>

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <button
                      style={{
                        padding: ".5rem 1rem",
                        
                        background: "transparent",
                        border: "1px solid #FF9924",
                      }}
                      type="button"
                      onClick={() => setModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      style={{
                        background: "#ff9924",
                        padding: ".5rem 1rem",
                        border: "none",
                        fontWeight: "400",
                      }}
                      type="submit"
                    >
                      Change Password
                    </button>
                  </Box>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </div>
  );
};

export default PasswordModal;
