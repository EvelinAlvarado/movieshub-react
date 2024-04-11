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

  &.primary-button {
    background-color: var(--primary-color);
  }

  &.primary-button:hover {
    background-color: #373cc5;
  }

  &.secondary-button {
    background-color: var(--black-lighter-color);
  }

  &.secondary-button:hover {
    background-color: #807e7e;
  }
`;

export const Button = ({ toolTip, buttonText, isPrimaryButton, icon }) => {
  const buttonClassName = isPrimaryButton
    ? "primary-button"
    : "secondary-button";

  return (
    <Btn title={toolTip} className={buttonClassName}>
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
