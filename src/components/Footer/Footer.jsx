import "./Footer.css";
import moviesflixlogo from "/img/moviesflix-logo.png";

export const Footer = () => {
  return (
    <footer className="footer container">
      <a className="footer-logo" href="#">
        <img src={moviesflixlogo} alt="MoviesFlix Logo" />
      </a>
      <div className="socialMedia">
        <a href="#">
          <i className="bi bi-github"></i>
        </a>
        <a href="#">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
      <strong>Evelin Alvarado</strong>
    </footer>
  );
};
