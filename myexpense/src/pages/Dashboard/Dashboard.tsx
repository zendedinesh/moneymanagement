
import React, { useContext } from 'react';
import { AppBar, Box, Button, Card, Drawer, Grid, List, ListItemButton, ListItemIcon, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography, } from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
// import SearchIcon from '@mui/icons-material/Search';
// import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
// import Appbar from '../appbar/Appbar';
import { useNavigate } from 'react-router-dom';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import { MyContext } from '../toggle/Toggle';
// import Addexpense from '../addexpense/Addexpense';
// import AddExpense from '../expenselist/Expenselist';
// import Expenselist from '../expenselist/Expenselist';
import MoneyIcon from '@mui/icons-material/Money';
import CloseIcon from '@mui/icons-material/Close';

// import './Dashboard.css';



interface tabledata {
    Expensetype: string;
    Expensedate: React.ReactNode;
    Expenseamount: React.ReactNode;
    Description: string;
    Edit: React.ReactNode;
    Delete: React.ReactNode;

}

const tablearr: tabledata[] = [
    {
        Expensetype: 'samosa',
        Expensedate: '5/01/2024',
        Expenseamount: '15 ',
        Description: 'Food',
        Edit: 'edit',
        Delete: 'delete'
    },
    {
        Expensetype: 'samosa',
        Expensedate: '5/01/2024',
        Expenseamount: '15 ',
        Description: 'Food',
        Edit: 'edit',
        Delete: 'delete'
    },
    {
        Expensetype: 'samosa',
        Expensedate: '5/01/2024',
        Expenseamount: '15 ',
        Description: 'Food',
        Edit: 'edit',
        Delete: 'delete'
    },
    {
        Expensetype: 'samosa',
        Expensedate: '5/01/2024',
        Expenseamount: '15 ',
        Description: 'Food',
        Edit: 'edit',
        Delete: 'delete'
    },
    {
        Expensetype: 'samosa',
        Expensedate: '5/01/2024',
        Expenseamount: '15 ',
        Description: 'Food',
        Edit: 'edit',
        Delete: 'delete'
    },
]
const Dashboard: React.FC = () => {




    const addCard = {
        background: 'rgba(255,255,255,0.1)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '8px',
        display: 'flex',
        flexGrow: 1,
        height: {
            xs: '150px',
            md: '200px',
        },
        flexDirection: {
            xs: ' column',
            md: 'column',
        },
        padding: { xs: '5px 5px', md: '5px 5px' },
    };



    const addCard2 = {
        background: 'rgba(255, 255, 255, 0.027)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '8px',
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        padding: '10px 10px',
    };

    const searchBox = {
        background: 'rgba(255,255,255,0.1)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '8px',
    };

    const add = {
        width: '95%',
        margin: 'auto',
        backgroundColor: '',
        marginBottom: { xs: '10px', sm: '10px', md: '10px' },
        // borderRadius: '15px',
        // boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    };
    const expense = {
        fontWeight: 'bold',
        color: 'white',
        // color:'lightgrey',
        marginBottom: '10px',
        textAlign: 'center',
        fontSize: '20px',
        marginTop: '10px',
        borderRadius: '15px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        padding: '10px'

    }
    const edittext = {
        fontSize: { xs: '12px', sm: '17px', md: '15px' }, color: 'white',
        width: '5%',
        backgroundColor: 'lightgreen',
        // boxShadow:'0px 2px 10px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        // paddingLeft: '10px',
        //  height:'20px'
        padding:'3px',
        textAlign:'center'

    }
    const deletetext = {
        fontSize: { xs: '12px', sm: '17px', md: '15px' }, color: 'white',
        width: '5%',
        backgroundColor: 'red',
        borderRadius: '8px',
        // paddingLeft: '20px',
        // height:'20px'
        padding:'3px',
        textAlign:'center'
    }


    const cardandlist = {
        // height: '100vh',

        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        overFlow: "auto",
        maxWidth: "100%",
        // height: "100%",
        gap: "20px",
        padding: "20px 20px",
        // zIndex: '1000'


    }
    const mysalary = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //   marginTop:'10px'
    }
    const myexpense = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop:'10px'
    }
    const mname = {
        fontSize: { xs: '17px', sm: '23px', md: '17px' },
        fontweight: 'bold',
        marginTop: '10px'

    }
    const nname = {
        fontSize: { xs: '17px', sm: '23px', md: '17px' },
        fontweight: 'bold',
        marginTop: '10px'
    }
    const currenicon = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ABC4FF',
        borderRadius: '60%',
        width: '20%',
        padding: '20px',
        height: '80px',
        margin: '20px',

    }
    const curreniconone = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCE3DE',
        borderRadius: '60%',
        width: '20%',
        padding: '20px',
        height: '80px',
        margin: '20px',
    }
    const stext = {
        fontSize: '17px',
        fontWeight: 'bold',
        padding: '10px',
        borderRadius: '15px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        width: '97.2%',
        textAlign: 'center',
        marginTop: '10px',
        marginBottom: '10px'

    }
    const extype = {
        fontSize: { xs: '14px', sm: '18px', md: '15px' },
        borderRadius: '10px',
        // boxShadow: '0px  2px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        padding: '10px',
        marginTop: '10px'
    }
    const exmon = {
        fontSize: { xs: '14px', sm: '18px', md: '15px' },
        borderRadius: '10px',
        // boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        padding: '10px',
        marginTop: '10px'
    }




    return (


        <Box sx={cardandlist}>
            <Box sx={{ display: "flex", gap: { xs: "20px", md: '20px' }, width: "100%", justifyContent: "center", }}>

                <Box sx={addCard}>

                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", height: "40px", alignItems: "center", padding: "10px 10px", borderBottom: "1px solid white" }}>
                        <Typography sx={{ fontWeight: "600", fontSize: { xs: '12px', md: '20px' }, color: "white", textWrap: { xs: 'nowrap' } }} >  Monthly Expense  </Typography>
                        <Typography style={{ fontWeight: "600", fontSize: '20px', color: "white" }}><CurrencyRupeeIcon /></Typography>

                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: "1", color: "white" }}>



                        <CurrencyRupeeIcon sx={{ fontSize: { xs: '21px', md: '30px' } }} />
                        <Typography sx={{ fontSize: { xs: '20px', md: '30px' }, fontWeight: "800", }}>


                            15000

                        </Typography>

                    </Box>

                </Box>
                <Box sx={addCard}>

                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", height: "40px", alignItems: "center", padding: "10px 10px", borderBottom: "1px solid white" }}>
                        <Typography sx={{ fontWeight: "600", fontSize: { xs: '12px', md: '20px' }, color: "white", textWrap: { xs: 'nowrap' } }} >Monthly Salary </Typography>
                        <span style={{ fontWeight: "600", fontSize: "20px", color: "white" }}><CurrencyRupeeIcon /></span>

                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: "1", color: "white" }}>



                        <CurrencyRupeeIcon sx={{ fontSize: { xs: '21px', md: '30px' } }} />
                        <Typography sx={{ fontSize: { xs: '20px', md: '30px' }, fontWeight: "800", }}>


                            20000

                        </Typography>

                    </Box>
                </Box>

            </Box>
            <Box style={searchBox} sx={{ display: 'flex', gap: "20px", justifyContent: 'center', flexDirection: "column", width: "100%", alignItems: 'center', padding: "10px 15px" }}>


                <Box sx={{ width: "100%", height: "45px", display: "flex", justifyContent: "center", alignItems: "center", borderBottom: "1px solid white" }}>

                    <Typography sx={{ fontSize: { xs: "18px", md: '25' }, fontWeight: "600", lineHeight: "40px", color: "white" }} variant='h1'>Search Expense</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <TextField placeholder='Enter Category  To Search' sx={{
                        width: '100%', border: "1px solid white", outline: "none"
                        , borderRadius: "8px"
                    }
                    } inputProps={{

                        sx: {
                            height: { xs: '5px', md: '20px' },
                            fontSize: '14px',
                            color: "white"
                        }
                    }}></TextField>
                </Box>
                <Box sx={{ display: "flex", gap: "20px", width: "100%", justifyContent: "center", }}>

                    <Box sx={addCard2} >
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", height: "40px", alignItems: "center", padding: "10px 10px", borderBottom: "1px solid white" }}>
                            <Typography sx={{ fontWeight: "600", fontSize: { xs: '15px', md: "20px" }, color: "white", textWrap: 'nowrap' }}>  Expense Date
                            </Typography>
                        </Box>
                        <TextField placeholder='Search Expense Type'
                            sx={{ width: "100%", color: "white", border: "1px solid white", borderRadius: "8px" }}
                            inputProps={{

                                sx: {
                                    // paddingTop: '10px',
                                    color: "white",
                                    height: { xs: '5px', md: '20px' },
                                    // height: { xs: '12px', sm: '25px', md: '15px' },
                                    fontSize: { xs: '9px', sm: '16px', md: '12px' },
                                    // fontWeight:{xs:'600px'}
                                }
                            }}></TextField>

                    </Box>
                    <Box sx={addCard2} >
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", height: "40px", alignItems: "center", padding: "10px 10px", borderBottom: "1px solid white" }}>
                            <Typography sx={{ fontWeight: "600", fontSize: { xs: '14px', md: "20px" }, color: "white", textWrap: 'nowrap' }}>  Expense Month </Typography>
                        </Box>
                        <TextField placeholder='Search Expense Month'
                            sx={{ width: "100%", color: "white", border: "1px solid white", borderRadius: "8px" }}
                            inputProps={{

                                sx: {
                                    color: "white",
                                    // height: { xs: '12px', sm: '25px', md: '15px' },
                                    fontSize: { xs: '9px', sm: '16px', md: '12px' },
                                    height: { xs: '5px', md: '20px' },
                                }
                            }} ></TextField>

                    </Box>

                </Box>

            </Box>
            <Box sx={{
                width: "100%",
                display: "flex",
                borderRadius: "8px",
                justifyContent: "center", flexDirection: "column", gap: "20px", backgroundColor: "white", padding: "10px"
            }}>


                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor:'black' }}>
                    <Typography sx={expense}>Expense List</Typography>
                </Box>

                <TableContainer sx={{ backgroundColor: 'black' }} >
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontSize: { xs: '12px', sm: '18px', md: '15px' }, textWrap: { xs: 'nowrap' }, fontWeight: "600", color: 'white' }}>Descreption</TableCell>
                                <TableCell sx={{ fontSize: { xs: '12px', sm: '18px', md: '15px' }, textWrap: { xs: 'nowrap' }, fontWeight: "600", color: 'white' }}> Expense Date</TableCell>
                                <TableCell sx={{ fontSize: { xs: '12px', sm: '18px', md: '15px' }, textWrap: { xs: 'nowrap' }, fontWeight: "600", color: 'white' }}>Expense Amount </TableCell>
                                {/* <TableCell sx={{ fontSize: { xs: '12px', sm: '18px', md: '13px' }, textWrap: { xs: 'nowrap' } }}>Expense Type </TableCell> */}
                                <TableCell sx={{ fontSize: { xs: '12px', sm: '18px', md: '15px' }, textWrap: { xs: 'nowrap' }, fontWeight: "600", color: 'white' }}>Categories</TableCell>
                                <TableCell sx={{ fontSize: { xs: '12px', sm: '18px', md: '15px' }, textWrap: { xs: 'nowrap' }, fontWeight: "600", color: 'white' }}>Edit</TableCell>
                                <TableCell sx={{ fontSize: { xs: '12px', sm: '18px', md: '15px' }, textWrap: { xs: 'nowrap' }, fontWeight: "600", color: 'white' }}>Delete</TableCell>
                                {/* <Box sx={{ display: 'flex', gap: '25px' }}>  <TableCell sx={{ fontSize: { xs: '12px', sm: '18px', md: '16px' }, textWrap: { xs: 'nowrap' }, fontWeight: "600", color: 'white' }}> Edit </TableCell>                   <TableCell sx={{ fontSize: { xs: '12px', sm: '18px', md: '16px' }, textWrap: { xs: 'nowrap' }, fontWeight: "600", color: 'white' }}>Delete </TableCell></Box> */}
                                {/* <Box> <TableCell sx={{ fontSize: { xs: '12px', sm: '18px', md: '15px' }, textWrap: { xs: 'nowrap' }, fontWeight: "600", color: 'white' }}>Delete</TableCell></Box> */}

                            </TableRow>

                        </TableHead>
                        <TableBody>
                            {
                                tablearr.map((item) => (
                                    <TableRow>
                                        <TableCell sx={{ fontSize: { xs: '12px', sm: '17px', md: '15px' }, color: 'white' }}>{item.Expensetype}</TableCell>
                                        <TableCell sx={{ fontSize: { xs: '12px', sm: '17px', md: '15px' }, color: 'white' }}>{item.Expensedate}</TableCell>
                                        <TableCell sx={{ fontSize: { xs: '12px', sm: '17px', md: '15px' }, color: 'white' }}>{item.Expenseamount}</TableCell>
                                        <TableCell sx={{ fontSize: { xs: '12px', sm: '17px', md: '15px' }, color: 'white' }}>{item.Description}</TableCell>
                                        <TableCell  sx={{width:'6%' }}><TableCell sx={edittext}>{item.Edit}</TableCell></TableCell>
                                       <TableCell sx={{width:'5%'}}><TableCell sx={deletetext}>{item.Delete}</TableCell></TableCell>  
                                        {/* <TableCell><Box sx={{ display: 'flex', gap: '20px', width: '36%' }}> <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'lightgreen', width: '50%', borderRadius: '10px', height: '25px', padding: '15px', marginTop: '12.5px' }}> <TableCell sx={{ fontSize: { xs: '12px', sm: '17px', md: '15px' }, color: 'white' }}>{item.Edit}</TableCell></Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'red', width: '50%', borderRadius: '10px', height: '25px', padding: '15px', marginTop: '12.5px' }}><TableCell sx={{ fontSize: { xs: '12px', sm: '17px', md: '15px' }, color: 'white' }}>{item.Delete}</TableCell></Box></Box></TableCell> */}
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>
        </Box >
    )

}


export default Dashboard