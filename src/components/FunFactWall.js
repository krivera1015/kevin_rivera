import React, { Component } from 'react'
import FunFactFrontCard from './FunFactFrontCard';
import FunFactBackCard from './FunFactBackCard';
import funFacts from '../funFactData'

class FunFactWall extends Component {

    state = {
        funFacts: {}
    }

    componentDidMount() {
        this.setState({funFacts})
    }

    render () {
        console.log(this.state.funFacts)
        return (
            <div>
                <FunFactFrontCard funFacts={this.state.funFacts}/>
                <FunFactBackCard funFacts={this.state.funFacts}/>
            </div>
        )
    }
}

export default FunFactWall