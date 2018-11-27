import React, { Component } from 'react'
import {  Icon } from 'semantic-ui-react'
//import '../css/HomePage.css';

class FrontPage extends Component {
    render () {
        return (
            <div>
                <div className="Home-page">
                    <h1 className="Content">Who Is Kevin Rivera?</h1>
                </div>
                <div className="Nav-diamonds">
                    <Icon link name='diamond'/>
                    <Icon link name='diamond'/>
                    <Icon link name='diamond'/>
                    <Icon link name='diamond'/>
                </div>
            </div>
        )
    }
}

export default FrontPage