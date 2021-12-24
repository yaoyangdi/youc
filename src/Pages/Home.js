import React from 'react';
import foodImage from '../assets/food.jpg';
import { Box}  from '@material-ui/core';
import classes from './Home.css'
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
                <button>Call us 03 9543 2288</button>
                
                
            </div>
        </div>
    )
}

export default Home
