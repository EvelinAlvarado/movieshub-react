import PropTypes from "prop-types";
import "./InputField.css";

export const InputField = ({ inputId, placeholderText, inputType }) => {
  return (
    <label htmlFor={inputId} className="label-input">
      <input
        className="input-field"
        type={inputType}
        name={inputId}
        id={inputId}
        placeholder={placeholderText}
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
