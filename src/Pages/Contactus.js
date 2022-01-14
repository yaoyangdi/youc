import React, {useRef, useState } from 'react'
import Box from '@mui/material/Box';
import emailjs from '@emailjs/browser';
import apiData from '../assets/data/apiData';
import GoogleMap from '../components/googleMap/Map';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import './Contactus.css';


export default function Contactus() {
  
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      // emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.USER_ID)
      emailjs.sendForm(apiData.EMAILJS_SERVICE_ID, apiData.EMAILJS_TEMPLATE_ID, form.current, apiData.EMAILJS_USER_ID)
        .then((result) => {
            console.log(result.text);
            alert('The message has been sent!');
        }, (error) => {
            console.log(error.text);
            alert(JSON.stringify(error));
        });
    };


    return (

            <div className="main">
                <GoogleMap/>

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
                        <form onSubmit={sendEmail} ref={form} >
                          <div class="field">
                            <label for="user_name">Full Name: </label>
                            <input type="text" name="user_name" id="user_name" required ></input>
                          </div>

                          <div class="field" >
                            <label for="user_phone">Phone: </label>
                            <input type="text" name="user_phone" id="user_phone" required ></input>
                          </div>

                          <div class="field">
                            <label for="user_email">Email: </label>
                            <input   type="text" name="user_email" id="user_email" required ></input>
                          </div>

                          <div class="field">
                            <label for="user_message">Message: </label>
                            <textarea id="user_message" name="user_message" rows="5" cols="50" placeholder="Message" ></textarea>
                          </div>
                          <input className="btn btn--primary btn--lg" type="submit" id="button" value="Submit" ></input>

  
                        </form>
                        <br></br>
                        
                      </Box>
                </div>
            </div>

    )
}
