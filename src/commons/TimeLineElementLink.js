import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const TimeLineElementLink = ({ el }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={el.time}
      contentStyle={{ background: el.color1, color: el.color2 }}
      contentArrowStyle={{ borderRight: `7px solid ${el.color1} ` }}
      iconStyle={{ background: el.color1, color: el.color2 }}
      icon={<i className="fab fa-reacteurope icon-timeline" style={{ color: "white" }}></i>}>
      <h3 className="vertical-timeline-element-title" style={{ color: "white" }}>
        {el.h3}
      </h3>
      <h4 className="vertical-timeline-element-subtitle" style={{ color: "white" }}>
        {el.h4}
      </h4>
      {/* <p>{first.p}</p> */}
      <p
        style={{
          color: "white",
        }}>
        Link Demo:{" "}
        <a
          style={{
            color: "white",
            textDecoration: "none",
            /* letter-spacing: 0px, */
            marginLeft: "2em",
          }}
          href={el.link}
          target="_blank"
          rel="noreferrer">
          {" "}
          HEAR
        </a>
      </p>
    </VerticalTimelineElement>
  );
};

export default TimeLineElementLink;
