import React from 'react';

function Header(props) {
  return (
    <header>
      <nav>
        <a href="#menu">Menu</a>
        <a href="#about">Our Story</a>
        <img src="/images/Logo_WaverlyInn_White_Oneline.png" alt="The Waverly Inn" />
        <a href="#hours">Hours</a>
        <a href="#location">Location</a>
      </nav>
    </header>
  )
}

export default Header;