import { InputField } from "../InputField/InputField.jsx";
import { Button } from "../../Button/Button.jsx";
import { CategorySelector } from "../CategorySelector/CategorySelector.jsx";
import { useState } from "react";
import "./FormNewMovie.css";

export const FormNewMovie = ({ categories }) => {
  const [textareaValue, setTextareaValue] = useState("");

  const onTextareaChange = (event) => {
    const newTextareaValue = event.target.value;
    setTextareaValue(newTextareaValue);
    // console.log(newTextareaValue);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  const onEnterPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <form
      className="form-new-video container"
      onSubmit={onSubmit}
      onKeyDown={onEnterPress}
    >
      <h2>New Film</h2>
      <div className="form-new-video__inputs">
        <InputField inputType="text" inputId="title" placeholderText="Title" />
        <InputField
          inputType="src"
          inputId="backgroundImageUrl"
          placeholderText="Link for background movie"
        />
        <InputField
          inputType="src"
          inputId="posterUrl"
          placeholderText="Link for poster movie"
        />
        <CategorySelector categories={categories} />
        <label htmlFor="movie-synopsis" className="movie-synopsis">
          <textarea
            className="movie-synopsis-textarea"
            name="movie-synopsis"
            placeholder="Enter movie synopsis..."
            value={textareaValue}
            onChange={onTextareaChange}
            required
          ></textarea>
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
