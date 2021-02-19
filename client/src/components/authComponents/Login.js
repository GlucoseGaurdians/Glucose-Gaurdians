import React from 'react'
import { Container, Row } from 'react-bootstrap'
import LoginComp from "./LoginComp"




export default function Signup({children}) {
    return (
        <Container> 
            <Row className="row py-5 mt-4 align-items-center">
                <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">

                <img src="./Images/signinlogo.png"
                 alt ="logo"
                  
                    className="img-fluid mb-3 d-none d-md-block"
                />{' '}
                
                    <h1>Sign In to your Glucose Guardian Account</h1>
                    <p>Stay on track with your glucose health!</p>
                   

                </div>
                <div className="col-md-7 col-lg-6 ml-auto">
                    <LoginComp />


                </div>

            </Row>

        
      </Container>
    )
}



