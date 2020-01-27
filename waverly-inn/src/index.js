import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(<Router>
  <App />
</Router>, document.getElementById('root'));
=======
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router><App /></Router>, document.getElementById('root'));
>>>>>>> b4eb724d81f005c3df684b97818f8dc75e3277ac

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
