import React from "react";
import "./ContactUs.css";
import upWaves from '../../../Assets/contactus-wave.png';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter }from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div>
      <img src={upWaves} style={{position:"relative", top:0}} alt="wavedown"/>
    <div className="contact-container" id="contactUs">
          <div>
            <p className="headings contact-heading">Contact Us</p>
          </div>
          <div className="cu-contents">
            <div className="iedc">
                <p className="iedc-name">Innovation and Entrepreneurship Development Cell</p>
                <p className="iedc-add">Govt. Model Engineering College <br/>Thrikkakara, Kochi, Kerala 682021 <br/>iedc@mec.ac.in</p>
                <div className="rocket-date">                
                <div className="combine">
                    <div className="social_media">
                    <a href="https://www.instagram.com/iedcmec/?hl=en" target="_blank" rel="noopener noreferrer" className="media_page">
                        <FaInstagram />
                    </a>
                    <a href="https://in.linkedin.com/company/iedcmec" target="_blank" rel="noopener noreferrer" className="media_page">
                        <FaLinkedin/>
                    </a>
                    <a href="https://twitter.com/iedc_mec" target="_blank" rel="noopener noreferrer" className="media_page">
                        <FaTwitter/>
                    </a>                
                </div>
            </div>
            </div>
            </div>


          </div>
      </div>
      </div>
  );
};

export default ContactUs;
