import { useState } from "react";
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { customTheme } from "../InputsStyles.js";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "../../Button/Button.jsx";
import { Container } from "../../UI/index.js";
import {
  TitleForm,
  DivInputs,
  DivButtons,
  SelectDiv,
} from "./FormNewMovieStyle.js";

export const FormNewMovie = ({ categories }) => {
  const [movieData, setMovieData] = useState({
    title: "",
    synopsis: "",
    releaseYear: "",
    posterUrl: "",
    backgroundImageUrl: "",
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const handleSubmitForm = handleSubmit((data) => {
    console.log(data);
  });

  const outerTheme = useTheme();

  return (
    <Container as="form" onSubmit={handleSubmitForm}>
      <TitleForm>New Film</TitleForm>
      <DivInputs>
        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField
            label="Title"
            variant="filled"
            type="text"
            {...register("title", { required: true })}
            error={Boolean(errors.title)}
            helperText={
              errors.title &&
              errors.title.type === "required" &&
              "This field is required"
            }
          />
          <TextField
            label="Year"
            variant="filled"
            type="text"
            {...register("releaseYear")}
          />
          <TextField
            label="Duration"
            variant="filled"
            type="text"
            {...register("duration")}
          />
          <TextField
            label="Link for background movie"
            variant="filled"
            type="text"
            {...register("backgroundImageUrl", { required: true })}
            error={Boolean(errors.backgroundImageUrl)}
            helperText={
              errors.backgroundImageUrl &&
              errors.backgroundImageUrl.type === "required" &&
              "This field is required"
            }
          />
          <TextField
            label="Link for poster movie"
            variant="filled"
            type="text"
            {...register("posterUrl", { required: true })}
            error={Boolean(errors.posterUrl)}
            helperText={
              errors.posterUrl &&
              errors.posterUrl.type === "required" &&
              "This field is required"
            }
          />
          <SelectDiv>
            <FormControl
              fullWidth
              variant="filled"
              error={Boolean(errors.category)}
            >
              <InputLabel>Choose a category:</InputLabel>
              <Controller
                name="category"
                control={control}
                rules={{ required: true }}
                defaultValue="" // Assign a default value
                render={({ field }) => (
                  <Select {...field}>
                    {categories.map((category) => {
                      return (
                        <MenuItem
                          key={category.id}
                          value={category.categoryName}
                        >
                          {category.categoryName}
                        </MenuItem>
                      );
                    })}
                  </Select>
                )}
              />
              {errors.category && (
                <FormHelperText>Must select a category</FormHelperText>
              )}
            </FormControl>
            <Link to="/form-new-category">
              <Fab color="primary" aria-label="add" title="Add new category">
                <AddIcon />
              </Fab>
            </Link>
          </SelectDiv>
          <TextField
            label="Enter movie synopsis.."
            multiline
            minRows={3}
            variant="filled"
            {...register("synopsis")}
          />
        </ThemeProvider>
      </DivInputs>
      <DivButtons>
        <Button buttonText="Save" isPrimaryButton={true} />
        <Button buttonText="Clear" isPrimaryButton={false} />
      </DivButtons>
    </Container>
  );
};

FormNewMovie.propTypes = {
  categories: PropTypes.array,
};
