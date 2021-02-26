import React from 'react'
import { Card } from 'react-bootstrap'
import "./card.css"

export default function ReferenceCard(props) {
    
    return (
       
       <Card>
            <Card.Body className="reference">
            
            
                <Card.Title className="textColor">Color Code Reference</Card.Title>
                
                <Card.Text className="textColor"><span className="circle cardColorGood"></span>A good range of blood sugar or A1C, typically between 80mg/dl and 120mg/dl</Card.Text>
                
                <Card.Text className="textColor"><span className="circle cardColorWarning"></span>Outside of a good range of blood suagr or projected A1C, between 121mg/dl and 160mg/dl or less than 80mg/dl</Card.Text>
                
                <Card.Text className="textColor"><span className="circle cardColorDanger"></span>A high blood sugar or projected A1C, above 161mg/dl</Card.Text>
                
            </Card.Body>
        </Card>
    )
}