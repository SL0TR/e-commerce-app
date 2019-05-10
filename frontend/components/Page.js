import React, { Component } from 'react'
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const StyledPage = styled.div`
  background: white;
  color:  ${ props => props.theme.black };
`;

const Inner = styled.div`
  max-width: ${ props => props.theme.maxWidth };
  margin: 0 auto;
  padding: 2rem;
`;

const theme = {
  primary: '#7B1842',
  secondary: '#1F5846',
  bg: '#E7F3FF',
  green: '#888551',
  orange: '#D07118',
  pink: '#C66C98',
  black: '#393939',
  maxWidth: '1140px',
  lightgrey: '#E1E1E1',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
}


injectGlobal`
  /* @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  } */
  
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600|Roboto');



  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${theme.black}
  }
  
  h1,h2,h3,h4,h5 {
    font-family: 'Open Sans', sans-serif;
  }


`;

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>
            {this.props.children}
          </Inner>
        </StyledPage>
      </ThemeProvider>
    )
  }
}
