import { Link } from "react-router-dom";
import { Button } from "../../Button/Button.jsx";
import { IoIosAddCircle } from "react-icons/io";
import { useState } from "react";
import "./CategorySelector.css";

export const CategorySelector = ({ categories }) => {
  const [optionValue, setOptionValue] = useState("");

  // Function to handle category change
  const onCategoryChange = (event) => {
    // console.log(event);
    setOptionValue(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <label htmlFor="category-select" className="category-select">
      <select
        name="categories"
        defaultValue=""
        required
        value={optionValue}
        onChange={onCategoryChange}
      >
        <option value="" disabled hidden>
          Choose a category:
        </option>
        {categories.map((category) => {
          return (
            <option
              key={category.id}
              className="category-movie"
              value={category.categoryName}
            >
              {category.categoryName}
            </option>
          );
        })}
      </select>
      <Link to="/form-new-category">
        <Button
          toolTip="Add new category"
          icon={<IoIosAddCircle style={{ fontSize: "1.5rem" }} />}
          isPrimaryButton={false}
        />
      </Link>
    </label>
  );
};
