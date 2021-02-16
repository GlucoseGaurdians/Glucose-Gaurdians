import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Container, Row, Col } from 'react-bootstrap'
import NavbarComponent from './SharedComponents/Navbar'
import DataRangeCard from './SharedComponents/DataRangeCard'
import BottomMenuList from './SharedComponents/BottomMenuList'
import { UseData } from '../contexts/DataContext'
import API from '../utils/API'


export default function Dashboard() {

    const [error, setError] = useState("")
    const { currentUser } = useAuth()
    const {
        testsArr,
        setTestsArr,
        medsArr,
        setMedsArr,
        fname,
        setFname,
        lname,
        setLname
    } = UseData()

    useEffect(()=> {
        
        const id = currentUser.uid
        const email = currentUser.email
        API.userLookUp(id).then(({data}) => {
            
            if(!data) {
                console.log("person not in data base")
                API.newUserCreate(id, email)
                .then(() => {return setError('')})
                .catch(err => {
                    console.log(err)
                    setError('Unable to create new account')
                })
            }

            setTestsArr(data.tests)
            setMedsArr(data.meds)
            setLname(data.lname)
            setFname(data.fname)


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
