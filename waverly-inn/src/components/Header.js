import React, { Component } from 'react';
import Reservation from './Reservation';
import WaverlyCarousel from './WaverlyCarousel';

class Header extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <header>
        <nav className="header-nav">
          <a href="#menu"><h3>Menu</h3></a>
          <a href="#about"><h3>Our Story</h3></a>
          <img className="header-logo" src="/images/Logo_WaverlyInn_White_Oneline.png" alt="The Waverly Inn" />
          <a href="#hours"><h3>Hours</h3></a>
          <a href="#location"><h3>Location</h3></a>
        </nav>
        <div className="carousel-wrapper">
          <WaverlyCarousel />
        </div>

        <div id="header-button">
          <Reservation />
        </div>
      </header>
    )
  }
}

export default Header;