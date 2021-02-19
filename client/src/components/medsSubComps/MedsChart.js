import React from 'react'
import { Card, Container, Accordion, Button } from 'react-bootstrap'
import NavbarComponent from "../SharedComponents/Navbar"
import LineChart from "../SharedComponents/Chart.js"
import BottomMenuList from "../SharedComponents/BottomMenuList.js"

export default function MedsChart() {
    return (
        <div>
            <NavbarComponent />
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Choose Medication
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>List of clickable medications that will update the chart. </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Container>
                <LineChart />
                <BottomMenuList />
            </Container>

        </div>
    )
}
