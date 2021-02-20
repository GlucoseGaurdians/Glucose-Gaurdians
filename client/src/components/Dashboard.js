import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Container, Row, Col } from 'react-bootstrap'
import NavbarComponent from './SharedComponents/Navbar'
import DataRangeCard from './SharedComponents/DataRangeCard'
import DataRangeCard2 from './SharedComponents/DataRangeCard2'
import DataRangeCard3 from './SharedComponents/DataRangeCard3'
import FooterComp from "././SharedComponents/Footer"

import API from '../utils/API'
import Local from "../utils/localStorage"



export default function Dashboard() {

    const [error, setError] = useState("")
    const [lastBS, setLastBS] = useState()
    const { currentUser } = useAuth()

    function getLastBS() {

        const testArr = Local.getTestsArr()

        if(testArr.length > 0){
           setLastBS(testArr[(testArr.length -1)].glucose)
        } else {
            setLastBS("No Blood Sugars Entered Yet")
        }
        
    }

    useEffect(()=> {
        console.log(currentUser.displayName)

        API.userLookUp(currentUser.uid).then(({data}) => {
            
            if(!data) {

                API.newUserCreate(currentUser.uid)
                .then((info) => {

                    Local.setTestsArr(info.data.tests)
                    Local.setMedsArr(info.data.meds)

                    getLastBS()
                })
                .catch(err => {
                    console.log(err)
                    setError('Unable to create new account')
                })
            } else{

                Local.setTestsArr(data.tests)
                Local.setMedsArr(data.meds)

                getLastBS()
                
            }
        })
    },[currentUser])


    return (
        <div> 
            <NavbarComponent />
            <Container>
                <Row style={{textAlign: "center"}}>
                    <Col style= {{paddingTop: '50px'}}>
                    {/* <DataRangeCard3  style={{width: '100%'}} title="Last Blood Sugar" value={lastBS} /> */}
                    <DataRangeCard3  style={{width: '100%'}} title="Projected A1C" />
                    <DataRangeCard2/>
                    </Col>
                </Row>
            </Container>
           
            <FooterComp />
        </div>
    )
}
