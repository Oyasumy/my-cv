import { Back, Power4, TweenMax } from "gsap";
import React from "react";

const Menu = () => {
  const openNavigation = () => {

   

    // Set animation for button menu
    TweenMax.to(".menu",{
      x:"3em",
      ease:Power4.easeInOut
    })

    // Set animation for parent
    TweenMax.to(".select-option", {
      delay:.5,
      zIndex: 99,
      opacity:1
    });

    // Reset animation 
    TweenMax.from(".background-1", {
      x:0,
      y:0,
    });
    TweenMax.from(".background-2", {
      x:0,
      y:0,
    });

    // Set animation 
    TweenMax.from(".background-1", {
      // duration:.3,
      // opacity: 0,
      delay:.5,
      x:"-1em",
      y:"1em",
      ease: Power4.easeInOut
    });
    TweenMax.from(".background-2", {
      // duration:.3,
      // opacity: 0,
      delay:.5,
      x:"1em",
      y:"1em",
      ease: Power4.easeInOut
    });
   
  };
  return (
    <>
      {/* <!-- menu option --> */}
      <div className="menu" onClick={() => openNavigation()} style={{zIndex: 20}}>
        <div className="svg-line">
          <svg width="92" height="146" viewBox="0 0 92 146" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10C0 4.47715 4.47715 0 10 0H92V146H10C4.47715 146 0 141.523 0 136V10Z" fill="black" />
            <rect x="26" y="59" width="40" height="5" fill="white" />
            <rect x="26" y="70" width="40" height="5" fill="white" />
            <rect x="26" y="81" width="40" height="5" fill="white" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Menu;
