import React, { Fragment, useState } from 'react';

import { AiOutlineMenu as MenuIcon} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { sidebarData } from './SidebarData'
import logoImage from '../../assets/logo.png'
import classes from './Navbar.css';


function NavBar() {
    const {sidebar, setSidebar} = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div>
            <div classNAme= {classes.navbar}>
                    <div className='image-header'>
                        <img src={ logoImage }/>
                    </div>

                    <Link to='#' className='menu-icon'>
                        <MenuIcon onClick = {setSidebar} />
                    </Link>
            </div>
            
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul>
                    { sidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to= {item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
