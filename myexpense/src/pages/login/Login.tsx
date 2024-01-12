import React, { useState } from 'react';
import { AppBar, Box, Button, Card, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import myn from '../../../src/myimages/nn.webp';

const Login: React.FC = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  interface LoginData {
    Email: string;
    Password: string;
  }

  const [Loginvalue, setLoginvalue] = useState<LoginData>({
    Email: '',
    Password: ''
  });
 
  const usrloginvalue = (fieldName: string, value: string | number) => {
    setLoginvalue({ ...Loginvalue, [fieldName]: value });

  };

  const submitloginform: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
    if (Loginvalue.Email && Loginvalue.Password) {
      alert('Successfully added email and password');
    }
    setLoginvalue({
      Email: '',
      Password: ''
    });
  };

  const navigatetothedashboard = useNavigate();

  const mainpage = () => {
    navigatetothedashboard('/register');
  };

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
    backgroundImage: `url(${myn})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const main = {
    height: { xs: '400px', sm: '450px', md: '300px' },
    width: { xs: '80%', sm: '75%', md: '45%' },
    padding: '20px',
    backgroundColor: 'lightblue',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const user = {
    fontSize: { xs: '20px', sm: '25px', md: '20px' },
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const userac = {
    fontSize: { xs: '15px', sm: '22px', md: '15px' },
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  };

  const textpassword = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: { xs: '20px', sm: '15px', md: '15px' },
  };

  return (
    <>
      <Box sx={{ display: 'flex', position: 'relative' }}>
        <Box sx={{ width: '100%' }}>
          <Box sx={maindiv}>
            <Card sx={main}>
              <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography sx={user}>User Login</Typography>
              </Box>
              <form onSubmit={handleSubmit(submitloginform)}>
                <TextField
                  // onChange={(e) => usrloginvalue('Email', e.target.value)}  
                  placeholder='Enter Email'
                  id="outlined-required"
                  {...register('Email', { required: 'Email is required' })} 
                  value={Loginvalue.Email}
                  label="Enter email"
                  sx={{ width: '100%', marginBottom: '30px' }}
                  size='small'
                  inputProps={{
                    sx: {
                      height: { xs: '25px', md: '25px', sm: '40px' },
                      color: 'black',
                    }
                  }}
                />
                <FormControl
                  sx={{ width: '100%', marginBottom: '10px' }}
                  variant="outlined"
                  size='small'
                >
                  <InputLabel htmlFor="outlined-adornment-password">  Password</InputLabel>
                  <OutlinedInput
                    inputProps={{
                      sx: {
                        height: { xs: '25px', md: '25px', sm: '40px' },
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
              </form>
              <Box>
                <Button
                  type='submit'
                  variant='contained'
                  color="primary"
                  aria-label='submit'
                  sx={{ width: '100%', marginTop: { xs: '20px', md: '20px', sm: '25px' }, height: { xs: '', sm: '50px', md: '' }, fontSize: { xs: '', sm: '20px', md: '' } }}
                >
                  Submit
                </Button>
              </Box>
              <Box sx={textpassword}>
                <Typography sx={userac} onClick={mainpage} >
                  Not registered yet ? Create an account
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
