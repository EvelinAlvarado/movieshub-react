import styled from "styled-components";
import { Container } from "../UI";
import moviesflixlogo from "/img/moviesflix-logo.png";

const FooterStyle = styled(Container)`
  background-color: var(--black-dark-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
  border-top: 3px solid var(--primary-color);
`;

const FooterLogo = styled.a`
  width: 9rem;
  img {
    width: 100%;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
  padding-bottom: 0.75rem;

  a .bi {
    font-size: var(--font-size-body-big);
    color: var(--grey-light-color);
    transition: color 0.5s;
  }

  a .bi:hover {
    color: var(--primary-color);
  }
`;

const Strong = styled.strong`
  font-size: var(--font-size-body-smaller);
  color: var(--grey-light-color);
`;

export const Footer = () => {
  return (
    <FooterStyle as="footer">
      <FooterLogo href="#">
        <img src={moviesflixlogo} alt="MoviesFlix Logo" />
      </FooterLogo>
      <SocialMedia>
        <a
          href="https://github.com/EvelinAlvarado"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/evelinalvarado/?locale=pt_BR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </SocialMedia>
      <Strong>Evelin Alvarado</Strong>
    </FooterStyle>
  );
};
