import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import NavbarComponent from './SharedComponents/Navbar'
import DataRangeCard from './SharedComponents/DataRangeCard'
import BottomMenuList from './SharedComponents/BottomMenuList'
import { UseData } from '../contexts/DataContext'
import { getBloodSugar } from '../utils/API'


export default function Dashboard() {
    const history = useHistory()
    const [error, setError] = useState("")
    const { currentUser } = useAuth()
    const { bloodSugars, setBloodSugars } = UseData()

    // this doesn't work yet
    useEffect(()=> {
        const id = currentUser.uid
        getBloodSugar(id)

    },[currentUser])

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
