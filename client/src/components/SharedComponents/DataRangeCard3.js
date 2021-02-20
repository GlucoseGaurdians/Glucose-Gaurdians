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
            <Card.Body style={{backgroundColor: "green"}}>
                <Card.Title>{props.title}Projected A1C*</Card.Title>
                <Card.Subtitle className="mb-2 d-flex justify-content-center">A1C(%)*</Card.Subtitle>
                <Card.Text className="display-3 d-flex justify-content-center">{props.value}5.3</Card.Text>
                <Card.Text>
                Your A1C is in a good range. Good Job! 
                    <br/> 
                    *A1C values based on submitted blood tests and may not reflect true A1C.  Talk to your doctor or
                    medical professional about getting an A1C Test.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
