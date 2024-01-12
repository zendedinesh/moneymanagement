import React, { useContext } from 'react'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { MyContext } from '../toggle/Toggle';
const Appbar = () => {
    const {toggle,click}=useContext(MyContext)
    return (
        <>
            <AppBar sx={{ position: 'static', backgroundColor: 'white', width:'100%'  }}  >
                <Toolbar>
                  <IconButton  onClick={click} >
                  <MenuIcon sx={{color:'black',fontSize:'30px'}} />
                  </IconButton>
                </Toolbar>
             
            </AppBar>

            

        </>
    )
}

export default Appbar
