import styled from "styled-components";

export const Container = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;

  @media (min-width: 768px) {
    padding-right: 2.5rem;
    padding-left: 2.5rem;

    /* .play-now-button {
    font-size: var(--font-size-body-medium);
  } */
  }

  @media (min-width: 1200px) {
    padding-left: calc((100vw - 1000px) / 2);
    padding-right: calc((100vw - 1000px) / 2);
  }
  /* .play-now-button {
    font-size: var(--font-size-body-big);
  } */
`;
