import { WORK, HOME, CONTACT } from "../const";
import PropTypes from "prop-types";

const Cursor = ({ navigation }) => (
  <svg
    className="curve"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 499 499"
    width="200"
    height="200"
    preserveAspectRatio="xMidYMid meet"
  >
    <g>
      <path
        d="M312,13 C360,90 380,300 348,450"
        style={{ strokeDashoffset: navigation !== HOME ? 1000 : 0 }}
      ></path>
    </g>
  </svg>
);

Cursor.propTypes = {
  navigation: PropTypes.oneOf([WORK, HOME, CONTACT]),
};

export default Cursor;
