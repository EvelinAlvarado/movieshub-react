import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Banner } from "../Banner/Banner";
import { MovieCard } from "../MovieCard/MovieCard";
import { dataMovieList } from "/src/assets/moviesData.js";
import "./SyncedSliders.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SyncedSliders = () => {
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
  };
  const categorySettings = {
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
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
    <section className="sliders-container">
      <h4>Banner</h4>
      <Slider
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
        {...bannerSettings}
      >
        {dataMovieList.map((item) => (
          <Banner
            key={item.id}
            title={item.title}
            backgroundImageUrl={item.backgroundImageUrl}
            description={item.description}
            releaseYear={item.releaseYear}
            duration={item.duration}
          />
        ))}
        {console.log(dataMovieList)}
      </Slider>

      <h4>Category Slider</h4>
      <div className="slider-category container">
        <Slider
          asNavFor={nav1}
          ref={(slider) => (sliderRef2 = slider)}
          {...categorySettings}
        >
          {dataMovieList.map((item) => (
            <MovieCard
              key={item.id}
              posterUrl={item.posterUrl}
              title={item.title}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};
