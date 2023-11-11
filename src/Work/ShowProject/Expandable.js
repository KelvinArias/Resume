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
  const { companyName, images, date, position, description, skills, logo } =
    selectedProjectInfo || {};

  return (
    <MagicCard
      isCardExpanded={isCardExpanded}
      onBackgroundFadeClick={() => setIsCardExpanded(false)}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className={cx("projectItem", {
          isCardExpanded,
          isCardCollapsed: !isCardExpanded,
        })}
      >
        <div className="contentContainer">
          <img
            className={cx({
              isImageExpanded: isCardExpanded,
              isImageCollapsed: !isCardExpanded,
            })}
            alt={alt}
            src={image}
            onClick={() => {
              setIsCardExpanded(!isCardExpanded);
              onClick();
            }}
          />
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
