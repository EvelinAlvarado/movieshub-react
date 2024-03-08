import PropTypes from "prop-types";
import "./Button.css";

export const Button = ({ toolTip, buttonText, isPrimaryButton }) => {
  const buttonClassName = isPrimaryButton
    ? "primary-button"
    : "secondary-button";
  const combinedClassName = `button ${buttonClassName || ""}`;

  return (
    <button title={toolTip} className={combinedClassName}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  isPrimaryButton: PropTypes.bool,
  toolTip: PropTypes.string,
};
