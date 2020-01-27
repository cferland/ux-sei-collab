import React from 'react';
import Reservation from './Reservation';

function MobileMenu() {
  return (
    <div>
      <h3>Menu</h3>
      <h3>About</h3>
      <h3>Hours & Location</h3>
      <h3>Contact Us</h3>
      <Reservation />
      <div className="mobile-pic">
        <img src="/images/WaverlyInn_Food_04.png" alt="Food" />
      </div>
    </div>
  )
}

export default MobileMenu;