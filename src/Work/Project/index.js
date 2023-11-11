import "./styles.css";
import PropTypes from "prop-types";

const Project = ({ alt, image, onClick }) => {
  return (
    <div className="projectItem" onClick={onClick}>
      <img src={image} alt={alt} />
    </div>
  );
};

Project.propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Project;
