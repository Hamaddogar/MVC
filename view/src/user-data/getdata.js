import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(ID, Name, SurName, Email,DOB) {
  return { ID, Name, SurName, Email,DOB };
}




function MyComponent() {
  const [data, setData] = useState(null);


   const getHundler =()=>{
    axios.get('http://localhost:4000/getdata')
      .then(response => {
        setData(response.data);
         console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
    }


  return (
    <div>
 <Button onClick={getHundler}>GetHundler</Button>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">SurName</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">DOB</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?data.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row._id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.fname}</StyledTableCell>
              
            </StyledTableRow>
          )):<h2>Loading</h2>}
        </TableBody>
      </Table>
    </TableContainer>
     
    </div>
  );
}

export default MyComponent;
