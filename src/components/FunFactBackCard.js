import React from 'react'
import { Card } from 'semantic-ui-react'

const FunFactBackCard = (props) => {
    const {description} = props.fact
    return (
        <Card onClick={props.handleMouseOver}>
            <Card.Content>
                <Card.Header>{description}</Card.Header>
            </Card.Content>
        </Card>
    )
}

export default FunFactBackCard