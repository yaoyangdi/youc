import React, {useRef,useState,useCallback} from 'react'
import Box from '@mui/material/Box';
import Button from '../components/Button';
import Footer from '../components/Footer/Footer';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import {
	GoogleMap,
	LoadScript,
	Marker,
} from "@react-google-maps/api";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import './Contactus.css';


const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: 'rgb(236, 178, 16)',
      contrastText: '#fff',
    },

    secondary: {
      main: 'rgb(223, 163, 32)',
      contrastText: '#fff',
    },
  },
  typography: {
    fontSize: '20',
    }
});
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

                <div style={{width:'100%',}}>
                    <LoadScript 
                        googleMapsApiKey="AIzaSyAoJxtfyCL9v5Xc-wpKUbYbuArrvJViTEc">
                            <GoogleMap
                                mapContainerStyle={mapContainerStyle}
                                center={center}
                                zoom={10}>
                                <Marker position={center}/>
                            </GoogleMap>
                    </LoadScript>
                </div>

                <div className='textItemsss'>
                      <Box className='textItem1'>
                          <ThemeProvider theme={theme}>
                              <h1>Our Showroom</h1>
                                <p color='#f4caab'> Book a FREE consultation and discover how we can help you.</p>
                              <div className='shownroom-text'>
                                <p><FiberManualRecordIcon style={{width:'45px',height:'25px',color:"#f4caab"}}/>Design to suit your situation</p>
                                <p><FiberManualRecordIcon style={{width:'45px',height:'25px',color:"#f4caab"}}/>Full range of options across different manufacturers</p>
                                <p><FiberManualRecordIcon style={{width:'45px',height:'25px',color:"#f4caab"}}/>Extensive range to meet individual budgets</p>
                              </div>
                              
                              <h2 style={{color:"#f4caab"}}>Contact us</h2>
                              <div className='contact-text'>
                                <p>03 9543 2228</p>
                                <p>info@youc.com.au</p>
                                <p>Monday-Friday:  9am-2pm</p>
                              </div>
                              <br></br>
                              <h2 style={{color:"#f4caab"}}>Address</h2>
                              <div className='contact-text'>
                                <p>43 Nicholaas Drive</p>
                                <p>monday-friday 9am-2pm</p>
                              </div>

                          </ThemeProvider>
                      </Box>

                      <Box className='textItem2'>
                          <ThemeProvider theme={theme}>
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
                          <Button href='/#' href="/contact-us" buttonStyle='btn--primary' buttonSize='btn--md' name='Make an Enquiry'/>
                          </ThemeProvider>
                      </Box>
                </div>
                <Footer />

            </div>

    )
}
