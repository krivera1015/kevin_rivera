import React, { Component } from 'react'

class BioCard extends Component {
    render () {
        return (
            <div className="Bio-container">
                <div className="Profile-picture">
                    <img id="kevin-pic" src="https://res.cloudinary.com/dav4yqqvv/image/upload/v1542463735/IMG_6508.jpg" alt="Smiley face"/>
                </div>
                <div className="About-me">
                    <h2 class="header">About Me</h2>
                    <p>A foodie, an artist, a social entrepreneur who 
                        fell in love with tech to improve the lives of others. 
                        Believing that nothing is impossible, I pivoted to a 
                        career as a Full-Stack Software Engineer, attaining 
                        proficiencies in JavaScript, React with Redux, and 
                        Ruby and Rails. A humble leader and dedicated learner 
                        looking to grow in a nurturing culture with a challenging 
                        environment.</p>
                </div>
                <div className="Contact">
                    <h2 class="header">Lets Chat!</h2>
                    <p>Phone</p>
                    <p>Github</p>
                    <p>Email</p>
                    <p>Linkedin</p>
                </div>
                <div className="Modal">
                    We are going to also put a modal that will pop up resume 
                    then a button to actually download it
                </div>
            </div>
        )
    }
}

export default BioCard