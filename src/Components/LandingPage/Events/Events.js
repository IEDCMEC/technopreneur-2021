import React from "react";
import edit from "../../../Assets/comingsoon.png";
import logo from "../../../Assets/technohacklogo.png"
import "./Events.css";
import { Link } from "react-router-dom";
import upWaves from '../../../Assets/events-wave.png';

const Events = () => {
  return (
    <div className="eve-container" id="events">
      <img src={upWaves} alt="wavedown"/>
      <div className="eve-heading">
        <p className="headings eve-head">EVENTS</p>
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
        <div className="event">
          <img src={logo} alt="" className="eventImage"></img>
          <div className="eventButton">
            <Link to="/hackathon">
              <button className="button button1">Register</button>
            </Link>
          </div>
        </div>
        <div className="event">
          <img src={edit} alt="Coming Soon" className="eventImage"></img>
          <div className="eventButton">
            {/* <button className="button button1">Register</button> */}
          </div>
        </div>

        <div className="event">
          <img src={edit} alt="Coming Soon" className="eventImage"></img>
          <div className="eventButton">
            {/* <button className="button button1">Register</button> */}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Events;
