import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Container, Row, Col } from 'react-bootstrap'
import NavbarComponent from './SharedComponents/Navbar'
import LastTestCard from './SharedComponents/LastTestCard'
import AverageTestCard from './SharedComponents/AverageTestCard'
import A1Ccard from './SharedComponents/A1Ccard'
import BottomMenuList from './SharedComponents/BottomMenuList'
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

            // Local.setTestsArr(data.tests)
            // Local.setMedsArr(data.meds)
        })


    },[currentUser])

    // const testArr = Local.getTestsArr()
    // console.log(testArr)
    // const lastBS = testArr[(testArr.length -1)].glucose
    // console.log(lastBS)
    let lastBS
    const testArr = Local.getTestsArr()
    if(testArr.length > 0){
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
                <Row class="d-flex justify-content-center">
                    {/* <Col><DataRangeCard title="Last Blood Sugar" value={lastBS}/></Col> */}
                    <Col  class="d-flex justify-content-center"><LastTestCard /></Col>
                    <Col  class="d-flex justify-content-center"><A1Ccard /></Col>
                </Row>
                <Row><BottomMenuList/></Row>
            </Container>
        </div>
    )
}
