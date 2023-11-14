import { useState } from "react";
import "./styles.css";
import PropTypes from "prop-types";
import ExpandableCard from "../ExpandableCard";
import projectsInfo from "../data";
import cx from "classnames";
import ArrowIcon from "../../icons/arrow";

const Projects = ({ setModal, showModal }) => {
  const [selectedProject, setSelectedProject] = useState("");
  const [isArrowDown, setArrowPosition] = useState(true);
  const selectedProjectInfo = projectsInfo.find(
    (project) => project.id === selectedProject
  );

  return (
    <div
      className={cx("projects", {
        projectsUp: !isArrowDown && !showModal,
        positionMobile: !showModal,
      })}
    >
      {projectsInfo.map((info) => (
        <ExpandableCard
          key={info.id}
          image={info.portrait.src}
          alt={info.portrait.alt}
          onClick={() => {
            setSelectedProject(info.id);
            setModal(!showModal);
          }}
          selectedProjectInfo={selectedProjectInfo}
        />
      ))}
      <div
        className={cx("arrow", {
          down: isArrowDown,
          up: !isArrowDown,
          displayNone: showModal,
        })}
        onClick={() => setArrowPosition(!isArrowDown)}
      >
        <ArrowIcon />
      </div>
    </div>
  );
};

Projects.propTypes = {
  setModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

export default Projects;
