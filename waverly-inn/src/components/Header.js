import React from 'react';

function Header(props) {
  return (
    <header>
      <nav>
        <a href="#menu"><h3>Menu</h3></a>
        <a href="#about"><h3>Our Story</h3></a>
        <img src="/images/Logo_WaverlyInn_White_Oneline.png" alt="The Waverly Inn" />
        <a href="#hours"><h3>Hours</h3></a>
        <a href="#location"><h3>Location</h3></a>
      </nav>
    </header>
  )
}

export default Header;