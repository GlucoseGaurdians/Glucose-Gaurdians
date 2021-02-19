import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Container, Row, Col } from 'react-bootstrap'
import NavbarComponent from './SharedComponents/Navbar'
import DataRangeCard from './SharedComponents/DataRangeCard'
import FooterComp from "././SharedComponents/Footer"

import API from '../utils/API'
import Local from "../utils/localStorage"



export default function Dashboard() {

    const [error, setError] = useState("")
    const { currentUser } = useAuth()

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

            Local.setTestsArr(data.tests)
            Local.setMedsArr(data.meds)
        })


    },[currentUser])

    let lastBS
    const testArr = Local.getTestsArr()
    if(testArr){
        lastBS = testArr[(testArr.length -1)].glucose
    } else {
        lastBS = "No Blood Sugars Entered Yet"
    }
    console.log(testArr)


    console.log(lastBS)

    return (
        <div> 
            <NavbarComponent />
            <Container className="justify-content-around align-items-center">
                <Row>
                    <Col><DataRangeCard title="Last Blood Sugar" value={lastBS}/></Col>
                    <Col><DataRangeCard /></Col>
                </Row>
            </Container>
           
            <FooterComp />
        </div>
    )
}
