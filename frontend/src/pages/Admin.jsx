import React, { useState } from 'react'
import Privateroute from '../routers/Privateroute/Privateroute';

const Admin = () => {
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    // const [status,setStatus] = useState(false)
    let status;

  const handleSubmit =async (e)=>{
    e.preventDefault();
     await fetch("http://localhost:5000/api/admin", {
      method: "POST",
      body: JSON.stringify({
        email,
        pass
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) =>{
        // setStatus(json.status);
        status=json.status
      });
      // console.log(status)
  }


  return (
    <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md">
    <h2 className="text-2xl font-semibold mb-6 text-center">Admin Panel</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Email
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="email"
          id="name"
          placeholder="Your Email"
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="password"
          id="email"
          placeholder="Your Password"
          onChange={(e)=>setPass(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
    <Privateroute status={status}/>
  </div>
  )
}

export default Admin