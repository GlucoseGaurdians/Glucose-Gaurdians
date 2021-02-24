import React, { useState, useRef } from 'react'
// import DataRangeCard from './SharedComponents/DataRangeCard'

import { Container, Row, Col, Button, Form, Modal, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import NavbarComponent from "./SharedComponents/Navbar";
import API from "../utils/API";
import Local from "../utils/localStorage"
// import FooterComp from "../components/SharedComponents/Footer"
import LineChart from './SharedComponents/Chart'


// color coded range at the top : add sugar btn : blood sug chart btn : Take meds btn : Nav?
export default function BloodSugarPage() {

    const [show, setShow] = useState(false);
    const [modalError, setModalError] = useState('')

    const bsRef = useRef()
    const commentsRef = useRef()

    const { currentUser } = useAuth()

    const stylings = {
        mainBtnDiv: {
            backgroundColor: '#DC3545',
            color: 'white',

        },
        btn: {
            width: '80vw',
            backgroundColor: '#DC3545',
            color: 'white',
            borderColor: '#DC3545',
            fontWeight: 'bold',
            marginBottom: '10px'
        }
    }

    const handleClose = () => {
        bsRef.current.value = ''
        commentsRef.current.value = ''
        setModalError('')
        setShow(false)
    }
    const handleShow = () => setShow(true);


    function addBloodSugar(e) {
        e.preventDefault()

        setModalError('')

        if (!(bsRef.current.value)) {
            return setModalError("Must input blood sugar reading")
        }

        const bs = parseInt(bsRef.current.value)
        if (isNaN(bs)) {
            return setModalError("Blood sugar must be a number")
        }

        const payload = {
            test: {
                glucose: bs,
                comment: commentsRef.current.value
            },
            id: currentUser.uid
        }

        API.saveBloodSugar(payload)
        .then(({data}) => {
            Local.setTestsArr(data.tests)
            handleClose()
        })
        .catch(err => {
            console.log(err)
            setModalError("Unable to save blood sugar")
            API.saveTransaction({
                apiName: "saveBloodSugar",
                payload: payload 
            })
        })
    }


    return (
        <div>
             <NavbarComponent />
            <br />
            <Container>
                <Row>
                    <Col>
                        <LineChart />
                        <Row style={{ padding: '50px', justifyContent: 'center', maxWidth: '510px' }}>
                            <Col>
                                <Button style={stylings.btn} onClick={handleShow}>
                                    Add Blood Sugar
                        </Button>
                            </Col>
                            <Col>
                                <Link to='/medication'>
                                    <Button style={stylings.btn}>
                                        Take Medication
                        </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Blood Sugar Reading</Modal.Title>
                </Modal.Header>
                {modalError && <Alert variant="danger">{modalError}</Alert>}
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Blood Sugar Reading</Form.Label>
                            <Form.Control type='text' placeholder='Blood Sugar' ref={bsRef} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control type='text' placeholder='Comments' maxLength='180' ref={commentsRef} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addBloodSugar}>Enter</Button>
                </Modal.Footer>
            </Modal>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        
    )
}