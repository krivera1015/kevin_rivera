import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

class ProjectContent extends Component {
    render () {
        return (
            <div className="Portfolio">
                <div className="Portfolio-header">
                    Recent Projects
                </div>
                <div className="Project-card">
                        <Card color='red' image={"https://res.cloudinary.com/dav4yqqvv/image/upload/v1542762114/Screen_Shot_2018-11-20_at_8.01.00_PM.png"} />
                <div className="Project-card">
                        <Card color='orange' image={"https://res.cloudinary.com/dav4yqqvv/image/upload/v1542762417/Screen_Shot_2018-11-20_at_8.04.20_PM.png"} />
                </div>
                <div className="Project-card">
                        <Card color='yellow' image={"https://res.cloudinary.com/dav4yqqvv/image/upload/v1542762450/Screen_Shot_2018-11-20_at_8.07.17_PM.png"} />
                </div>
                </div>
            </div>
        )
    }
}

export default ProjectContent