import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import NavbarComponent from './SharedComponents/Navbar'
import DataRangeCard from './SharedComponents/DataRangeCard'
import BottomMenuList from './SharedComponents/BottomMenuList'

export default function Dashboard() {
    const history = useHistory()
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

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
