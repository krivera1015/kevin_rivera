import React, { Component } from 'react'
import './Footer.css';
import { Icon } from 'semantic-ui-react'



class Footer extends Component {
    render () {
        return (
            <div className="Footer">
                <div className="contact">
                    <a href="tel:1-917-533-8826"><Icon link name='call square' size='big' color="black"/></a>
                    <a href="https://github.com/krivera1015" target="_blank" rel='noreferrer noopener'><Icon link name='github' color="black" size='big'/></a>
                    <a href="mailto:krivera1015@gmail.com"><Icon link name='mail square' color="black" size='big'/></a>
                    <a href="https://www.linkedin.com/in/kevin-rivera-805032103/" target="_blank" rel='noreferrer noopener'><Icon link name='linkedin' color="black" size='big'/></a>
                </div>
                <div className="name">   
                    © Kevin Rivera
                </div>
            </div>
        )
    }
}

export default Footer