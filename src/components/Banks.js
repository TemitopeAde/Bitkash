import {
  Box,
  Button,
  Container,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

import "./history.css";

const Bank = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "50%",
    p: 4,
    bgcolor: "#FFF9F1",
    border: "2px solid #FF9924",
    borderRadius: "20px",
  };

  const rows = [
    {
      currency: "USD",
      payment_method: "SWIFT",
      bank_name: "Transfer",
      account_number: "49399432222",
    },
    {
      currency: "USD",
      payment_method: "SWIFT",
      bank_name: "Transfer",
      account_number: "49399432222",
    },
    {
      currency: "USD",
      payment_method: "SWIFT",
      bank_name: "Transfer",
      account_number: "49399432222",
    },
    {
      currency: "USD",
      payment_method: "SWIFT",
      bank_name: "Transfer",
      account_number: "49399432222",
    },
    {
      currency: "USD",
      payment_method: "SWIFT",
      bank_name: "Transfer",
      account_number: "49399432222",
    },
    {
      currency: "USD",
      payment_method: "SWIFT",
      bank_name: "Transfer",
      account_number: "49399432222",
    },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEdit = () => {
    handleOpen();
  };

  const handleDelete = () => {};

  return (
    <>
      <Box className="dashboard-inner banks">
        <Container>
          <Box className="history-header">
            <Stack alignItems="center" direction="row" spacing={2}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 6H7C5.62 6 4.5 7.12 4.5 8.5V10"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5 6H17C18.38 6 19.5 7.12 19.5 8.5V10"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 18H7C5.62 18 4.5 16.88 4.5 15.5V14"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5 18H17C18.38 18 19.5 16.88 19.5 15.5V14"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h4>Banks</h4>
            </Stack>

            <Box>
              <button
                style={{
                  color: "#fff",
                  background: "#ff9924",
                  height: "50px",
                  width: "186px",
                  border: "none",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16V8"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <Link
                  to="/kyc-verification"
                  style={{
                    marginLeft: "10px",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Add
                </Link>
              </button>
            </Box>
          </Box>

          <Box style={{ marginTop: "4rem" }} className="h-table">
            <Box
             
              style={{
                background: "#fff",
                padding: "2.4rem",
                borderRadius: "10px",
              }}
            >
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ fontWeight: "bolder" }}>
                      <TableCell align="right">Currency</TableCell>
                      <TableCell align="right">Payment methods</TableCell>
                      <TableCell align="right">Bank name</TableCell>
                      <TableCell align="right">Account no/IBAN</TableCell>
                      
                      <TableCell align="right">Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="right">{row.currency}</TableCell>
                        <TableCell align="right">
                          {row.payment_method}
                        </TableCell>
                        <TableCell align="right">{row.bank_name}</TableCell>
                        <TableCell align="right">
                          {row.account_number}
                        </TableCell>
                        
                        <TableCell align="right">
                          <button
                            style={{ background: "none", border: "none" }}
                            onClick={handleDelete}
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
                                stroke="#FF0202"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                                stroke="#FF0202"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M18.8504 9.14014L18.2004 19.2101C18.0904 20.7801 18.0004 22.0001 15.2104 22.0001H8.79039C6.00039 22.0001 5.91039 20.7801 5.80039 19.2101L5.15039 9.14014"
                                stroke="#FF0202"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.3301 16.5H13.6601"
                                stroke="#FF0202"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9.5 12.5H14.5"
                                stroke="#FF0202"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Container>

        <Button onClick={handleOpen}>Open modal</Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
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
                  fontSize: "32px",
                  lineHeight: "40px",
                  color: "#000000",
                }}
              >
                Are you sure you want to edit?
              </h6>

              <Stack direction="row" spacing={3} justifyContent="center">
                <button
                  style={{
                    width: "134px",
                    height: "50px",
                    background: "#ff9924",
                    border: '1px solid #ff9925',
                    color: '#ffffff',
                    fontFamily: 'Poppins',
                    fontSize: '16px'
                  }}
                >
                  Yes
                </button>
                <button
                  style={{
                    width: "134px",
                    height: "50px",
                    background: "transparent",
                    border: '1px solid #ff9925',
                    color: '#000',
                    fontFamily: 'Poppins',
                    fontSize: '16px'
                  }}
                >
                  No
                </button>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Bank;
