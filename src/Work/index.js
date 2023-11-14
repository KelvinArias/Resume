import PropTypes from "prop-types";
import "./styles.css";
import cx from "classnames";
import Projects from "./Projects";

const Work = ({ navigation, setModal, showModal }) => {
  return (
    <div className={cx("workContainer", { isNotWork: navigation !== "work" })}>
      <div className="workContent">
        <div className="leftContainer">
          <div className="titleContainer">
            <h2>Work</h2>
            <p>Professional experience over the years.</p>
          </div>
        </div>
        <Projects setModal={setModal} showModal={showModal} />
      </div>
    </div>
  );
};

Work.propTypes = {
  navigation: PropTypes.string.isRequired,
};

export default Work;
