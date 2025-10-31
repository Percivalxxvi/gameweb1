import { useState } from "react"
import React from 'react'
import "./Cart.css"
import cart from "../src/assets/cart.png"

const Cart = () => {
    const [show,setShow]=useState(false)
    
          const handleMouseEnter = () => {
          setShow(true);
        }
    
        const handleMouseLeave = () => {
          setShow(false);
        }
  return (
    <div 
    // onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
    onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: show ? 'rgba(34, 2, 2, 0.3)' : 'transparent',
        cursor: 'pointer',
        // backgroundImage: show ? 'url("../src/assets/cart.png")' : 'none',
        backgroundPosition:"center center",
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s ease',
        // height:"10px",
        // width:"10px",
        
       
      }}

     className='cart'>
       <img 
       style={{
        display: show ? 'flex' : 'none',
        height:"50px",
        width:"50px",
       }}
       src={cart} alt="" />
    </div>
  )
}

export default Cart