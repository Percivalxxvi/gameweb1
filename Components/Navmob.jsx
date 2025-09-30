import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navmob.css"

import { Squash as Hamburger } from 'hamburger-react'

const Navmob = ({page,page1}) => {
    const [isOpen, setOpen] = useState(false)
  return (
    <div className='navmob'>
        <div className='ham'>
           <Hamburger toggled={isOpen} toggle={setOpen} color="#f0f0f0" />
           <div className='mobpg'>
              <h1>{page1}</h1>
          </div>
        </div>
        

        <div style={{display:isOpen?"flex":"none"}} className='navmob-pgs'>
        <div style={{backgroundColor: page==="home"?"#263366":""}} className='navmob-pgs0'>
          <Link to={"/"} style={{backgroundColor: page==="home"?"#263366":"" , width:"100%"}} className='navmob-pgs10'>Home</Link>
        </div>
        <div className='navmob-pgs0'><Link className='navmob-pgs1'>PS5</Link></div>
        <div className='navmob-pgs0'><Link className='navmob-pgs1'>Xbox</Link></div>
        <div className='navmob-pgs0'><Link className='navmob-pgs1'>Wii</Link></div>
        <div className='navmob-pgs0'><Link className='navmob-pgs1'>PC</Link></div>
        <div className='navmob-pgs0'><Link className='navmob-pgs1'>News</Link></div>
        <div className='navmob-pgs0'><Link className='navmob-pgs1'>Shop</Link></div>
        <div style={{backgroundColor: page==="about"?"#263366":""}} className='navmob-pgs0'>
          <Link to={"/About"} className='navmob-pgs1'>About</Link>
        </div>
        <div className='navmob-pgs0' style={{backgroundColor: page==="contact"?"#263366":""}}>
          <Link to={"/Contact"} className='navmob-pgs1'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navmob