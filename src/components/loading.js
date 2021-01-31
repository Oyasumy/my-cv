import React, { useCallback, useEffect } from "react";
import ImageHero from "../Asset/Images/hero.jpg";
import ImageRing from "../Asset/Images/ring.png";
import { Expo, TimelineMax, TweenMax } from "gsap";
import { Timeline } from "gsap/gsap-core";
const Loading = () => {
  const initAnimated = useCallback(() => {
    TweenMax.to(".loading-screen", 4, {
      delay: 6.6,
      top: "-120%",
      ease: Expo.easeInOut,
    });

    TweenMax.to(".loading-screen", 4, {
      delay: 8,
      zIndex:-1,
      ease: Expo.easeInOut,
    });
    TweenMax.to(".ringOne", 4, {
      delay: 6.6,
      top: "-50%",
      display:'none',
      ease: Expo.easeInOut,
    });
    TweenMax.to(".ringTwo", 4, {
      delay: 6.6,
      top: "-50%",
      display:'none',
      ease: Expo.easeInOut,
    });

    // ring
    var t1 = new Timeline();

    t1.from(".ringOne", 4, {
      delay: 0.4,
      opacity: 0,
      y: 40,
      ease: Expo.easeInOut,
    })
      .from(
        ".ringTwo",
        4,
        {
          delay: 0.9,
          opacity: 0,
          y: 40,
          ease: Expo.easeInOut,
        },
        "-=5"
      )
      .to(".ringOne", 4, {
        delay: 0.4,
        x: 300,
        ease: Expo.easeInOut,
      })
      .to(
        ".ringTwo",
        4,
        {
          delay: 0.9,
          x: 300,
          ease: Expo.easeInOut,
        },
        "-=5"
      );

    // // Letter
    // var textWrapper = document.querySelector(".ml7 .letters");
    // textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    // anime.timeline({ loop: false }).add({
    //   targets: ".ml7 .letter",
    //   translateY: ["1.1em", 0],
    //   translateX: ["0.55em", 0],
    //   translateZ: 0,
    //   rotateZ: [180, 0],
    //   duration: 750,
    //   opacity: 1,
    //   easing: "easeOutExpo",
    //   delay: function (el, i) {
    //     return 9000 + 50 * i;
    //   },
    // });
  }, []);
  useEffect(() => {
    initAnimated();
  }, []);

  return (
    <div className="">
      <div className="loading-screen"></div>
      <div className="loader">
        <div className="ringOne ring">
          <img src={ImageRing} alt="1" />
        </div>
        <div className="ringTwo ring">
          <img src={ImageRing} alt="2" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
