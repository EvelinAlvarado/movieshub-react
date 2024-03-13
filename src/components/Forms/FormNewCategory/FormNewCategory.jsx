import { InputField } from "../InputField/InputField.jsx";
import { Button } from "../../Button/Button.jsx";
import "./FormNewCategory.css";
import { useState, useEffect } from "react";

export const FormNewCategory = () => {
  /* useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const initialColor = rootStyles
      .getPropertyValue("--category-color1")
      .trim();
    setColorPicker(initialColor);
  }, []); */

  const [colorPicker, setColorPicker] = useState("");

  const onColoPickerChange = (event) => {
    console.log(event.target.value);
    setColorPicker(event.target.value);
  };
  return (
    <form className="form-new-video container">
      <h2>New Category</h2>
      <div className="form-new-video__inputs">
        <InputField
          inputType="text"
          inputId="title"
          placeholderText="Category"
        />
        <label htmlFor="color-picker" className="color-picker">
          Select your favorite color:
          <input
            type="color"
            name="color-picker"
            id="color-picker"
            value={colorPicker}
            onChange={onColoPickerChange}
          />
        </label>
        <InputField inputType="text" inputId="user" placeholderText="User" />
      </div>
      <div className="form-new-video__buttons">
        <Button buttonText="Save" isPrimaryButton={true} />
        <Button buttonText="Clear" isPrimaryButton={false} />
      </div>
    </form>
  );
};
