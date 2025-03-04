import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { FaRegBell, FaUser, FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'; 

function Dashboard() {
  return (
    <div className='adminContainer'>
      <AdminSidebar />
      <main className='dashboard'>

        {/* bar section */}
        <div className='dashboardBar'>
          <div className='barSearch'>
            <FaSearch className='reactIconsBar' />
            <input type="text" placeholder='Search for data, users, docs' />
          </div>
          <div className='barNotification'>
            <Link to="">
              <FaRegBell className='reactIconsBar' />
            </Link>
            <Link to="">
              <FaUser className='reactIconsBar' />
            </Link>
          </div>
        </div>


        {/* widget Item section */}
        <div className='widgetDashboard'>
          
        </div>
      </main>
    </div>
  )
}

export default Dashboard
