import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Contacts from '../Contacts/Contacts'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MasterLayout() {
  return (
    <div> 
      <div className='container-fluid px-0'>
      
      <Outlet />
     
      </div>
    </div>
  )
}
