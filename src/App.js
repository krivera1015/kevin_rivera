import React, { Component } from 'react';
import FrontPage from "./containers/HomePage"
import BioPage from './containers/BioPage';
import './App.css';
import FunFactPage from './containers/FunFactPage';
import ProjectPage from './containers/ProjectPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FrontPage/>
        <BioPage/>
        <FunFactPage/>
        <ProjectPage/>
      </div>
    );
  }
}

export default App;
