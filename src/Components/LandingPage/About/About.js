import React from 'react';
import "./About.css";
import tieLogo from '../../../Assets/tie.png';
import iedcLogo from '../../../Assets/iedcmec.png';

export default function AboutComponent(props){

    return(
        <div className = "about-container">  
                <div className="headerContent">
                    <p className="headings header">
                        About Us
                    </p>
                    <p className="aboutText">
                        <b>Technopreneur</b>, the national flagship event of IEDC MEC and the annual entrepreneurial and managerial e-summit of Model Engineering College, includes a plethora of events including Idea Pitching, Prototype Development, hackathons, and much more. The first edition of Technopreneur, Technopreneur 2006, went on to win the Best Yi-Net event at the CII National Summit in Mumbai. With over 1000+ participants from top engineering colleges and B-schools across the country, Technopreneur aims to impact everyone from students to working-class professionals. 
                        <br/><br/>
                        To successfully emerge from the ashes of the dire conditions of a pandemic stricken world, this year's theme for Technopreneur is to evolve into a better world through disruption, to provide the most innovative solutions for our problems. Our theme hopes to invoke a sense of responsibility and leadership in one's mind in order for them to understand that all our battles can be won through entrepreneurial solutions.
                    </p>  
                </div>
                
                <div className="card" >
                    {/* <div className="card-container"> */}
                        <img src={tieLogo} id="card-image" alt="tielogo"/>
                        <img src={iedcLogo} id="card-image" alt="ideclogo"/>
                    {/* </div> */}
                </div>   
        </div>
    )
}
