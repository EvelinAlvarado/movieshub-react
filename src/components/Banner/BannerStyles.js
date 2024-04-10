import styled from "styled-components";

export const MovieBanner = styled.section`
  width: 100%;
  position: relative;
  min-height: 50vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;

  @media (min-width: 767px) {
    background-position: center;
  }

  @media (min-width: 1200px) {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 55vh;
  }
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 40%;
  z-index: 1;
  padding-left: 1rem;

  h1 {
    font-size: var(--font-size-body-big);
    margin-bottom: 10px;
  }

  /* Hide paragraphs on smaller screens */
  p {
    display: none;
  }

  @media (min-width: 767px) {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 2rem;

    h1 {
      font-size: var(--font-size-title-medium);
      margin-bottom: 10px;
    }
    p {
      font-size: var(--font-size-body-small);
      font-weight: lighter;
      display: flex;
      gap: 6px;
      margin-bottom: 5px;
    }
  }

  @media (min-width: 1200px) {
    padding-top: 40px;
    padding-bottom: 40px;
    max-width: 500px;

    h1 {
      font-size: var(--font-size-title-big);
      margin-bottom: 20px;
    }
    p {
      font-size: var(--font-size-body-medium);
      font-weight: lighter;
      display: flex;
      gap: 6px;
      margin-bottom: 10px;
    }
  }
`;
