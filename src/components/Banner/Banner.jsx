import "./Banner.css";
import PropTypes from "prop-types";
import { Button } from "../Button/Button.jsx";

export const Banner = ({
  backgroundImageUrl,
  title,
  description,
  releaseYear,
  duration,
}) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };
  return (
    <section className="movie-banner container" style={bannerStyle}>
      <div className="banner-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>
          <i className="bi bi-calendar-fill"></i>
          {releaseYear}
        </p>
        <p>
          <i className="bi bi-clock-fill"></i>
          {duration}
        </p>
        <Button title="Play Now" addClassName="play-now-button" />
      </div>
    </section>
  );
};

Banner.propTypes = {
  backgroundImageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  releaseYear: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};
