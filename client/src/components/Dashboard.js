import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import NavbarComponent from './SharedComponents/Navbar'
import DataRangeCard from './SharedComponents/DataRangeCard'
import DataRangeCard2 from './SharedComponents/DataRangeCard2'
import DataRangeCard3 from './SharedComponents/DataRangeCard3'
import FooterComp from "././SharedComponents/Footer"

import API from '../utils/API'
import Local from "../utils/localStorage"



export default function Dashboard() {

    

    // const [error, setError] = useState("")
    const [lastBS, setLastBS] = useState()
    const { currentUser } = useAuth()
    const [avgBS, setAvgBS] = useState()
    const [a1C, setA1c] = useState()

    function getLastBS() {

        const testArr = Local.getTestsArr()

        if(testArr.length > 0){
           setLastBS(testArr[(testArr.length -1)].glucose)
        } else {
            setLastBS("No Blood Sugars Entered Yet")
        }
        
    }

    function avgBloodS(){
        const testArr = Local.getTestsArr();
        let avgBSugar=0;
        for(let i=0; i < testArr.length; i++){
           avgBSugar+=testArr[i].glucose
           console.log(testArr[i].glucose)
           console.log(avgBSugar)

        }
        setAvgBS(Math.floor(avgBSugar/testArr.length));
        console.log(avgBSugar);
    }

    function a1Cfunct(){
        const testArr = Local.getTestsArr();
        let avgBSugar=0;
        let finalAvg=0
        for(let i=0; i < testArr.length; i++){
           avgBSugar+=testArr[i].glucose
           console.log(testArr[i].glucose)
           console.log(avgBSugar)

        }
        finalAvg = (avgBSugar/testArr.length);
        console.log(avgBSugar);
        setA1c(((finalAvg+46.7)/28.7).toFixed(1));
    }


    useEffect(()=> {

        API.userLookUp(currentUser.uid).then(({data}) => {
            
            if(!data) {

                API.newUserCreate(currentUser.uid)
                .then((info) => {

                    Local.setTestsArr(info.data.tests)
                    Local.setMedsArr(info.data.meds)

                    getLastBS()
                    avgBloodS()
                    a1Cfunct()
                    
                })
                .catch(err => {
                    console.log(err)
                    // setError('Unable to create new account')
                })
            } else{

                Local.setTestsArr(data.tests)
                Local.setMedsArr(data.meds)

                getLastBS()
                avgBloodS()
                a1Cfunct()

                
            }
        })
    },[currentUser])


    return (
        <div> 
            <NavbarComponent />

            <Container>
                <Row style={{textAlign: "center"}}>
                    <Col className="col-md-6" style= {{paddingTop: '50px'}}>
                    <Form>This is a btton</Form>
                    </Col>
                </Row>

            </Container>
            <Container>
                <Row style={{textAlign: "center"}}>
                    <Col style= {{paddingTop: '50px'}}>
                    <DataRangeCard2  style={{width: '100%'}} title="Last Blood Sugar" value={lastBS} />
                    {/* <DataRangeCard3  style={{width: '100%'}} title="Projected A1C" /> */}
                    <DataRangeCard3  style={{width: '100%'}} title="Average Blood Sugar" value={a1C}/>
                    </Col>
                </Row>
            </Container>
           
            {/* <FooterComp /> */}
        </div>
         
    )
}
