import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import Nprogress from 'nprogress';

Router.onRouteChangeStart = () => {
  Nprogress.start();
};
Router.onRouteChangeComplete = () => {
  Nprogress.done();
};
Router.onRouteChangeError = () => {
  console.log('onROuteChangeError Triggered ');
};

const Logo = styled.h1`
  margin-bottom: 0;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  position: relative;
  z-index: 2;

  a {
    background: ${props => props.theme.primary};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }

  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    background-color: ${props => props.theme.primary};

    .nav-logo {
      height: 4.3rem;
      width: 4.3rem;
      margin: 0.5rem 0;
      margin-left: 2rem;
    }

    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }

    .sub-bar {
      display: grid;
      border-bottom: 10px solid ${props => props.theme.lightgrey};
      grid-template-columns: 1fr auto;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <img className="nav-logo" src="/static/shopping.svg" alt="" />
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </StyledHeader>
);

export default Header;
