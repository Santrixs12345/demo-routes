import React from 'react'
import Proptypes from 'prop-types';
import logo from '../images/logo.svg';


const Header = ({url, title}) => {
  return (
    <header className="App-header">
      <a href={url}>
        <img src={logo} className="App-logo" alt="logo" />
      </a>
        <h1>{title}</h1>
    </header>
  );
}

Header.prototypes = {
  title: Proptypes.string.isRequired,
  url: Proptypes.string,
}

export default Header;
