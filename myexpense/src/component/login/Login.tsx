import { Box, Button, Card, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Login: React.FC = () => {
  const main = {
    height: '400px',
    width: '30%',
    margin: 'auto',
    padding: '20px',
    marginTop: '80px',
    backgroundColor: '#f0f0f0',  
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    
    // backgroundImage: url(''), // Set the background image here
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
  }
  const user = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
    
  }
  return (
    <>
      <Box>
        <Card sx={main}>
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> <Typography sx={user}>User Login</Typography></Box>

          <InputLabel sx={{ color: 'black' }}>Email</InputLabel>
          <TextField placeholder='Enter Email' sx={{ width: '100%', marginBottom: '10px' }} size='small' inputProps={{
            sx: {
              height: '40px',
              fontSize: '16px',
              color: 'black'

            }
          }}></TextField>
          <InputLabel sx={{ color: 'black' }}>Password</InputLabel>
          <TextField placeholder='Enter Password' sx={{ width: '100%', marginBottom: '15px' }} size='small' inputProps={{
            sx: {
              height: '40px',
              fontSize: '16px',

            }
          }} ></TextField>

          <Box>
            <Button variant='contained'color="primary" aria-label='submit' sx={{ width: '100%', marginTop: '20px' }}>Submit</Button>
          </Box>


        </Card>
      </Box>
    </>
  )
}

export default Login
