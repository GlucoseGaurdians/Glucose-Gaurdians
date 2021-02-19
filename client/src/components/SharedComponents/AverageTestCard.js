import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

export default function AverageTestCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body style={{backgroundColor: "green"}}>
            <div >
                <Card.Title>{props.title}Average Blood Sugar</Card.Title>
                <br />
                <Card.Subtitle className="mb-2 d-flex justify-content-center">Bloodsugar(mg/dl)</Card.Subtitle>
                {/* <Card.Text>{props.value}ml/dl</Card.Text> */}
                <Card.Text class="display-3 d-flex justify-content-center">105</Card.Text>
                <Card.Text>
                    Your Bloodsugar is in range. Good Job!  Keeping track of more blood sugars could give a better idea of 
                    where your glucose is for the duration of day.
                </Card.Text>
                <Card.Text> {props.range} </Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}
