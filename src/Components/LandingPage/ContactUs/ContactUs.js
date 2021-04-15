import React from "react";
import "./ContactUs.css";
import upWaves from '../../../Assets/contactus-wave.png';

const ContactUs = () => {
  return (
    <div>
      <img src={upWaves} style={{position:"relative", top:0}} alt="wavedown"/>
    <div className="contact-container" id="contactUs">
          <div>
            <p className="headings contact-heading">CONTACT US</p>
          </div>
          <div className="cu-contents">
            <div className="iedc">
                <p className="iedc-name">Innovation and Entrepreneurship Development Cell</p>
                <p className="iedc-add">Govt. Model Engineering College <br/>Thrikkakara, Kochi, Kerala 682021 <br/>iedc@mec.ac.in</p>
            </div>
            <div className= "vl vl-main"/>
            <div className="contacts">
              <div className= "vl vl-contact"/>
              <div className="contact">
                <p className="c-name">
                  Allen Joseph
                </p>
                <p className="c-desig">
                  Convener<br/>+91 82812 84062
                </p>
              </div>
              <div className= "vl vl-contact"/>
              <div className="contact">
                <p className="c-name">
                  Alan Sebastian
                </p>
                <p className="c-desig">
                  Marketing Manager<br/>+91 92873 41259
                </p>
              </div>
            </div>
          </div>
      </div>
      </div>
  );
};

export default ContactUs;
