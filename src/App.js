import React, { Component } from 'react';
import FrontPage from "./containers/HomePage/HomePage"
import BioPage from './containers/BioPage/BioPage';
import './css/App.css';
import FunFactPage from './containers/FunFactPage/FunFactPage';
import ProjectPage from './containers/ProjectPage/ProjectPage';

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
