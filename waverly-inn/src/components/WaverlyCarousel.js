import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class WaverlyCarousel extends Component {
  render() {
    return (
      <Carousel showThumbs={false} autoPlay infiniteLoop emulateTouch showStatus={false}>
        <div>
          <img src="/images/WaverlyInn_Food_03.png" />
        </div>
        <div>
          <img src="/images/WaverlyInn_Food_01.png" />
        </div>
        <div>
          <img src="/images/WaverlyInn_Food_02.png" />
        </div>
      </Carousel>
    );
  }
};
