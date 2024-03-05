import React from 'react'
import { Navigate } from 'react-router'

const Privateroute = ({status}) => {
    console.log(status)
    // return <Navigate to={status? "/user/dashboard": '/admin'}/>
    return <Navigate to={status? "/user/dashboard": '/admin'}/>

}

export default Privateroute