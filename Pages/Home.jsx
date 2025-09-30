import React from 'react'
import "../src/App.css"
import Navpc from "../Components/Navpc"
import News from '../Components/News'
import Nnews from '../Components/Nnews'
import Items from '../Components/Items'
import Info from '../Components/Info'
import Footer from '../Components/Footer'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Squash as Hamburger } from 'hamburger-react'


import clock from "../src/assets/clock.png"
import openfile from "../src/assets/openfile.png"
import playbutton2 from "../src/assets/playbutton2.png"
import headphones from "../src/assets/headphones.png"
import blueheadphones from "../src/assets/blueheadphones.png"
import letter from "../src/assets/letter.png"
import blueletter from "../src/assets/blueletter.png"
import skype from "../src/assets/skype.png"
import blueskype from "../src/assets/blueskype.png"
import { useState } from "react"
import Navmob from '../Components/Navmob'


const Home = () => {
  const [isOpen, setOpen] = useState(false)
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <div className='mainback'>
      <div className='main'>

          <div className='head1'>
              <div className='logo'>
                  <img src="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/2018/09/xtra-logo-game.png" alt="" />
              </div>
              <div className='logo2'>
                  <img src="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/2018/04/ads3-1.jpg" alt="" />
              </div>
          </div>

            
            <Navpc page="home"/>
            <Navmob page1={"Home"}/>
            
          

          <div className='news0'>
            
             {/* <button>move</button> */}
            <Nnews image="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/elementor/thumbs/p6-pfgmvuhbo2a7mau0c9jp4epi2i5a5hti108tv7sgu8.jpg" 
            txt="New Monster Hunter World Quest Adds Helmet " 
            date="20 Sept 2025"
            plat="Xbox"/>

            <Nnews image="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/elementor/thumbs/p8-pfgmvm0ryjympt6apnw1zyucq1az87vwzudgjq50e8.jpg" 
            txt="See Valve's New Card Game Artifact In Action" 
            date="20 Sept 2025"
            plat="Wii"/>

            <Nnews image="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/elementor/thumbs/p16-pfgmv61iqdcr8ftiayzebkvimhhqld4h9na7e0spc0.jpg" 
            txt="Game Release Dates Far Cry 6 and Red Dead 2" 
            date="20 Sept 2025"
            plat="PS5"/>

            <Nnews image="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/elementor/thumbs/p2-pfgmuvpan6yloq8izcii25hg38wp8ozfk83v3z818g.jpg" 
            txt="Get A Free PC Game Right NowHumble Store"
            date="20 Sept 2025"
            plat="PC"/>
<div>
               {/* <Nnews image="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/elementor/thumbs/p2-pfgmuvpan6yloq8izcii25hg38wp8ozfk83v3z818g.jpg" 
            txt="Get A Free PC Game Right NowHumble Store"
            date="20 Sept 2025"
            plat="PC"/> */}
            {/* <button>move</button> */}
          

          {/* <Carousel responsive={responsive}
          containerClass='carousel-container'>
            <div className='ccd1'><Nnews image="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/elementor/thumbs/p2-pfgmuvpan6yloq8izcii25hg38wp8ozfk83v3z818g.jpg" 
            txt="Get A Free PC Game Right NowHumble Store"
            date="20 Sept 2025"
            plat="PC"/></div>
             <Nnews image="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/elementor/thumbs/p2-pfgmuvpan6yloq8izcii25hg38wp8ozfk83v3z818g.jpg" 
            txt="Get A Free PC Game Right NowHumble Store"
            date="20 Sept 2025"
            plat="PC"/>
            <div className='ccd1'>Item 3</div>
            <div className='ccd1'>Item 4</div>
            <div className='ccd1'>Item 5</div>
            <div className='ccd1'>Item 6</div>
            <div className='ccd1'>Item 7</div>
          </Carousel>; */}
          </div>
</div>
            

          <div className='section-a'>
              <div className='secdiv1'>
                <div className='secdiv1a'>
                  <h1>TRENDING</h1>
                  <div className='secdiv1a-line'></div>
                  <div className='secdiv1a-title'>
                    <h3>uydotdlyufluydlutdlyufluydluydludfl;ifg</h3>
                    <div className='secdiv1a-arrow'>
                    <button>{"<"}</button> 
                    <button>{">"}</button>
                  </div>
                  </div>
                  
                </div>
                <div className='secdiv1b'>
                  <div className='secdiv1bb'>
                    <img src="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/2018/04/vg2.jpg" alt="" />
                    <div className='play'>
                      <div className='play1'>
                        <img src={playbutton2} alt="" />
                      </div>
                      <div className='play2'>
                        <h2>NEWTRAILER</h2>
                        <p>Watch It Now </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='secdiv2'>
                <h1>MONTHLY GET NEWS AND UPDATES OF XTRA <span className='secdiv2txt0'>GAME</span></h1>
                <p>The XtraGame site newsletter is the <span className='secdiv2txt'>Free</span> and <span className='secdiv2txt'>Bursting</span> at the seams with the latest games, the cheapest deals and the hottest competitions to your inbox  <span className='secdiv2txt'>Every Week</span>. We won't pass your details on and if you don't want to continue to receive it you can unsubscribe at any time.</p>
                <div className='secdiv2a'>
                  <input type="text" placeholder='Your email...' />
                  <button>Join Now</button>
                </div>
              </div>
              
          </div>
          <div className='discount'>
              <div className='disc-txt'>
                  <h1>50% <span>OFF On All PlayStation Addons</span></h1>
                  <p>Limited time sale, Virtual reality platform new design + Free games</p>
                  <button> {">"} More Details</button>
              </div>
              <div className='disc-img'>
                <img src="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/2018/04/vr.png" alt="" />
              </div>
          </div>
          <div className='items-container'>
            <Items image="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/2020/02/ps4pro.png"
            txt1="PlayStation 4 Pro Modern"
            txt2="PS$"
            price="$999"
            />
            <Items image="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/2018/04/pr5.png"
            txt1="PS4 DualShock"
            txt2="PS4"
            price="$100 $99"/>
            <Items image="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/2018/04/pr4.png"
            txt1="Gaming Headset XR"
            txt2="PC"
            price="$234"/>
            <Items image="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/2018/04/pr3.png"
            txt1="Xbox One"
            txt2="Xbox"
            price="$789"/>
            <Items image="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/2018/04/pr2.png"
            txt1="GAming Racing Wheel"
            txt2="PC"
            price="$300"/>
            </div>
          <div className='discount2'>
              <div className='disc2-txt'>
                  <h1>Playstation <span>5</span> Release Date & News</h1>
                  <p>Limited time sale, Virtual reality platform new design + Free games</p>
                  <button> {">"} More Details</button>
              </div>
              <div className='disc2-img'>
                <img src="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/2018/04/ps5_ps5.png" alt="" />
              </div>
          </div>
        <div className='end'>
          <div className='end01'>
            <div className='end1'> 
              <div className='end1-img'>
                <img src="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/2018/09/xtra-logo-game.png" alt="" />
                </div>
                  <h1>Distinctively enable technically sound data rather than bleeding-edge resources assertively my ocardinate.</h1>
                  <div className='info-container'>
                    <Info image={headphones} txt={"001 (818) 344 55 66"}/>
                    <Info image={letter} txt={"xtragame@site.com"}/>
                    <Info image={skype} txt={"@xtratheme"}/>
                  </div>
              </div>
                <div className='end2'>
                  <h2 className='end0a'>Shortcuts</h2>
                  <div className='endline'>
                    <div className='endline1'></div>
                    <div className='endline2'></div>
                  </div>
                  <p className='opts'>{">"} Potato Mode</p>
                  <p className='opts'>{">"} New Releases</p>
                  <p className='opts'>{">"} GameSpot Live</p>
                  <p className='opts'>{">"} XG Updates</p>
                  <p className='opts'>{">"} Latest Reviews</p>
                  <p className='opts'>{">"} Xbox vs PS4</p>
                  <p className='opts'>{">"} Chat Support</p>
                </div>
                <div className='end3'>
                  <h2 className='end0a'>Quick Access</h2>
                  <div className='endline'>
                    <div className='endline1'></div>
                    <div className='endline2'></div>
                  </div>
                  <p className='opts'>{">"} My Account</p>
                  <p className='opts'>{">"} Privacy Policy</p>
                  <p className='opts'>{">"} Support Policy</p>
                  <p className='opts'>{">"} Track your Order</p>
                  <p className='opts'>{">"} Comparisons</p>
                  <p className='opts'>{">"} Our Partnerships</p>
                </div>
            </div>
           
          </div>
          <div className='foota'>
               <Footer/>
          </div>
          
      </div>
    </div>
  )
}

export default Home