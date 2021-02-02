import { connect } from "react-redux";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { compose } from "redux";

const TimeLine = (props) => {
  const {dataLanguage}=props;
  const {first,second,third,fourth,fifth}=dataLanguage.education;
  return (
    <div>
      <VerticalTimeline layout="2-columns">
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        </VerticalTimelineElement> */}
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={fifth.time}
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<i class="fab fa-reacteurope icon-timeline"></i>}
        >
         <h3 className="vertical-timeline-element-title">{fifth.h3}</h3>
          <h4 className="vertical-timeline-element-subtitle">{fifth.h4}</h4>
          {/* <p>{first.p}</p> */}
          <p>
            Link Demo:{" "}
            <a   style={{
                color: "white",
                textDecoration: "none",
                /* letter-spacing: 0px, */
                marginLeft: "2em",
              }} href="https://oyasumy.github.io/react-demo-bookstore/" target="_blank" rel="noreferrer">
              {" "}
              HEAR
            </a>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={fourth.time}
          contentStyle={{ background: "#30475e", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #30475e" }}
          iconStyle={{ background: "#30475e", color: "#fff" }}
          icon={<i class="fab fa-node icon-timeline"></i>}
        >
          <h3 className="vertical-timeline-element-title">{fourth.h3}</h3>
          <h4 className="vertical-timeline-element-subtitle">{fourth.h4}</h4>
          {/* <p>{first.p}</p> */}
          <p>
            Link Website:{" "}
            <a
              style={{
                color: "white",
                textDecoration: "none",
                /* letter-spacing: 0px, */
                marginLeft: "2em",
              }}
              href="https://oyasumy.github.io/react-demo-bookstore/"
              target="_blank"
              rel="noreferrer">
              {" "}
              HEAR
            </a>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={third.time}
          contentStyle={{ background: "#f05454", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #f05454" }}
          iconStyle={{ background: "#f05454", color: "#fff" }}
          icon={<i class="fab fa-react icon-timeline"></i>}
        >
          <h3 className="vertical-timeline-element-title">{third.h3}</h3>
          <h4 className="vertical-timeline-element-subtitle">{third.h4}</h4>
          <p>{third.p}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={second.time}
          contentStyle={{ background: "#e8e8e8", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #e8e8e8" }}
          iconStyle={{ background: "#e8e8e8", color: "#fff" }}
          icon={<i class="fab fa-html5 icon-timeline"></i>}
        >
         <h3 className="vertical-timeline-element-title">{second.h3}</h3>
          <h4 className="vertical-timeline-element-subtitle">{second.h4}</h4>
          <p>{second.p}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={first.time}
          contentStyle={{ background: "#222831", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #222831" }}
          iconStyle={{ background: "#222831", color: "#fff" }}
          icon={<i class="fas fa-synagogue icon-timeline"></i>}
        >
          <h3 className="vertical-timeline-element-title">{first.h3}</h3>
          <h4 className="vertical-timeline-element-subtitle">{first.h4}</h4>
          <p>{first.p}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement iconStyle={{ background: "#456268", color: "#fff" }} icon={<i class="fab fa-jedi-order icon-timeline"></i>} />
      </VerticalTimeline>
    </div>
  );
};
const mapStateToProps = (state) => ({
  dataLanguage:state.stateLanguage.language
});


const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(TimeLine);
