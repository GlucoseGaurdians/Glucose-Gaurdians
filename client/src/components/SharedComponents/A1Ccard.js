import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import "./card.css";



export default function A1cCard(props) {
    return (
        <Card className="p-1 my-5" style={{ width: '24 rem' }}>
            <Card.Body className={props.color}>
                <Card.Title className="textColor">Projected A1C*</Card.Title>
                <Card.Subtitle className="mb-2 d-flex justify-content-center textColor">A1C(%)*</Card.Subtitle>
                <Card.Text className="display-3 d-flex justify-content-center textColor">{props.value}</Card.Text>
                <Card.Text className="textColor">
                {props.statement}
                    <br/> 
                    *A1C values based on submitted blood tests and may not reflect true A1C.  Talk to your doctor or
                    medical professional about getting an A1C Test.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
