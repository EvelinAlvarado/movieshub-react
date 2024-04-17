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
import "./FormNewCategory.css";

export const FormNewCategory = ({ categories }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const outerTheme = useTheme();

  // Function to handle form submission
  const handleSubmitForm = handleSubmit((data) => {
    const categoryData = { ...data, id: uuidv4() };
    console.log(categoryData);
  });
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
              defaultValue="#c2c2c2"
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
          <Button buttonText="Save" isPrimaryButton={true} />
          <Button buttonText="Clear" isPrimaryButton={false} />
        </DivButtons>
      </Container>
      <Container>
        <CategoriesTable categories={categories} />
      </Container>
    </>
  );
};

FormNewCategory.propTypes = {
  categories: PropTypes.array,
};
