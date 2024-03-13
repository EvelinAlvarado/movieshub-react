import PropTypes from "prop-types";
import "./Button.css";

export const Button = ({ toolTip, buttonText, isPrimaryButton, icon }) => {
  const buttonClassName = isPrimaryButton
    ? "primary-button"
    : "secondary-button";
  const combinedClassName = `button ${buttonClassName || ""}`;

  return (
    <button title={toolTip} className={combinedClassName}>
      {icon && icon}
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  isPrimaryButton: PropTypes.bool,
  toolTip: PropTypes.string,
  icon: PropTypes.object,
};
