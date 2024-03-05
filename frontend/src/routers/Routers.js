import React from 'react'
import { Routes, Route } from "react-router-dom";
import Admin from '../pages/Admin';
import Privateroute from './Privateroute/Privateroute';
import Dashboard from '../pages/Dashboard';

const Routers = () => {
  return (
    <Routes>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path='/user' element={<Privateroute/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
        </Route>
    </Routes>
  )
}

export default Routers