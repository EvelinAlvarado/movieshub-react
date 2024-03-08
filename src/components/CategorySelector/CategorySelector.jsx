import { Link } from "react-router-dom";
import { Button } from "../Button/Button.jsx";
import { IoIosAddCircle } from "react-icons/io";
import PropTypes from "prop-types";

import "./CategorySelector.css";

export const CategorySelector = () => {
  let iconStyles = { fontSize: "1.5rem" };
  return (
    <label htmlFor="category-select" className="category-select">
      <select name="categories">
        <option value="" selected>
          Choose a category:
        </option>
        <option className="category-movie" value="action">
          Action
        </option>
        <option className="category-movie" value="crime">
          Crime
        </option>
        <option className="category-movie" value="drama">
          Drama
        </option>
        <option className="category-movie" value="thriller">
          Thriller
        </option>
      </select>
      <Link to="/form-new-category">
        <Button
          toolTip="Add new category"
          buttonText={<IoIosAddCircle style={iconStyles} />}
          isPrimaryButton={false}
        />
      </Link>
    </label>
  );
};
