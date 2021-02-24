import React from 'react'
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap'
import NavbarComponent from './SharedComponents/Navbar'
import Local from '../utils/localStorage'
import API from '../utils/API'
import { useAuth } from '../contexts/AuthContext'
import LineChart from "../components/SharedComponents/Chart.js"

const styles = {
    button: {
        width: "100%"
    },
    row: {
        marginTop: "50px"
    }
}





export default function Medication() {

    const { currentUser } = useAuth()
    // grabs the meds array for user
    const medsArr = Local.getMedsArr()

    function handleAddMed(med) {
        // med should be an object and should have a name key
        // name: String,
        // type: {
        //     type: String,
        // },
        // doses: [{
        //     date: {
        //         type: Date,
        //         default: Date.now
        //     },
        //     amount: String
        // }]
        API.addNewMed(currentUser.uid, med)
            .then(({ data }) => {
                Local.setMedsArr(data.meds)
            })
            .catch(err => console.log(err))
    }

    function handleAddDose(medName, dose) {
        API.takeMedDose(currentUser.uid, medName, dose)
            .then(({ data }) => {
                Local.setMedsArr(data.meds)
            })
            .catch(err => console.log(err))
    }

    function handleDeleteMed(medName) {
        API.removeMed(currentUser.uid, medName)
            .then(({ data }) => {
                Local.setMedsArr(data.meds)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <NavbarComponent />
            <Container className="justify-content-around align-items-center">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                 Medication Options
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Row>
                            <Card.Body onClick={} as={Button}>Add new medication</Card.Body>
                            <Card.Body as={Button}>Add new medication</Card.Body>
                            <Card.Body as={Button}>Add new medication</Card.Body>
                            </Row>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Container>
                    <LineChart />
                </Container>
            </Container>
        </div>
    )
}
