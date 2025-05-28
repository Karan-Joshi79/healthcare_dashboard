import React from 'react';
import './Sidebar.css';
import { MdDashboard, } from "react-icons/md";
import { PiArrowsDownUpBold } from "react-icons/pi";
import { FaCalendarDays } from "react-icons/fa6";
import { MdAddBox } from "react-icons/md";
import { SiStatista } from "react-icons/si";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
      {<div className="logo">
                <span className="logo-health">Health</span>
                <span className="logo-care">care.</span>
            </div> }

      <div className="sidebar-header">
        <h2 className="sidebar-title">General</h2>
      </div>
      <ul className="sidebar-nav">
       
        <li className='open'><div className='icon'> <MdDashboard /> Dashboard</div></li>
        <li><div className='icon'><PiArrowsDownUpBold />History</div></li>
        <li><div className='icon'><FaCalendarDays />Calendar</div></li>
        <li><div className='icon'><MdAddBox />Appointments</div></li>
        <li><div className='icon'><SiStatista />Statistics</div></li>
        
      </ul>
      
     

       <div className="sidebar-header">
        <h2 className="sidebar-title2">Tools</h2>
         <ul className='foot'>
       < li><div className='icon'><IoChatbubbleEllipses />Chat</div></li>
        <li><div className='icon'><FaPhone />Support</div></li>  
        <li className='set'><div className='icon'><IoSettings />Settings</div></li> 
      </ul>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
