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
        <Card className="p-1 my-5" style={{ width: '24 rem' }}>
            <Card.Body style={{backgroundColor: "orange"}}>
                <Card.Title>{props.title}Last Test</Card.Title>
                <Card.Subtitle className="mb-2 d-flex justify-content-center">Bloodsugar(mg/dl)</Card.Subtitle>
                <Card.Text className="display-3 d-flex justify-content-center">{props.value}161</Card.Text>
                <Card.Text>
                Your Bloodsugar is a little high.  Keeping track of more blood sugars could give a better idea of 
                    where your glucose is for the duration of day.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
