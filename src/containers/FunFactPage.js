import React, { Component } from 'react'
import FunFactWall from '../components/FunFactWall';
import funFacts from '../funFactData'

class FunFactPage extends Component {

    state = {
        funFacts: []
    }
    
    componentDidMount() {
        this.setState({funFacts})
    }

    renderFactCard = () => {
        return this.state.funFacts.map( funFact => {
            return <FunFactWall key={funFact.category} funFact={funFact}/>
        })
    }

    render () {
        return (
            <div>
                <div className="Wall-header">
                    Fun Fact Wall
                </div>
                <div className="Wall-cards">
                    {this.renderFactCard()}
                </div>
            </div>
        )
    }
}

export default FunFactPage