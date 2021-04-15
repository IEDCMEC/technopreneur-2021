import React from "react";
import microsoft from "../../../Assets/sponsors/microsoft.png";
import uber from "../../../Assets/sponsors/Uber.png";
import cognizant from "../../../Assets/sponsors/Cognizant.png";
import tcs from "../../../Assets/sponsors/tcs.png";
import ebay from "../../../Assets/sponsors/ebay.png";
import itc from "../../../Assets/sponsors/ITC.png";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div>
      <div className="sponsor-container" id="sponsors">
        <p className="headings partner-heading">SPONSORS</p>
        <div className="partner-content">
          <div className="partner-row">
            <div id="first">
              <img
                src={microsoft}
                alt="first "
                className="placeholder partner-image"
              ></img>
            </div>
            <div id="second">
              <img
                src={uber}
                alt="second "
                className="placeholder partner-image"
              ></img>
            </div>
            <div id="third">
              <img
                src={cognizant}
                alt="third "
                className="placeholder partner-image"
              ></img>
            </div>

            <div id="fourth">
              <img
                src={ebay}
                alt="fourth "
                className="placeholder partner-image"
              ></img>
            </div>
            <div id="fifth">
              <img
                src={tcs}
                alt="fourth "
                className="placeholder partner-image"
              ></img>
            </div>
            <div id="sixth">
              <img
                src={itc}
                alt="fourth "
                className="placeholder partner-image"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
