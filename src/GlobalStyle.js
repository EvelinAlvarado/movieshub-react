import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  
  :root {
  --font-family: "Roboto", sans-serif;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-style-normal: normal;

  /* --font-input: 300; */

  /*   --font-size-logo: 28px;
  --font-size-card-title: 28px;
  --font-size-input-label: 20px;
  --font-size-button: 22px;
  --font-size-form-fieldset: 22px;
  --font-size-table-header: 22px;
  --font-size-modal-title: 28px;
  --font-size-modal-button: 28px; */

  /*  Typography font size*/
  --font-size-title-big: 3.75rem;
  --font-size-title-medium: 2.875rem;
  --font-size-title-small: 2.1875rem;
  --font-size-body-big: 1.6875rem;
  --font-size-body-medium: 1.125rem;
  --font-size-body-small: 1rem;
  --font-size-body-smaller: 0.75rem;

  --primary-color: #2a7ae4;
  --secondary-color: #ffffff;
  --background-color: #191919;

  /* Colors for different movie categories */
  --category-color1: #6bd1ff;
  --category-color2: #9cd33b;
  --category-color3: #00c86f;
  --category-color4: #6b5be2;
  --category-color5: #ffba05;
  --category-color6: #ff8c2a;
  --category-color7: #dc6ebe;
  --category-color8: #9cd33b;

  /* Black colors */
  --black-dark-color: rgba(0, 0, 0, 0.9);
  --black-medium-color: rgba(0, 0, 0, 0.6);
  --black-light-color: rgba(0, 0, 0, 0.5);
  --black-lighter-color: #9e9e9e;

  /* Grey colors */
  --grey-darkest-color: #53585d;
  --grey-dark-color: #c2c2c2;
  --grey-medium-color: #e5e5e5;
  --grey-light-color: #f5f5f5;

  /* Error colors */
  --error-dark-color: #c62828;
  --error-medium-color: #e53935;
  --error-light-color: #fce7e7;

  --shadow: 0 5px 10px #55a6ff38;
}
body {
  background-color: var(--background-color);
  color: var(--grey-light-color);
  font-family: var(--font-family);
  overflow-x: hidden;
  margin: 0;
}
`;
