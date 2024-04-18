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

export const FormNewCategory = ({ updateCategories, categories }) => {
  /*  const [categories, setCategories] = useState([]); */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const outerTheme = useTheme();

  //Function to fetch category list
  /* const fetchCategories = async () => {
    try {
      const categoriesData = await clientServices.categoriesList();
      setCategories(categoriesData);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []); */

  // Function to handle form submission
  const handleSubmitForm = handleSubmit(async (data) => {
    const categoryData = { ...data, id: uuidv4() };
    try {
      const response = await clientServices.registerNewCategory(categoryData);
      console.log("Response from server: ", response);
      updateCategories(); // Updated category list after added a new category
    } catch (error) {
      console.error(error);
    }
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
  updateCategories: PropTypes.func,
};
