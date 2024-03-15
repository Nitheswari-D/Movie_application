import React from 'react'
import Topbar from './Topbar.js'
import { Outlet } from 'react-router-dom'
export default function Portal({mode,setmode}) {
  return (
    <div className='portal'>
      <Topbar mode={mode} setmode={setmode}/>
      <Outlet/>
    </div>
  )
}