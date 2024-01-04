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
import { AppBar, Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, } from '@mui/material';

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
import AddExpense from '../expenselist/Expenselist';
import Expenselist from '../expenselist/Expenselist';
import MoneyIcon from '@mui/icons-material/Money';

interface SidebarItem {
    name: string;
    myicon: React.ReactNode;

}

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
        if (item.name === 'Adit expense') {
            navigatethroughnames('/aditexpense')
        }
        if (item.name === 'Expenselist') {
            navigatethroughnames('/expenselist')
        }
    };

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
    };

    const sidebar = {
        height: '100vh',
        backgroundColor: '#212529',
        width: '20%',
        // width:'40%',
        position: 'sticky',
        top: '0'
    };

    const names = {
        color: 'white',
        fontSize: '18px',
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                {toggle ? <Box sx={{ width: '5%', height: '100vh', backgroundColor: '#212529' }}>
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
                </Box> : <Box sx={sidebar}>
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

                </Box>
            </Box>
        </>
    );
};

export default Sidebar;