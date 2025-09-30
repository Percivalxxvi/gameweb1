import React from 'react'
import "./Nnews.css"
import clock from "../src/assets/clock.png"
import openfile from "../src/assets/openfile.png"

const Nnews = ({image,txt,date,plat}) => {
  return (
    <div className='nnews'>
        <div className='nnews-txt'>
            <h1>{txt}</h1>
            <div className='nnews-info'>
            <div className='clk-div0'>
                <div className='clk-div'>
                    <img src={clock} alt="" />
                </div>
                <p>{date}</p>
            </div>
            <div className='fldr-div0'>
                <div className='fldr-div'>
                    <img src={openfile} alt="" />
                </div>
                <p>{plat}</p>
            </div>
        </div>
        </div>
         
        <img className='bg' src={image}alt="" />
        
    </div>
  )
}

export default Nnews