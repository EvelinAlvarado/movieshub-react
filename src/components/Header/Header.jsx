import { Link } from "react-router-dom";
import { Button } from "../Button/Button.jsx";
import "./Header.css";
import moviesflixlogo from "/img/moviesflix-logo.png";

export const Header = () => {
  return (
    <header className="header container">
      <Link to="/" className="header__logo" href="#">
        <img src={moviesflixlogo} alt="MoviesFlix Logo" />
      </Link>
      <Link to="/form-new-movie">
        <Button buttonText="New Movie" />
      </Link>
    </header>
  );
};
