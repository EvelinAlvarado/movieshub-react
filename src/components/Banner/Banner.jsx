import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button.jsx";
import "./Banner.css";

export const Banner = ({
  backgroundImageUrl,
  title,
  synopsis,
  releaseYear,
  duration,
}) => {
  const bannerStyle = {
    backgroundImage: `linear-gradient(90deg, rgba(25, 25, 25, 1) 0%, rgba(25, 25, 25, 0.5) 50%), url(${backgroundImageUrl})`,
  };

  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${isWideScreen ? "container" : ""}`}>
      <section className="movie-banner" style={bannerStyle}>
        <div className="banner-content">
          <h1>{title}</h1>
          <p>{synopsis}</p>
          <p>
            <i className="bi bi-calendar-fill"></i>
            {releaseYear}
          </p>
          <p>
            <i className="bi bi-clock-fill"></i>
            {duration}
          </p>
          <Button buttonText="Play Now" isPrimaryButton={true} />
        </div>
      </section>
    </div>
  );
};

Banner.propTypes = {
  backgroundImageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  releaseYear: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};
