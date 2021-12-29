import React from 'react';
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
import Communicate from '../assets/communicate.png';
import Customize from '../assets/customize.png';
import Banshou from '../assets/banshou.png';
import People from '../assets/people.png';

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
        main: '#f4caab',
        contrastText: '#fff',
      },
    },
    typography: {
      fontSize: '25',

      }
  });
function Home() {
    return (
        
        <div>

                <div className='header1'>
                  <div className='head-text1'>
                      <p>Youc Packaging
                          <br></br>
                        SPECIALIZED TAKE AWAY FOOD
                          <br></br>
                          PACKAGING</p>
                  </div>
                  <ThemeProvider theme={theme}>
                    <Button variant="contained" color="secondary" className='btn--1' >Call us 03 9543 2288</Button>
                  </ThemeProvider>
                </div>



                <div className='main' style={{width:"100%",backgroundColor:"white",paddingLeft:"2%",paddingRight:"2%"}}>
                    <div  className="mainpart" style={{width:"400px"}}>
                        <img style={{width:"120px",height:"100px",marginLeft:"35%"}} src={Communicate}/>
                        <h1>Our Mission</h1>
                        
                        <p>In our mission to provide 100% customer satisfaction, we have a goal to minimize the mistakes and increase the speed of our processing by the advantage of our online order system speaking everyone's language throughout the whole supply chain and to customers.</p>
                    </div>

                    <div className="mainpart" style={{width:"400px"}}>
                        <img style={{width:"120px",height:"100px",marginLeft:"35%"}} src={Customize}/>

                        <h2>Customer-customized products and branding</h2>

                        <p>Customers can ask us to get a product made to their specifications, with the size and brand they want, and we will source manufacturers to make it for them.</p>
                    </div>
                                      

                    <div className="mainpart" style={{width:"400px"}}>
                      <img style={{width:"120px",height:"100px",marginLeft:"35%"}} src={Banshou}/>

                        <h1>Our unique online order</h1>

                        <p>Welcome to our unique online order system which speaks everyone's language; in which each customer can call each product whatever they want.</p>
                    </div>

                    <div className="mainpart" style={{width:"400px"}}>
                      <img style={{width:"120px",height:"100px",marginLeft:"35%"}} src={People}/>

                        <h1>After Sales</h1>

                        <p>We never stop looking after our customers, we’re always on hand to replace or fix any problem quickly and efficiently.</p>
                    </div>
                </div>

                <div className='header2'>
                    <div className='head-text2'>
                        <h1>Contact Us</h1>
                        <p>MAKE AN ENQUIRY TO FIND OUT MORE OR CALL US TODAY ON 03 9543 2288</p>
                        <ThemeProvider theme={theme}>
                          <Button href="/contact-us" variant="contained" color="secondary" className="btn--2">Make an Enquiry</Button>
                        </ThemeProvider>
                    </div>
                </div>


                  <Box sx={{width:"100%"}}>
                    <Footer />
                  </Box>
        </div>
    )
}

export default Home
