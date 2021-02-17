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
