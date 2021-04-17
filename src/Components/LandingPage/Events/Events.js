import React from "react";
import logo from "../../../Assets/technohacklogo.png";
import "./Events.css";
import { Link } from "react-router-dom";
import upWaves from '../../../Assets/events-wave.png';

const Events = () => {
  return (
    <div className="eve-container" id="events">
      <img src={upWaves} alt="wavedown"/>
      <div className="eve-heading">
        <p className="headings eve-head">Events</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "10%",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          flexWrap: "wrap",
        }}
      >
        <div className="event event-card " >
          <img src={logo} alt="" className="eventImage"></img>
          <div className="eventButton">
            <Link to="/hackathon">
              <button className="button button1">Register</button>
            </Link>
          </div>
        </div>
        <div className="event event-card" >
          <p className="coming-soon"> Coming Soon</p>

        </div>

        <div className="event event-card" >
          <p className="coming-soon"> Coming Soon</p>
         
        </div>
      </div>
      
    </div>
  );
};

export default Events;
