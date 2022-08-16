import { Box, Container, Stack } from "@mui/material";
import React from "react";
import search from "../assets/images/search.png";
import wallet from "../assets/images/wallet-add.png";
import "./history.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const History = () => {
  
  const rows = [
    {
      id: 1,
      date: "18/06/2022",
      paymentType: "Transfer",
      cryptoAmount: "0.234",
      fiatAmount: "$200",
      wallet: "ffgkkrkmmmr4mmg",
      status: "Approved",
    },
    {
      id: 2,
      date: "08/06/2020",
      paymentType: "Transfer",
      cryptoAmount: "0.634",
      fiatAmount: "$730",
      wallet: "yytejttyjbkjhje",
      status: "Declined",
    },
    {
      id: 3,
      date: "08/06/2020",
      paymentType: "Transfer",
      cryptoAmount: "0.634",
      fiatAmount: "$30",
      wallet: "yytejttyjbkjhje",
      status: "Approved",
    },
    {
      id: 4,
      date: "08/06/2020",
      paymentType: "Transfer",
      cryptoAmount: "0.634",
      fiatAmount: "$730",
      wallet: "yytejttyjbkjhje",
      status: "Declined",
    },
    {
      id: 5,
      date: "08/06/2020",
      paymentType: "Transfer",
      cryptoAmount: "0.634",
      fiatAmount: "$730",
      wallet: "yytejttyjbkjhje",
      status: "Declined",
    },
    {
      id: 6,
      date: "08/06/2020",
      paymentType: "Transfer",
      cryptoAmount: "0.0234",
      fiatAmount: "$730",
      wallet: "yytejttyjbkjhje",
      status: "Declined",
    },
  ];

  return (
    <Box className="dashboard-inner">
      <Container>
        <Box className="history-header">
          <Stack alignItems="center" direction="row" spacing={2}>
            <img className="wallet" src={wallet} alt="" />
            <h4>Transaction History</h4>
          </Stack>

          <Box className="history-header-search">
            <Box>
              <input className="form-control" placeholder="Search" />
            </Box>
            <Box>
              <input type="date" className="form-control" placeholder="From" />
            </Box>
            <Box>
              <input type="date" className="form-control" placeholder="To" />
            </Box>
            <Box>
              <select className="form-control">
                <option>Filter by</option>
                <option>Approved</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
            </Box>
          </Box>
        </Box>

        <Box style={{ marginTop: "4rem" }} className="h-table">
          <Box
            className="shadow"
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
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">Payment type</TableCell>
                    <TableCell align="right">Crypto amount</TableCell>
                    <TableCell align="right">Fiat amount</TableCell>
                    <TableCell align="right">Recipient wallet</TableCell>
                    <TableCell align="right">Transaction status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      {/* <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell> */}
                      <TableCell align="right">{row.id}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.paymentType}</TableCell>
                      <TableCell align="right">{row.cryptoAmount}</TableCell>
                      <TableCell align="right">{row.fiatAmount}</TableCell>
                      <TableCell align="right">{row.wallet}</TableCell>
                      <TableCell
                        className={
                          row.status === "Declined" ? "declined" : "approved"
                        }
                        align="right"
                      >
                        {row.status}
                      </TableCell>
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

export default History;
