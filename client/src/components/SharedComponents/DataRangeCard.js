import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

export default function DataRangeCard(props) {
    return (
        <Card className="p-1 my-5" style={{ width: '24 rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>{props.value}</Card.Text>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Text> {props.range} </Card.Text>
                <div style={{backgroundColor: "red", height: "100px", width: "100px"}}className="rounded-circle justify-content-center"></div>
            </Card.Body>
        </Card>
    )
}
