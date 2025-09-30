import React, { useState } from 'react'
import "./Navpc.css"
import { Link } from 'react-router-dom'
import facebook from "../src/assets/facebook.png"
import twitter from "../src/assets/twitter.png"
import twitch from "../src/assets/twitch.png"
import vk from "../src/assets/vk.png"

const Navpc = ({page}) => {
  const[select,setSelect]=useState(false)
  return (
    <div className='navpc'>
      <div className='navpc-pgs'>
        <div style={{backgroundColor: page==="home"?"#263366":""}} className='navpc-pgs0'>
          <Link to={"/"} style={{backgroundColor: page==="home"?"#263366":"" , width:"100%"}} className='navpc-pgs10'>Home</Link>
        </div>
        <div className='navpc-pgs0'><Link className='navpc-pgs1'>PS5</Link></div>
        <div className='navpc-pgs0'><Link className='navpc-pgs1'>Xbox</Link></div>
        <div className='navpc-pgs0'><Link className='navpc-pgs1'>Wii</Link></div>
        <div className='navpc-pgs0'><Link className='navpc-pgs1'>PC</Link></div>
        <div className='navpc-pgs0'><Link className='navpc-pgs1'>News</Link></div>
        <div className='navpc-pgs0'><Link className='navpc-pgs1'>Shop</Link></div>
          
        <div style={{backgroundColor: page==="about"?"#263366":"",padding:"0 5px 0 5px"}} className='navpc-pgs02'>
          <Link to={"/About"} className='navpc-pgs2'>About</Link>
        </div>
        <div className='navpc-pgs03' style={{backgroundColor: page==="contact"?"#263366":"",padding:"0 10px 0 10px"}}>
          <Link to={"/Contact"} className='navpc-pgs3'>Contact</Link>
        </div>
      </div>
      <div className='navpc-icons'>
        <div className='icon1'>
            <img src={facebook} alt="" />
        </div>
        <div className='icon1'>
             <img src={twitter} alt="" />
        </div>
        <div className='icon1'>
          <img src={vk} alt="" />
        </div>
        <div className='icon1'>
          <img src={twitch} alt="" />
        </div> 
          
      </div>
    </div>
  )
}

export default Navpc