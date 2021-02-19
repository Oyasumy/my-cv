import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import anime from "animejs";

import dataContact from "../../constants/dataContact";

import { ToastProvider, useToasts } from "react-toast-notifications";

const Contact = () => {
  // const [unmountComp, setUnmountComp] = useState(false);
  const st = useRef(false);

  const { addToast } = useToasts();

  const [appearance, setAppearance] = useState(["success", "error", "warning", "info"]);

  useEffect(() => {

    // Set container 
    const container = document.querySelector(".container-contact");

    // Create blocks and append to container
    for (let i = 0; i < 10; i++) {
      const blocks = document.createElement("div");

      blocks.classList.toggle("block");
      container.appendChild(blocks);
    }

    // Set st current to false when first load
    st.current=false;

    // Call animation 
    animatedBlock();
  }, []);

  useEffect(
    () => () => {
      //  When change component set st = true to finish function animatedBlock()
      st.current = true;
      console.log("unmount");
    },
    []
  );

  const animatedBlock = () => {
    console.log("ok ani",  st.current);
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
      complete: st.current ? null : animatedBlock,
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

  const addToastNotification = () => {
    return addToast("Copy Success ", {
      appearance: appearance[Math.floor(Math.random() * 3)] ,
      autoDismiss: true,
    });
  };
  return (
    <div className="container-contact" style={{ overflow: "hidden" }}>
      <div className="glass-morphism">
        <h3>Contact me</h3>
        <p id="gmail-c">
          <span className="f-icon">
            <i className="fab fa-mailchimp"></i>
          </span>
          {dataContact.gmail}
          <span
            className="l-icon"
            onClick={() => {
              addToastNotification();
              copyText("gmail-c");
            }}>
            <i className="far fa-copy"></i>
          </span>
        </p>
        <p id="phone-c">
          <span className="f-icon">
            <i className="fas fa-mobile-alt"></i>
          </span>{" "}
          {dataContact.phone}
          <span
            className="l-icon"
            onClick={() => {
              addToastNotification();
              copyText("phone-c");
            }}>
            <i className="far fa-copy"></i>
          </span>
        </p>
        <p id="twitter-c">
          <span className="f-icon">
            <i className="fab fa-twitter"></i>
          </span>{" "}
          {dataContact.twitter}
          <span
            className="l-icon"
            onClick={() => {
              addToastNotification();
              copyText("twitter-c");
            }}>
            <i className="far fa-copy"></i>
          </span>
        </p>

        <p id="instar-c">
          <span className="f-icon">
            <i className="fab fa-instagram"></i>
          </span>{" "}
          {dataContact.instagram}
          <span
            className="l-icon"
            onClick={() => {
              addToastNotification();
              copyText("instar-c");
            }}>
            <i className="far fa-copy"></i>
          </span>
        </p>

        <p id="skype-c">
          <span className="f-icon">
            <i className="fab fa-skype"></i>
          </span>{" "}
          {dataContact.skype}
          <span
            className="l-icon"
            onClick={() => {
              addToastNotification();
              copyText("skype-c");
            }}>
            <i className="far fa-copy"></i>
          </span>
        </p>

        <p id="face-c">
          <span className="f-icon">
            <i className="fab fa-facebook"></i>
          </span>{" "}
          {dataContact.facebook}
          <span
            className="l-icon"
            onClick={() => {
              addToastNotification();
              copyText("face-c");
            }}>
            <i className="far fa-copy"></i>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
