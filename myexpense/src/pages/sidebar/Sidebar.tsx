// import { AppBar, Box, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
// import React from 'react';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import AddBoxIcon from '@mui/icons-material/AddBox';
// import SearchIcon from '@mui/icons-material/Search';
// import PersonIcon from '@mui/icons-material/Person';
// import LogoutIcon from '@mui/icons-material/Logout';
// import LoginIcon from '@mui/icons-material/Login';
// import Appbar from '../appbar/Appbar';
// import { useNavigate } from 'react-router-dom';
// const Sidebar = () => {


//     const navigatethroughnames = useNavigate()
//     const directnavigationthroughname = (item, num) => {
//         if (item.name === 'Login') {
//             navigatethroughnames('/login')
//         }
//     }

//     let arr = [

//         {
//             name: 'dashboard',
//             myicon: <DashboardIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />

//         },
//         {
//             name: 'Addexpense',
//             myicon: <AddBoxIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />

//         },
//         {
//             name: 'searchexpense',
//             myicon: <SearchIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />
//         },
//         {
//             name: 'profile',
//             myicon: <PersonIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />
//         },
//         {
//             name: 'Logout',
//             myicon: <LogoutIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />
//         },
//         {
//             name: 'Login',
//             myicon: <LoginIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />
//         }
//     ]
//     const namicon = {
//         display: 'flex',
//         gap: '15px',
//         justifyContent: 'center',
//         alignItem: 'center'
//     }
//     const sidebar = {

//         height: '100vh',
//         backgroundColor: 'black',
//         width: '20%'
//     }

//     const names = {
//         color: 'white',
//         fontSize: '18px'
//     }


//     return (
//         <>
//             <Box sx={{ display: 'flex' }}>


//                 <Box sx={sidebar}>
//                     <List>
//                         {
//                             arr.map((item, index) => (
//                                 <ListItemButton key={index} onClick={() => directnavigationthroughname(item, index)} >
//                                     <ListItemIcon>
//                                         <ListItemText>
//                                             <Box sx={namicon}> <Typography >{item.myicon}</Typography><Typography sx={names} > {item.name}</Typography> </Box>
//                                         </ListItemText>
//                                     </ListItemIcon>
//                                 </ListItemButton>
//                             )
//                             )}
//                     </List>
//                 </Box>
//                 <Box sx={{ width: '80%' }}>
//                     <Appbar />
//                 </Box>

//             </Box>
//         </>
//     )
// }

// export default Sidebar
//  // const navigatethroughloginicon = useNavigate()
//     // const directnavigatetologinicon = () => {
//     //     navigatethroughloginicon('/login')

//     // }
//     // onClick={directnavigatetoaddexpenseicon}

//     // const navigatethroughaddexpenseicon = useNavigate()
//     // const directnavigatetoaddexpenseicon = () => {
//     //     navigatethroughaddexpenseicon('/addexpense')
//     // }
//     // onClick={directnavigatetologinicon}
//     //navigate through names
//     // const navigatethroughloginname = useNavigate()
//     // const directnavigatetologinname = (dinesh,num) => {
//     //     if (dinesh.name === 'login') {
//     //         navigatethroughloginname('/login')
//     //     }
//     // }
//     // <ListItemButton key={index} onClick={()=>directnavigatetologinname(item, index)}>
import React, { useContext } from 'react';
import { AppBar, Box, Button, Card, Drawer, Grid, List, ListItemButton, ListItemIcon, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography, } from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
// import SearchIcon from '@mui/icons-material/Search';
// import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import Appbar from '../appbar/Appbar';
import { useNavigate } from 'react-router-dom';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { MyContext } from '../toggle/Toggle';
// import Addexpense from '../addexpense/Addexpense';
// import AddExpense from '../expenselist/Expenselist';
// import Expenselist from '../expenselist/Expenselist';
import MoneyIcon from '@mui/icons-material/Money';
import CloseIcon from '@mui/icons-material/Close';

interface SidebarItem {
    name: string;
    myicon: React.ReactNode;

}
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
        Delete: 'delet'
    },
    {
        Expensetype: 'samosa',
        Expensedate: '5/01/2024',
        Expenseamount: '15 ',
        Description: 'Food',
        Edit: 'edit',
        Delete: 'delet'
    },
    {
        Expensetype: 'samosa',
        Expensedate: '5/01/2024',
        Expenseamount: '15 ',
        Description: 'Food',
        Edit: 'edit',
        Delete: 'delet'
    },
    {
        Expensetype: 'samosa',
        Expensedate: '5/01/2024',
        Expenseamount: '15 ',
        Description: 'Food',
        Edit: 'edit',
        Delete: 'delet'
    },
    {
        Expensetype: 'samosa',
        Expensedate: '5/01/2024',
        Expenseamount: '15 ',
        Description: 'Food',
        Edit: 'edit',
        Delete: 'delet'
    },
]
const Sidebar: React.FC = () => {



    const { toggle, click } = useContext(MyContext)

    const navigatethroughnames = useNavigate();
    const directnavigationthroughname = (item: SidebarItem, num: number) => {

        if (item.name === 'Login') {
            navigatethroughnames('/login');
        }
        if (item.name === 'Add expense') {
            navigatethroughnames('/addexpensein');
        }
        if (item.name === 'Check Money') {
            navigatethroughnames('/checkmoney')
        }
        // if (item.name === 'Adit expense') {
        //     navigatethroughnames('/aditexpense')
        // }
        // if (item.name === 'Expenselist') {
        //     navigatethroughnames('/expenselist')
        // }
        if (item.name === 'Dashboard') {
            navigatethroughnames('/')
        }
        if (item.name === 'Register') {
            navigatethroughnames('/register')
        }
    };

    const arr: SidebarItem[] = [
        {
            name: 'Dashboard',
            myicon: <DashboardIcon sx={{ fontSize: { md: '28px', xs: "30px", sm: '75px' }, color: 'white' }} />,
        },
        {
            name: 'Add expense',
            myicon: <AddBoxIcon sx={{ fontSize: { md: '28px', xs: "30px", sm: '75px' }, color: 'white' }} />,
        },
        // {
        //     name: 'Expenselist',
        //     myicon: <MoneyIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />,
        // },
        // {
        //     name: 'Check Money',
        //     myicon: <CurrencyExchangeIcon sx={{ fontSize: { md: '28px', xs: "30px", sm: '75px' }, color: 'white' }} />,
        // },
        // {
        //     name: 'Adit expense',
        //     myicon: <CurrencyRupeeIcon sx={{ fontSize: { md: '28px', xs: "30px", sm: '75px' }, color: 'white' }} />,
        // },
        {
            name: 'Register',
            myicon: <LogoutIcon sx={{ fontSize: { md: '28px', xs: "30px", sm: '75px' }, color: 'white' }} />,
        },
        {
            name: 'Login',
            myicon: <LoginIcon sx={{ fontSize: { md: '28px', xs: "30px", sm: '75px' }, color: 'white' }} />,
        },

    ];

    const namicon = {
        display: 'flex',
        gap: '15px',
        justifyContent: 'center',
        alignItems: 'center',

    };

    const sidebar = {
        height: '100vh',
        backgroundColor: '#212529',
        width: { xs: '100vw', md: '20%', sm: '100vw' },
        // width:'40%',
        position: { xs: 'fixed', md: 'sticky', sm: 'fixed' },
        top: '0',
        display: { xs: 'block', md: 'block', sm: 'block' },
        zIndex: '10'

    };

    const names = {
        color: 'white',
        fontSize: { xs: '18px', md: '16px', sm: '25px' }
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

    const salary = {

        // border:'2px solid  green',
        margin: '20px 20px'
    }
    const cardandlist = {
        // height: '100vh',
        backgroundColor: '#0f1618'
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
        <>
            <Box sx={{ display: 'flex', }}>
                {toggle ?
                    <Box sx={{ width: '5%', height: '100vh', backgroundColor: '#212529', display: { xs: 'none' } }}>

                        <List>
                            {arr.map((item, index) => (
                                <ListItemButton key={index} onClick={() => directnavigationthroughname(item, index)}>
                                    <ListItemIcon>
                                        <Box>
                                            <Typography>{item.myicon}</Typography>
                                            {/* <Typography sx={names}>{item.name}</Typography> */}
                                        </Box>
                                    </ListItemIcon>
                                    <ListItemText></ListItemText>
                                </ListItemButton>
                            ))}
                        </List>
                    </Box> :
                    <Box sx={sidebar}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', margin: '20px 10px' }}><Typography sx={{ textWrap: 'nowrap', color: 'white', fontSize: { md: '20px', xs: '30px', sm: '50px' } }} > Money Tracker App</Typography>  <CloseIcon onClick={click} sx={{ display: { xs: 'block', md: 'none', sm: 'block' }, color: 'white', fontSize: { xs: '40px', sm: '80px' } }} /> </Box >
                        <List>
                            {arr.map((item, index) => (
                                <ListItemButton key={index} onClick={() => directnavigationthroughname(item, index)}>
                                    <ListItemIcon>
                                        <Box sx={namicon}>
                                            <Typography>{item.myicon}</Typography>
                                            <Typography sx={names}>{item.name}</Typography>
                                        </Box>
                                    </ListItemIcon>
                                    <ListItemText></ListItemText>
                                </ListItemButton>
                            ))}
                        </List>
                    </Box>

                }
                <Box sx={{ width: '100%' }}>
                    <Appbar />
                    {/* <Box sx={{ height: '100vh', width: '100%', backgroundColor: '#f5f5f6', paddingTop: '20px' }}>
                        <Expenselist />
                    </Box> */}
                    <Box sx={cardandlist}>
                        <Box sx={salary}>
                            <Grid container spacing={2} >
                                <Grid item md={6} xs={12} >
                                    <Paper sx={{ height: '200px', backgroundColor: '#CCDBFD' }} >
                                        <Box sx={myexpense}>  <Typography sx={mname}>Monthly Expense $ </Typography></Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Box sx={currenicon}><CurrencyRupeeIcon sx={{ fontSize: '40px}' }} /></Box><Typography sx={{ fontSize: { xs: '', sm: '20px', md: '' } }}>Total Monthly Expense $</Typography></Box>
                                    </Paper>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Paper sx={{ height: '200px', backgroundColor: '#A4C3B2' }} >
                                        <Box sx={mysalary}> <Typography sx={nname}>Monthly Salary $ 20K</Typography></Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}  > <Box sx={curreniconone}><CurrencyExchangeIcon sx={{ fontSize: '40px}' }} /></Box><Typography sx={{ fontSize: { xs: '', sm: '20px', md: '' } }}>Total Monthly salary $</Typography></Box>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box>
                            <Card sx={add}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                                    <Card sx={{ height: { xs: '380px', sm: '450px', md: '250px' }, width: '80%', backgroundColor: '#E7ECEF' }}>
                                        <Box><Typography sx={stext}>Search Expense</Typography></Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                            <TextField size='small' placeholder='Enter Category  To Search' sx={{ width: '85%' }} inputProps={{

                                                sx: {
                                                    fontSize: '14px'
                                                }
                                            }}></TextField>
                                        </Box>
                                        <Box>
                                            <Grid container sx={{ margin: { xs: '20px 17px', md: '20px 55px', sm: '20px 40px' } }}>
                                                <Grid item md={6} xs={12}>
                                                    <Paper sx={{ backgroundColor: '', height: { xs: '100px', sm: '120px', md: '100px' }, width: { md: '70%', xs: '85%', sm: '85%' }, marginBottom: { xs: '15px', sm: '10px', md: '0' } }}>
                                                        <Box>
                                                            <Typography sx={extype}>  Expense Date
                                                            </Typography>
                                                            <TextField placeholder='Search Expense Type' size='small' sx={{ paddingLeft: { xs: '10px', md: '13px', sm: '20px' }, width: { xs: '90%', sm: '90%', md: '90%' } }} inputProps={{

                                                                sx: {
                                                                    height: { xs: '12px', sm: '25px', md: '15px' },
                                                                    fontSize: { xs: '11px', sm: '16px', md: '12px' }
                                                                }
                                                            }}></TextField>
                                                        </Box>
                                                    </Paper>
                                                </Grid>
                                                <Grid item md={6} xs={12}>
                                                    <Paper sx={{ backgroundColor: '', height: { xs: '100px', sm: '120px', md: '100px' }, width: { md: '70%', xs: '85%', sm: '85%' }, marginBottom: { xs: '15px', sm: '10px', md: '0' } }}>
                                                        <Box>
                                                            <Typography sx={exmon}>  Expense Month </Typography>
                                                            <TextField placeholder='Search Expense Month' size='small' sx={{ paddingLeft: { xs: '10px', md: '13px', sm: '20px' }, width: { xs: '90%', sm: '90%', md: '90%' } }} inputProps={{

                                                                sx: {
                                                                    height: { xs: '12px', sm: '25px', md: '15px' },
                                                                    fontSize: { xs: '11px', sm: '16px', md: '12px' }
                                                                }
                                                            }} ></TextField>
                                                        </Box></Paper>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Card>
                                </Box>
                                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> <Typography sx={expense}>Expense List</Typography></Box>

                                <TableContainer >
                                    <Table  >
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ fontSize: { xs: '12px', sm: '18px', md: '13px' }, textWrap: { xs: 'nowrap' } }}>Descreption</TableCell>
                                                <TableCell sx={{ fontSize: { xs: '12px', sm: '18px', md: '13px' }, textWrap: { xs: 'nowrap' } }}> Expense Date</TableCell>
                                                <TableCell sx={{ fontSize: { xs: '12px', sm: '18px', md: '13px' }, textWrap: { xs: 'nowrap' } }}>Expense Amount </TableCell>
                                                {/* <TableCell sx={{ fontSize: { xs: '12px', sm: '18px', md: '13px' }, textWrap: { xs: 'nowrap' } }}>Expense Type </TableCell> */}
                                                <TableCell sx={{ fontSize: { xs: '12px', sm: '18px', md: '13px' }, textWrap: { xs: 'nowrap' } }}>Categories</TableCell>
                                                <TableCell sx={{ fontSize: { xs: '12px', sm: '18px', md: '13px' }, textWrap: { xs: 'nowrap' } }}>Edit</TableCell>
                                                <TableCell sx={{ fontSize: { xs: '12px', sm: '18px', md: '13px' }, textWrap: { xs: 'nowrap' } }}>Delete</TableCell>
                                            </TableRow>

                                        </TableHead>
                                        <TableBody>
                                            {
                                                tablearr.map((item) => (
                                                    <TableRow>
                                                        <TableCell sx={{ fontSize: { xs: '12px', sm: '17px', md: '11px' } }}>{item.Expensetype}</TableCell>
                                                        <TableCell sx={{ fontSize: { xs: '12px', sm: '17px', md: '11px' } }}>{item.Expensedate}</TableCell>
                                                        <TableCell sx={{ fontSize: { xs: '12px', sm: '17px', md: '11px' } }}>{item.Expenseamount}</TableCell>
                                                        <TableCell sx={{ fontSize: { xs: '12px', sm: '17px', md: '11px' } }}>{item.Description}</TableCell>
                                                        <TableCell sx={{ fontSize: { xs: '12px', sm: '17px', md: '11px' } }}>{item.Edit}</TableCell>
                                                        <TableCell sx={{ fontSize: { xs: '12px', sm: '17px', md: '11px' } }}>{item.Delete}</TableCell>
                                                    </TableRow>
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Card>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Sidebar;