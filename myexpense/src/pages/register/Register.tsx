// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { Box, Button, Card, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
// import React, { useState } from 'react'
// import nnimage from '../../../src/myimages/nn.webp'
// import { API } from '../../constant/Network';
// import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

// const Register: React.FC = () => {
//     const { handleSubmit, register, formState: { errors } } = useForm();

//     interface RegisterData {
//         name: string;
//         email: string;
//         password: string;
//         confirmPassword: string;
//       }

//     const [registervalue, setregistervalue] = useState<registerData>({
//         name,
//         email,
//         password,
//         role
//     });

//     const usrregistration = (fieldName: string, value: string | number) => {
//         setregistervalue((prev) => ({
//             ...prev,
//             [fieldName]: value
//         }));

//     };

//     const submitregisterform: SubmitHandler<FieldValues> = (data) => {
//         console.log(data)
//         // if (Loginvalue.Email && Loginvalue.password) {
//         const url = 'http://localhost:9001/api/v1/auth/register';

//         API.post(url, registervalue)?.subscribe({
//             next(res: any) {
//                 console.log(res.token);
//                 alert('Successfully logged in');

//                 setregistervalue({
//                     name: "",
//                     email: '',
//                     password: '',
//                     role: ''
//                 });

//             },

//             error(err: any) {
//                 console.log(err);
//                 alert('Login failed. Please check your credentials.');
//             }

//         });
//         // }
//     };

//     const [showPassword, setShowPassword] = React.useState(false);


//     const handleClickShowPassword = () => setShowPassword((show) => !show);

//     const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//         event.preventDefault();
//     };
//     const registercard = {
//         height: '400px',
//         width: '50%',
//         boxShadow: '0 4px 8px rgba (0 0 0 0.1)',
//         borderRadius: '10px',
//         padding: '20px ',
//         backgroundColor: 'lightblue'

//     }
//     const regidiv = {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%',
//         height: '100vh',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         // backgroundColor:'lightblue'
//         backgroundImage: `url(${nnimage})`
//     }
//     const rtext = {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%'
//     }
//     const ftext = {
//         fontSize: '20px',
//         fontWeight: 'bold',
//         marginBottom: '20px'
//     }
//     return (
//         <>
//             <Box sx={regidiv}>
//                 <Box sx={registercard}>
//                     <form onSubmit={ handleSubmit(submitregisterform)} >
//                         <Box sx={rtext}><Typography sx={ftext}>Registration Form</Typography></Box>
//                         <TextField sx={{ width: '100%', marginBottom: '20px' }} placeholder='Enter email' id='outlined-required' label='First name' size='small'></TextField>
//                         <TextField sx={{ width: '100%', marginBottom: '20px' }} placeholder='Enter email' id='outlined-required' label='Last name' size='small'></TextField>
//                         <TextField sx={{ width: '100%', marginBottom: '20px' }} placeholder='Enter email' id='outlined-required' label='Email' size='small'></TextField>
//                         {/* <TextField sx={{ width: '100%', marginBottom: '20px' }} placeholder='Enter email' id='outlined-required' label='Password' size='small'></TextField> */}
//                         {/* <TextField sx={{ width: '100%',marginBottom:'20px' }} placeholder='Enter email' id='outlined-required' label='Confirm Password' size='small'></TextField> */}
//                         <FormControl sx={{ width: '100%', marginBottom: '10px' }} variant="outlined" size='small'>
//                             <InputLabel htmlFor="outlined-adornment-  password">   Password</InputLabel>
//                             <OutlinedInput inputProps={{
//                                 sx: {
//                                     height: '25px'
//                                 }
//                             }}
//                             {...register('password', { required: 'Password is required' })}
//                             onChange={(e) => usrlregistration('password', e.target.value)}
//                             value={registervalue.password}
//                                 id="outlined-adornment- password"
//                                 type={showPassword ? 'text' : 'password'}
//                                 endAdornment={
//                                     <InputAdornment position="end">
//                                         <IconButton
//                                             aria-label="toggle password visibility"
//                                             onClick={handleClickShowPassword}
//                                             onMouseDown={handleMouseDownPassword}
//                                             edge="end"
//                                         >
//                                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                                         </IconButton>
//                                     </InputAdornment>
//                                 }
//                                 label=" Confirm Password"
//                             />
//                         </FormControl>
//                         <FormControl sx={{ width: '100%', marginBottom: '10px' }} variant="outlined" size='small'>
//                             <InputLabel htmlFor="outlined-adornment-  password"> Confirm  Password</InputLabel>
//                             <OutlinedInput inputProps={{
//                                 sx: {
//                                     height: '25px'
//                                 }
//                             }}
//                                 id="outlined-adornment- password"
//                                 type={showPassword ? 'text' : 'password'}
//                                 endAdornment={
//                                     <InputAdornment position="end">
//                                         <IconButton
//                                             aria-label="toggle password visibility"
//                                             onClick={handleClickShowPassword}
//                                             onMouseDown={handleMouseDownPassword}
//                                             edge="end"
//                                         >
//                                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                                         </IconButton>
//                                     </InputAdornment>
//                                 }
//                                 label=" Confirm Password"
//                             />
//                         </FormControl>
//                         <Box><Button variant='contained' sx={{ width: '100%', marginBottom: '20px' }}>Register</Button></Box>
//                     </form>
//                 </Box>
//             </Box>

//         </>
//     )
// }

// export default Register;
import React, { useState } from 'react';
import {
    Box,
    Button,
    Card,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import nnimage from '../../../src/myimages/nn.webp';
import { API } from '../../constant/Network';
import { useForm, SubmitHandler } from 'react-hook-form';
interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Register: React.FC = () => {
    const [registervalue, setRegistervalue] = useState<RegisterData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const usrregistration = (fieldName: string, value: string | number) => {
        setRegistervalue((prev) => ({
            ...prev,
            [fieldName]: value
        }));
    };

    const {
        handleSubmit,
        register,
        formState: { errors },
        reset
    } = useForm<RegisterData>();

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const onSubmit: SubmitHandler<RegisterData> = (data) => {
        console.log(data)
        // Perform additional validation if needed
        if (data.password !== data.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const url = 'http://localhost:9001/api/v1/auth/register';

        API.post(url, registervalue)?.subscribe({
            // console.log(registervalue)
            next: (res: any) => {
                console.log(res.token);
                alert('Successfully registered');

                setRegistervalue({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
            },
            error: (err: any) => {
                console.log(err);
                alert('Registration failed. Please check your details.');
            }
        });
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${nnimage})`
                }}
            >
                <Card
                    sx={{
                        height: '450px',
                        width: '50%',
                        boxShadow: '0 4px 8px rgba(0 0 0 0.1)',
                        borderRadius: '10px',
                        padding: '20px ',
                        backgroundColor: 'lightblue'
                    }}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                marginBottom: '20px'
                            }}
                        >
                            <Typography>Registration Form</Typography>
                        </Box>
                        <TextField
                            {...register('firstName', { required: 'First name is required' })}
                            label="First Name"
                            variant="outlined"
                            size="small"
                            fullWidth
                            margin="normal"
                            onChange={(e) => usrregistration('firstName', e.target.value)}
                            value={registervalue.firstName}
                        />
                        <TextField
                            {...register('lastName', { required: 'Last name is required' })}
                            label="Last Name"
                            variant="outlined"
                            size="small"
                            fullWidth
                            margin="normal"
                            onChange={(e) => usrregistration('lastName', e.target.value)}
                            value={registervalue.lastName}
                        />
                        <TextField
                            {...register('email', { required: 'Email is required' })}
                            label="Email"
                            variant="outlined"
                            size="small"
                            fullWidth
                            margin="normal"
                            onChange={(e) => usrregistration('email', e.target.value)}
                            value={registervalue.email}
                        />
                        <FormControl fullWidth variant="outlined" size="small" margin="normal">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                {...register('password', { required: 'Password is required' })}
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
                                label="Password"
                                onChange={(e) => usrregistration('password', e.target.value)}
                                value={registervalue.password}
                            />
                        </FormControl>
                        <FormControl fullWidth variant="outlined" size="small" margin="normal">
                            <InputLabel htmlFor="outlined-adornment-confirmPassword">Confirm Password</InputLabel>
                            <OutlinedInput
                                {...register('confirmPassword', { required: 'Confirm password is required' })}
                                id="outlined-adornment-confirmPassword"
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
                                label="Confirm Password"
                                onChange={(e) => usrregistration('confirmPassword', e.target.value)}
                                value={registervalue.confirmPassword}
                            />
                        </FormControl>
                        <Box>
                            <Button variant="contained" type="submit" fullWidth>
                                Register
                            </Button>
                        </Box>
                    </form>
                </Card>
            </Box>
        </>
    );
};

export default Register;

