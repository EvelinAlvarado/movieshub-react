import { useState } from "react";
import PropTypes from "prop-types";
import "./InputField.css";

export const InputField = ({ inputId, placeholderText, inputType }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    // console.log(event);
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
    console.log(newInputValue);
  };

  return (
    <label htmlFor={inputId} className="label-input">
      <input
        className="input-field"
        type={inputType}
        name={inputId}
        id={inputId}
        placeholder={placeholderText}
        value={inputValue}
        onChange={onInputChange}
        required
      />
    </label>
  );
};

InputField.propTypes = {
  inputId: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
};
