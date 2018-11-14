import React, { Component } from 'react'
import FunFactFrontCard from './FunFactFrontCard';
import FunFactBackCard from './FunFactBackCard';

class FunFactWall extends Component {
    render () {
        return (
            <div>
                <FunFactFrontCard/>
                <FunFactBackCard/>
                Modal for skills that will pop up and show the skills
                icons
            </div>
        )
    }
}

export default FunFactWall