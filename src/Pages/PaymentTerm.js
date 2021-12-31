import React, { Fragment, useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '../components/Button'
import CardMedia from '@mui/material/CardMedia';
import "./paymentterm.css";
import { createTheme } from '@mui/material/styles';
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
            <Box sx={{width:'80%'}}>
              <div className='title'>
                <h1>Cash Flow Solutions</h1>
              </div>
            </Box>

            <Box sx={{width:'100%'}}>
              <div className='text'>
                <p>We know how important cash flow is for small businesses, so we are willing to discuss your need. We support our customers with the following two payments terms:</p>          
              </div>
              <br></br>
              <br></br>
            </Box>

            
            <div className="content">
              <Card className='card'>
                <CardMedia
                  component="img"
                  alt="green iguana"

                  image={require('../assets/img4.jpg')} 
                />
                <CardContent>
                <div className='cardText'>
                    <p>14 days term application</p>               
                  </div>
                </CardContent>

                <CardActions >
                  <Button 
                      name={
                        <div className='buttonText'>
                          <ShoppingBagIcon/>
                          <> Application</>
                        </div>} 
                      href='/#' 
                      buttonStyle='btn--primary' 
                      buttonSize='btn--md'/>

                </CardActions>


              </Card>

              <br></br>

              <Card className='card'>
                <CardMedia
                  component="img"
                  alt="green iguana"

                  image={require('../assets/img5.jpeg')} />

                <CardContent>
                  <div className='cardText'>
                    <p>Longer term application</p>                  
                  </div>
                </CardContent>

                <CardActions >
                  <Button 
                      name={
                        <div className='buttonText'>
                          <ShoppingBagIcon/>
                          <> Application</>
                        </div>} 
                      href='/#' 
                      buttonStyle='btn--primary' 
                      buttonSize='btn--md'/>

                </CardActions>
              </Card>
            </div>
        </div>

    )
}

export default Payterm