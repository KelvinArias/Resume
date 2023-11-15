import { MagicTabSelect } from "react-magic-motion";
import { HOME, CONTACT, WORK } from "../const";
import cx from "classnames";
import PropTypes from "prop-types";
import "./styles.css";

const Tabs = [CONTACT, HOME, WORK];

const Footer = ({ navigation, setNavigation }) => {
  return (
    <footer className="footer">
      {Tabs.map((text) => (
        <button
          type="button"
          key={`tab-${text}`}
          onClick={() => setNavigation(text)}
          className={cx("btn", { selected: navigation === text })}
        >
          {text}

          {navigation === text && (
            <div className="magic">
              <MagicTabSelect
                id="underline"
                transition={{ type: "spring", bounce: 0.3 }}
              >
                <div className="magicTab" />
              </MagicTabSelect>
            </div>
          )}
        </button>
      ))}
    </footer>
  );
};

Footer.propTypes = {
  navigation: PropTypes.string.isRequired,
  setNavigation: PropTypes.func.isRequired,
};

export default Footer;
