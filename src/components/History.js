import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

import wallet from "../assets/images/wallet-add.png";
import "./history.css";

const History = () => {
  const data = [
    {
      id: 1,
      date: "18/06/2022",
      paymentType: "one",
      cryptoAmount: "0.234",
      fiatAmount: "$200",
      wallet: "ffgkkrkmmmr4mmg",
      status: "Approved",
    },
    {
      id: 2,
      date: "08/06/2020",
      paymentType: "Two",
      cryptoAmount: "0.634",
      fiatAmount: "$730",
      wallet: "yytejttyjbkjhje",
      status: "Declined",
    },
    {
      id: 3,
      date: "08/06/2020",
      paymentType: "Three",
      cryptoAmount: "0.634",
      fiatAmount: "$30",
      wallet: "yytejttyjbkjhje",
      status: "Approved",
    },
    {
      id: 4,
      date: "08/06/2020",
      paymentType: "Four",
      cryptoAmount: "0.634",
      fiatAmount: "$730",
      wallet: "yytejttyjbkjhje",
      status: "Declined",
    },
    {
      id: 5,
      date: "08/06/2020",
      paymentType: "Five",
      cryptoAmount: "0.634",
      fiatAmount: "$730",
      wallet: "yytejttyjbkjhje",
      status: "Declined",
    },
    {
      id: 6,
      date: "08/06/2020",
      paymentType: "Six",
      cryptoAmount: "0.0234",
      fiatAmount: "$730",
      wallet: "yytejttyjbkjhje",
      status: "Declined",
    },
  ];

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 2;
  // console.log(currentItems)

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  function Items() {
    return (
      <>
        {console.log(currentItems)}
        {currentItems &&
          currentItems.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.paymentType}</TableCell>
              <TableCell align="right">{row.cryptoAmount}</TableCell>
              <TableCell align="right">{row.fiatAmount}</TableCell>
              <TableCell align="right">{row.wallet}</TableCell>
              <TableCell
                className={row.status === "Declined" ? "declined" : "approved"}
                align="right"
              >
                {row.status}
              </TableCell>
            </TableRow>
          ))}
      </>
    );
  }

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
              <input
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                className="form-control"
                placeholder="From"
                onBlur={(e) => (e.target.type = "text")}
              />
            </Box>
            <Box>
              <input
                type="text"
                className="form-control"
                placeholder="To"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
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
                  <Items />
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>

        <Box className="history-pagination">
          <ReactPaginate
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            activeClassName={"active-page"}
            previousClassName={"previous-page"}
            nextClassName={"next-page"}
            nextLinkClassName={"next-link-class"}
            previousLinkClassName={"prev-link-class"}

          />
        </Box>
      </Container>
    </Box>
  );
};

export default History;
