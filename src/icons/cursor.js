import PropTypes from "prop-types";

const Cursor = ({ cursorPosition }) => (
  <svg
    className="cursor"
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    style={{ left: cursorPosition.x, top: cursorPosition.y }}
  >
    <circle cx="30" cy="30" r="10" fill="white" />
    <circle
      cx="30"
      cy="30"
      r="29"
      stroke="white"
      strokeWidth="1"
      fill="transparent"
    />
    Sorry, your browser does not support inline SVG.
  </svg>
);

Cursor.propTypes = {
  cursorPosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

export default Cursor;
