// import "./App.css";
import gsap from "gsap";
import { TweenMax, Expo, Power4 } from "gsap";
import { useCallback, useEffect } from "react";
import Home from "./components/Home/home";
import Loading from "./components/loading";
import Menu from "./components/menu";
import Navigation from "./components/Navigation/navigation";

function App() {

  const initAnimated = useCallback(() => {
   
   
  }, []);

  useEffect(() => {
    initAnimated();
  }, []);
  
  return (
    <div className="main">
      {/* <div className="overlay first"></div>
      <div className="overlay second"></div>
      <div className="overlay third"></div> */}
      <Loading/>
      <Menu/>
      <Home/>
      <Navigation/>
    </div>
  );
}

export default App;

 // TweenMax.to(".first", 3, {
    //   delay: 0.2,
    //   top: "-100%",
    //   ease: Expo.easeInOut
    // });
    // TweenMax.to(".second", 3, {
    //   delay: 0.4,
    //   top: "-100%",
    //   ease: Expo.easeInOut
    // });
    // TweenMax.to(".third", 3, {
    //   delay: 0.6,
    //   top: "-100%",
    //   ease: Expo.easeInOut
    // });