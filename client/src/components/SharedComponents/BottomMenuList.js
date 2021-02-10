import React from 'react'
import { Link } from 'react-router-dom'
import { Card, ListGroup } from 'react-bootstrap'

export default function BottomMenuList() {
    return (
        <div>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item> <Link to="/bloodsugar">My Blood Sugar</Link>  </ListGroup.Item>
                    <ListGroup.Item><Link to="/medication">Manage My Medications</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/questions">Questions?</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/">Home</Link></ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}
