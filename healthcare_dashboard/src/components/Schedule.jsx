import React from "react";
import "./Schedule.css";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
const Schedule = () => {
  const calendarDays = [
  { day: "Mon", date: 25, slots: ["10:00", "11:00","12:00"] },
  { day: "Tues", date: 26, slots: ["08:00", "09:00", "10:00"] },
  { day: "Wed", date: 27, slots: ["12:00","------", "13:00"] },
  { day: "Thurs", date: 28, slots: ["10:00", "11:00", "------"] },
  { day: "Fri", date: 29, slots: ["------","14:00", "16:00"] },
  { day: "Sat", date: 30, slots: ["12:00", "14:00", "15:00"] },
  { day: "Sun", date: 31, slots: ["09:00", "10:00", "11:00"] },
];
  return (
    <div className="schedule-container">
      {/* Header */}
      <div className="schedule-header">
       
        <div className="header-controls">
          
          <div className="avatar">👦</div>
          <button className="add-btn">+</button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="header2">
       <p>October 2021</p>

       <span><HiArrowSmLeft /><HiArrowSmRight /></span></div>
     




<div className="calendar-grid">
  {calendarDays.map((day, i) => (
<div
  key={i}
  className={`day-column ${
    day.day === "Tues" ? "highlight-tuesday" : 
    day.day === "Sun" ? "highlight-sunday" : ""
  }`}
>


      <div className="day-title">
        <div>{day.day}</div>
        <div className="day-date">{day.date}</div>
      </div>
      <div className="time-slots">
        {day.slots.map((slot, j) => (
   <div
  key={j}
  className={`time-slot 
    ${slot === "--------" ? "slot-empty" : ""}
    ${
      // ACTIVE slot rules
      (day.day === "Tues" && slot === "09:00") ||
      (day.day === "Thurs" && slot === "11:00") ||
      (day.day === "Sat" && slot === "12:00") ||
      (day.day === "Sun" && slot === "09:00")
        ? day.day === "Sun"
          ? "slot-active-sun" // custom dull style for Sun
          : "slot-active"     // normal dark purple active
        : 
        // LIGHT slot rules
        slot !== "--------"
          ? day.day === "Sun"
            ? "slot-sun-dull" // dull for sun non-active slots
            : "slot-light"
          : ""
    }
  `}
>
  
  

  {slot}
</div>

        ))}
      </div>
    </div>
  ))}
</div>


      {/* Appointments */}
      <div className="appointments">
        <div className="appointment-card dentist">
          
          <div className="appointment-icon"><strong>Dentist</strong>🦷</div>
          <p>09:00 - 11:00</p>
          <p className="doctor">Dr. Cameron Williamson</p>
        </div>
        <div className="appointment-card physio">
          
           <div className="appointment-icon"><strong>Physiotherapy Appointment</strong>💪</div>
          <p>11:00 - 12:00</p>
          <p className="doctor">Dr. Kevin Djones</p>
        </div>
      </div>

      {/* Upcoming Schedule */}
     <div className="upcoming">
  <h3 className="section-title">The Upcoming Schedule</h3>

  <div className="day-group">
    <p className="day-label">On Thursday</p>
    <div className="task-row">
      <div className="task-card">
        
        <div>
          <div className="appointment-icon">
          <p className="task-title">Health checkup complete</p>
          🧪</div>
          <p className="task-time">11:00 AM</p>
        </div>
      </div>
      <div className="task-card">
        
        <div><div className="appointment-icon">
          <p className="task-title">Ophthalmologist</p>
          👁️</div>
          <p className="task-time">14:00 PM</p>
        </div>
      </div>
    </div>
  </div>

  <div className="day-group">
    <p className="day-label">On Saturday</p>
    <div className="task-row">
      <div className="task-card2">
      
        <div>
          <div className="appointment-icon" >
          <p className="task-title">Cardiologist</p>
            ❤️</div>
          <p className="task-time">12:00 AM</p>
        </div>
      </div>
      <div className="task-card2">
        
        <div>
          <div className="appointment-icon">
          <p className="task-title">Neurologist</p>
          🧑‍⚕️</div>
          <p className="task-time">16:00 PM</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Schedule;
