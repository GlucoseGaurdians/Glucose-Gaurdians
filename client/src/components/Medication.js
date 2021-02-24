import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Accordion, Row, Col, Card, Button, Alert } from 'react-bootstrap'
import NavbarComponent from './SharedComponents/Navbar'
import MedsModal from './medsSubComps/MedsModal'
import AddMedDose from './medsSubComps/AddMedDose'
import DeleteMedModal from './medsSubComps/DeleteMedModal'
import Local from '../utils/localStorage'
import FooterComp from './SharedComponents/Footer'
import LineChart from './SharedComponents/Chart'




export default function Medication() {

    // const { currentUser } = useAuth()
    const [showMedModal, setShowMedModal] = useState(false);
    const [showDoseModal, setShowDoseModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [error, setError] = useState(false);

    const medsArr = Local.getMedsArr()

    const handleShowMedModal = () => setShowMedModal(true);
    const handleShowDoseModal = () => {
        if (medsArr.length > 0) {
            setError('')
            setShowDoseModal(true);
        } else {
            setError("Add a medication to add a dose")
        }
    }
    const handleShowDeleteModal = () => {
        if (medsArr.length > 0) {
            setError('')
            setShowDeleteModal(true);
        } else {
            setError("No Medications to Delete")
        }
    }
    return (
        <div>
            <NavbarComponent />
            <Container className="justify-content-around align-items-center">
                {error && <Alert variant="danger">{error}</Alert>}
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Medication options
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Row className="medrow">
                                <Col className='col-md-4'>
                                    <Button className='medbtn btn-block' onClick={handleShowDoseModal}>
                                        Log Medication Dose
                                    </Button>
                                </Col>
                                <Col className='col-md-4'>
                                    <Button className='medbtn btn-block' onClick={handleShowMedModal}>
                                        Add new medication
                                    </Button>
                                </Col>
                                <Col className='col-md-4'>
                                    <Button className='medbtn btn-block' onClick={handleShowDeleteModal}>
                                        Delete Medication
                                    </Button>
                                </Col>
                            </Row>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <LineChart />
                {/* <Button style={styles.button} onClick={handleShowDoseModal}>
                                    Log Medication Dose
                                </Button> */}


                {/* <Button style={styles.button} onClick={handleShowMedModal}>
                                        Add new medication
                                    </Button> */}

                {/* <Button style={styles.button} onClick={handleShowDeleteModal}>
                                    Delete Medication
                                </Button> */}
            </Container>
            <FooterComp />
            <MedsModal show={showMedModal} setShow={setShowMedModal} />
            <AddMedDose show={showDoseModal} setShow={setShowDoseModal} />
            <DeleteMedModal show={showDeleteModal} setShow={setShowDeleteModal} />

        </div>
    )
}
