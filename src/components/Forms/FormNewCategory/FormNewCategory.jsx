import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { Container } from "../../UI/index.js";
import { TextField } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { customTheme } from "../InputsStyles.js";
import {
  TitleForm,
  DivButtons,
  DivInputs,
} from "../FormNewMovie/FormNewMovieStyle.js";
import { CategoriesTable } from "../CategoriesTable/CategoriesTable.jsx";
import { Button } from "../../Button/Button.jsx";
import { clientServices } from "../../../service/client-service.js";
import "./FormNewCategory.css";

export const FormNewCategory = ({
  updateCategories,
  categories,
  onCategoryDeleted,
}) => {
  const [editingCategoryId, setEditingCategoryId] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // for editing
    reset,
  } = useForm({
    defaultValues: {
      categoryName: "",
      colorPicker: "#c2c2c2",
    },
  });

  const outerTheme = useTheme();

  //Function to handle category edit
  const handleEditClick = async (id) => {
    try {
      const categoryDetails = await clientServices.editCategory(id);
      // Set Values of the form fields with the category data
      setValue("categoryName", categoryDetails.categoryName);
      setValue("colorPicker", categoryDetails.colorPicker);
      console.log("Editing: ", categoryDetails);
      setEditingCategoryId(id);
    } catch (error) {
      console.error("Error fetching category details: ", error.message);
    }
  };

  // Function to handle category update
  const handleUpdateCategory = async (data) => {
    try {
      const { categoryName, colorPicker } = data;
      const response = await clientServices.updateCategory(
        categoryName,
        colorPicker,
        editingCategoryId //Use the ID of category in edition
      );
      console.log("Category updated successfully: ", response);

      //Update category on each movie to belong a modified category
      /* const moviesToUpdate = moviesList.filter(
        (movie) => movie.category === categoryName
      );
      moviesToUpdate.forEach(async (movie) => {
        await clientServices.updateMovieCategory(movie.id, categoryName);
      }); */

      /* const updatedMoviesList = moviesList.map((movie) => {
        if (movie.category === categoryName) {
          return { ...movie, category: categoryName };
        }
        return movie;
      });

      setMoviesList(updatedMoviesList); */
      updateCategories(); // Update category list after editing
      setEditingCategoryId(null); //restore
    } catch (error) {
      console.error("Error updating category: ", error.message);
    }
  };

  // Function to handle form submission
  const handleSubmitForm = handleSubmit(async (data) => {
    const categoryData = { ...data, id: uuidv4() };
    try {
      if (editingCategoryId) {
        await handleUpdateCategory(data);
      } else {
        const response = await clientServices.registerNewCategory(categoryData);
        console.log("New category added successfully: ", response);
        updateCategories(); // Updated category list after added a new category
      }
    } catch (error) {
      console.error("Error adding new category: ", error.message);
    }
    console.log(categoryData);
  });

  // const onClearButton = () => {
  //   console.log("Clear button clicked");
  //   setValue("categoryName", "");
  //   setValue("colorPicker", "#c2c2c2");
  //   /* setEditingCategoryId(null); */
  // };

  return (
    <>
      <Container as="form" onSubmit={handleSubmitForm}>
        <TitleForm>New Category</TitleForm>
        <DivInputs>
          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              label="Category"
              variant="filled"
              type="text"
              {...register("categoryName", { required: true })}
              error={Boolean(errors.categoryName)}
              helperText={
                errors.categoryName &&
                errors.categoryName.type === "required" &&
                "This field is required"
              }
            />
            <TextField
              label="Select a color"
              variant="filled"
              type="color"
              /* defaultValue="#c2c2c2" */
              {...register("colorPicker", {
                validate: (value) =>
                  value !== "#c2c2c2" || "Please select a color",
              })}
              error={Boolean(errors.colorPicker)}
              helperText={errors.colorPicker && errors.colorPicker.message}
            />
          </ThemeProvider>
        </DivInputs>
        <DivButtons>
          <Button
            type="submit"
            buttonText="Save"
            isPrimaryButton={true}
            /* onClick={handleUpdateCategory()} */
          />
          <Button
            type="button"
            buttonText="Clear"
            isPrimaryButton={false}
            onClick={() => reset()}
          />
        </DivButtons>
      </Container>
      <Container>
        <CategoriesTable
          categories={categories}
          onCategoryDeleted={onCategoryDeleted}
          handleEditClick={handleEditClick}
        />
      </Container>
    </>
  );
};

FormNewCategory.propTypes = {
  categories: PropTypes.array,
  /* moviesList: PropTypes.array,
  setMoviesList: PropTypes.array, */
  updateCategories: PropTypes.func,
  onCategoryDeleted: PropTypes.func.isRequired,
  onCategoryEdited: PropTypes.func.isRequired,
};
