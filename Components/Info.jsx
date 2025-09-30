import React, { useState } from 'react'
import "./Info.css"

import headphones from "../src/assets/headphones.png"
import blueheadphones from "../src/assets/blueheadphones.png"
import letter from "../src/assets/letter.png"
import blueletter from "../src/assets/blueletter.png"
import skype from "../src/assets/skype.png"
import blueskype from "../src/assets/blueskype.png"

const Info = ({image,txt}) => {
  const[change,setChange]=useState(false)
        const handleMouseEnter = () => {
          setChange(true);
        }
    
        const handleMouseLeave = () => {
          setChange(false);
        }
  return (
    <div className='info'>
        <div className='info-img'>
            <img src={image} alt="" />
        </div>
            <p>{txt}</p>
    </div>
  )
}

export default Info