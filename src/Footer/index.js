import { HOME, CONTACT, WORK } from "../const";
import cx from "classnames";
import PropTypes from "prop-types";
import "./styles.css";

const Footer = ({ navigation, setNavigation }) => {
  return (
    <footer className="footer">
      <button
        className={cx("btn", { selected: navigation === CONTACT })}
        type="button"
        onClick={() => setNavigation(CONTACT)}
      >
        Contact
      </button>
      <button
        className={cx("btn", { selected: navigation === HOME })}
        type="button"
        onClick={() => setNavigation(HOME)}
      >
        Home
      </button>
      <button
        className={cx("btn", { selected: navigation === WORK })}
        type="button"
        onClick={() => setNavigation(WORK)}
      >
        Work
      </button>
    </footer>
  );
};

Footer.propTypes = {
  navigation: PropTypes.string.isRequired,
  setNavigation: PropTypes.func.isRequired,
};

export default Footer;
