import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SignupComp from "../authComponents/SignupComp"
import loginlogo from "../loginlogo"
import img from "../Images/loginlogo.png"

export default function Signup({children}) {
    return (
        <Container> 
            <Row className="row py-5 mt-4 align-items-center">
                <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">

                <img src={img}
                 alt ="logo"
                  
                    className="img-fluid mb-3 d-none d-md-block"
                />{' '}
                
            
                    {/* <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" className="img-fluid mb-3 d-none d-md-block" /> */}
                    <h1>Create an Account</h1>
                    <p>Track your blood sugar and medication with the Glucose Guardians App!</p>
                   

                </div>
                <div className="col-md-7 col-lg-6 ml-auto">
                    <SignupComp />


                </div>

            </Row>

        
      </Container>
    )
}




// -----

import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import LoginSignupContainer from '../LoginSignupComp/LoginSignupContainer'
import ThirdPartyBtns from './ThirdPartyBtns'




export default function SignupComp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const {signup, currentUser, signInWithGoogle} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function googleX(){
        try {
            setError('')
            setLoading(true)
            await signInWithGoogle()
            history.push('/')
        } catch {
            setError('Failed to create an account')
        }

    }

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
                        <Button disabled={loading} className="w-100 btn-danger" type="submit">Sign Up</Button>
                    </Form>
                    <br></br>
                    <div className="w-100 text-center mt-3">
                        Or sign in with Google <Button className="btn-danger" onClick={googleX}>Sign In</Button>
                    </div>
                    <ThirdPartyBtns />
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to='/login'>Login Here</Link>
            </div>
        </LoginSignupContainer>
    )
}


