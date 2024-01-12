import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Card, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import React from 'react'
import nnimage from '../../../src/myimages/nn.webp'
const Register: React.FC = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const registercard = {
        height: '400px',
        width: '50%',
        boxShadow: '0 4px 8px rgba (0 0 0 0.1)',
        borderRadius: '10px',
        padding: '20px ',
        backgroundColor: 'lightblue'

    }
    const regidiv = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundColor:'lightblue'
        backgroundImage:`url(${nnimage})`
    }
    const rtext = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
    const ftext = {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '20px'
    }
    return (
        <>
            <Box sx={regidiv}>
                <Card sx={registercard}>
                    <Box sx={rtext}><Typography sx={ftext}>Registration Form</Typography></Box>
                    <TextField sx={{ width: '100%', marginBottom: '20px'}} placeholder='Enter email' id='outlined-required' label='First name' size='small'></TextField>
                    <TextField sx={{ width: '100%', marginBottom: '20px' }} placeholder='Enter email' id='outlined-required' label='Last name' size='small'></TextField>
                    <TextField sx={{ width: '100%', marginBottom: '20px' }} placeholder='Enter email' id='outlined-required' label='Email' size='small'></TextField>
                    {/* <TextField sx={{ width: '100%', marginBottom: '20px' }} placeholder='Enter email' id='outlined-required' label='Password' size='small'></TextField> */}
                    {/* <TextField sx={{ width: '100%',marginBottom:'20px' }} placeholder='Enter email' id='outlined-required' label='Confirm Password' size='small'></TextField> */}
                    <FormControl sx={{ width: '100%', marginBottom: '10px' }} variant="outlined" size='small'>
                        <InputLabel htmlFor="outlined-adornment-  password">   Password</InputLabel>
                        <OutlinedInput inputProps={{
                            sx: {
                                height: '25px'
                            }
                        }}
                            id="outlined-adornment- password"
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
                            label=" Confirm Password"
                        />
                    </FormControl>
                    <FormControl sx={{ width: '100%', marginBottom: '10px' }} variant="outlined" size='small'>
                        <InputLabel htmlFor="outlined-adornment-  password"> Confirm  Password</InputLabel>
                        <OutlinedInput inputProps={{
                            sx: {
                                height: '25px'
                            }
                        }}
                            id="outlined-adornment- password"
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
                            label=" Confirm Password"
                        />
                    </FormControl>
                    <Box><Button variant='contained' sx={{ width: '100%', marginBottom: '20px' }}>Register</Button></Box>
                </Card>
            </Box>

        </>
    )
}

export default Register;
