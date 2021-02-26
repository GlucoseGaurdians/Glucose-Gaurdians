import React from 'react'
import { Container } from 'react-bootstrap'

export default function LoginSignupContainer({children}) {
    return (
        <Container 
        className="d-flex align-items-center justify-content-center" 
        style={{ miniHeight: "100vh"}}
      >
        <div className="w-100 mt-5" style={{ maxWidth: '400px'}}>
            {children}
        </div>
      </Container>
    )
}