import React, { Component } from 'react'

class BioCard extends Component {
    render () {
        return (
            <div>
                <h2>About Me:</h2>
                <p>A foodie, an artist, a social entrepreneur who 
                    fell in love with tech to improve the lives of others. 
                    Believing that nothing is impossible, I pivoted to a 
                    career as a Full-Stack Software Engineer, attaining 
                    proficiencies in JavaScript, React with Redux, and 
                    Ruby and Rails. A humble leader and dedicated learner 
                    looking to grow in a nurturing culture with a challenging 
                    environment.</p>
                <h2>Lets Chat!</h2>
                <p>Phone</p>
                <p>Github</p>
                <p>Email</p>
                <p>Linkedin</p>
                We are going to also put a modal that will pop up resume 
                then a button to actually download it
            </div>
        )
    }
}

export default BioCard