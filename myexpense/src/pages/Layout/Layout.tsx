import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const Layout: React.FC = () => {
    const mainWrapper = {
        display: 'flex',
        width: '100vw',
        height: '100vh',
        /* overflow: hidden; */
    };

    const sidebar = {
        // width: '200px',
        // /* min-width: 200px */
        // transition: 'all 0.3s ease-in-out',
    };

    const contentContainer = {
        display: 'flex',
        flexGrow: 1,
        /* min-width: 1000px; */
        flexDirection: 'column',
        width: 'calc(100% - 200px)',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        zIndex:'100'
    };

    const topbar = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '0 20px',
        height: '60px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        /* color: 'white'; */
    };

    const burgerMenu = {
        backgroundColor: 'transparent',
        border: 'none',
    };

    const pageContainer = {
        height: 'calc(100vh - 80px)',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        overflow: 'auto',
        backgroundColor: '#0f1618',
        /* padding: 10px; */
    };

    const [toggle, setToggle] = useState(true);

    return (
        <Box sx={mainWrapper}>
            <Box sx={{ width: toggle ? { xs: '100%', md: '200px' } : { xs: '0px', md: '50px' }, transition: 'all 0.3s ease-in-out', position:{xs:'fixed',md:'sticky'}, height:'100vh', }}>
                <Sidebar toggle={toggle} />
            </Box>

            <Box sx={contentContainer}>
                <Box sx={topbar}>
                    <Typography  onClick={() => setToggle((prev) => !prev)}>
                        <MenuIcon />
                    </Typography>

                    <Box>user</Box>
                </Box>

                <Box sx={pageContainer}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;
