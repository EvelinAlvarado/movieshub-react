import { Link } from "react-router-dom";
import { Button } from "../../Button/Button.jsx";
import { IoIosAddCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { clientServices } from "../../../service/client-service.js";
import "./CategorySelector.css";

// console.log(clientServices.categoriesList());

export const CategorySelector = () => {
  const [categories, setCategories] = useState([]);
  const [optionValue, setOptionValue] = useState("");

  // Effect to fetch categories list from the server
  useEffect(() => {
    const fetchCategoriesList = async () => {
      try {
        const fetchedCategories = await clientServices.categoriesList();
        if (!fetchedCategories || fetchedCategories.length === 0) {
          throw new Error("No categories found.");
        } else {
          // Update
          setCategories(fetchedCategories);
        }
      } catch (error) {
        alert("An error ocurred: " + error);
      }
    };
    fetchCategoriesList();
  }, []); // Dependency array is empty, so it runs only once on mount

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
