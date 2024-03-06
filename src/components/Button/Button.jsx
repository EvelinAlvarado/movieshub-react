import PropTypes from "prop-types";
import "./Button.css";

export const Button = ({ title, isPrimaryButton }) => {
  const buttonClassName = isPrimaryButton
    ? "primary-button"
    : "secondary-button";
  const combinedClassName = `button ${buttonClassName || ""}`;

  return <button className={combinedClassName}>{title}</button>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isPrimaryButton: PropTypes.string,
};
