import PropTypes from "prop-types";
import "./styles.css";

const ShowProject = ({ selectedProjectInfo, onClose }) => {
  const { companyName, images, date, position, description, skills, logo } =
    selectedProjectInfo;
  return (
    <div className="projectModal" onClick={onClose}>
      <div className="projectContent" onClick={(e) => e.stopPropagation()}>
        <img className="projectImg" src={images[0].src} alt={images[0].alt} />
        <h2>{companyName}</h2>
        <div className="projectInformation">
          <ul className="projectList">
            <li>
              Date: <span>{date}</span>
            </li>
            <li>
              Position: <span>{position}</span>
            </li>
            <li>
              Description:
              <span>{description}</span>
            </li>
            <li>
              Skills:
              <span>{skills}</span>
            </li>
          </ul>
          <div className="projectListImgContainer">
            <img src={logo.src} alt={logo.alt} />
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

ShowProject.propTypes = {
  selectedProjectInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    portrait: PropTypes.shape({
      alt: PropTypes.string,
      src: PropTypes.node,
    }).isRequired,
    companyName: PropTypes.string,
    date: PropTypes.string,
    skills: PropTypes.string.isRequired,
    description: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        alt: PropTypes.string,
        src: PropTypes.node,
      })
    ).isRequired,
    logo: PropTypes.node,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ShowProject;
