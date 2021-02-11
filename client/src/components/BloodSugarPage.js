import React, { useState, useRef } from 'react'
import DataRangeCard from './SharedComponents/DataRangeCard'
import BottomMenuList from './SharedComponents/BottomMenuList'
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import NavbarComponent from "./SharedComponents/Navbar";
import { UseData } from '../contexts/DataContext'

// color coded range at the top : add sugar btn : blood sug chart btn : Take meds btn : Nav?
export default function BloodSugarPage() {

    // console.log(auth.currentUser.uid)

    const [show, setShow] = useState(false);

    const bsRef = useRef()
    const commentsRef = useRef()

    const data = UseData()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function addBloodSugar(e) {
        e.preventDefault()
        console.log('making a call')
        

        const payload = {
            bloodSugar: bsRef.current.value,
            comment: commentsRef.current.value
        }

        console.log(payload)

        fetch('http://localhost:3001/api/bloodsugar',{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(payload)
        }).then((res)=> {
            // data.setBloodSugars(...data.bloodSugars, res)
            console.log(res)
            console.log(JSON.parse(res))
            bsRef.current.value = ''
            commentsRef.current.value = ''
        } )
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
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Blood Sugar Reading</Form.Label>
                            <Form.Control type='text' placeholder='Blood Sugar' ref={bsRef} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control type='text' placeholder='Blood Sugar' maxLength='180'ref={commentsRef} />
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
