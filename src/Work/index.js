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

const Work = ({ navigation }) => {
  const [selectedProject, setSelectedProject] = useState("");
  const selectedProjectInfo = projectsInfo.find(
    (project) => project.id === selectedProject
  );

  return (
    <div className={cx("workContainer", { isNotWork: navigation !== "work" })}>
      <div className="workContent">
        <div className="leftContainer">
          <div className="titleContainer">
            <h2>Work</h2>
            <p>Profesional and personal projects</p>
          </div>
        </div>
        <div className="projects">
          {projectsInfo.map((info) => (
            <Project
              key={info.id}
              image={info.portrait.src}
              alt={info.portrait.alt}
              onClick={() => setSelectedProject(info.id)}
            />
          ))}
        </div>
        {selectedProjectInfo && (
          <ShowProject
            selectedProjectInfo={selectedProjectInfo}
            onClose={() => setSelectedProject("")}
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
