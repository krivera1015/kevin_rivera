import React, { Component } from 'react';
import FrontPage from '../HomePage/HomePage'
import BioPage from '../BioPage/BioPage';
import './App.css';
import FunFactPage from '../FunFactPage/FunFactPage';
import ProjectPage from '../ProjectPage/ProjectPage';
import {  Icon } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Sidebar">
          <ul id="Diamonds">
            <li><Icon link name='diamond'/></li>
            <li><Icon link name='diamond'/></li>
            <li><Icon link name='diamond'/></li>
            <li><Icon link name='diamond'/></li>
          </ul>
        </div>
        <div className="Content">
          <FrontPage/>
          <BioPage/>
          <FunFactPage/>
          <ProjectPage/>
        </div>
        <div className="Footer">

        </div>
      </div>
    );
  }
}

export default App;
