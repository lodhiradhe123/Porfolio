import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../conponents/Landing'
import About from '../conponents/About'
import Projects from '../conponents/Projects'

function Routing() {
  return (
    <>
    <Routes>
        <Route path='/'element={<Landing/>}></Route>
        <Route path='/about'element={<About/>}></Route>
        <Route path='/projects'element={<Projects/>}></Route>
    </Routes>
    </>
  )
}

export default Routing