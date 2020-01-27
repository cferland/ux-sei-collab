import React from 'react';
import Reservation from './Reservation';

function MobileMenu(props) {
  return (
    <div>
      <a href="#menu" onClick={props.handleHamburger}><h3>Menu</h3></a>
      <a href="#about" onClick={props.handleHamburger}><h3>About</h3></a>
      <a href="#hours" onClick={props.handleHamburger}><h3>Hours & Location</h3></a>
      <a href="#contact" onClick={props.handleHamburger}><h3>Contact Us</h3></a>
      <Reservation />
      <div className="mobile-pic">
        <img src="/images/WaverlyInn_Food_04.png" alt="Food" />
      </div>
    </div>
  )
}

export default MobileMenu;