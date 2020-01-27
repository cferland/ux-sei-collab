import React, { Component } from 'react';
import OurStory from './components/About';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
  return (
    <div className="App">
      <OurStory />
    </div>
  );
}
}
export default App;
