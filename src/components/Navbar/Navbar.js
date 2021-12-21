import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { sidebarData } from './SidebarData'
import logoImage from '../../assets/logo.png'

function NavBar() {
    const {sidebar, setSidebar} = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div classNAme='navbar'>
                <div className='image-header'>
                    <img src={ logoImage }/>
                </div>
                <Link to='#' className='menu-icon'>
                    <FaIcons.FaBar onClick = {setSidebar} />
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
        </>
    )
}

export default NavBar
