import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import App from './App';
import Details from './Details'

ReactDOM.render(
  <Router>
    <Route component={App} />
  </Router>
  ,
  document.getElementById('root')
);
