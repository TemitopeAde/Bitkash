import { Box, Container, Stack } from "@mui/material";
import React from "react";
import search from "../assets/images/search.png";
import wallet from "../assets/icons/money-4.png";
import "./history.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";




const History = () => {
  function createData(name, calories, fat, carbs, protein, rice) {
    return { name, calories, fat, carbs, protein, rice };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 6),
    createData("Eclair", 262, 16.0, 24, 6.0, 7),
    createData("Cupcake", 305, 3.7, 67, 4.3, 8),
    createData("Gingerbread", 356, 16.0, 49, 3.9, 3),
  ];

  return (
    <Box className="dashboard-inner p-5">
      <Container>
        <Box className="payment-header">
          <Stack alignItems="center" direction="row" spacing={2}>
            <img className="wallet" src={wallet} alt="" />
            <h4>My payments</h4>
          </Stack>
          
          <Box>
            <button className="payment-button">Add bank</button>
          </Box>
        </Box>

        <Box style={{ marginTop: "4rem" }} className="h-table">
          <Box className="shadow" style={{ background: '#fff', padding: '2.4rem', borderRadius: '10px'}}>
            <TableContainer  >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{fontWeight: 'bolder'}}>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    <TableCell align="right">Rice&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                      <TableCell align="right">{row.rice}</TableCell>
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
