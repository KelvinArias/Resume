import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import cx from "classnames";
import "./styles.css";

const ShowProject = ({ selectedProjectInfo, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);
  const imagesPoint = [];
  const { companyName, images, date, position, description, skills, logo } =
    selectedProjectInfo;

  const handleScroll = (event) => {
    const delta = event.deltaY;
    const numImages = images.length;
    setTimeout(() => {
      setActiveImage(
        (activeImage + numImages + (delta > 0 ? 1 : -1)) % numImages
      );
    }, 500);
  };

  return (
    <div className="projectModal" onClick={onClose} onWheel={handleScroll}>
      <div className={"projectContent"} onClick={(e) => e.stopPropagation()}>
        <div className="imgContainer">
          {images.map((img, index) => {
            imagesPoint.push(
              <div
                key={index}
                className={cx("projectPoint", {
                  active: activeImage === index,
                })}
                onClick={() => setActiveImage(index)}
              />
            );
            // previous
            const IsTherePreviousImage = activeImage - 1 < 0;
            const IsPreviousImage = images.length - 1 === index;
            const IsLastImage = activeImage - 1 === index;

            // next
            const IsThereIsNextImage = images[activeImage + 1];
            const IsNextImage = activeImage + 1 === index;
            const IsFirstImage = index === 0;

            return (
              <img
                className={cx("projectImage", {
                  previous: IsTherePreviousImage
                    ? IsPreviousImage
                    : IsLastImage,
                  active: activeImage === index,
                  next: IsThereIsNextImage ? IsNextImage : IsFirstImage,
                })}
                key={img.alt}
                src={img.src}
                alt={img.alt}
              />
            );
          })}
          <div
            className="pointsContainer"
            style={{ height: `${images.length * 20 + 20}px` }}
          >
            {imagesPoint}
          </div>
        </div>
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
