import { Back, TweenMax } from "gsap";
import React, { useEffect, useState } from "react";
import "./style.css";
const SelectFrom = () => {
  const [showSelect, setShowSelect] = useState(false);

  const [defaultLanguage, setDefaultLanguage] = useState("English");
  useEffect(() => {
    // console.log("ok");
    TweenMax.to("#select-options", {
      top: "-1em",
      opacity: 0,
      // display:'none',
    });
  }, []);
  const onSetDropdown = () => {
    if (!showSelect) {
      console.log("t1");
      TweenMax.to("#select-options", 1, {
        top: 0,
        opacity: 1,
        display: "block",
        ease: Back.easeInOut.config(1.7),
      });
    } else {
      console.log("t2");

      TweenMax.to("#select-options", 1, {
        top: "-1em",
        opacity: 0,
        ease: Back.easeInOut.config(1.7),
      });
    }
    setShowSelect((c) => !c);
    console.log("show", showSelect);
  };
  return (
    <>
      <form id="app-cover" style={{ position: "relative", top: "2.5em" }}>
        <div id="select-box">
          <div id="select-button" class="brd" style={{ zIndex: 2 }}>
            <div id="selected-value">
              <span>{defaultLanguage}</span>
            </div>
            <div id="chevrons" onClick={() => onSetDropdown()}>
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
          <div id="select-options" style={{ zIndex: 1 }}>
            <div
              class="option-cus o1"
              onClick={() => {
                setDefaultLanguage("Tieng Viet");
                onSetDropdown();
              }}>
              <i class="fab fa-codepen"></i>
              <span class="opt-val">Tieng Viet</span>
            </div>
            <div
              class="option-cus o2"
              onClick={() => {
                setDefaultLanguage("English");
                onSetDropdown();
              }}>
              <i class="fab fa-dribbble"></i>
              <span class="opt-val">English</span>
            </div>

            <div id="option-cus-bg"></div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SelectFrom;
