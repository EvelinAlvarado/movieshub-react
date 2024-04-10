import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Button/Button.jsx";
import moviesflixlogo from "/img/moviesflix-logo.png";
import { Container } from "../UI/index.js";

const HeaderStyle = styled(Container)`
  background-color: var(--black-dark-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
  border-bottom: 3px solid var(--primary-color);
`;

const LogoLink = styled(Link)`
  width: 9rem;
  img {
    width: 100%;
  }
`;

export const Header = () => {
  return (
    <HeaderStyle as="header">
      <LogoLink to="/" className="header__logo" href="#">
        <img src={moviesflixlogo} alt="MoviesFlix Logo" />
      </LogoLink>
      <Link to="/form-new-movie">
        <Button buttonText="New Movie" />
      </Link>
    </HeaderStyle>
  );
};
