 import React from 'react'
 import {Routes,Route} from 'react-router-dom'
 import Home from '../pages/Home'
 import Landing from '../pages/Landing'

 function Routings() {
     return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
        </Routes>
     )
 }

 export default Routings