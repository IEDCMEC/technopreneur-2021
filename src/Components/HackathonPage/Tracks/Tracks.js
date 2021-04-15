import React from "react";
import postPandemic from "../../../Assets/post-pandemic-relief.png";
import womenEmpower from "../../../Assets/women-empowerment.png";
import blockChain from "../../../Assets/block-chain.png";
import openInnovation from "../../../Assets/open-innovation.png";
import "./Tracks.css";

const ProblemStatement = () => {
  return (
    <div id="tracks">
      <h3 className="track-heading">Tracks</h3>
      <div className="container-track">
        <div className="single-track track-border">
          <div>
            <img
              src={postPandemic}
              className="track-img responsive-img"
              alt="track-vector"
            />
            <p className="track-img-title">Post Pandemic Relief</p>
          </div>
          <div className="track-text">
            <b>Post-pandemic relief:</b> The pandemic has wrecked havoc on our
            day to day lives. So if you're passionate about solving problems on
            a global scale, this might be your cup of tea.
          </div>
        </div>
        <div className="single-track track-border">
          <div>
            <img
              src={womenEmpower}
              className="track-img responsive-img"
              alt="track-vector"
            />
            <p className="track-img-title">Women Empowerment</p>
          </div>
          <div className="track-text">
            <b>Women Empowerment:</b> It is an on going global challenge to
            empower women all around the world. We believe that technology can
            tackle this problem by empowering them with the tools and
            opportunities to do so.
          </div>
        </div>
        <div className="single-track track-border">
          <div>
            <img
              src={blockChain}
              className="track-img responsive-img"
              alt="track-vector"
            />
            <p className="track-img-title">Block Chain</p>
          </div>
          <div className="track-text">
            <b>Block Chain:</b> The future lies in Decentralization and
            Transparency. This track is for blockchain enthusiasts.
          </div>
        </div>
        <div className="single-track">
          <div>
            <img
              src={openInnovation}
              className="track-img responsive-img"
              alt="track-vector"
            />
            <p className="track-img-title">Open Innovation</p>
          </div>
          <div className="track-text">
            <b>Open Innovation:</b> We do not want to tie you down with problem
            statements, hence, if you're a free thinker and already have
            solutions to problems, then this track is for you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;
