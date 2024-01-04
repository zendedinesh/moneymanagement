import { AppBar, Box, Button, Card, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import loginimage from '../../../src/myimages/loginimg.webp';
import Sidebar from '../sidebar/Sidebar';
import Simplesidebar from '../simplesidebar/Simplesidebar';
import Appbar from '../appbar/Appbar';
const Login: React.FC = () => {
  const navigatetothedashboard = useNavigate()
  const mainpage = () => {
    navigatetothedashboard('/')
  }


  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const maindiv = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${loginimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

  }
  const main = {
    height: '300px',
    width: '45%',
    // margin: 'auto',
    padding: '20px',
    backgroundColor: 'lightblue',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',

  }
  const user = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',

  }
  const userac = {
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#333',
    // marginBottom: '20px',
    textAlign: 'center',


  }
  const textpassword = {
    width: '100%',
    // border: '2px solid red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'15px'

  }
  return (
    <>
      <Box sx={{ display: 'flex', position: 'relative' }}>
        {/* <Box sx={{ height: '100vh', position: 'relative' }}>
          <Simplesidebar />
        </Box> */}
        <Box sx={{ width: '100%' }}>
          {/* <Appbar /> */}
          <Box sx={maindiv}>
            <Card sx={main}>
              <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> <Typography sx={user}>User Login</Typography></Box>

              <TextField placeholder='Enter Email' id="outlined-required"
                label="Enter email" sx={{ width: '100%', marginBottom: '30px' }} size='small' inputProps={{
                  sx: {
                    height: '25px',
                    fontSize: '16px',
                    color: 'black'

                  }
                }}></TextField>

              <FormControl sx={{ width: '100%', marginBottom: '10px' }} variant="outlined" size='small'>
                <InputLabel htmlFor="outlined-adornment-password">  Password</InputLabel>
                <OutlinedInput inputProps={{
                  sx: {
                    height: '25px'
                  }
                }}
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="  Password"
                />
              </FormControl>

              {/* <InputLabel sx={{ color: 'black' }}>Password</InputLabel>
          <TextField placeholder='Enter Password' sx={{ width: '100%', marginBottom: '10px' }} size='small' inputProps={{
            sx: {
              height: '25px',
              fontSize: '16px',

            }
          }} ></TextField> */}

              <Box>
                <Button onClick={mainpage} variant='contained' color="primary" aria-label='submit' sx={{ width: '100%', marginTop: '20px' }}>Submit</Button>
              </Box>

              <Box sx={textpassword}><Typography sx={userac}>Not registered? Create an account</Typography></Box>

            </Card>
          </Box>
        </Box>
      </Box>



    </>
  )
}

export default Login
