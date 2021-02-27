import React, { useRef, useState } from 'react'
import { Button, Form, Modal, Alert } from 'react-bootstrap'
import Local from '../../../utils/localStorage'
import API from '../../../utils/API'
import { useAuth } from '../../../contexts/AuthContext'

export default function AddMedDose(props) {

    const [modalError, setModalError] = useState()
    const medNameRef = useRef()
    const doseRef = useRef()
    const { currentUser } = useAuth()

    const potentialMeds = Local.getMedsArr()
    console.log(potentialMeds)

    const handleClose = () => {
        props.setShow(false)
    }

    function handleAddMed() {

        if(doseRef.current.value === '') {
            return setModalError("Please Enter Dosage")
        } else {
            setModalError('')
        }

        const payload = {
            id: currentUser.uid,
            medName: medNameRef.current.value,
            dose: {
                amount: doseRef.current.value
            }
        }
        API.takeMedDose(payload)
            .then(({data}) => {
                Local.setMedsArr(data.meds)
                handleClose()
            }).catch(err => {
                console.log(err)
                API.saveTransaction({
                    apiName: 'takeMedDose',
                    payload: payload
                })
                let medArry = Local.getMedsArr()

                if(medArry.length > 1){
                    let targetMed = medArry.filter(med => med.name === payload.medName)
                    let theRest = medArry.filter(med => med.name !== payload.medName)

                    targetMed[0].doses.push(payload.dose)
                    theRest.push(targetMed[0])
                    Local.setMedsArr(theRest)
                    handleClose()
                    props.setMedError("No connection found.  Data will be stored when connection is reestablished.")
                    
                    
                    
                } else {
                    medArry[0].doses.push(payload.dose)
                    Local.setMedsArr(medArry)
                    handleClose()
                    props.setMedError("No connection found.  Data will be stored when connection is reestablished.")
                }
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
                        {potentialMeds.map(med => (<option>{med.name}</option>))}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Dosage</Form.Label>
                    <Form.Control type='text' ref={doseRef} >
                    </Form.Control>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleAddMed}>Enter</Button>
        </Modal.Footer>
        </Modal>

    )
}