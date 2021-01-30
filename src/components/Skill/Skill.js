import { Back, TweenLite } from "gsap";
import React, { useCallback, useEffect, useState } from "react";
import Delayed from "../../commons/DelayLoadComponent";
import Donut from "../Chart/Donut";
import Radar from "../Chart/Radar";
import "./style.css";

const Skill = () => {
  const [delayShow, setDelayShow] = useState(false);
  const initAnimated = useCallback(() => {
    TweenLite.from("#skill-svg-1", 2, {
      delay: 1,
      x: -50,
      //   y: -50,
      opacity: 0,
      duration: 1,
      ease: Back.easeOut.config(1.7),
    });
    TweenLite.from("#skill-svg-2", 2, {
      delay: 1.2,
      x: -50,
      //   y:-50,
      opacity: 0,
      duration: 1,
      ease: Back.easeOut.config(1.7),
    });
  }, []);

  useEffect(() => {
    initAnimated();
  }, []);
  return (
    <div class="skill">
      <div class="background-svg">
        <svg id="skill-svg" width="355" height="432" viewBox="0 0 355 432" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* <g filter="url(#filter0_d)">
            <rect x="-51.8757" y="135.843" width="404.395" height="113.303" transform="rotate(-32.2586 -51.8757 135.843)" fill="#30475E" />
          </g> */}
          <g filter="url(#filter1_d)">
            <rect id="skill-svg-1" x="-51.8757" y="231.943" width="404.395" height="113.303" transform="rotate(-32.2586 -51.8757 231.943)" fill="#222831" />
          </g>
          <g filter="url(#filter2_d)">
            <rect id="skill-svg-2" x="-68" y="327.398" width="404.395" height="113.303" transform="rotate(-32.2586 -68 327.398)" fill="#F05454" />
          </g>
          <defs>
            <filter id="filter0_d" x="-55.8757" y="-80" width="410.451" height="319.658" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <filter id="filter1_d" x="-55.8757" y="16.1003" width="410.451" height="319.658" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <filter id="filter2_d" x="-72" y="111.556" width="410.451" height="319.658" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div class="professional-skills">
        <div class="glass-morphism">
          <p>professional skills</p>
          <Delayed waitBeforeShow={2000}>
            <Radar />
          </Delayed>
        </div>
      </div>
      <div class="additional-skills">
        <div class="glass-morphism">
          <p>addition skills</p>
          <Delayed waitBeforeShow={2000}>
            <Donut />
          </Delayed>
        </div>
      </div>
    </div>
  );
};

export default Skill;
