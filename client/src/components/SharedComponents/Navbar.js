import React from 'react'
import { Button, Navbar, Nav, NavDropdown, Form } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import "./Navbar.css"
import { useHistory } from 'react-router-dom'

export default function NavbarComponent() {
    const { logout } = useAuth()
    const history = useHistory()

    function handleLogOut() {
        logout()
        history.push('/login')
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">
                <img src="./Images/logo.png"
                 alt ="logo"
                    width="40"
                    height="40"
                    className="d-inline-block"
                />{' '}
                      The Glucose Guardian
                 </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="">    </Nav.Link>
                    <Nav.Link href="bloodsugar">Track Blood Sugar</Nav.Link>
                    <Nav.Link href="">    </Nav.Link>
                    <Nav.Link href="medication">Manage My Medications</Nav.Link>
                    <Nav.Link href="">    </Nav.Link>
                    <NavDropdown title="More" id="basic-nav-dropdown">
                        
                        <NavDropdown.Item href="update-profile">Update Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="contact">Contact Us</NavDropdown.Item>
                        <NavDropdown.Item href="questions">Questions</NavDropdown.Item>
                    </NavDropdown>
                    
                
                </Nav>
                <Form className="text-right">
                    <Button className="float-right mr-auto align-right btn btn-danger my-2 my-sm-0" type="logout" onClick={handleLogOut}>Logout</Button>
                    </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
