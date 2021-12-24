import React from 'react';
import foodImage from '../assets/food.jpg';
import { Box}  from '@material-ui/core';
import classes from './Home.css'
import Button from '@mui/material/Button';

import ForumIcon from '@material-ui/icons/Forum';
import CasinoIcon from '@material-ui/icons/Casino';
import BuildIcon from '@material-ui/icons/Build';
import PeopleIcon from '@material-ui/icons/People';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Footer from '../components/Footer/Footer';

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
function Home() {
    return (
        
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <div className='header'>
                <div className='head-text'>
                    <p>Youc Packaging
                        <br></br>
                       SPECIALIZED TAKE AWAY
                        <br></br>
                        FOOD PACKAGING</p>
                </div>
                <Button variant="contained">Call us 03 9543 2288</Button>
                
                
            </div>



            <div className='main'>
                <div  className="mainpart" style={{ml:"5px",float:"left",width:"400px",backgroundColor:"#ECEAE2"}}>
                    <h1>Our Mission</h1>
                    <ForumIcon style={{width:"100px",height:"100px",marginLeft:"35%"}}/>
                    <p>In our mission to provide 100% customer satisfaction, we have a goal to minimize the mistakes and increase the speed of our processing by the advantage of our online order system speaking everyone's language throughout the whole supply chain and to customers.</p>
                </div>
                <div className="mainpart" style={{float:"left",backgroundColor:"#ECEAE2",width:"400px"}}>
                    <h2>Customer-customized products and branding</h2>
                    <CasinoIcon style={{width:"100px",height:"100px",marginLeft:"35%"}}/>

                    <p>Customers can ask us to get a product made to their specifications, with the size and brand they want, and we will source manufacturers to make it for them.</p>
                </div>
                <div className="mainpart" style={{float:"left",backgroundColor:"#ECEAE2",width:"400px"}}>
                    <h1>Our unique online order</h1>
                    <BuildIcon style={{width:"100px",height:"100px",marginLeft:"35%"}}/>

                    <p>Welcome to our unique online order system which speaks everyone's language; in which each customer can call each product whatever they want.</p>
                </div>
                <div className="mainpart" style={{float:"left",backgroundColor:"#ECEAE2",width:"400px"}}>
                    <h1>After Sales</h1>
                    <PeopleIcon style={{width:"100px",height:"100px",marginLeft:"35%"}}/>

                    <p>We never stop looking after our customers, we’re always on hand to replace or fix any problem quickly and efficiently.</p>
                </div>
                <div className='header'>
                <div className='head-text'>
                    <h1>Contact Us</h1>
                    <h3>MAKE AN ENQUIRY TO FIND OUT MORE OR CALL US TODAY ON 03 9543 2288</h3>
                    <ThemeProvider theme={theme}>
                    <Button href="/contact-us" variant="contained" color="secondary">Make an Enquiry</Button>
                    </ThemeProvider>
                </div>
                
                
                </div>
                <Footer/>

            </div>


        </div>
    )
}

export default Home
