import { createGlobalStyle } from "styled-components";
import "./font.css";

const GlobalStyle = createGlobalStyle`


body {
  font-family: 'Montserrat', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Nunito', sans-serif;
}

.dark-primary-color    { background: #0097A7; }
.default-primary-color { background: #00BCD4; }
.light-primary-color   { background: #B2EBF2; }
.text-primary-color    { color: #FFFFFF; }
.accent-color          { background: #448AFF; }
.primary-text-color    { color: #212121; }
.secondary-text-color  { color: #757575; }
.divider-color         { border-color: #BDBDBD}; 

`;

export { GlobalStyle };
