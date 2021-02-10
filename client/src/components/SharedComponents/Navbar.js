import React from 'react'
import { Card, Button, Alert, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import img from "../Images/logo.png";


export default function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">
                <img src={img}
                 alt ="logo"
                    width="40"
                    height="40"
                    className="d-inline-block"
                />{' '}
                      Glucose Guardians
                 </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="bloodsugar">Track Blood Sugar</Nav.Link>
                    <Nav.Link href="medication">Manage My Medication</Nav.Link>
                    <NavDropdown title="More" id="basic-nav-dropdown">
                        
                        <NavDropdown.Item href="logout">Logout</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="contact">Contact Us</NavDropdown.Item>
                        <NavDropdown.Item href="about">About Us</NavDropdown.Item>
                    </NavDropdown>
                    <Form class="form-inline my-2 my-lg-0 justify-content-right">
      <Button class="btn btn-danger my-2 my-sm-0" type="logout">Logout</Button>
    </Form>
                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
