import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Container, Stack } from "@mui/material";

import wallet from "../assets/images/wallet-add.png";
import "./history.css";

const Activity = () => {
  const rows = [
    {
      time: "12;00 WAT",
      action: "SWIFT",
      ip_address: "Transfer",
      country: "$200",
      city: "Abuja",
    },
    {
      time: "12;00 WAT",
      action: "SWIFT",
      ip_address: "Transfer",
      country: "$200",
      city: "Abuja",
    },
    {
      time: "12;00 WAT",
      action: "SWIFT",
      ip_address: "Transfer",
      country: "$200",
      city: "Abuja",
    },
    {
      time: "12;00 WAT",
      action: "SWIFT",
      ip_address: "Transfer",
      country: "$200",
      city: "Abuja",
    },
    {
      time: "12;00 WAT",
      action: "SWIFT",
      ip_address: "Transfer",
      country: "$200",
      city: "Abuja",
    },
    {
      time: "12;00 WAT",
      action: "SWIFT",
      ip_address: "Transfer",
      country: "$200",
      city: "Abuja",
    },
  ];
  return (
    <Box className="dashboard-inner">
      <Container>
        <Box className="history-header">
          <Stack alignItems="center" direction="row" spacing={2}>
            <img className="wallet" src={wallet} alt="" />
            <h4>Activities</h4>
          </Stack>
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
                    <TableCell align="right">Time</TableCell>
                    <TableCell align="right">Action</TableCell>
                    <TableCell align="right">IP Address</TableCell>
                    <TableCell align="right">Country</TableCell>
                    <TableCell align="right">City</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="right">{row.time}</TableCell>
                      <TableCell align="right">{row.action}</TableCell>
                      <TableCell align="right">{row.ip_address}</TableCell>
                      <TableCell align="right">{row.country}</TableCell>
                      <TableCell align="right">{row.city}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Activity;
