import React from 'react';
import foodImage from '../assets/food.jpg';
import { Box}  from '@material-ui/core';
import classes from './Home.css'
function Home() {
    return (
        
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <header>
                <div className='food-image'>
                    <img src= {foodImage} />
                </div>
                <div className='head-text'>
                    <p>Youc Packaging
                        <br></br>
                       SPECIALIZED TAKE AWAY
                        <br></br>
                        FOOD PACKAGING</p>
                </div>
                
                
            </header>
        </div>
    )
}

export default Home
