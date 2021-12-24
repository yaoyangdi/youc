import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {Grid, Box} from "@material-ui/core"
import { Link } from 'react-router-dom';

// Constant value
const center = {
    lat: -38.037410983157706, lng: 145.2030513198445
};
const address= "43 Nicholas Dr, Dandenong South VIC 3175";
const containerStyle = {
    width: '100%',
    height: '51vh'
  };
  

export default function Contactus() {
    return (
        <div>
            <LoadScript 
                googleMapsApiKey="AIzaSyAoJxtfyCL9v5Xc-wpKUbYbuArrvJViTEc">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                        <Marker position={center}/>
                    </GoogleMap>
            </LoadScript>

            <Grid container spacing={5} >
            <Grid item xs={12} sm={6} >
                    <Box className='item'>
                        <h1>Our Showroom</h1>
                        <p>Book a FREE consultation and discover how we can help you.</p>
                        <ul>
                            <li>Book a FREE consultation and discover how we can help you.</li>
                            <li>full range of options across different manufacturers</li>
                            <li>extensive range to meet individual budgets</li>
                        </ul>
                        <h3>Contacts</h3>

                        <h3>Address</h3>

                    </Box>
                </Grid>
            </Grid>

        </div>
    )
}
