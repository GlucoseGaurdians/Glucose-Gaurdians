import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import LoginSignupContainer from '../LoginSignupComp/LoginSignupContainer'
import ThirdPartyBtns from './ThirdPartyBtns'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(event) {
        console.log("handleSubmit is running")
        event.preventDefault()

        try {
            console.log("sending login request")
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value )
            history.push("/")
        } catch {
            console.log("failed log in request")
            setError('Failed to sign in')
        }

        setLoading(false)
    }

    return (
        
        <LoginSignupContainer>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Login</h2>
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
                        <Button disabled={loading} className="w-100 btn-danger" type="submit">Log In</Button>
                    </Form>
                    <div className="w-1000 text-center mt-3">
                        <Link to="/reset-password">Forgot Password?</Link>
                    </div>
                    <br></br>
                    <ThirdPartyBtns />
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to='/signup'>Sign Up Here</Link>
            </div>
        </LoginSignupContainer>
    )
}