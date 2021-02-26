import React from "react";
import NavbarComponent from "../components/SharedComponents/Navbar"
import { Container, Row, InputGroup, Col, Form, FormControl, Button, Card, Alert } from 'react-bootstrap'
import FooterComp from "../components/SharedComponents/Footer"
import SignInLogo from '../Images/signinlogo.png'


function Contact() {


  return (
      <div>
<NavbarComponent />

<Container> 
            <Row className="row py-6 mt-4 align-items-center">
                <div className="col-md-5 pr-lg-5 mb-5 ">
{/* <Card> */}
                <Card.Img className="img-fluid mb-3 d-md-block"  style={{opacity: 0.3}} src={SignInLogo} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Drop Us a Line! We'd love to hear from you!</Card.Title>
    <Card.Text>
      We're working hard to constanlty update the Glucose Guardian App. Reach out to us with any questions or issues you might have and we'll get back to you within 2 buisness days!
    </Card.Text>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Card.Text><p>Be Sure to checkout our FAQ page about our application <a href="/questions">here</a></p></Card.Text>
  </Card.ImgOverlay>
  {/* </Card> */}

        
                </div>
                <div className="col-md-6 col-lg-6 ml-auto">
                    <Card.Body>
                <Form>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="input" placeholder="Name" />
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Diabetic
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Type 1"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Type 2"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="N/A"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <Form.Group as={Row} controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
    <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Write Message Here</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button className="logout" type="submit">Submit</Button>
    </Col>
  </Form.Group>
</Form>
</Card.Body>
                


                </div>

            </Row>

        
      </Container>

<Container className="p-3">
    

    
            {/* <Card>



                <Card.Body>
                    <h2 className="text-center mb-4">Contact the Glucose Guardian Team</h2>
                    <p>Questions? Conerns? Drop us a line and we will get back to you within 2 buisiness days!</p>
                   
                    <Form >
                        <Form.Group id="email">
                        
                        </Form.Group>
                       
                        
                       
                    </Form>
                </Card.Body>
            </Card> */}
        <br />
        <br />
            </Container>
            <br />
      
          
            

        
      </div>
  
  );
}

export default Contact;
