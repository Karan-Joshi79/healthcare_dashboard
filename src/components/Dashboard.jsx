import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import './Dashboard.css';
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { IoMdArrowForward } from "react-icons/io";
import Week from './Week';
import Schedule from './Schedule';

const DashboardMainContent = () => {

  const data = [
    {
      emoji: "🫁",
      title: "Lungs",
      date: "26 Okt 2021",
      color: "#D44A4A",
      width: "70%",
    },
    {
      emoji: "🦷",
      title: "Teeth",
      date: "26 Okt 2021",
      color: "#4AC6AC",
      width: "80%",
    },
    {
      emoji: "🦴",
      title: "Bone",
      date: "26 Okt 2021",
      color: "#F9735B",
      width: "65%",
    },
  ];

  return (
    <div className="dashboard">
      <div className="section1">
      <div className="search-bar">
        <FaSearch />
        <input type="text" placeholder="Search" />
        <button className='notification'><IoNotifications /></button>
      </div>

      <div className="heading">
        <h1>Dashboard</h1>
     
        <p className='arrow week'>This week <MdOutlineKeyboardArrowDown /></p>
      </div>

      <div className="cards">
        <div className="card1">
          <i className="search"><HiMagnifyingGlassPlus /></i>
          <img
            src="https://www.leedssportsphysio.com/wp-content/uploads/2014/02/Knee-Hip-Groin-Ankle.jpg"
            alt="Health"
          />
          <div className="card-labels">
            <div className="label-box red heart">
              <span className="label-icon">❤️</span>
              <span className="label-text">Healthy Heart</span>
            </div>
            <div className="label-box blue leg">
              <span className="label-icon">🦵</span>
              <span className="label-text">Healthy Leg</span>
            </div>
          </div>
        </div>


        <div className="card-container">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                <span className="emoji">{item.emoji}</span>
                <span className="title">{item.title}</span>
              </div>
              <p className="date">Date: {item.date}</p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ backgroundColor: item.color, width: item.width }}
                ></div>
              </div>
            </div>
          ))}
          <p className='detail'>Details <IoMdArrowForward /></p>

        </div>
        <div className="activity">
          <Week />
        </div>
</div>
      </div>
      <div className="section2">
          <Schedule />
      </div>

    </div>
  );
};

export default DashboardMainContent;
