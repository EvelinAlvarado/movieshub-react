import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import styled from "styled-components";
import { Banner } from "../Banner/Banner";
import { MovieCard } from "../MovieCard/MovieCard";
import { Container } from "../UI";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlidersContainer = styled(Container)`
  width: 100%;
  margin-bottom: 2rem;
`;

const SliderCategory = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
`;

const TitleCategory = styled.h3`
  margin: 1rem 0 0.5rem 1rem;
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-light);
  background-color: var(--category-color1);
  color: var(--grey-light-color);
  border-radius: 7px;
  width: fit-content;
  padding: 0.5rem 1rem;

  @media (min-width: 767px) {
    font-size: var(--font-size-body-medium);
    font-weight: var(--font-style-normal);
    margin-top: 2rem;
  }

  @media (min-width: 1200px) {
    font-size: var(--font-size-body-medium);
  }
`;

export const SyncedSliders = ({ moviesList, categories }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const bannerSettings = {
    arrows: false,
    adaptiveHeight: true,
    fade: true,
  };
  const categorySettings = {
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SlidersContainer as="section" /* className="sliders-container" */>
      <Slider
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
        {...bannerSettings}
      >
        {moviesList.map((movie) => (
          <Banner
            key={movie.id}
            title={movie.title}
            backgroundImageUrl={movie.backgroundImageUrl}
            synopsis={movie.synopsis}
            releaseYear={movie.releaseYear}
            duration={movie.duration}
          />
        ))}
      </Slider>

      <SliderCategory>
        <Slider
          asNavFor={nav1}
          ref={(slider) => (sliderRef2 = slider)}
          {...categorySettings}
        >
          {moviesList.map((movie) => (
            <MovieCard
              key={movie.id}
              posterUrl={movie.posterUrl}
              title={movie.title}
            />
          ))}
        </Slider>

        {categories.map((category) => {
          const moviesInCategory = moviesList.filter(
            (movie) => movie.category === category.categoryName
          );

          if (moviesInCategory.length === 0) {
            return null;
          }

          return (
            <div key={category.id}>
              <TitleCategory style={{ backgroundColor: category.colorPicker }}>
                {category.categoryName}
              </TitleCategory>
              <Slider {...categorySettings}>
                {moviesInCategory.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    posterUrl={movie.posterUrl}
                    title={movie.title}
                  />
                ))}
              </Slider>
            </div>
          );
        })}
      </SliderCategory>
    </SlidersContainer>
  );
};

SyncedSliders.propTypes = {
  moviesList: PropTypes.array,
  categories: PropTypes.array,
};
