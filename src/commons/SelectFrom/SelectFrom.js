import { Back, TweenMax } from "gsap";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
// import { setDataLanguage } from "../../constants/dataLanguge";
import * as actionLang from "../../actions/firstLoad";
import "./style.css";
const SelectFrom = (props) => {
  const { actionLang,dataLanguage } = props;

  const [showSelect, setShowSelect] = useState(false);

  const [defaultLanguage, setDefaultLanguage] = useState(dataLanguage.type==="el"?"English":"Tiếng Việt");
  useEffect(() => {
    // console.log("ok");
    TweenMax.to("#select-options", {
      top: "-1em",
      opacity: 0,
      // display:'none',
    });
  }, []);

  useEffect(() => {
    if(dataLanguage.type==="el"){
      setDefaultLanguage("English");
    }else{
      setDefaultLanguage("Tiếng Việt");
    }
  }, [dataLanguage])
  const onSetDropdown = () => {
    if (!showSelect) {
      TweenMax.to("#select-options", 1, {
        top: 0,
        opacity: 1,
        display: "block",
        ease: Back.easeInOut.config(1.7),
      });
    } else {
      TweenMax.to("#select-options", 1, {
        top: "-1em",
        opacity: 0,
        ease: Back.easeInOut.config(1.7),
      });
    }
    setShowSelect((c) => !c);
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
                // setDefaultLanguage("Tieng Viet");
                // setDataLanguage("TV");
                actionLang.handleSetChangeLanguage("tv");
                onSetDropdown();
              }}>
              <i class="fab fa-codepen"></i>
              <span class="opt-val">Tiếng Việt</span>
            </div>
            <div
              class="option-cus o2"
              onClick={() => {
                // setDefaultLanguage("English");
                // setDataLanguage("English");
                actionLang.handleSetChangeLanguage("el");
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

const mapStateToProps = (state) => ({
  dataLanguage: state.stateLanguage.language,
});
const mapDispatchToProps = (dispatch) => ({
  actionLang: bindActionCreators({ ...actionLang }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(SelectFrom);
