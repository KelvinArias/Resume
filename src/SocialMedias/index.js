import "./styles.css";
import GitHubIcon from "../icons/github";
import LinkedinIcon from "../icons/linkedin";
import PropTypes from "prop-types";
import cx from "classnames";

const SocialMedias = ({ modalIsOpen }) => {
  return (
    <aside className={cx("social", { behind: modalIsOpen })}>
      <a
        aria-label="Know more about me on GitHub"
        className="socialIcon"
        href="https://github.com/KelvinArias"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </a>
      <a
        aria-label="Know more about me on Linkedin"
        className="socialIcon"
        href="https://www.linkedin.com/in/kelvin-arias-cv21/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinIcon />
      </a>
    </aside>
  );
};

SocialMedias.prototype = {
  modalIsOpen: PropTypes.bool.isRequired,
};

export default SocialMedias;
