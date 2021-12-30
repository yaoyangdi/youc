import React, {useRef,useState,useCallback} from 'react'
import Box from '@mui/material/Box';
import Button from '../components/Button';
import Footer from '../components/Footer/Footer';

import {
	GoogleMap,
	LoadScript,
	Marker,
} from "@react-google-maps/api";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import './Contactus.css';

const mapContainerStyle={
	width:"100%",
	height:"450px",
	float:"top",
	margin:"5px",
}


const center={
	lat:-38.037150,
	lng:145.203140
}



export default function Contactus() {
    return (

            <div className="main">

                <LoadScript 
                    googleMapsApiKey="AIzaSyAoJxtfyCL9v5Xc-wpKUbYbuArrvJViTEc">
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={center}
                            zoom={10}>
                            <Marker position={center}/>
                        </GoogleMap>
                </LoadScript>

                <div className='textItemsss'>
                      <Box className='textItem1'>
                          <h1>Our Showroom</h1>
                          <div className='--p'>
                            <p color='#f4caab'> Book a FREE consultation and discover how we can help you.</p>
                          </div>
                          <div className='shownroom-text'>
                            <p><FiberManualRecordIcon style={{width:'25px',height:'14px',color:"rgb(213, 171, 132)"}}/>Design to suit your situation</p>
                            <p><FiberManualRecordIcon style={{width:'25px',height:'14px',color:"rgb(213, 171, 132)"}}/>Full range of options across different manufacturers</p>
                            <p><FiberManualRecordIcon style={{width:'25px',height:'14px',color:"rgb(213, 171, 132)"}}/>Extensive range to meet individual budgets</p>
                            <br></br>
                          </div>
                          
                          <h2 style={{color:"rgb(213, 171, 132)"}}>Contact us</h2>
                          <div className='contact-text'>
                            <p>03 9543 2228</p>
                            <p>info@youc.com.au</p>
                            <p>Monday-Friday:  9am-2pm</p>
                          </div>
                          <h2 style={{color:"rgb(213, 171, 132)"}}>Address</h2>
                          <div className='contact-text'>
                            <p>43 Nicholaas Drive</p>
                            <p>monday-friday 9am-2pm</p>
                          </div>

                      </Box>

                      <Box className='textItem2'>
                        <h1>Contact Us</h1>
                        <form action="" method="get" >
                          <p>Full Name</p>

                          <p><input id="GET-name" type="text"  name="name" style={{width:'90%',fontSize:'25px',width:'90%',height:'40px',border:'1px solid #BBB3B9'}}/></p>

                          <p>Phone</p>
                          <p><input id="GET-name" type="text"  name="phone" style={{width:'90%',fontSize:'25px',width:'90%',height:'40px',border:'1px solid #BBB3B9'}}/></p>

                          <p>Email</p>
                          <p><input id="GET-name" type="text"  name="email" style={{width:'90%',fontSize:'25px',width:'90%',height:'40px',border:'1px solid #BBB3B9'}}/></p>

                          <p>Message</p>  

                          <textarea name="message" rows="5" cols="50" placeholder="Message" style={{width:'90%', fontSize:'25px',width:"90%",border:'1px solid #BBB3B9'}}></textarea>
                        </form>
                        <br></br>
                        <Button href='/#' href="/contact-us" buttonStyle='btn--primary' buttonSize='btn--lg' name='Submit'/>
                      </Box>
                </div>
                <Box sx={{width:"100%"}}>
                  <Footer />
                </Box>
            </div>

    )
}
