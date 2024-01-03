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
import React from 'react';
import { AppBar, Box, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, } from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import Appbar from '../appbar/Appbar';
import { useNavigate } from 'react-router-dom';

interface SidebarItem {
    name: string;
    myicon: React.ReactNode;

}

const Sidebar: React.FC = () => {
    const navigatethroughnames = useNavigate();
    const directnavigationthroughname = (item: SidebarItem, num: number) => {

        if (item.name === 'Login') {
            navigatethroughnames('/login');
        }
        if (item.name === 'Addexpense') {
            navigatethroughnames('/addexpense');
        }
        if (item.name === 'searchexpense') {
            navigatethroughnames('/searchexpense')
        }
    };

    const arr: SidebarItem[] = [
        {
            name: 'dashboard',
            myicon: <DashboardIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />,
        },
        {
            name: 'Addexpense',
            myicon: <AddBoxIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />,
        },
        {
            name: 'searchexpense',
            myicon: <SearchIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />,
        },
        {
            name: 'profile',
            myicon: <PersonIcon sx={{ fontSize: { md: '35px' }, color: '#7a7e7d' }} />,
        },
        {
            name: 'Logout',
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
        backgroundColor: 'black',
        width: '20%',
    };

    const names = {
        color: 'white',
        fontSize: '18px',
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
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
                <Box sx={{ width: '80%' }}>
                    <Appbar />
                </Box>
            </Box>
        </>
    );
};

export default Sidebar;
