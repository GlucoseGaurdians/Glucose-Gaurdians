import React from 'react'
import { Card } from 'react-bootstrap'


export default function AvgTestCard(props) {
    
    return (
       
       <Card className="p-1 my-5" style={{ width: '24 rem' }}>
            <Card.Body className={props.color}  >
            
            
                <Card.Title className="textColor">Average Blood Sugar</Card.Title>
                <Card.Subtitle className="mb-2 d-flex justify-content-center textColor">Bloodsugar(mg/dl)</Card.Subtitle>
                <Card.Text className="display-3 d-flex justify-content-center textColor">{props.value}</Card.Text>
                <Card.Text className="textColor">{props.statement}
            
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
