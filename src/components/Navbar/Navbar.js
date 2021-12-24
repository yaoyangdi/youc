import React, { Fragment, useState, useEffect } from 'react';
import {Toolbar, Box } from '@material-ui/core';
import { AiOutlineMenu as MenuIcon} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { sidebarData } from './SidebarData'
import logoImage from '../../assets/logo.png'
import classes from './Navbar.css';


function NavBar() {
    const [sidebar, setSidebar] = useState(false);
    const [button, setButton] = useState(true);

    // Event listener 1: listen on the event whether the menu button is shown or not 
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();}
        ,[]);

    // Event listener 2: listen on the event whether the menu button is clicked
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <Fragment>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu' }>
                    <ul className='sidebar-items'>
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

            <div className= 'navbar-container'>
                <Link to='/' onClick={showSidebar} className='logo-image'>
                    <img src={ logoImage }/>
                </Link>

                <Link to='#' className='menu-icon' onClick = {showSidebar}>
                    <MenuIcon  />
                </Link>
            </div>
            
        </Fragment>
    )
}

export default NavBar
