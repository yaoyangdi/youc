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

    // Event listener 1: listen on the event whether the menu button is shown or not => button disappear or shown
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

    // Event listener 2: listen on the event whether the menu button is clicked => open / close the sidebar
    const showSidebar = () => setSidebar(!sidebar);

    // Event listener 3: listen on the whichever nav item is clicked => close the sidebar
    const navItemClicked = () => setSidebar(false);

  

    return (
        <Fragment>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu' }>
                    <ul className='sidebar-items'>
                        { sidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>{
                                    (item.path==='/order' || item.path ==='/online') ?
                                    (
                                        <a href={(item.path==='/order') ? 'https://fngp.com.au/fngonline'
                                                                        : 'https://fngp.com.au/fngonlinestore/'}
                                            target='blank'
                                            onClick={navItemClicked}>
                                        {item.title}
                                        </a>
                                    )
                                    :
                                    (<Link 
                                        to={item.path}
                                        onClick={navItemClicked}
                                        > 
                                            {item.title}
                                        </Link>)
                                    }
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
