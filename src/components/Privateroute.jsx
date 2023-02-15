import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { isLoggedIn } from '../components/auth';



const Privateroute = () => {

    return  isLoggedIn() ? <Outlet /> : <Navigate to={"/login"}  />
    
}

export default Privateroute;