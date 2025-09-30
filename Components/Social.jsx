import React, { useState } from 'react'
import "./Social.css"

import facebook from "../src/assets/facebook.png"
import twitter from "../src/assets/twitter.png"
import twitch from "../src/assets/twitch.png"
import vk from "../src/assets/vk.png"

const Social = ({image, txt}) => {
    const [reveal,setReveal]=useState(false)
  return (
    <div className='social-m'>
        <div style={reveal ? {display:"flex"}:{display:"none"}} className='socialm-txt'>
            <h1>{txt}</h1>
        </div>
        <div onMouseEnter={()=>setReveal(true)}
            onMouseLeave={()=>setReveal(false)} className='social-m-item0'>
            <div className='social-m-item'>
                <img src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Social