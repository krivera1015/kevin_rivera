import React from 'react'
import { Card } from 'semantic-ui-react'

const FunFactFrontCard = (props) => {
    const {category} = props.fact
    console.log(category, "card")
    return (
        <Card className="ui card facts" color='grey' onClick={props.handleMouseOver}>
            <Card.Content>
                <Card.Header>{category}</Card.Header>
            </Card.Content>
        </Card>
    )
}

export default FunFactFrontCard