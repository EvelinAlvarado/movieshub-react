import { InputField } from "../InputField/InputField.jsx";
import { Button } from "../Button/Button.jsx";
import "./FormNewMovie.css";
import { CategorySelector } from "../CategorySelector/CategorySelector.jsx";

export const FormNewMovie = () => {
  return (
    <form className="form-new-video container">
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
        <CategorySelector />
        <label htmlFor="movie-synopsis" className="movie-synopsis">
          <textarea
            className="movie-synopsis-textarea"
            name="movie-synopsis"
            placeholder="Enter movie synopsis..."
            required
          ></textarea>
        </label>
        <InputField inputType="text" inputId="user" placeholderText="User" />
      </div>
      <div className="form-new-video__buttons">
        <Button title="Save" isPrimaryButton={true} />
        <Button title="Clear" isPrimaryButton={false} />
      </div>
    </form>
  );
};
