import PropTypes from "prop-types";
import "./CategorySelector.css";

export const CategorySelector = () => {
  return (
    <label htmlFor="category-select" className="category-select">
      <select name="categories">
        <option value="" selected>
          Choose a category:
        </option>
        <option value="action">Action</option>
        <option value="crime">Crime</option>
        <option value="drama">Drama</option>
        <option value="thriller">Thriller</option>
      </select>
    </label>
  );
};
