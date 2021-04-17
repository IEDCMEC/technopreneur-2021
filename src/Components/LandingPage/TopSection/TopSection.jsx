import React from 'react'
import './TopSection.css';
import logo from '../../../Assets/logo.png';
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import upWaves from '../../../Assets/topsection-wave.png';

const TopSection = () => {
    return ( 
        <div>
        <div id="home" className="top-container">
          
            <div data-aos="zoom-in-down" data-aos-duration="1000">
                <img src= {logo} alt="LOGO" className="logo"/>
            </div>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </div>
        <img src={upWaves} style={{ position:"absolute", bottom:0}} className="wave-d" alt="wavedown"/>
        </div>
    )
}

export default TopSection
