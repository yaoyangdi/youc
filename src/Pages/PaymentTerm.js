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
        <div class="main-wrapper">
            <Box sx={{width:'100%'}}>
              <p><h1>Cash Flow Solutions</h1></p>
            </Box>

            <Box sx={{width:'100%'}}>
              <p>We know how important cash flow is for small businesses, so we are willing to discuss your need. We support our customers with the following two payments terms:</p>          
            </Box>
            
            <div className="content">
              <Card>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="300px"
                  image={require('./shiftpayments_-800-x500.jpg')} 
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                  14 days term application
                  </Typography>
                </CardContent>

                <CardActions>
                  <ThemeProvider theme={theme}>
                    <Button startIcon={<ShoppingBagIcon />} color="neutral" variant="contained">
                      Applicantion
                    </Button>
                  </ThemeProvider>
                </CardActions>
              </Card>

              <Card >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="300px"
                  image={require('./longtermapplication.jpeg')} />

                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                  Longer term application
                  </Typography>
                </CardContent>

                <CardActions>
                  <ThemeProvider theme={theme}>
                    <Button startIcon={<ShoppingBagIcon />} color="neutral" variant="contained">
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