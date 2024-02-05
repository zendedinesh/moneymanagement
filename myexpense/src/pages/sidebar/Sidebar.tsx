
import React, { useContext, useState } from 'react';
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

interface SidebarItem {
    name: string;
    myicon: React.ReactNode;

}

interface SideBarProps {
    toggle: boolean
}
const Sidebar: React.FC<SideBarProps> = ({ }) => {

    const [toggle, setToggle] = useState(true);

    const navigatethroughnames = useNavigate();
    const directnavigationthroughname = (item: SidebarItem, num: number) => {

        if (item.name === 'Login') {
            navigatethroughnames('/login');
        }
        if (item.name === 'Add expense') {
            navigatethroughnames('/addexpensein');
        }
        // if (item.name === 'Check Money') {
        //     navigatethroughnames('/checkmoney')
        // }
        if (item.name === 'Adit expense') {
            navigatethroughnames('/aditexpense')
        }
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
            myicon: <DashboardIcon sx={{ fontSize: '28px', color: 'white' }} />,
        },
        {
            name: 'Add expense',
            myicon: <AddBoxIcon sx={{ fontSize: '28px', color: 'white' }} />,
        },
        // {
        //     name: 'Expenselist',
        //     myicon: <MoneyIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />, 
        // },
        // {
        //     name: 'Check Money',
        //     myicon: <CurrencyExchangeIcon sx={{ fontSize: { md: '28px', xs: "30px", sm: '75px' }, color: 'white' }} />,
        // },
        {
            name: 'Adit expense',
            myicon: <CurrencyRupeeIcon sx={{ fontSize: { md: '28px', xs: "30px", sm: '75px' }, color: 'white' }} />,
        },
        {
            name: 'Register',
            myicon: <LogoutIcon sx={{ fontSize: '28px', color: 'white' }} />,
        },
        {
            name: 'Login',
            myicon: <LoginIcon sx={{ fontSize: '28px', color: 'white' }} />,
        },

    ];

    const namicon = {
        display: 'flex',
        gap: '15px',
        justifyContent: 'center',
        alignItems: 'center',

    };

    // const sidebar = {
    //     height: '100vh',
    //     backgroundColor: '#212529',
    //     width: { xs: '100vw', md: '20%', sm: '100vw' },
    //     // width:'40%',
    //     position: { xs: 'fixed', md: 'sticky', sm: 'fixed' },
    //     top: '0',
    //     display: { xs: 'block', md: 'block', sm: 'block' },
    //     zIndex: '10'

    // };


    const names = {
        color: 'white',
        fontSize: { xs: '18px', md: '16px', sm: '25px' },
        // display:{xs:'block',md:'none'}
    };

  
    return (
        <>
            <Box sx={{ width: "100%", height: '100%', backgroundColor: '#212529' }}>

                <Box  >

                    <Box sx={{ height: "80px", width: "100%", display: "flex", flexDirection: "column", gap: "5px", padding: "10px" }}>
                        {toggle ?
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>  <Typography variant='h5' sx={{ color: "white", fontSize: "17px", textWrap: 'nowrap', }}>Money Management App</Typography> <CloseIcon sx={{ display: { xs: 'block', md: 'none' } }} onClick={() => setToggle((prev) => !prev)} /></Box>
                            :
                            <Typography variant='h5' sx={{ color: "white", fontSize: "20px", margin: "0", display: { xs: 'none' } }}> M M</Typography>

                        }
                    </Box>
                    <Box >
                        <List>
                            {arr.map((item, index) => (
                                <ListItemButton key={index} onClick={() => directnavigationthroughname(item, index)}>
                                    <ListItemIcon>
                                        <Box sx={{ display: "flex", alignContent: "center", justifyContent: "center", gap: "10px" }}>
                                            {!toggle ?
                                                <Typography sx={{ display: { xs: 'none', md: 'block' } }} >{item.myicon}</Typography>
                                                : <Typography >{item.myicon}</Typography>

                                            }


                                            {toggle &&

                                                <Typography sx={names}>{item.name}</Typography>
                                            }

                                        </Box>
                                    </ListItemIcon>
                                    <ListItemText></ListItemText>
                                </ListItemButton>
                            ))}
                        </List>
                    </Box>

                </Box>
            </Box>
        </>
    );
}
export default Sidebar;
