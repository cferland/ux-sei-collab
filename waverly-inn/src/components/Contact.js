import React from 'react';
import Reservation from '../components/Reservation';

function Contact() {

  return (
    <div className="border" id="hours">
      <h1 className="hours">LOCATION & HOURS</h1>
      <div className="contactContainer">

        <div className="rightSide">
          <h4>The Waverly Inn</h4>
          <div className="Plocation">
            <p className="p3">16 Bank Street
                        <br />New York, Ny 10014
                        <br />(917)828-1154
                     </p>
          </div>
          <h4>Hours</h4>
          <div className="PHour">
            <div>
              <p className="p3">Dinner
                        <br />Monday-Thursday, Sunday 5:30pm-12am
                        <br />Friday, Saturday 5:30-1am
                    </p>
            </div>
            <div class="hoursSet">
              <p className="p3">Brunch
                        <br />Saturday, Sunday 11am-6pm
                    </p>
            </div>
          </div>
          <Reservation />
        </div>
        <div className="leftSide">
          <img className="imgClass2" src='/images/WaverlyInn_Map.png' alt="waverlyinterior2"></img>
        </div>
      </div>
    </div>

  )

}
export default Contact;