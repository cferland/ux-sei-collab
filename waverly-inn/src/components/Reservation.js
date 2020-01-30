import React, { Component } from 'react';



class Reservation extends Component {

  render() {
    return (
      <div>
        <a href="https://www.opentable.com/restref/client/?restref=40330&lang=en&corrid=a6a3d431-a3d4-4290-b55e-fe5463858fb2">
          <button className="ResButton">
            Make a Reservation
          </button>
        </a>
      </div>
    )
  }
}

export default Reservation;