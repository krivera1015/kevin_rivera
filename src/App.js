import React, { Component } from 'react';
import FrontPage from "./containers/HomePage"
import BioPage from './containers/BioPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <FrontPage/>
        <BioPage/>
      </div>
    );
  }
}

export default App;
