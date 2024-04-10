import PropTypes from "prop-types";
import styled from "styled-components";

const MovieCardDiv = styled.div`
  padding-left: 1rem;
  img {
    max-width: 90%;
    cursor: pointer;
    box-shadow: var(--shadow);
    border-radius: 7px;
    img:hover {
      box-sizing: border-box;
      border: 2px solid var(--primary-color);
    }
  }
`;

export const MovieCard = ({ posterUrl, title }) => {
  return (
    <MovieCardDiv>
      <img src={posterUrl} alt={title} />
    </MovieCardDiv>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
};
