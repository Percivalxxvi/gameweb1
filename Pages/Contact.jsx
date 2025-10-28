import React, { useState } from 'react'
import "./Contact.css"
import Navpc from '../Components/Navpc'
import Footer from '../Components/Footer'
import Info from '../Components/Info'
import Social from '../Components/Social'
// import Dropdown from 'react-bootstrap/Dropdown'

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
import Navmob from '../Components/Navmob'
import Totop from '../Components/Totop'

const Contact = () => {
  const [selec,setSelec]=useState(true)
  const [choice,setChoice]=useState("Others")
  const [change,setChange]=useState(false)
  const [change1,setChange1]=useState(false)
  const [change2,setChange2]=useState(false)

  const handleSelect=()=>{
    setSelec(true)
    setChoice("Business Department")
  }
  const handleSelect1=()=>{
    setSelec(true)
    setChoice("Personal Department")
  }
  const handleSelect2=()=>{
    setSelec(true)
    setChoice("Support Department")
  }
  const handleSelect3=()=>{
    setSelec(true)
    setChoice("Others")
  }
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
          
          <Navpc page="contact"/>
          <Navmob page1={"Contact"}/>
          <div className='contact'>
            <h1>Get in Touch with us!</h1>
            <div className='contact-items'>
              <div onMouseEnter={()=>setChange(true)}
                    onMouseLeave={()=>setChange(false)}
               className='contact-item'>
                <div style={{backgroundColor: change ? "blue" : "rgba(68, 106, 255, 0.2)"}} className='contact-img'>
                  <img src="../src/assets/envelope.png" alt="" />
                </div>
                  <h1>Support Email</h1>
                  <p>support@example.com</p>
              </div>
              <div onMouseEnter={()=>setChange1(true)}
                    onMouseLeave={()=>setChange1(false)}
              className='contact-item'>
                <div style={{backgroundColor: change1 ? "blue" : "rgba(68, 106, 255, 0.2)"}} className='contact-img'>
                  <img src="../src/assets/call.png" alt="" />
                </div>
                 <h1>Phone Number</h1>
                <p>+1 234 567 890</p>
              </div>
              <div onMouseEnter={()=>setChange2(true)}
                    onMouseLeave={()=>setChange2(false)}
              className='contact-item'>
                <div style={{backgroundColor: change2 ? "blue" : "rgba(68, 106, 255, 0.2)"}} className='contact-img'>
                  <img src="../src/assets/pin.png" alt="" />
                </div>
                 <h1>Office Address</h1>
                <p>123 Street, City, Country</p>
              </div>
            </div>
          </div>
          <div className='form'>
            <div className='inputs1'>
              <input className='contact-input1' type="text" required placeholder='Your Name' />
              <input className='contact-input1' type="text" required placeholder='Your Email' />
            </div>
            <input className='contact-input2' type="text" placeholder='Subject' />
            <div className='drop'>
              <div onClick={()=>setSelec(!selec)} className='drop1'>
                <h1>{choice}</h1>
              </div>
              {
                selec ===true ? null :
                 <div className='drop2'>
                <h1 style={{backgroundColor: choice === "Business Department" ? "blue" : "transparent"}} onClick={handleSelect}>Business Department</h1>
                <h1 style={{backgroundColor: choice === "Personal Department" ? "blue" : "transparent"}} onClick={handleSelect1}>Personal Department</h1>
                <h1 style={{backgroundColor: choice === "Support Department" ? "blue" : "transparent"}} onClick={handleSelect2}>Support Department</h1>
                <h1 style={{backgroundColor: choice === "Others" ? "blue" : "transparent"}} onClick={handleSelect3}>Others</h1>
              </div>
                
              }
             
            </div>
            <textarea className='contact-input3' type="text" placeholder='Your Message' />
            <button>Send Message</button>
          </div>
          <div className='connect'>
            <h1>Connect with us!</h1>
            <div className='connects'>
              <Social image={facebook} txt="facebook"/>
              <Social image={dribble} txt="Dribble"/>
              <Social image={vk} txt="VK"/>
              <Social image={behance} txt="Behance"/>
              <Social image={instagram} txt="Instagram"/>
              <Social image={twitter} txt="X"/> 
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
            <Totop/>
            <Footer/>
          </div>
      </div>
      
    </div>
  )
}

export default Contact