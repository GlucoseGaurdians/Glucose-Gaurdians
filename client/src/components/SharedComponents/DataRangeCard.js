import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

export default function DataRangeCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>{props.value}</Card.Text>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Text> {props.range} </Card.Text>
                <div style={{backgroundColor: "orange", height: "50px", width: "50px"}}className="rounded-circle"></div>
            </Card.Body>
        </Card>
    )
}
