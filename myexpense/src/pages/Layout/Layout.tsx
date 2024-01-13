import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import './Layout.css'
import MenuIcon from '@mui/icons-material/Menu';
const Layout: React.FC = () => {

    const [toggle, setToggle] = useState(true);
    return (
        <main className='mainWrapper'>
            <div className='sidebar' style={{ width: toggle ? "200px" : "60px" }}>
                <Sidebar toggle={toggle} />
            </div>

            <div className='contentContainer'>

                <div className='topbar'>
                    <button className='burgerMenu' onClick={() => setToggle((prev) => !prev)}><MenuIcon /></button>

                    <div>
                        Account Name
                    </div>
                </div >

                <div className='pageContainer'>
                    <Outlet />

                </div>
            </div>

        </main>
    )
}

export default Layout