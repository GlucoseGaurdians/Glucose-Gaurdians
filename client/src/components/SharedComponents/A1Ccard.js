import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

export default function A1Ccard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body style={{backgroundColor: "green"}}>
            <div >
                <Card.Title>{props.title}Projected A1C*</Card.Title>
                <br />
                <Card.Subtitle className="mb-2 d-flex justify-content-center">A1C(%)*</Card.Subtitle>
                {/* <Card.Text>{props.value}ml/dl</Card.Text> */}
                <Card.Text class="display-3 d-flex justify-content-center">5.3</Card.Text>
                <Card.Text>
                    Your A1C is in a good range. Good Job! 
                    <br/> 
                    *A1C values based on submitted blood tests and may not reflect true A1C.  Talk to your doctor or
                    medical professional about getting an A1C Test.
                </Card.Text>
                <Card.Text> {props.range} </Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}
