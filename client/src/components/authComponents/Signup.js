import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import LoginSignupContainer from '../LoginSignupComp/LoginSignupContainer'
import ThirdPartyBtns from './ThirdPartyBtns'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const {signup, currentUser, signInWithGoogle} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(event) {
        event.preventDefault()

        if (passwordRef.current.value.length < 6) {
            return setError('password must be at least 6 characters long')
        }

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value )
            
        } catch {
            setError('Failed to create an account')
        }

        
        try {
            const id = currentUser.uid

            fetch('https://api.glucose-guardians.herokuapp.com/api/bloodsugar',{
            method: 'POST',
            body: id
            }).then((res)=> {
                console.log(res)
            })
            history.push('/')
        } catch {
            
        }
        setLoading(false)
    }

    return (
        <LoginSignupContainer>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={confirmPasswordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                    </Form>
                    <br></br>
                    <ThirdPartyBtns />
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to='/login'>Login Here</Link>
            </div>
        </LoginSignupContainer>
    )
}
