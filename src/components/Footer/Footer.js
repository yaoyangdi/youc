import React from 'react';
import logoImage from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';


import './Footer.css';

function Footer() {
    return (
        <Box sx={{width:"100%", marginBottom:"2em"}}>
            <div className='footer-container'>
                    <div className='footer-itemWithImg'>
                        <div className='logoImage'>
                            <img src={logoImage} />
                        </div>
                        <p>Copyright © All rights reserved.</p>
                    </div>

                    <div className='footer-item'>
                        <h3>Address</h3>
                        <p>43 Nicholas Drive <br></br>Dandenong South VIC 3175</p >
                        <p></p>
                    </div>

                    <div className='footer-item'>
                        <h3>Contact</h3>
                        <Link to='/contact-us'>03 9543 2288</Link >
                        <br></br>
                        <Link to='/contact-us'>info@youc.com.au</Link>
                    </div>
            </div>
        </Box>

    )
}
export default Footer
