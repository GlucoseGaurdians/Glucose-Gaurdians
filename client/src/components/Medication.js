import React from 'react'
import { Link } from 'react-router-dom'
import {  Container, Row, Col, Card, Button } from 'react-bootstrap'
import NavbarComponent from './SharedComponents/Navbar'
import Local from '../utils/localStorage'
import API from '../utils/API'
import { useAuth } from '../contexts/AuthContext'
import FooterComp from "../components/SharedComponents/Footer"

const styles = {
    button:{
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
            .then(({data}) => {
                Local.setMedsArr(data.meds)
            })
            .catch(err => console.log(err))
    }

    function handleAddDose(medName, dose) {
        API.takeMedDose(currentUser.uid, medName, dose)
            .then(({data}) => {
                Local.setMedsArr(data.meds)
            })
            .catch(err => console.log(err))
    }

    function handleDeleteMed(medName) {
        API.removeMed(currentUser.uid, medName)
        .then(({data}) => {
            Local.setMedsArr(data.meds)
        })
        .catch(err => console.log(err))  
    }

    return (
        <div>
            <NavbarComponent />
            <Container className="justify-content-around align-items-center">
                <Row style={styles.row}>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Link to='/addnewmeds'>
                                    <Button style={styles.button}>
                                        Log Medication Dose
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={styles.row}>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Link to='/addnewmeds'>
                                    <Button style={styles.button}>
                                        Add new medication
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={styles.row}>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Link to='/medschart'>
                                    <Button style={styles.button}>
                                        Medication chart
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={styles.row}>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Link to='/logmeds'>
                                    
                                    <Button style={styles.button}>
                                        Log medication
                                    </Button>
                                </Link>

        
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <FooterComp />
     
        </div>
    )
}
