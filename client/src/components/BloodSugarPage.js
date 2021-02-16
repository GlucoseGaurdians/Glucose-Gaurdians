import React, { useState, useRef } from 'react'
import DataRangeCard from './SharedComponents/DataRangeCard'
import BottomMenuList from './SharedComponents/BottomMenuList'
import { Container, Row, Col, Button, Form, Modal, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { useAuth } from '../contexts/AuthContext'
import NavbarComponent from "./SharedComponents/Navbar";
import { UseData } from '../contexts/DataContext'
import API from "../utils/API";


// color coded range at the top : add sugar btn : blood sug chart btn : Take meds btn : Nav?
export default function BloodSugarPage() {

    const [show, setShow] = useState(false);
    const [modalError, setModalError] = useState('')

    const bsRef = useRef()
    const commentsRef = useRef()
    const data = UseData()

    const stylings = {
        mainBtnDiv: {
            backgroundColor: 'blue',
        },
        btn: {
            width: '80vw'
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

        if(!(bsRef.current.value)){
            return setModalError("Must input blood sugar reading")
        }

        const bs = parseInt(bsRef.current.value)
        if( isNaN(bs) ) {
            return setModalError("Blood sugar must be a number")
        }

        const payload = {
            glucose: bs,
            comment: commentsRef.current.value
        }

        console.log(payload)
        API.saveBloodSugar(payload)
        .then(handleClose)
        .catch(err => {
            console.log(err)
            setModalError("Unable to save blood sugar")
        })
    }

 


    return (
        <div>
            <NavbarComponent />
            <br />
            <Container>
                <Row>
                    <Col>Add Blood Sugar</Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <DataRangeCard />
                    </Col>
                    <Col>
                        <DataRangeCard />
                    </Col>
                </Row>
            </Container>

            <Container className='align-items-center justify-content-center' style={stylings.mainBtnDiv}>
                <Row>
                    <Col>
                        <Button style={stylings.btn} onClick={handleShow}>
                            Add Blood Sugar
                        </Button>
                    </Col>
                    <Col>
                        <Link to='/bloodsugar/graph'>
                        <Button style={stylings.btn}>
                            Blood Sugar Chart
                        </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to='/medication'>
                        <Button style={stylings.btn}>
                            Take Medication
                        </Button>
                        </Link>
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
                            <Form.Control type='text' placeholder='Comments' maxLength='180'ref={commentsRef} />
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



            <BottomMenuList />
        </div>
    )
}
