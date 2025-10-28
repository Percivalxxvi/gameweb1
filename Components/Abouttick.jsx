import React, { useState } from 'react'
import "./Abouttick.css"
import { Check } from "lucide-react";

const Abouttick = ({txt,txt2}) => {
    const[hover,setHover]=useState(false)
  return (
    <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className='abbtt'>
        <div style={{backgroundColor:hover ? 'blue': "",transition:"0.5s"}} className='abbtt-img'>      
            <Check
            color='white'
            size={35}
            strokeWidth={4}/>
        </div>
        <div>
            <h1 style={{color:hover ? 'blue': "",transition:"0.5s"}}>{txt}</h1>
            <p style={{color:hover ? 'blue': ""}}>{txt2}</p>
        </div>
    </div>
  )
}

export default Abouttick