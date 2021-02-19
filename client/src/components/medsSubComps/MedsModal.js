import React, { useRef } from 'react'
import { Form } from 'react-bootstrap'

export default function MedsModal() {

    const medNameRef = useRef()

    const potentialMeds = [
        "Humulin",
        "Novolin",
        "NovoLog",
        "FlexPen",
        "Fiasp",
        "Apidra",
        "Humalog",
        "Humulin N",
        "Novolin N",
        "Tresiba",
        "Levemir",
        "Lantus",
        "Toujeo",
        "NovoLog Mix 70/30",
        "Humalog Mix 75/25",
        "Humalog Mix 50/50",
        "Humulin 70/30",
        "Novolin 70/30",
        "Ryzodeg",
        "SymlinPen 120",
        "SymlinPen 60",
        "Precose",
        "Glyset",
        "Invokamet",
        "Xigduo XR",
        "Synjardy",
        "Glucovance",
        "Jentadueto",
        "Actoplus",
        "PrandiMet",
        "Avandamet",
        "Kombiglyze XR",
        "Janumet",
        "Cycloset",
        "Nesina",
        "Kazano",
        "Tradjenta",
        "Glyxambi",
        "Nesina",
        "Oseni",
        "Onglyza",
        "Januvia",
        "Juvisync",
        "Trulicity",
        "Byetta",
        "Tanzeum",
        "Bydureon",
        "Victoza",
        "Ozempic",
        "Starlix",
        "Prandin",
        "Prandimet",
        "Farxiga",
        "Invokana",
        "Invokamet",
        "Jardiance",
        "Glyxambi",
        "Steglatro",
        "Amaryl",
        "Duetact",
        "Avadaryl",
        "Glucotrol",
        "Metaglip",
        "DiaBeta",
        "Glynase",
        "Micronase",
        "Diabinese",
        "Tolinase",
        "Orinase",
        "Tol-Tab",
        "Avandia",
        "Amaryl M",
        "Actos",
        "Actoplus Met",
        "Actoplus Met XR",
        "other"

    ]
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select" ref={medNameRef} onChange={()=> console.log(medNameRef.current.value)}>
                    {potentialMeds.map(med => (<option>{med}</option>))}
                    <option>Other</option>
                </Form.Control>
            </Form.Group>
        </Form>
    )
}




// <Modal
// show={show}
// onHide={handleClose}
// backdrop="static"
// keyboard={false}
// centered
// >
// <Modal.Header closeButton>
//     <Modal.Title>Add Blood Sugar Reading</Modal.Title>
// </Modal.Header>
// {modalError && <Alert variant="danger">{modalError}</Alert>}
// <Modal.Body>
//     <Form>
//         <Form.Group>
//             <Form.Label>Blood Sugar Reading</Form.Label>
//             <Form.Control type='text' placeholder='Blood Sugar' ref={bsRef} />
//         </Form.Group>
//         <Form.Group>
//             <Form.Label>Comments</Form.Label>
//             <Form.Control type='text' placeholder='Comments' maxLength='180' ref={commentsRef} />
//         </Form.Group>
//     </Form>
// </Modal.Body>
// <Modal.Footer>
//     <Button variant="secondary" onClick={handleClose}>
//         Close
//     </Button>
//     <Button variant="primary" onClick={addBloodSugar}>Enter</Button>
// </Modal.Footer>
// </Modal>