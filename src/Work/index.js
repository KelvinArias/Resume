import { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import cx from "classnames";
import img0 from "../images/homeProjects/homeEquipco.png";
import img1 from "../images/homeProjects/equipcoMain.png";
import img2 from "../images/homeProjects/homeCecm.png";
import img3 from "../images/homeProjects/homeGoCurrency.png";
import img4 from "../images/homeProjects/homeCurrency.png";
import img5 from "../images/homeProjects/homeStartDesign.png";
import img6 from "../images/homeProjects/homeIntelix.png";
import img7 from "../images/homeProjects/homeGrupoIro.png";
import img8 from "../images/equipco/homeEquipco.png";
import logo from "../images/equipco/equipcoLogoNew.png";

const projectsInfo = [
  {
    id: "equipcoMain",
    portrait: img0,
    alt: "equipcoMain home page",
  },
  {
    id: "equipco",
    portrait: img1,
    alt: "equipco home page",
  },
  {
    id: "cecm",
    portrait: img2,
    alt: "cecm home page",
  },
  {
    id: "goCurrency",
    portrait: img3,
    alt: "goCurrency home page",
  },
  {
    id: "currencyPay",
    portrait: img4,
    alt: "currencyPay home page",
  },
  {
    id: "startDesign",
    portrait: img5,
    alt: "start design home page",
  },
  {
    id: "intelix",
    portrait: img6,
    alt: "intelix home page",
  },
  {
    id: "grupoIro",
    portrait: img7,
    alt: "grupo iro home page",
  },
];

const ShowProjectInfo = (selectedProjectInfo) => {
  return (
    <div className="projectModal">
      <div className="projectContent">
        <img className="projectImg" src={img8} />
        <h2>Equipco</h2>
        <div className="projectInformation">
          <ul className="projectList">
            <li>
              Date: <span>02/2021 - 12/2022</span>
            </li>
            <li>
              Position: <span>Full-stack Developer</span>
            </li>
            <li>
              Description:
              <span>
                Equipco is an Chilenean startup which is creating an app for
                team collaboration
              </span>
            </li>
            <li>
              Skills:
              <span>
                React, Javascript, MongoDb, Node, RethinkDB, Redux, Html, Css
              </span>
            </li>
          </ul>
          <div className="projectListImgContainer">
            <img src={logo} />
          </div>
        </div>
        <div className="borderLeft"></div>
        <div className="borderLeftBottom"></div>
        <div className="borderRight"></div>
        <div className="borderRightBottom"></div>
      </div>
    </div>
  );
};

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
              image={info.portrait}
              onClick={() => setSelectedProject(info.id)}
            />
          ))}
        </div>
        {selectedProjectInfo && (
          <ShowProjectInfo selectedProjectInfo={selectedProjectInfo} />
        )}
      </div>
    </div>
  );
};

Work.propTypes = {
  navigation: PropTypes.string.isRequired,
  setNavigation: PropTypes.func.isRequired,
};

export default Work;
