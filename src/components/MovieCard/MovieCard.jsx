import PropTypes from "prop-types";
import "./MovieCard.css";

export const MovieCard = ({ posterUrl, title }) => {
  return (
    <div className="movie-card">
      <img src={posterUrl} alt={title} />
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
};
