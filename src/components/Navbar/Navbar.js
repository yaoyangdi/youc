import React, { Fragment, useState, useEffect, useRef } from 'react';
import {Toolbar, Box } from '@material-ui/core';
import { AiOutlineMenu as MenuIcon} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { sidebarData } from './SidebarData'
import logoImage from '../../assets/logo.png'
import classes from './Navbar.css';


function NavBar() {
    const [sidebar, setSidebar] = useState(false);
    const [button, setButton] = useState(true);
    const [toogle, setToogle] = useState(false);
    const ref1 = useRef();
    const ref2 = useRef();

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
    const onToogle = () => {
        setSidebar(!sidebar);
        setToogle(!toogle);
    }

    // Event listener 3: listen on the whichever nav item is clicked => close the sidebar
    const sideBarCollapsed = () => {
        setSidebar(false);
        setToogle(false);
    };

  


    useEffect(()=>{
        const handleClickOutside = (event) => {
            if (   (ref1.current && !ref1.current.contains(event.target) )
                && (ref2.current && !ref2.current.contains(event.target) ) // BOTH ref is not the target of the event 
               ) {
                sideBarCollapsed();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
    })


    return (
        <Fragment>

            <nav ref={ref1} className={sidebar ? 'nav-menu active' : 'nav-menu' }>
                    <ul className='sidebar-items'>
                        { sidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>{
                                    (item.path==='/order' || item.path ==='/online') ?
                                    (
                                        <a href={(item.path==='/order') ? 'https://fngp.com.au/fngonline'
                                                                        : 'https://fngp.com.au/fngonlinestore/'}
                                            target='blank'
                                            onClick={sideBarCollapsed}>
                                        {item.title}
                                        </a>
                                    )
                                    :
                                    (<Link 
                                        to={item.path}
                                        onClick={sideBarCollapsed}
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
                <Link to='/'  className='logo-image' >
                    <img src={ logoImage }/>
                </Link>

                <Link to='#' className='menu-icon' onClick = {onToogle} ref={ref2}>
                    {/* <MenuIcon  /> */}
                    <div className={toogle ? 'toogle active' : 'toogle' }></div>
                </Link>
            </div>
            
        </Fragment>
    )
}

export default NavBar
