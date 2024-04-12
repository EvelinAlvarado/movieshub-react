import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { customTheme } from "../InputsStyles.js";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
  const [textareaValue, setTextareaValue] = useState("");
  const [optionValue, setOptionValue] = useState("");

  const onTextareaChange = (event) => {
    const newTextareaValue = event.target.value;
    setTextareaValue(newTextareaValue);
    console.log(newTextareaValue);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  /* const onEnterPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }; */

  // Function to handle category change
  const handleChangeCategoryValue = (event) => {
    // console.log(event);
    setOptionValue(event.target.value);
    // console.log(event.target.value);
  };

  const outerTheme = useTheme();

  return (
    <Container as="form" onSubmit={onSubmit}>
      <TitleForm>New Film</TitleForm>
      <DivInputs>
        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField label="Title" variant="filled" type="text" />
          <TextField
            label="Link for background movie"
            variant="filled"
            type="text"
          />
          <TextField
            label="Link for poster movie"
            variant="filled"
            type="text"
          />
          <SelectDiv>
            <FormControl fullWidth variant="filled">
              <InputLabel>Choose a category:</InputLabel>
              <Select
                id="demo-simple-select"
                value={optionValue}
                /* label="Choose a category:" */
                onChange={handleChangeCategoryValue}
              >
                {categories.map((category) => {
                  return (
                    <MenuItem key={category.id} value={category.categoryName}>
                      {category.categoryName}
                    </MenuItem>
                  );
                })}
              </Select>
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
            value={textareaValue}
            onChange={onTextareaChange}
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
