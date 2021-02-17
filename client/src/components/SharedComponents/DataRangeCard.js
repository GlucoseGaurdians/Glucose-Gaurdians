import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

// switch(props) {
//     case props.value < 80:
//         style= backgroundColor: 'orange'
//       break;
//     case props.value > 80 < 120:
//         style= backgroundColor: 'green'
//       break;
//       case props.value >= 120:
//         style= backgroundColor: 'red'
//       break;
//   }

export default function DataRangeCard(props) {
    return (
        
        <Card>
            <Card.Body style={{backgroundColor: 'orange'}}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>{props.value}</Card.Text>
                <Card.Text>
                    This card shows you your last recorded bloodsugar.
                </Card.Text>
                <Card.Text> {props.range} </Card.Text>
            </Card.Body>
        </Card>
    )
}
