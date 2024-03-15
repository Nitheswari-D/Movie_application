import React from 'react'
import { Link } from 'react-router-dom'
export default function Notfound() {
  return (
    <div style={{
        backgroundImage:"url('https://warals.com/images/notfound.gif')",
        backgroundSize:'cover',
        minHeight:'100vh',
        backgroundPosition:'center',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        color:'black',
    }}>
        <h1>404 Page Not Found</h1>
        <h2><Link to="/portal/home">Back to Home Page</Link></h2>
    </div>
  )
}
