import { Box, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import Sidebar from '../sidebar/Sidebar';
 
const Expenselist: React.FC = () => {
  const add = {
    height: '550px',
    width: '80%',
    margin: 'auto',
    // marginTop: '30px'
    // paddingTop:'20px'
  }
  const expense={
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center',
    fontSize:'20px',
    marginTop:'10px'

  }
  return (
    <>
   
      <Card sx={add}>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> <Typography sx={expense}>Expense List</Typography></Box>

        <TableContainer>
          <Table  >
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: { xs: '12px', sm: '14px' } }}>Expense Type</TableCell>
                <TableCell sx={{ fontSize: { xs: '12px', sm: '14px' }, textWrap: { xs: 'nowrap' } }}> Expense Date</TableCell>
                <TableCell sx={{ fontSize: { xs: '12px', sm: '14px' }, textWrap: { xs: 'nowrap' } }}>Expense Amount </TableCell>
                <TableCell sx={{ fontSize: { xs: '12px', sm: '14px' }, textWrap: { xs: 'nowrap' } }}>Description</TableCell>
                <TableCell sx={{ fontSize: { xs: '12px', sm: '14px' }, textWrap: { xs: 'nowrap' } }}>Edit</TableCell>
                <TableCell sx={{ fontSize: { xs: '12px', sm: '14px' }, textWrap: { xs: 'nowrap' } }}>Delete</TableCell>
              </TableRow>

            </TableHead>
            <TableBody>
            
            </TableBody>

          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default Expenselist;
