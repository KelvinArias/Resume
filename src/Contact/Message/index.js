import PropTypes from "prop-types";
import CircleIcon from "../../icons/circle";

const Message = ({ header, message, icon }) => (
  <div className="thanksContainer">
    <div className="thanks">
      <h2 className="mb-10">{header}</h2>
      <p className="thanksMessage">{message}</p>
      {icon}
      <CircleIcon />
    </div>
  </div>
);

Message.propTypes = {
  header: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default Message;
