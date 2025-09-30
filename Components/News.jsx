import React from 'react'
import "./News.css"

const News = ({image,txt}) => {
  return (
    <div className='news'>
        
        <div style={{
            background:`url(${image}")`,
            backgroundPosition:"center center",
            backgroundSize:"cover",
        }} 
        
        className='news1'>
            <div className='news-txt'>
                <h1>{txt}</h1>
            </div>
            
        </div>
    </div>
  )
}

export default News