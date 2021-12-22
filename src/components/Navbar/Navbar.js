import React, { Fragment, useState } from 'react';
import {Toolbar, Box } from '@material-ui/core';
import { AiOutlineMenu as MenuIcon} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { sidebarData } from './SidebarData'
import logoImage from '../../assets/logo.png'
import classes from './Navbar.css';


function NavBar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <Fragment>
            <div className= 'navbar'>
                <Link to='/' onClick={showSidebar} className='logo-image'>
                    <img src={ logoImage }/>
                </Link>

                <Link to='#' className='menu-icon' onClick = {showSidebar}>
                    <MenuIcon  />
                </Link>
            </div>
            
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu' }>
                <ul>
                    { sidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </Fragment>
    )
}

export default NavBar
