import React, { Component } from 'react';
import OurStory from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <OurStory />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;
