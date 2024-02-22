import "./Header.css";
import moviesflixlogo from "../../../public/img/moviesflix-logo.png";
import { Button } from "../Button/Button.jsx";

export const Header = () => {
  return (
    <header className="header container">
      <a className="header__logo" href="#">
        <img src={moviesflixlogo} alt="MoviesFlix Logo" />
      </a>
      <Button title="New video" addClassName="new-video" />
    </header>
  );
};
