import React from "react";
import { Box, Stack } from "@mui/material";
import search from "../assets/images/search.png";
import wallet from "../assets/images/wallet-add.png";
import "./history.css";

const History = () => {
  return (
    <Box
      
      className="dashboard-inner p-5"
    >
      <Box >
        <Box >
          <Box className="history-header">
            <Stack direction="row" spacing={2}>
              <img className="wallet" src={wallet} alt="" />
              <h4>Transaction History</h4>
            </Stack>
            <Box>
              <input className="form-control" placeholder="Search" />
            </Box>
            <Box>
              <select className="form-control">
                <option>Filter by</option>
                <option>Date</option>
                <option>Amount</option>
                <option>ID</option>
              </select>
            </Box>
          </Box>

          <div className="history-table shadow" style={{background: '#fff', padding: '3rem', marginTop: '5rem'}}>
            <div className="pt-5 history-table-head">
              <h5>ID</h5>
              <h5>Date</h5>
              <h5>Payment type</h5>
              <h5>Crypto amount</h5>
              <h5>Fiat amount</h5>
              <h5>Recipient wallet</h5>
            </div>

            <div className="history-row">
              <Stack spacing={4}>
                <div className="history-table-body">
                  <Box>
                    <p>12345C34</p>
                  </Box>
                  <Box>
                    <p>18/06/2022</p>
                  </Box>
                  <Box>
                    <p>Transfer</p>
                  </Box>
                  <Box>
                    <p>0.2345 Btc</p>
                  </Box>
                  <Box>
                    <p>$1000</p>
                  </Box>
                  <Box>
                    <p>as34kjrr</p>
                  </Box>
                </div>
                <div className="history-table-body">
                  <Box>
                    <p>12345C34</p>
                  </Box>
                  <Box>
                    <p>18/06/2022</p>
                  </Box>
                  <Box>
                    <p>Transfer</p>
                  </Box>
                  <Box>
                    <p>0.2345 Btc</p>
                  </Box>
                  <Box>
                    <p>$1000</p>
                  </Box>
                  <Box>
                    <p>as34kjrr</p>
                  </Box>
                </div>
                <div className="history-table-body">
                  <Box>
                    <p>12345C34</p>
                  </Box>
                  <Box>
                    <p>18/06/2022</p>
                  </Box>
                  <Box>
                    <p>Transfer</p>
                  </Box>
                  <Box>
                    <p>0.2345 Btc</p>
                  </Box>
                  <Box>
                    <p>$1000</p>
                  </Box>
                  <Box>
                    <p>as34kjrr</p>
                  </Box>
                </div>
                <div className="history-table-body">
                  <Box>
                    <p>12345C34</p>
                  </Box>
                  <Box>
                    <p>18/06/2022</p>
                  </Box>
                  <Box>
                    <p>Transfer</p>
                  </Box>
                  <Box>
                    <p>0.2345 Btc</p>
                  </Box>
                  <Box>
                    <p>$1000</p>
                  </Box>
                  <Box>
                    <p>as34kjrr</p>
                  </Box>
                </div>
                <div className="history-table-body">
                  <Box>
                    <p>12345C34</p>
                  </Box>
                  <Box>
                    <p>18/06/2022</p>
                  </Box>
                  <Box>
                    <p>Transfer</p>
                  </Box>
                  <Box>
                    <p>0.2345 Btc</p>
                  </Box>
                  <Box>
                    <p>$1000</p>
                  </Box>
                  <Box>
                    <p>as34kjrr</p>
                  </Box>
                </div>
              </Stack>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default History;
