import React, { useState } from 'react'
import DataRangeCard from './SharedComponents/DataRangeCard'
import BottomMenuList from './SharedComponents/BottomMenuList'
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'


// color coded range at the top : add sugar btn : blood sug chart btn : Take meds btn : Nav?
export default function BloodSugarPage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function addBloodSugar() {

    }

    const stylings = {
        mainBtnDiv: {
            backgroundColor: 'blue',

        },
        btn: {
            width: '80vw'
        }
    }

    return (
        <div>
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
                        <Link to='/bloodsugargraph'>
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
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Blood Sugar Reading</Form.Label>
                            <Form.Control type='text' placeholder='Blood Sugar' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control type='text' placeholder='Blood Sugar' maxLength='180'/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={addBloodSugar}>Understood</Button>
                </Modal.Footer>
            </Modal>



            <BottomMenuList />
        </div>
    )
}
