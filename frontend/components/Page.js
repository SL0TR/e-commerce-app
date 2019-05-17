import React, { Component } from "react";
import Header from "../components/Header";
import Meta from "../components/Meta";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const theme = {
  primary: "#7B1842",
  secondary: "#1F5846",
  bg: "#E7F3FF",
  green: "#888551",
  orange: "#D07118",
  pink: "#C66C98",
  black: "#393939",
  maxWidth: "1140px",
  lightgrey: "#E1E1E1",
  red: "#ee5253",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

injectGlobal`
  
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:400,700');



  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${theme.black}
  }
  
  h1,h2,h3,h4,h5 {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }

  input, button, textarea {
    border: none;
    background: none;
  }

  .fancy-title {
    grid-column:  1 / -1;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 20px;
    align-items: center;
    margin: 2rem;
    text-transform: uppercase;
    color: ${theme.primary};
    font-size: 3rem;
  }

  .fancy-title::before, .fancy-title::after {
    display: block;
    content: "";
    height: 10px;
    background: linear-gradient(to var(--direction, left), ${
      theme.secondary
    }, transparent)
  }

  .fancy-title::after {
    --direction: right;
  }

`;

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}
