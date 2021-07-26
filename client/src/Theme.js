import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
  sm: '@media only screen and (min-width: 320px)',
  md: '@media only screen and (min-width: 768px)',
  lg: '@media only screen and (min-width: 992px)',
};

export const colors = {
  grey: 'rgb(184, 201, 212)',
  primary: '#ff6a50',
  primaryDark: '#c2513e',
  primaryExtraDark: '#9b4333',
  white: 'rgb(230, 230, 230);',
};

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #001020;
  color: ${colors.white};
  font-family: 'BlinkMacSystemFont', sans-serif;
}

.active {
  color: ${colors.primary};
}
`;
