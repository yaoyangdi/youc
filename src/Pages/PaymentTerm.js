import React, { Fragment, useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import "./paymentterm.css";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

import './Footer.css';
import Footer from '../components/Footer/Footer';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

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
      main: '#f4baaa',
      contrastText: '#fff',
    },
  },
  typography: {
    fontSize: '20',
    }
});

function Payterm() {

    return (
        <div className="main-wrapper">
            <Box sx={{width:'100%',float:"left"}}>
              <p><h1>Cash Flow Solutions</h1></p>
            </Box>

            <Box className="topp" sx={{width:'100%',float:"left"}}>
              <p style={{fontSize:"22px",color:"#2f5687",textAlign:"left",fontFamily:"Helvetica"}}>We know how important cash flow is for small businesses, so we are willing to discuss your need.</p>          
              <p style={{fontSize:"22px",color:"#2f5687",textAlign:"left",fontFamily:"Helvetica"}}> We support our customers with the following two payments terms:</p>
            </Box>
            
            <div className="content">
              <Card sx={{width:"600px"}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="300px"
                  width="500px"
                  image={require('../assets/img4.jpg')} 
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                  14 days term application
                  </Typography>
                </CardContent>

                <CardActions>
                  <ThemeProvider theme={theme}>
                    <Button startIcon={<ShoppingBagIcon />} color="secondary" variant="contained">
                      Applicantion
                    </Button>
                  </ThemeProvider>
                </CardActions>
              </Card>

              <Card  sx={{width:"600px"}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="300px"
                  image={require('../assets/img5.jpeg')} />

                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                  Longer term application
                  </Typography>
                </CardContent>

                <CardActions>
                  <ThemeProvider theme={theme}>
                    <Button startIcon={<ShoppingBagIcon />} color="secondary" variant="contained">
                      Applicantion
                    </Button>
                  </ThemeProvider>
                </CardActions>
              </Card>

    
    </div>
    <Box sx={{width:"100%"}}>

<Footer/>
</Box>



</div>

    )
}

export default Payterm