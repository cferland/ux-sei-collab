import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class WaverlyCarousel extends Component {
  render() {
    return (
      <Carousel showThumbs={false} infiniteLoop={true} emulateTouch showStatus={false} swipeable={true} autoPlay={true} dynamicHeight={true} useKeyboardArrows={true} centerMode={false} transitionTime={300}>
        <div className="carousel-img">
          <img src="/images/WaverlyInn_Food_03.png" alt="waverlyfood3" />
        </div>
        <div className="carousel-img">
          <img src="/images/WaverlyInn_Food_01.png" alt="waverlyfood1" />
        </div>
        <div className="carousel-img">
          <img src="/images/WaverlyInn_Food_02.png" alt="waverlyfood2" />
        </div>
      </Carousel>
    );
  }
};