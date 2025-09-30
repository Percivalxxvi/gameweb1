import React from 'react'
import "./About.css"
import Navpc from '../Components/Navpc'
import Footer from '../Components/Footer'
import Info from '../Components/Info'

import headphones from "../src/assets/headphones.png"
import blueheadphones from "../src/assets/blueheadphones.png"
import letter from "../src/assets/letter.png"
import blueletter from "../src/assets/blueletter.png"
import skype from "../src/assets/skype.png"
import blueskype from "../src/assets/blueskype.png"

import facebook from "../src/assets/facebook.png"
import twitter from "../src/assets/twitter.png"
import twitch from "../src/assets/twitch.png"
import vk from "../src/assets/vk.png"
import dribble from "../src/assets/dribble.png"
import behance from "../src/assets/behance.png"
import instagram from "../src/assets/instagram.png"
import Abouttick from '../Components/Abouttick'
import Reviews from '../Components/Reviews'
import Navmob from '../Components/Navmob'

const About = () => {
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
          

          <Navpc page="about"/>
          <Navmob page1={"About"}/>

          <div className='about-os'>
            <div className='about1'>
              <img src="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/elementor/thumbs/p16-pfgmv61iqdcr8ftiayzebkvimhhqld4h9na7e0spc0.jpg" alt="" />
            </div>
            <div className='about2'>
              <div className='about-txt'>
                  <h1>About Us</h1>
                  <p>Who we are and what we do here?</p>
                  <p>Synergistically strategize technically sound networks via functional meta-services. Distinctively extend low-risk high-yield e-services through 24/7 methodologies. Synergistically coordinate cutting-edge e-markets without impactful platforms. Proactively simplify viral potentialities before corporate results.</p>
              </div>
              <div>
                  <div className='about-tick'>
                <div className='tick1'>
                     <Abouttick txt="Latest Games News" txt2="All new updates daily"/>
                </div>
                <div className='tick1'>
                     <Abouttick txt="New Entertainments" txt2="Products available in Shop"/>
                </div>
              </div>
              <div className='about-tick'>
                  <div className='tick1'>
                     <Abouttick txt="Gamers Forums" txt2="Online discussions about games"/>
                </div>
                <div className='tick1'>
                     <Abouttick txt="Online Games" txt2="Play online games around the world"/>
                </div>
              </div>
              </div>
        
            </div>
          </div>

          <div className='customers'>
              <div className='cust1'><h1>What Says Our Happy Customers</h1></div>
              <div className='cust2'>
                  <Reviews/>
                  <Reviews/>
                  <Reviews/>
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
          <div>
               {/* <Footer/> */}
          </div>
         
      </div>
    </div>
  )
}

export default About