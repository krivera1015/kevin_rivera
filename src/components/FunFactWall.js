import React, { Component } from 'react'
import FunFactFrontCard from './FunFactFrontCard';
import FunFactBackCard from './FunFactBackCard';

class FunFactWall extends Component {
    render () {
        return (
            <div>
                <FunFactFrontCard/>
                <FunFactBackCard/>
            </div>
        )
    }
}

export default FunFactWall