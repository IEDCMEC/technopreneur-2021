import React from "react";
import organizerImg from "../../../Assets/Organizing projects-cuate 1.png";
import logo from "../../../Assets/technohacklogo.png";
import "./TopSection.css";
import Counter from "../Counter";
import Typing from 'react-typing-animation';

const TopSection = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="hackathon-top-section">
      <div className="left-section">
        <div className="logo-container">
          <img src={logo} className="hackathon-logo" alt="TechnoHack" />
        </div>
        <div className="tagline">
        <Typing >
        <h3>Find . Execute . Validate . Profit</h3>
  
        </Typing>
       

        
        </div>
        <div className="image-container">
          <img src={organizerImg} className="image" alt="" />
        </div>
      </div>
      <div className="right-section">
        <div className="title">
          <h1>Get Ready To Hack!</h1>
        </div>
        <div className="counter">
          <Counter date={`2021-05-24T00:00:00`} />
        </div>
        <div className="">
          <div
            className="apply-button"
            data-hackathon-slug="YOUR-HACKATHON-SLUG"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default TopSection;
