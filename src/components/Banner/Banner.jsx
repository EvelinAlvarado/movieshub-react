import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "../Button/Button.jsx";
import { MovieBanner, BannerContent } from "./BannerStyles.js";

const ContainerStyle = styled.div`
  padding-right: 0;
  padding-left: 0;
`;
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

  return (
    <ContainerStyle>
      <MovieBanner style={bannerStyle}>
        <BannerContent>
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
        </BannerContent>
      </MovieBanner>
    </ContainerStyle>
  );
};

Banner.propTypes = {
  backgroundImageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  releaseYear: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};
