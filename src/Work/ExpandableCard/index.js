import { useState } from "react";
import { MagicCard } from "react-magic-motion";
import "react-magic-motion/card.css";
import cx from "classnames";
import "./styles.css";
import PropTypes from "prop-types";

export default function ExpandableCard({
  alt,
  image,
  selectedProjectInfo,
  onClick,
}) {
  const [isCardExpanded, setIsCardExpanded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [activeImageHadChanged, setActiveImageHadChanged] = useState(false);
  const { companyName, images, date, position, description, skills, logo } =
    selectedProjectInfo || {};

  const handleScroll = (event) => {
    const delta = event.deltaY;
    const numImages = images.length;
    setActiveImageHadChanged(true);
    setActiveImage(
      (activeImage + numImages + (delta > 0 ? 1 : -1)) % numImages
    );
    setTimeout(() => {
      setActiveImageHadChanged(false);
    }, 500);
  };

  return (
    <MagicCard
      isCardExpanded={isCardExpanded}
      onBackgroundFadeClick={() => {
        setIsCardExpanded(false);
        onClick();
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className={cx("projectItem", {
          isCardExpanded,
          isCardCollapsed: !isCardExpanded,
        })}
        onClick={() => {
          setIsCardExpanded(true);
          !isCardExpanded && onClick();
        }}
        onWheel={(e) => isCardExpanded && handleScroll(e)}
      >
        <div className="contentContainer">
          <img
            className={cx({
              isImageExpanded: isCardExpanded,
              isImageCollapsed: !isCardExpanded,
              activeImageHadChanged,
            })}
            alt={isCardExpanded ? images[activeImage].alt : alt}
            src={isCardExpanded ? images[activeImage].src : image}
          />
          {isCardExpanded && (
            <div
              className="pointsContainer"
              style={{ height: `${images.length * 20 + 20}px` }}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className={cx("projectPoint", {
                    active: activeImage === index,
                  })}
                  onClick={() => setActiveImage(index)}
                />
              ))}
            </div>
          )}

          {isCardExpanded && selectedProjectInfo && (
            <section className="projectContent">
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
            </section>
          )}
        </div>
      </div>
    </MagicCard>
  );
}

ExpandableCard.propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  selectedProjectInfo: PropTypes.shape({
    companyName: PropTypes.string,
    date: PropTypes.string,
    position: PropTypes.string,
    skills: PropTypes.string,
    logo: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
  }),
};
