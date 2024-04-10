import PropTypes from "prop-types";
import styled from "styled-components";
import "./Button.css";

const Btn = styled.button`
  border-radius: 7px;
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  border: none;
  cursor: pointer;
  transition: border-color 0.25s;
  font-size: var(--font-size-body-small);
`;

export const Button = ({ toolTip, buttonText, isPrimaryButton, icon }) => {
  const buttonClassName = isPrimaryButton
    ? "primary-button"
    : "secondary-button";
  const combinedClassName = `button ${buttonClassName || ""}`;

  return (
    <Btn title={toolTip} className={combinedClassName}>
      {icon && icon}
      {buttonText}
    </Btn>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  isPrimaryButton: PropTypes.bool,
  toolTip: PropTypes.string,
  icon: PropTypes.object,
};
