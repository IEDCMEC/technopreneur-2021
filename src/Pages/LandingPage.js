import React, { useState, useEffect, useContext } from "react";
import TopSection from "../Components/LandingPage/TopSection/TopSection";
import Sponsors from "../Components/LandingPage/Sponsors/Sponsors";
import Events from "../Components/LandingPage/Events/Events";

import AboutComponent from "../Components/LandingPage/About/About";
import ContactUs from "../Components/LandingPage/ContactUs/ContactUs";
import ReactPageScroller from 'react-page-scroller';
import {FaArrowCircleUp} from 'react-icons/fa';
import { PageCounterContext } from "../Components/LandingPage/PageCounterContext/PageCounterContext";

export function Landingpage(props) {
  const [currentPage, setCurrentPage] = useState(null)
  const {page} = useContext(PageCounterContext);

  useEffect(()=>{
    setCurrentPage(page);
  }, [page]);

  const handlePageChange = (number) => {
    setCurrentPage(number);
  }

  const [showScroll, setShowScroll] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })
  
  
  const checkScrollTop = () => {
    if (currentPage > 0){
      setShowScroll(true)
    } else {
      setShowScroll(false)
    }
  };
  useEffect(checkScrollTop, [currentPage]);

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
    setCurrentPage(0);
  };

  return (
    <>
      
        <div style={{position:"absolute", bottom:10, right:20, zIndex:10000}}>
          <FaArrowCircleUp onClick={scrollTop} style={{height: 50, width:"50px", display: showScroll? 'flex' : 'none'}}/>
        </div>
        <ReactPageScroller
          pageOnChange={handlePageChange}
          customPageNumber={currentPage}
          animationTimer={500}
          animationTimerBuffer={5}
          renderAllPagesOnFirstRender={true}
        >
          <TopSection />    
          <AboutComponent/>
          <Events />
          <Sponsors />
          <ContactUs/>
        </ReactPageScroller>
      
    </>
  );
}