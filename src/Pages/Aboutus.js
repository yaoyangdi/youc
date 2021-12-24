import React from 'react'
import Box from '@mui/material/Box';
import './Aboutus.css'

import FlashOnSharpIcon from '@material-ui/icons/FlashOnSharp';
import BrightnessHighOutlinedIcon from '@material-ui/icons/BrightnessHighOutlined';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Footer from '../components/Footer/Footer';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
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
function Aboutus() {
    return (
        <div className='main'>
            <div className='topdiv'>
                
                <div  className="topparts" style={{ml:"5px",float:"left",width:"400px",backgroundColor:"#ECEAE2"}}>
                    <h1>Free Delivery</h1>
                    <FlashOnSharpIcon style={{width:"100px",height:"100px",marginLeft:"35%"}}/>
                    <p>Orders over $150 (inc GST) delivered free to metro areas**</p>
                </div>
                <div className="topparts" style={{float:"left",backgroundColor:"#ECEAE2",width:"400px"}}>
                    <h1>Customer' Satisfaction</h1>
                    <BrightnessHighOutlinedIcon style={{width:"100px",height:"100px",marginLeft:"35%"}}/>

                    <p>Our clients are our biggest asset. And customer loyalty is our ultimate goal. That's why customer service isn't just a department of YOUC, it is the cornerstone of our entire company.</p>
                </div>
                <div className="topparts" style={{float:"left",backgroundColor:"#ECEAE2",width:"400px"}}>
                    <h1>Technology</h1>
                    <LibraryBooksIcon style={{width:"100px",height:"100px",marginLeft:"35%"}}/>

                    <p>Our software informs us of how we can build and improve our software to better meet the needs of our customers with each new update, and also tells us which things are already working well.</p>
                </div>
                <div className="topparts" style={{float:"left",backgroundColor:"#ECEAE2",width:"400px"}}>
                    <h1>Customer Product</h1>
                    <HowToRegIcon style={{width:"100px",height:"100px",marginLeft:"35%"}}/>

                    <p>Our Custom Made Products are made to meet the requirements of each Individual Customer</p>
                </div>

                <div className='picturepart'>
                <div className='head-text'>
                        <h3>Over a thousand products  </h3>
                        <h3>available in our online store to </h3>
                        <h5>suit your need</h5>

                    
                </div>
                </div>
                <ThemeProvider theme={theme}>
                <div className='servicearea'>
                    <h2><FiberManualRecordIcon style={{width:'50px',height:'25px',color:"#f4caab"}}/>Our Service Area</h2>
                    <p>- Inner City municipalities: City of Melbourne, Port Phillip, Yarra.</p>
                    <p>- Northern municipalities: City of Banyule, Darebin, Hume, Moonee Valley, Moreland, Shine of Nillumbik, Whittlesea.</p>
                    <p>- Eastern municipalities: Boroondara, Knox, Manningham, Maroondah, Whitehorse, Shire of Yarra Ranges.</p>
                    <p> - Southeastern municipalities: City of Bayside, Shire of Cardinia, Casey, Greater Dandenong, Franston, Glen Eira, Kingston, Monash, Shire of Mornington Peninsula, Stonning.</p>
                    <p>- Western municipalities: City of Brimbank, Hobsons Bay, Maribyrnong, Melton, Wyndlam.</p>


                    <h2>
                        <FiberManualRecordIcon style={{width:'50px',height:'25px',color:"#f4caab"}}/>Return Policy
                    </h2>

                    <p>
                    We want all our customers to be happy with their products from Youc. We offer a 31 Day Satisfaction Guarantee for all products purchased through us. If for any reason you are unable to use the product you have purchased, simply return it to us within 31 Days for a refund of the purchase price, less any delivery fees. We are unable to accept returns of any products after 31 days or if you have over ordered or simply no longer want them.
                    </p> 
                    <p>
                    Unfortunately we are unable to return any Buy to Demand or custom products, so please ensure you are entirely happy with the proofs and quotes before you sign and send them back to us.

                    </p>

                    <h1>Our Product Range</h1>
                    <h3>Plastic Series</h3>
                    <p>
                    - Bags: bin Liners 36lt/73lt, carry bags/singlet bags, carton liners, filter bags, freezer bags, garbage bags 72lt/82lt/120lt/240lt, heat seal bags, high clarity PP bags, produce roll bags, seal bags, vacuum bags.

                    </p>

                    <p>
                    - Containers: benton boxes, benton box lids, cake wedges, sandwich wedges, plastic bowls & plastic bowl lids, plastic compartment containers & plastic compartment lids, dessert bowls, dome lids, flat lids, fresh view containers, microwaveable containers & lids, oval containers, oval plates, plastic cups, rectangular containers, rectangular container lids, ribbed rectangular containers, ribbed rectangular containers lids, round containers, round container lids, round container dome lids, round plates, salad containers,
                    sauce containers & sauce container lids, sauce containers with lids, sauce plates, scoop cups, show bowls, sushi containers & sushi container lids, sushi container set, straws.
                    </p>
                    <p>
                        
                    - Cutleries: spoons, Chinese spoons, dessert spoons, teaspoons, long teaspoons, teaspoons, forks, knifes, sporks,  straws, set of knife/fork/napkin.
                    </p>
                    <p>
                    - Wraps - cling wraps, pallet hand wraps, pallet machine wraps, stretch films, strung slap sheets.
                    </p>

                    <h3>Paper Series</h3>
                    <p>
                    - Bags: white paper bags, brown paper bags, GPL layer bags, satchel bags, single layer bags, SOS bags, ½ long, ½ square, 1 long, 1 square, 2 long, 2 square, 3 long, 3 square, 4 long, 4 square, 6 long, 6 square, 8 long, 10 long, 12 long, brown kraft bags, double bread stick bags, fresh bread bags, hamburgers, mushroom paper bags, hot dog paper bags, small milly bags, single breadstick bags, souvlaki paper bags, take away bags, wine bottle paper bags.
                    </p>
                    <p>
                    - Boxes: burger boxes, cake boards, cake boxes, cake trays, chip boxes, chip cups, drink trays, hen boxes, hot dog boxes, noodle boxes, pizza boxes, seafood boxes, snack boxes. 
                    </p>
                    <p>
                    - Coffee cups: single wall coffee cups, double wall coffee cups, coffee cup smooth lids, coffee cup spout lids, cup sleeves.
                    </p>

                    <p>
                    - Napkins: dispenser napkins, lunch napkins, luncheon napkins, dinner napkins, cocktail napkins, serviette napkins, Xpressnap.
                    </p>

                    <p>
                    - Order Books: 2 part plain, 2 Part Fish and Chip, 3 part plain, 3 part Fish and chip and hamburger, note flat, restaurant table order books, take away order books, tax invoice order books.
                    </p>

                    <p>
                    - Paperwares: baking cups, paper bowls, paper bowl lids, paper bowl plastic lids, milkshake cups, milkshake plastic lids, paper straws, twist handle bags, kraft catering trays, kraft catering tray lids. 
                    </p>

                    <p>
                    - Tissues: facial tissues, hand towels, toilet papers, toilet tissues, wet towels.
                    </p>

                    <p>
                    - Wraps: baking papers, bond papers, deli wraps, muffin wraps, greaseproof papers, unbleached greaseproof papers, scan papers, table tops, white bonds, whitenews, silicon papers.
                    </p>

                    <h3>Others</h3>
                    <p>
                    - Bamboo: bamboo bowls, bamboo chopsticks, bamboo lids, bamboo plates,  bamboo skewers, bamboo trays.
                    </p>
                    <p>
                    - Chemicals: bleach, caustic soda, degreaser, disinfectant, dishwashing detergent, dishwashing liquid, dishwashing powder, drain cleaner, drum tap, espresso machine cleaner, floor cleaner, glass washing, grill cleaner, hand & body soap and foam hand soap, industrial methylated, jiffy, laundry powder, neutraclean, oven cleaners, pee off, sanitiser, solvent cleaner, stainless steel cleaner, rinse aid, toilet bowl cleaner.
                    </p>
                    <p>
                    - Cleaning tools: dust pans, metal scourers, mop buckets & mop heads.
                    </p>
                    <p>
                    - Dispensers: dispenser napkin dispenser, double / twin jumbo roll dispenser, foam soap dispenser, hand towel compact dispensers, hand towel interleaved dispensers, hand towel slimline dispensers, single jumbo roll dispensers, soap dispensers, stud jumbo roll dispenser, roll towel dispensers.
                    </p>
                    <p>
                    - Foams: foam clams, foam containers, foam cups, foam cup plastic lids, foam plates, foam trays, foam soup cups.
                    </p>
                    <p>
                    - Foils: aluminium foils, foil bags, foil containers, foil lids, foil trays.
                    </p> 
                    <p>
                    - Gloves: dishwashing gloves, latex gloves, nitrile gloves, polythene unisize gloves, vinyl gloves, rubber gloves.   
                    </p> 
                    <p>
                    - Hygienics: aprons, chef’s masks, crimped berets, hairnets, shoe sleeve/covers.
                    </p> 
                    <p>
                    - Kitchenwares: bottle openers, machine oil filters, paper lace doilies, oil filters, wipes, sponges, scourers, rice cookers.
                    </p> 
                    <p>
                    - Kitchenwares: bottle openers, machine oil filters, paper lace doilies, oil filters, wipes, sponges, scourers, rice cookers.
                    </p> 
                    <p>
                    - Stationaries: packing tapes, ink cartridges, rubber bands, stationery tapes, thermal papers. 

                    </p> 
                    <p>
                    - Sugarcanes: sugarcane containers, sugarcane trays, sugarcane tray lids.    
                    </p>    
                    <p>
                    - Woods: wooden forks, wooden knifes.
                    </p>               


                </div>



               </ThemeProvider>


            </div>
            <Footer/>


        </div>
    )
}

export default Aboutus
