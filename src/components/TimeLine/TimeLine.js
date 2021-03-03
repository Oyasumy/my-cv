import { connect } from "react-redux";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { compose } from "redux";
import TimeLineElement from "../../commons/TimeLineElement";
import TimeLineElementLink from "../../commons/TimeLineElementLink";
const TimeLine = (props) => {
  const { dataLanguage } = props;
  const dataEducation = dataLanguage.education;
  return (
    <div>
      <VerticalTimeline layout="2-columns">
        {dataEducation
          .slice(0)
          .reverse()
          .map((el, i) => {
            if (el && el.link) {
              return <TimeLineElementLink el={el} />;
            } else {
              return <TimeLineElement el={el} />;
            }
          })}
        <VerticalTimelineElement iconStyle={{ background: "#ec4646", color: "#fff" }} icon={<i className="fab fa-jedi-order icon-timeline"></i>} />
      </VerticalTimeline>
    </div>
  );
};
const mapStateToProps = (state) => ({
  dataLanguage: state.stateLanguage.language,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(TimeLine);
