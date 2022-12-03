import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect } from "react";

import wallet from "../assets/images/wallet-add.png";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

import { getAllTransactions } from "../state/action-creators";
import "./history.css";

const History = () => {

   const transactionHistory = useSelector(
     (state) => state.auth.transactionsHistory
   );
   const loader = useSelector((state) => state.loader.loading);
   const dispatch = useDispatch();

   console.log(transactionHistory)

  useEffect(() => {
    dispatch(getAllTransactions());
  }, []);
  

  // const [search, setSearch] = useState("");
  // const [from, setFrom] = useState("");
  // const [dropdown, setDropdown] = useState("");
  // const [to, setTo] = useState("");
  // console.log(search)

  
  

  // useEffect(() => {
  //   const filtered = items.filter((item) =>
  //     search
  //       ? item.reciept_wallet.toLowerCase().includes(search.toLowerCase())
  //       : items
  //   );

  //   setItems(filtered);
  // }, [search]);

  

  
  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  // const handleDropDown = (e) => {
  //   setDropdown(e.target.value);
  // };

  // const handleTo = (e) => {
  //   setTo(e.target.value);
  // };

  // const handleFrom = (e) => {
  //   setFrom(e.target.value);
  // };

  function Items() {
    return (
      <>
        {transactionHistory &&
          transactionHistory?.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row._id}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right">{row.payment_type}</TableCell>
              <TableCell align="right">{row.crypto_amount}</TableCell>
              <TableCell align="right">{row.fiat_amount}</TableCell>
              <TableCell align="right">{row.reciept_wallet}</TableCell>
              <TableCell
                className={row.status === "Declined" ? "declined" : "approved"}
                align="right"
              >
                {row.transaction_status}
              </TableCell>
            </TableRow>
          ))}

        {/* {currentItems
          ?.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.reciept_wallet.toLowerCase().includes(search.toLowerCase());
          })
          .map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row._id}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right">{row.payment_type}</TableCell>
              <TableCell align="right">{row.crypto_amount}</TableCell>
              <TableCell align="right">{row.fiat_amount}</TableCell>
              <TableCell align="right">{row.reciept_wallet}</TableCell>
              <TableCell
                className={row.status === "Declined" ? "declined" : "approved"}
                align="right"
              >
                {row.transaction_status}
              </TableCell>
            </TableRow>
          ))} */}
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

          {/* <Box className="history-header-search">
            <Box>
              <input
                value={search}
                onChange={handleSearch}
                className="form-control"
                placeholder="Search"
              />
            </Box>
            <Box>
              <input
                value={to}
                onChange={handleTo}
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                className="form-control"
                placeholder="From"
                onBlur={(e) => (e.target.type = "text")}
              />
            </Box>

            <Box>
              <input
                value={from}
                onChange={handleFrom}
                type="text"
                className="form-control"
                placeholder="To"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </Box>
            <Box>
              <select
                value={dropdown}
                onChange={handleDropDown}
                className="form-control"
              >
                <option>Filter by</option>
                <option>Approved</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
            </Box>
          </Box> */}
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

        {/* {currentItems?.length > 1 && (
          <Box className="history-pagination">
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            />
          </Box>
        )} */}
      </Container>
    </Box>
  );
};

export default History;
