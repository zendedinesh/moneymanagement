import React, { useContext } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import MoneyIcon from '@mui/icons-material/Money';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { MyContext } from '../toggle/Toggle';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
const Simplesidebar: React.FC = () => {

    const { toggle, click } = useContext(MyContext)
    console.log(toggle)

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
    interface SidebarItem {
        name: string;
        myicon: React.ReactNode;

    }
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
        //     myicon: <MoneyIcon  sx={{ fontSize: { md: '28px', xs: "30px", sm: '75px' },  color: 'white'  }} />,
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
        paddingRight: '25px'
    };

    const sidebar = {
        height: '100vh',
        backgroundColor: '#212529',
        top: '0',
        width: { xs: '100vw', md: '100%', sm: '100vw' },
        // width:'40%',
        position: { xs: 'fixed', md: 'sticky', sm: 'fixed' },
        // top: '0',
        display: { xs: 'block', md: 'block', sm: 'block' },
        // zIndex: '100'

    };

    const names = {
        color: 'white',
        fontSize: { xs: '18px', md: '16px', sm: '25px' }
    };
    return (
        <>
            <Box sx={{ display: 'flex', position: 'sticky', top: '0' }}>
                {toggle ?
                    <Box sx={{ width: '100%', height: '100vh', backgroundColor: '#212529', display: { xs: 'none', md: 'block', sm: 'none' } }}>
                        <List>
                            {arr.map((item, index) => (
                                <ListItemButton key={index} onClick={() => directnavigationthroughname(item, index)}>
                                    <ListItemIcon>
                                        <Box sx={namicon}>
                                            <Typography>{item.myicon}</Typography>
                                            {/* <Typography sx={names}>{item.name}</Typography> */}
                                        </Box>
                                    </ListItemIcon>
                                    <ListItemText></ListItemText>
                                </ListItemButton>
                            ))}
                        </List>
                    </Box >
                    :
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
            </Box >

        </>
    )
}

export default Simplesidebar
