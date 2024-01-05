import { Box, Button, Card, InputLabel, TextField, Typography } from '@mui/material';
import React from 'react'
import Simplesidebar from '../simplesidebar/Simplesidebar';
import Appbar from '../appbar/Appbar';


const Addexpense: React.FC = () => {
  const addexpensename = {


  }
  const ae = {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center',
    fontSize: '20px',
    marginTop: '10px',
    borderRadius: '15px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    padding: '10px'
  }
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Simplesidebar />
        <Box sx={{ position: 'static', width: '100%' }}> <Appbar />
          <Box sx={{ height: '100vh', backgroundColor: '#e9e9e9', paddingTop: '20px' }}>
            <Card sx={{ height: '80vh', margin: 'auto', width: '60%', backgroundColor: '#c2d1d7' }}>
              <Typography sx={ae}>Add Expense</Typography>
              <Box sx={{paddingLeft:'80px'}}>
                <Box>
                  <InputLabel required> Expense Type </InputLabel>
                  <TextField size='small' sx={{ width: '95%' }} inputProps={{
                    sx: {
                      height: '15px'
                    }
                  }}></TextField>
                </Box>
                <Box>
                  <InputLabel required> Expense Date </InputLabel>
                  <TextField size='small' sx={{ width: '95%' }} inputProps={{
                    sx: {
                      height: '15px'
                    }
                  }}></TextField>
                </Box>
                <Box>
                  <InputLabel required> Expense Amount </InputLabel>
                  <TextField size='small' sx={{ width: '95%' }} inputProps={{
                    sx: {
                      height: '15px'
                    }
                  }}></TextField>
                </Box>
                <Box>
                  <InputLabel required>Description </InputLabel>
                  <TextField size='small' sx={{ width: '95%' }} inputProps={{
                    sx: {
                      height: '15px'
                    }
                  }}></TextField>
                </Box>
                <Box><Button variant='contained'>AddExpense</Button></Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>

    </>
  )
}

export default Addexpense;
