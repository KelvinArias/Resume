import { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import cx from "classnames";
import ShowProject from "./ShowProject";
import projectsInfo from "./data";

const Project = ({ alt, image, onClick }) => {
  return (
    <div className="projectItem" onClick={onClick}>
      <img src={image} alt={alt} />
    </div>
  );
};

const Work = ({ navigation, setModal }) => {
  const [selectedProject, setSelectedProject] = useState("");
  const [arrowPosition, setArrowPosition] = useState("down");
  const selectedProjectInfo = projectsInfo.find(
    (project) => project.id === selectedProject
  );

  return (
    <div className={cx("workContainer", { isNotWork: navigation !== "work" })}>
      <div className="workContent">
        <div className="leftContainer">
          <div className="titleContainer">
            <h2>Work</h2>
            <p>Professional experience over the years.</p>
          </div>
        </div>
        <div className={cx("projects", { projectsUp: arrowPosition === "up" })}>
          {projectsInfo.map((info) => (
            <Project
              key={info.id}
              image={info.portrait.src}
              alt={info.portrait.alt}
              onClick={() => {
                setSelectedProject(info.id);
                setModal(true);
              }}
            />
          ))}
          <div
            className={cx("arrow", {
              down: arrowPosition === "down",
              up: arrowPosition === "up",
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
        {selectedProjectInfo && (
          <ShowProject
            selectedProjectInfo={selectedProjectInfo}
            onClose={() => {
              setSelectedProject("");
              setModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

Work.propTypes = {
  navigation: PropTypes.string.isRequired,
};

export default Work;
