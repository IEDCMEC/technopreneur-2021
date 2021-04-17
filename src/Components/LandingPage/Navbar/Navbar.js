// eslint-disable
import React, {useContext} from 'react';
import './Navbar.css';
import { PageCounterContext } from "../PageCounterContext/PageCounterContext";

export const Navbar = () => {
  // eslint-disable-next-line
  const {page, setPage} = useContext(PageCounterContext);

    return ( 
        <nav className="navbar">
          <ul className="nav-item">
            <li onClick={() => setPage(1)} className="av-link" >
                ABOUT US
            </li>
            <li onClick={() => setPage(2)} className="av-link" >
                EVENTS
            </li>
            <li onClick={() => setPage(3)} className="av-link" >
                PREVIOUS SPONSORS
            </li>
            <li onClick={() => setPage(4)} className="av-link" >
                CONTACT
            </li>
          </ul>
        </nav>
    )
}

