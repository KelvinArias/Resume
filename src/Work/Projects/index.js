import { useState } from "react";
import "./styles.css";
import PropTypes from "prop-types";
import ExpandableCard from "../ExpandableCard";
import projectsInfo from "../data";
import cx from "classnames";

const Projects = ({ setModal, showModal }) => {
  const [selectedProject, setSelectedProject] = useState("");
  const [arrowPosition, setArrowPosition] = useState("down");
  const selectedProjectInfo = projectsInfo.find(
    (project) => project.id === selectedProject
  );

  return (
    <div
      className={cx("projects", {
        projectsUp: arrowPosition === "up" && !showModal,
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
          down: arrowPosition === "down",
          up: arrowPosition === "up",
          displayNone: showModal,
        })}
        onClick={() =>
          setArrowPosition(arrowPosition === "down" ? "up" : "down")
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path
            fill="white"
            d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"
          />
        </svg>
      </div>
    </div>
  );
};

Projects.propTypes = {
  setModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

export default Projects;
