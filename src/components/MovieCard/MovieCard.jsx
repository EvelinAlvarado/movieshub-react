import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
import { clientServices } from "../../service/client-service";

const MovieCardDiv = styled.div`
  position: relative;
  img {
    max-width: 90%;
    cursor: pointer;
    box-shadow: var(--shadow);
    border-radius: 7px;
    &:hover {
      box-sizing: border-box;
      border: 2px solid var(--primary-color);
    }
  }
`;

const StyledClearIcon = styled(DeleteIcon)`
  &:hover {
    color: var(--error-dark-color);
  }
`;

export const MovieCard = ({ posterUrl, title, id, onMovieDeleted }) => {
  const handleDeleteClick = async () => {
    console.log(`Deleting movie with id: ${id}`);
    try {
      await clientServices.deleteMovie(id);
      onMovieDeleted(id); //updated movie list
    } catch (error) {
      console.error("Error deleting movie: ", error.message);
    }
  };

  return (
    <MovieCardDiv>
      <img src={posterUrl} alt={title} />
      <IconButton
        sx={{ position: "absolute", top: "0", right: "1rem" }}
        onClick={handleDeleteClick}
      >
        <StyledClearIcon color="action" fontSize="small" />
      </IconButton>
    </MovieCardDiv>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onMovieDeleted: PropTypes.func.isRequired,
};
