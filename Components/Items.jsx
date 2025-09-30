import React, { useState } from 'react'
import "./Items.css"
import Cart from './Cart'

const Items = ({image,txt1,txt2,price}) => {
  
  return (
    <div className='items'>
      <div 
      style={{
        background:`url(${image})`,
        backgroundPosition:"center center",
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
      }}
      className='items-img'>
        <Cart/>

      </div>
      <h1>{txt1}</h1>
      <p>{txt2}</p>
      <h2>{price}</h2>
    </div>
  )
}

export default Items