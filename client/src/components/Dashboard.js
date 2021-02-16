import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import NavbarComponent from './SharedComponents/Navbar'
import DataRangeCard from './SharedComponents/DataRangeCard'
import BottomMenuList from './SharedComponents/BottomMenuList'
import { UseData } from '../contexts/DataContext'
import API from '../utils/API'


export default function Dashboard() {
    const history = useHistory()
    const [error, setError] = useState("")
    const { currentUser } = useAuth()
    const { bloodSugars, setBloodSugars } = UseData()

    // this doesn't work yet
    useEffect(()=> {
        let person
        const id = currentUser.uid
        const email = currentUser.email
        API.userLookUp(id).then((res) => {
            person = res.data
            console.log(person)
            if(!person) {
                console.log("person not in data base")
                API.newUserCreate(id, email)
            }
        })


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
