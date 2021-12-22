import React, { Fragment, useState } from 'react';
import {Toolbar } from '@material-ui/core';
import { AiOutlineMenu as MenuIcon} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { sidebarData } from './SidebarData'
import logoImage from '../../assets/logo.png'
import classes from './Navbar.css';


function NavBar() {
    const {sidebar, setSidebar} = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <Fragment>
            <Toolbar classNAme= {classes.navbar}>
                <box className='logo-image'>
                    <img src={ logoImage } />
                </box>

                <Link to='#' className='menu-icon'>
                    <MenuIcon onClick = {showSidebar} />
                </Link>
            </Toolbar>
            
            <nav className='nav-menu active'>
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
