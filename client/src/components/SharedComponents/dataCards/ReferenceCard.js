import React from 'react'
import { Card } from 'react-bootstrap'
import "./card.css"

export default function ReferenceCard(props) {
    
    return (
       
       <Card className="p-1 my-5" style={{ width: '24 rem' }}>
            <Card.Body>
            
            
                <Card.Title>Color Code Reference</Card.Title>
                <div className="rounded-circle justify-content-center cardColorGood"></div>
                <Card.Text>A good range of blood sugar or A1C</Card.Text>
                <Card.Text><div className="rounded-circle justify-content-center cardColorWarning"></div>
                Outside of a good range of blood suagr or projected A1C</Card.Text>
                <Card.Text><div className="rounded-circle justify-content-center cardColorDanger"></div>
                A high blood sugar or projected A1C</Card.Text>
            </Card.Body>
        </Card>
    )
}