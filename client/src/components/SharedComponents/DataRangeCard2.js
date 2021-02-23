import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import "./card.css";

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
        <Card className="p-1 my-5" style={{ width: '24 rem' }}>
            <Card.Body className="cardColorGood">
                <Card.Title className="textColor">{props.title}Last Test</Card.Title>
                <Card.Subtitle className="mb-2 d-flex justify-content-center textColor">Bloodsugar(mg/dl)</Card.Subtitle>
                <Card.Text className="display-3 d-flex justify-content-center textColor">{props.value}</Card.Text>
                <Card.Text className="textColor">{props.description}
                Your Bloodsugar is a little high.  Keeping track of more blood sugars could give a better idea of 
                    where your glucose is for the duration of day.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
