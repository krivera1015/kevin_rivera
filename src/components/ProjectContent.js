import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

class ProjectContent extends Component {
    render () {
        return (
            <div>
                <Card.Group itemsPerRow={3}>
                    <Card color='red' image={src} />
                    <Card color='orange' image={src} />
                    <Card color='yellow' image={src} />
                </Card.Group>
            </div>
        )
    }
}

export default ProjectContent