import React, { useRef, useState } from 'react'
import { Button, Form, Modal, Alert } from 'react-bootstrap'
import Local from '../../utils/localStorage'
import API from '../../utils/API'
import { useAuth } from '../../contexts/AuthContext'

export default function DeleteMedModal(props) {

    const [modalError, setModalError] = useState()
    const medNameRef = useRef()
    const { currentUser } = useAuth()

    const potentialMeds = Local.getMedsArr()

    const handleClose = () => {
        props.setShow(false)
    }

    function handleDeleteMed() {
        console.log("bout to call db")
        API.removeMed(currentUser.uid, medNameRef.current.value)
        .then(({data}) => {
            Local.setMedsArr(data.meds)
            potentialMeds = Local.getMedsArr()
            handleClose()
        })
        .catch(err => {
            console.log(err)
            setModalError("unable to delete medication")
        })  
    }

    return (

        <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title>Add New Dose</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {modalError && <Alert variant="danger">{modalError}</Alert>}
            <Form>
                <Form.Group>
                    <Form.Label>Medication Name</Form.Label>
                    <Form.Control as="select" ref={medNameRef}>
                        {potentialMeds.map(medication => (<option>{medication.name}</option>))}
                    </Form.Control>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="danger" onClick={handleDeleteMed}>Delete</Button>
        </Modal.Footer>
        </Modal>

    )
}