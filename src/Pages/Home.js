import React from 'react';
import { Box}  from '@material-ui/core';

import Button from '../components/Button'
import './Home.css';

import ForumIcon from '@material-ui/icons/Forum';
import CasinoIcon from '@material-ui/icons/Casino';
import BuildIcon from '@material-ui/icons/Build';
import PeopleIcon from '@material-ui/icons/People';


import Footer from '../components/Footer/Footer';

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
                  <Button href='/#' buttonStyle='btn--primary' buttonSize='btn--lg' name='Call us 03 9543 2288'/>
                </div>



                <div className='main'>
                    <div  className="mainpart">
                        <ForumIcon style={{width:"60px",height:"60px",marginLeft:"40%"}}/>
                        <h1>Our Mission</h1>
                        <p>In our mission to provide 100% customer satisfaction, we have a goal to minimize the mistakes and increase the speed of our processing by the advantage of our online order system speaking everyone's language throughout the whole supply chain and to customers.</p>
                    </div>

                    <div className="mainpart" >
                        <CasinoIcon style={{width:"60px",height:"60px",marginLeft:"40%"}}/>
                        <h1>Customer-customized products and branding</h1>

                        <p>Customers can ask us to get a product made to their specifications, with the size and brand they want, and we will source manufacturers to make it for them.</p>
                    </div>
                                      

                    <div className="mainpart">
                        <BuildIcon style={{width:"60px",height:"60px",marginLeft:"40%"}}/>
                        <h1>Our unique online order</h1>

                        <p>Welcome to our unique online order system which speaks everyone's language; in which each customer can call each product whatever they want.</p>
                    </div>

                    <div className="mainpart">
                        <PeopleIcon style={{width:"60px",height:"60px",marginLeft:"40%"}} />
                        <h1>After Sales</h1>
                        <p>We never stop looking after our customers, we’re always on hand to replace or fix any problem quickly and efficiently.</p>
                    </div>
                </div>

                <div className='header2'>
                    <div className='head-text2'>
                        <h1>Contact Us</h1>
                        <p>MAKE AN ENQUIRY TO FIND OUT MORE OR CALL US TODAY ON 03 9543 2288</p>
                    </div>
                    <Button href='/#' href="/contact-us" buttonStyle='btn--primary' buttonSize='btn--md' name='Make an Enquiry'/>
                </div>


                  <Box sx={{width:"100%"}}>
                    <Footer />
                  </Box>
        </div>
    )
}

export default Home
