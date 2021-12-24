import React, {useRef,useState,useCallback} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import {
	GoogleMap,
	LoadScript,
	useLoadScript,
	Marker,
	InfoWindow,
}from "@react-google-maps/api";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import Footer from '../components/Footer/Footer';

import TextField from "@material-ui/core/TextField";



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
        main: '#f07c28',
        contrastText: '#fff',
      },
  
      secondary: {
        // This is green.A700 as hex.
        main: '#f4caab',
      },
    },
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

    const markerRef = useRef(null);
const mapRef = useRef(null);
const [location, setLocation] = useState(center);

function onClick(...args) {
    console.log("onClick args: ", args);
  }
function setNewLocation() {
    console.log(mapRef.current.getPlaces());
  }

  function onPlacesChanged(...args) {
    console.log("onPlacesChanged args: ", args);
    setNewLocation();
  }
    
function onDragEnd(...args) {
    console.log("onDragEnd args: ", args);
    console.log(
      markerRef.current.position.lat(),
      markerRef.current.position.lng()
    );
    setLocation({
      lat: markerRef.current.position.lat(),
      lng: markerRef.current.position.lng()
    });
    // setNewLocation();
  }

const onLoad = useCallback(
    map => {
      mapRef.current = map;
    },
    [onPlacesChanged]
  );

const onMarkerLoad = useCallback(
    marker => {
      markerRef.current = marker;
      // const path = marker.getPath();
      console.log(marker);
    },
    [onDragEnd]
  );
  
    return (
        <div>
            <div className="main">
                <h1>Contact Us</h1>
                <div style={{width:'100%',float:'left'}}>
                <LoadScript googleMapApiKey="AIzaSyAoJxtfyCL9v5Xc-wpKUbYbuArrvJViTEc">
					 <div>
					    <GoogleMap  mapContainerStyle={mapContainerStyle} zoom={12} center={center}>

                        <Marker position={location} onLoad={onMarkerLoad} label="43 Nicholas Driver"></Marker>
                        </GoogleMap>
					</div>
                </LoadScript>
                </div>

                <div style={{width:'100%',float:'left'}}>
                    <Box sx={{width:'100%',float:'left'}}>
                    <Box sx={{float:"left"}}>
                        <ThemeProvider theme={theme}>
                        <h1>Our Showroom</h1>
                        <p color='#f4caab'> Book a FREE consultation and discover how we can help you.</p>
                        <p style={{fontSize:'22px', color:'#222021'}}><FiberManualRecordIcon style={{width:'50px',height:'25px',color:"#f4caab"}}/>Design to suit your situation</p>
                        <p style={{fontSize:'22px',color:'#222021'}}><FiberManualRecordIcon style={{width:'50px',height:'25px',color:"#f4caab"}}/>Full range of options across different manufacturers</p>
                        <p style={{fontSize:'22px',color:'#222021'}}><FiberManualRecordIcon style={{width:'50px',height:'25px',color:"#f4caab"}}/>Extensive range to meet individual budgets</p>




                        <h2 style={{color:"#f4caab"}}>Contact us</h2>
                        <p style={{fontSize:'22px', color:'#222021'}}>03 9543 2228</p>
                        <p style={{fontSize:'22px', color:'#222021'}}>info@youc.com.au</p>
                        <p style={{fontSize:'22px', color:'#222021'}}>Monday-Friday:9am-2pm</p>

                        <h2 style={{color:"#f4caab"}}>Address</h2>
                        <p style={{fontSize:'22px', color:'#222021'}}>43 Nicholaas Drive</p>

                        <p style={{fontSize:'22px', color:'#222021'}}>monday-friday 9am-2pm</p>

                        </ThemeProvider>
                    </Box>

                    <Box sx={{float:'left',align:'center',paddingLeft:"20px"}}>
                        <ThemeProvider theme={theme}>
                        <h1>Contact Us</h1>
                        <form action="" method="get">
                        <p>Full Name</p>

                        <p><input id="GET-name" type="text"  name="name" style={{width:'90%',fontSize:'25px',width:'300px',height:'40px',border:'1px solid #BBB3B9'}}/></p>

                        <p>Phone</p>
                        <p><input id="GET-name" type="text"  name="phone" style={{width:'90%',fontSize:'25px',width:'300px',height:'40px',border:'1px solid #BBB3B9'}}/></p>

                        <p>Email</p>
                        <p><input id="GET-name" type="text"  name="email" style={{width:'90%',fontSize:'25px',width:'300px',height:'40px',border:'1px solid #BBB3B9'}}/></p>

                        <p>Message</p>  

                        <textarea name="message" rows="5" cols="50" placeholder="Message" style={{width:'90%', fontSize:'25px',width:"300px",border:'1px solid #BBB3B9'}}></textarea>


                        </form>

                        </ThemeProvider>
                    </Box>
                    </Box>
                
                </div>
                <Footer/>

            </div>





        </div>

    )
}
