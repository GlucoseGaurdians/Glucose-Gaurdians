import React, { useRef, useState } from 'react'
import { Container, Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import Navbar from "../SharedComponents/Navbar"
import FooterComp from "../SharedComponents/Footer"

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const userNameRef = useRef()
    const {updatePassword, updateEmail, currentUser} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(event) {
        event.preventDefault()

        if ((passwordRef.current.value.length < 6) && (passwordRef.current.value)) {
            return setError('password must be at least 6 characters long')
        }

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('passwords do not match')
        }



        const promises = []
        setLoading(true)
        setError('')

        if(emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        if(passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        if(userNameRef.current.value !== currentUser.displayName) {
            promises.push(currentUser.updateProfile({displayName: userNameRef.current.value}))
        }
        
        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        })

        setLoading(false)
    }

    return (
        <>
        <Navbar />
        <Container className="p-5">
            <Card>
                <Card.Body>
                    <h3 className="text-center mb-4"> Welcome {currentUser.displayName}</h3> 
                    <h2 className="text-center mb-4">Update your profile here!</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="userName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" ref={userNameRef} required 
                            defaultValue={currentUser.displayName} />
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required 
                            defaultValue={currentUser.email} />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} 
                            placeholder="Leave blank to keep the same password" />
                        </Form.Group>
                        <Form.Group id="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={confirmPasswordRef}
                            placeholder="Leave blank to keep the same password" />
                        </Form.Group>
                        <Button variant="outline-danger" disabled={loading} className="" type="submit">Update</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to='/'>Cancel</Link>
            </div>
            </Container>
        </>
    )
}
