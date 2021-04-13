import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import './Navbar.css';
import logo from '../../../Assets/logo.png';
export const Navbar = () => {
  return (
    <div className="space">
      <div className="logo-div"><img className="heading-logo" src={logo} alt="logo"></img></div>
      <nav className="nav">
        <ul className="navbar-item">
          <li>
            <Link to="#home" smooth={true} spy={true} duration={1000}
              className="nav-link">
              Home
                </Link>
          </li>
          <li>
            <Link to="#tracks" smooth={true} spy={true} duration={1000}
              className="nav-link">
              Tracks
                </Link>
          </li>
          <li>
            <Link to="#prizes" smooth={true} spy={true} duration={1000}
              className="nav-link">
              Prizes
                </Link>
          </li>
          <li>
            <Link to="#faq" smooth={true} spy={true} duration={1000}
              className="nav-link">
              Faq
                </Link>
          </li>
          <li>
            <Link to="#sponsors" smooth={true} spy={true} duration={1000}
              className="nav-link">
              Sponsors
                </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
