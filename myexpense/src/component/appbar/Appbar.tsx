import React from 'react'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const Appbar = () => {
    return (
        <>
            <AppBar sx={{ position: 'static', backgroundColor: 'white', width: '100%' }}  >
                <Toolbar>
                  <IconButton>
                  <MenuIcon sx={{color:'black',fontSize:'30px'}}/>
                  </IconButton>
                </Toolbar>
             
            </AppBar>

            

        </>
    )
}

export default Appbar
