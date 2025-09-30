import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../Pages/Home.jsx"
import Contact from "../Pages/Contact.jsx"
import About from "../Pages/About.jsx"
// import Alfred from "../Pages/Alfred.jsx"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='/alfred' element={<Alfred/>}/> */}
      </Routes>
    </Router>
  )
}

export default App