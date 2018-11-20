import React, { Component } from 'react'
import FunFactFrontCard from './FunFactFrontCard';
import FunFactBackCard from './FunFactBackCard';

class FunFactWall extends Component {    

    state = {
        showFront: true
    }

    handleMouseOver = () => {
        this.setState((prevState) => {
            return {showFront: !prevState.showFront}
        })
    }

    render () {
        console.log(this.props.funFact)
        return (
            <div>
                {this.state.showFront ? <FunFactFrontCard handleMouseOver={this.handleMouseOver} fact={this.props.funFact}/>  : <FunFactBackCard handleMouseOver={this.handleMouseOver} fact={this.props.funFact}/>}
            </div>
        )
    }
}

export default FunFactWall