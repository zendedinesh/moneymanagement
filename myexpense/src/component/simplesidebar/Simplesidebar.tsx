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
const Simplesidebar: React.FC = () => {

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
        if (item.name === 'Adit expense') {
            navigatethroughnames('/aditexpense')
        }
        if (item.name === 'Expenselist') {
            navigatethroughnames('/expenselist')
        }
    };
    interface SidebarItem {
        name: string;
        myicon: React.ReactNode;

    }
    const arr: SidebarItem[] = [
        {
            name: 'dashboard',
            myicon: <DashboardIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />,
        },
        {
            name: 'Add expense',
            myicon: <AddBoxIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />,
        },
        {
            name: 'Expenselist',
            myicon: <MoneyIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />,
        },
        {
            name: 'Check Money',
            myicon: <CurrencyExchangeIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />,
        },
        {
            name: 'Adit expense',
            myicon: <CurrencyRupeeIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />,
        },
        {
            name: 'Register',
            myicon: <LogoutIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />,
        },
        {
            name: 'Login',
            myicon: <LoginIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />,
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
        width: '100%',
        position: 'sticky',
        top: '0'

    };

    const names = {
        color: 'white',
        fontSize: '15px',
    };
    return (
        <>
            <Box sx={{ display: 'flex', position: 'sticky', top: '0' }}>
                {toggle ?
                    <Box sx={{ width: '100%', height: '100vh', backgroundColor: '#212529' }}>
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
