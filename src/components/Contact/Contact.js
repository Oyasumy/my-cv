import React, { useEffect } from "react";
import "./style.css";
import anime from "animejs";

import dataContact from "../../constants/dataContact";

const Contact = () => {
  useEffect(() => {
    const container = document.querySelector(".container-contact");

    for (let i = 0; i < 50; i++) {
      const blocks = document.createElement("div");

      blocks.classList.toggle("block");
      container.appendChild(blocks);
    }

    animatedBlock();
  }, []);

  const animatedBlock = () => {
    anime({
      targets: ".block",
      translateX: function () {
        return anime.random(-700, 700);
      },
      translateY: function () {
        return anime.random(-700, 700);
      },
      scale: function () {
        return anime.random(1, 5);
      },
      easing: "linear",
      duration: 3000,
      delay: anime.stagger(5),
      complete: animatedBlock,
    });
  };

  const copyText = (id) => {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  };
  return (
    <div class="container-contact">
      <div class="glass-morphism">
        <h3>Contact me</h3>
        <p id="gmail-c">
          <span class="f-icon">
            <i class="fab fa-mailchimp"></i>
          </span>
          {dataContact.gmail}
          <span class="l-icon" onClick={() => copyText("gmail-c")}>
            <i class="far fa-copy"></i>
          </span>
        </p>
        <p id="phone-c">
          <span class="f-icon">
            <i class="fas fa-mobile-alt"></i>
          </span>{" "}
          {dataContact.phone}
          <span class="l-icon" onClick={() => copyText("phone-c")}>
            <i class="far fa-copy"></i>
          </span>
        </p>
        <p id="twitter-c">
          <span class="f-icon">
            <i class="fab fa-twitter"></i>
          </span>{" "}
          {dataContact.twitter}
          <span class="l-icon" onClick={() => copyText("twitter-c")}>
            <i class="far fa-copy"></i>
          </span>
        </p>

        <p id="instar-c">
          <span class="f-icon">
            <i class="fab fa-instagram"></i>
          </span>{" "}
          {dataContact.instagram}
          <span class="l-icon" onClick={() => copyText("instar-c")}>
            <i class="far fa-copy"></i>
          </span>
        </p>

        <p id="skype-c">
          <span class="f-icon">
            <i class="fab fa-skype"></i>
          </span>{" "}
          {dataContact.skype}
          <span class="l-icon" onClick={() => copyText("skype-c")}>
            <i class="far fa-copy"></i>
          </span>
        </p>

        <p id="face-c">
          <span class="f-icon">
            <i class="fab fa-facebook"></i>
          </span>{" "}
          {dataContact.facebook}
          <span class="l-icon" onClick={() => copyText("face-c")}>
            <i class="far fa-copy"></i>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
