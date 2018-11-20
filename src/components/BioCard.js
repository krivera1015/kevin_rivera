import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react'

class BioCard extends Component {
    render () {
        let background = {
            backgroundImage: `url("https://res.cloudinary.com/dav4yqqvv/image/upload/v1542689491/Kev.png")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '50%',
            width: '100%',
        }
        return (
            <div className="Bio-container">
                <div className="Profile-picture" style={background}>
                    {/* <img src="https://res.cloudinary.com/dav4yqqvv/image/upload/v1542463735/IMG_6508.jpg" alt="Smiley face"/> */}
                </div>
                <div className="About-me">
                    <h2 className="header">About Me</h2>
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
                    <h2 className="header">Lets Chat!</h2>
                    <p><Icon link name='call square' size='large'/><a href="tel:1-408-555-5555">(917) 533 - 8826</a></p>
                    <p><Icon link name='github' size='large'/><a href="https://github.com/krivera1015" target="_blank" rel='noreferrer noopener'>krivera1015</a></p>
                    <p><Icon link name='mail square' size='large'/><a href="mailto:youremailaddress">krivera1015@gmail.com</a></p>
                    <p><Icon link name='linkedin' size='large'/><a href="https://www.linkedin.com/in/kevin-rivera-805032103/" target="_blank" rel='noreferrer noopener'>krivera1015</a></p>
                </div>
                <div className="Resume">
                    <Button size='medium'><a href="https://drive.google.com/file/d/167miLcT2Yb8kTTswDpARI2ZNSiDdWNP3/view?usp=sharing" target="_blank" rel='noreferrer noopener'>Resume</a></Button>
                </div>
            </div>
        )
    }
}

export default BioCard