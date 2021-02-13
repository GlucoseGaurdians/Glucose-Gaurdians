import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function fullLoginpage({children}) {
    return (
        <Container> 
            <Row className="row py-5 mt-4 align-items-center">
                <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                    <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" className="img-fluid mb-3 d-none d-md-block" />
                    <h1>Create an Account</h1>
                   

                </div>

            </Row>

        
      </Container>
    )
}
