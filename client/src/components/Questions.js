import React from "react";
import NavbarComponent from "../components/SharedComponents/Navbar"
import { Container, Form, Button, Card, Alert } from 'react-bootstrap'
import FooterComp from "../components/SharedComponents/Footer"


function Questions() {


  return (
      <div>
<NavbarComponent />
<Container className="p-5">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">FAQ/ Questions</h2>
                   
                    <Form >
                        <Form.Group id="email">
                         <p>
                            The Glucose Guardian App is designed to help diabetics better track their glucose health. 

                         </p>
                        </Form.Group>
                       
                        
                       
                    </Form>
                </Card.Body>
            </Card>
        
            </Container>
            <FooterComp />
      </div>
  
  );
}

export default Questions;
