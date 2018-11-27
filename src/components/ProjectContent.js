import React, { Component } from 'react'
import { Card, Modal, Embed } from 'semantic-ui-react'

class ProjectContent extends Component {

    state = {
        show: false
    }

    handleOnClick = () => {
        this.setState({show: true})
    }

    render () {
        return (
            <div className="Portfolio">
                <div className="Portfolio-header">
                    Recent Projects
                </div>
                <div className="Card-grid">
                    <div className="card-1">
                        <Modal trigger={<Card onClick={this.handleOnClick} color='red' image={"https://res.cloudinary.com/dav4yqqvv/image/upload/v1542762114/Screen_Shot_2018-11-20_at_8.01.00_PM.png"}/>}>
                            <Modal.Header>Type Battles</Modal.Header>
                            <Modal.Description>
                                <Embed id='l-Wi5VcszHg' placeholder={"https://res.cloudinary.com/dav4yqqvv/image/upload/v1542762114/Screen_Shot_2018-11-20_at_8.01.00_PM.png"} source='youtube' />
                            </Modal.Description>
                        </Modal>
                    </div>
                    <div className="card-2">
                        <Modal trigger={<Card onClick={this.handleOnClick} color='orange' image={"https://res.cloudinary.com/dav4yqqvv/image/upload/v1542762417/Screen_Shot_2018-11-20_at_8.04.20_PM.png"}/>}>
                            <Modal.Header>Munch</Modal.Header>
                            <Modal.Description>
                                <Embed id='YavH2TGJ_G8&t=2s' placeholder={"https://res.cloudinary.com/dav4yqqvv/image/upload/v1542762417/Screen_Shot_2018-11-20_at_8.04.20_PM.png"} source='youtube' />
                            </Modal.Description>
                        </Modal>
                    </div>
                    <div className="card-3">
                        <Modal trigger={<Card onClick={this.handleOnClick} color='yellow' image={"https://res.cloudinary.com/dav4yqqvv/image/upload/v1542762450/Screen_Shot_2018-11-20_at_8.07.17_PM.png"}/>}>
                            <Modal.Header>All About Kev</Modal.Header>
                            <Modal.Description>
                                <Embed id='YavH2TGJ_G8&t=2s' placeholder={"https://res.cloudinary.com/dav4yqqvv/image/upload/v1542762417/Screen_Shot_2018-11-20_at_8.04.20_PM.png"} source='youtube' />
                            </Modal.Description>
                        </Modal>
                    </div>
                    </div>
            </div>
        )
    }
}

export default ProjectContent

