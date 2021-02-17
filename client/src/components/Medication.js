import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import NavbarComponent from './SharedComponents/Navbar'
// import BottomMenuList from './SharedComponents/BottomMenuList'

const styles = {
    button:{
        width: "100%"
    },
    row: {
        marginTop: "50px"
    }
}

export default function Medication() {
    return (
        <div>
            <NavbarComponent />
            <Container className="justify-content-around align-items-center">
                <Row style={styles.row}>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Link to='/addnewmeds'>
                                    <Button style={styles.button}>
                                        Log Medication Dose
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={styles.row}>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Link to='/addnewmeds'>
                                    <Button style={styles.button}>
                                        Add new medication
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={styles.row}>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Link to='/medschart'>
                                    <Button style={styles.button}>
                                        Medication chart
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={styles.row}>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Link to='/logmeds'>
                                    <Button style={styles.button}>
                                        Log medication
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
     
        </div>
    )
}
