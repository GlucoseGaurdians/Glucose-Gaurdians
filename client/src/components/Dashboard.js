import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import NavbarComponent from './SharedComponents/Navbar'
import DataRangeCard from './SharedComponents/DataRangeCard'
import BottomMenuList from './SharedComponents/BottomMenuList'
import { UseData } from '../contexts/DataContext'


export default function Dashboard() {
    const history = useHistory()
    const [error, setError] = useState("")
    const { currentUser } = useAuth()
    const { bloodSugars, setBloodSugars } = UseData()

    // this doesn't work yet
    useEffect(()=> {
        const id = currentUser.uid

        fetch("http://localhost:3001/api/bloodsugar/"+id)
        .then(res => res.json())
        .then((data) => {
            setBloodSugars(data)
        })
        .catch(err => console.log(err))
    },[])

    return (
        <div>
            <NavbarComponent />
            <Container className="justify-content-around align-items-center">
                <Row>
                    <Col><DataRangeCard /></Col>
                    <Col><DataRangeCard /></Col>
                </Row>
                <Row><BottomMenuList/></Row>
            </Container>
        </div>
    )
}
