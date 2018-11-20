import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const FunFactFrontCard = (props) => {
    const {category} = props.fact
    console.log(category, "card")
    return (
        <Card onClick={props.handleMouseOver}>
            <Card.Content>
                <Card.Header>{category}</Card.Header>
            </Card.Content>
        </Card>
    )
}

export default FunFactFrontCard