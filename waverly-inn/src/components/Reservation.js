import React, {Component} from 'react';



class Reservation extends Component {
    constructor(props) {
      super(props);
    }

    render(){
    return(
        <div>
            <button className="ResButton">
            <a href="https://www.opentable.com/restref/client/?restref=40330&lang=en&corrid=a6a3d431-a3d4-4290-b55e-fe5463858fb2">
            <h4>Make a Reservation</h4>
            </a>
            </button>
        </div>
    )
}
}

export default Reservation;