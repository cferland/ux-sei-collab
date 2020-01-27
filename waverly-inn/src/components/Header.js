import React, { Component } from 'react';
import Reservation from './Reservation';
import Carousel from './Carousel';
import MobileMenu from './MobileMenu';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hamburger: false
    }

    this.handleHamburger = this.handleHamburger.bind(this);
  }

  handleHamburger() {
    if (this.state.hamburger === false) {
      document.getElementById('hamburger-icon').src = '/images/Icon_Close.svg';
      document.getElementById('hamburger-menu').style.display = 'block';
      document.body.classList.add('stop-scroll');
      this.setState({
        hamburger: true
      })
    } else if (this.state.hamburger === true) {
      document.getElementById('hamburger-icon').src = '/images/Icon_Hamburger.svg';
      document.getElementById('hamburger-menu').style.display = 'none';
      document.body.classList.remove('stop-scroll');
      this.setState({
        hamburger: false
      })
    }
  }

  render() {
    return (
      <header>
        <nav className="header-nav">
          <a href="#menu"><h3 className="visible">Menu</h3></a>
          <a href="#about"><h3 className="visible">Our Story</h3></a>
          <img className="header-logo" src="/images/Logo_WaverlyInn_White_Oneline.png" alt="The Waverly Inn" />
          <a href="#hours"><h3 className="visible">Hours</h3></a>
          <a href="#location"><h3 className="visible">Location</h3></a>
          <img id="hamburger-icon" src="/images/Icon_Hamburger.svg" onClick={this.handleHamburger} />
        </nav>
        <div id="hamburger-menu">
          <MobileMenu />
        </div>
        <div className="carousel-wrapper">
          <Carousel />
        </div>

        <div id="header-button">
          <Reservation />
        </div>
      </header>
    )
  }
}

export default Header;