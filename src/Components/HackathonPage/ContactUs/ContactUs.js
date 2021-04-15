import React from "react";
import rindish from "../../../Assets/rindish.png";
import adhithya from "../../../Assets/adhithya.png";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container" id="sponsors">
      <h1 className="heading">Contact Us</h1>
      <div className="contact-row">
        <div className="first-contact">
          <div className="contact-card">
              <div className="left-side">
                   <img src={rindish} alt="rindish" className="contact-image"></img>
              </div>
              <div className="right-side">
                  <div className="contact-name">
                    Rindish Krishna
                  </div>
                  <div className="email">
                        rindishkrishna@gmail.com
                  </div>
                  </div>
                  
          </div>
         
        </div>
        <div className="second-contact">
          <div className="contact-card">
              <div className="left-side">
                   <img src={adhithya} alt="rindish" className="contact-image"></img>
              </div>
              <div className="right-side">
                  <div className="contact-name">
                    Adithya anilkumar
                  </div>
                  <div className="email">
                        adithyaanilkumar1@gmail.com
                  </div>
                  </div>
                  
          </div>
         
        </div>
        
      </div>
      
    </div>
  );
};

export default ContactUs;
