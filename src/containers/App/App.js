import React, { Component } from 'react';
import FrontPage from '../HomePage/HomePage'
import BioPage from '../BioPage/BioPage';
import './App.css';
import FunFactPage from '../FunFactPage/FunFactPage';
import ProjectPage from '../ProjectPage/ProjectPage';

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
