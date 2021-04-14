import React from "react";
import questionImg from "../../../Assets/Question.png";
import "./Tracks.css";

const ProblemStatement = () => {
  return (
    <div id="tracks">
      <h3 className="track-heading">Tracks</h3>
      <div className="container-track">
        <div className="single-track track-border">
          <div>
            <img
              src={questionImg}
              className="track-img responsive-img"
              alt="track-vector"
            />
            <p className="track-img-title">Women Empowerment</p>
          </div>
          <div className="track-text">description</div>
        </div>
        <div className="single-track track-border">
          <div>
            <img
              src={questionImg}
              className="track-img responsive-img"
              alt="track-vector"
            />
            <p className="track-img-title">Open Innovation</p>
          </div>
          <div className="track-text"> description</div>
        </div>
        <div className="single-track track-border">
          <div>
            <img
              src={questionImg}
              className="track-img responsive-img"
              alt="track-vector"
            />
            <p className="track-img-title">Post Pandemic</p>
          </div>
          <div className="track-text"> description</div>
        </div>
        <div className="single-track">
          <div>
            <img
              src={questionImg}
              className="track-img responsive-img"
              alt="track-vector"
            />
          </div>
          <div className="track-text">description</div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;
