import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Container, Row, Col } from 'react-bootstrap'
import NavbarComponent from './SharedComponents/Navbar'
import AvgTestCard from './SharedComponents/AvgTestCard'
import LastTestCard from './SharedComponents/LastTestCard'
import A1cCard from './SharedComponents/A1Ccard'


import API from '../utils/API'
import Local from "../utils/localStorage"



export default function Dashboard() {

    // const [error, setError] = useState("")
    const [lastBS, setLastBS] = useState()
    const { currentUser } = useAuth()
    const [avgBS, setAvgBS] = useState()
    const [a1C, setA1c] = useState()
    const [statementA, setStatementA] = useState()
    const [testColorA, setTestColorA] = useState()
    const [testColorL, setTestColorL] = useState()
    const [statementL, setStatementL] = useState()
    const [testColorC, setTestColorC] = useState()
    const [statementC, setStatementC] = useState()

    function getLastBS() {

        const testArr = Local.getTestsArr()
        let lastBs=0
        if (testArr.length > 0) {
            setLastBS(testArr[(testArr.length - 1)].glucose)
            lastBs=(testArr[(testArr.length - 1)].glucose)
        } else {
            setLastBS("No Blood Sugars Entered Yet")
        
        }

        if (lastBs < 80 || (121 < lastBs && lastBs < 161)) {

            setTestColorL("cardColorWarning");
            setStatementL(0);
             

            console.log("Card Warning", lastBs)
        }
        else if (80 < lastBs && lastBs < 121) {
            setTestColorL("cardColorGood")
            setStatementL(1)
             
            console.log("Card Good", lastBs)
        }

        else if (lastBs >= 161) {
            setTestColorL("cardColorDanger")
            setStatementL(3)
             
            console.log("Card Danger", lastBs)
        }
        else{
            setTestColorL("cardColorGood")
            setStatementL(4)
             
            console.log("Card Default", lastBs)
        }

    }

    function avgBloodS() {
        const testArr = Local.getTestsArr();
        let avgBSugar = 0;
        for (let i = 0; i < testArr.length; i++) {
            avgBSugar += testArr[i].glucose


        }
        let example = (Math.floor(avgBSugar / testArr.length));
        setAvgBS(example);
       
    }

    function a1Cfunct() {
        const testArr = Local.getTestsArr();
        let avgBSugar = 0;
        let finalAvg = 0;
        let finalA1C = 0;
        for (let i = 0; i < testArr.length; i++) {
            avgBSugar += testArr[i].glucose



        }
        finalAvg = (avgBSugar / testArr.length);

        setA1c(((finalAvg + 46.7) / 28.7).toFixed(1));

        finalA1C = ((finalAvg + 46.7) / 28.7).toFixed(1)

        if (finalA1C < 4.4 || (5.9 < finalA1C && finalA1C < 7.2)) {

            setTestColorC("cardColorWarning");
            setStatementC(0);

            console.log("Card Warning", finalA1C)
        }
        else if (4.4 < finalA1C && finalA1C < 5.8) {
            setTestColorC("cardColorGood")
            setStatementC(1)
             
            console.log("Card Good", finalA1C)
        }

        else if (finalA1C >= 7.2) {
            setTestColorC("cardColorDanger")
            setStatementC(3)
             
            console.log("Card Danger", finalA1C)
        }
        else{
            setTestColorC("cardColorGood")
            setStatementC(4)
             
            console.log("Card Default", finalA1C)
        }

    }

    function backGround() {
        const testArr = Local.getTestsArr();
        let avgBSugar = 0;
        let finalAvg = 0;
        for (let i = 0; i < testArr.length; i++) {
            avgBSugar += testArr[i].glucose



        }
        finalAvg = Math.floor(avgBSugar / testArr.length);
        console.log("Card rendering", finalAvg)
        if (finalAvg < 80 || (121 < finalAvg && finalAvg < 161)) {

            setTestColorA("cardColorWarning");
            setStatementA(0);

            console.log("Card Warning", finalAvg)
        }
        else if (80 < finalAvg && finalAvg < 121) {
            setTestColorA("cardColorGood")
            setStatementA(1)
             
            console.log("Card Good", finalAvg)
        }

        else if (finalAvg >= 161) {
            setTestColorA("cardColorDanger")
            setStatementA(3)
             
            console.log("Card Danger", finalAvg)
        }
        else{
            setTestColorA("cardColorGood")
            setStatementA(4)
             
            console.log("Card Default", finalAvg)
        }

    }





     useEffect( () => {

        API.userLookUp(currentUser.uid).then(({ data }) => {

            if (!data) {

                API.newUserCreate(currentUser.uid)
                    .then((info) => {

                        Local.setTestsArr(info.data.tests)
                        Local.setMedsArr(info.data.meds)

                        getLastBS()
                        avgBloodS()
                        a1Cfunct()
                        backGround()


                    })
                    .catch(err => {
                        console.log(err)
                        // setError('Unable to create new account')
                    })
            } else {

                Local.setTestsArr(data.tests)
                Local.setMedsArr(data.meds)

                getLastBS()
                avgBloodS()
                a1Cfunct()
                backGround()



            }
        })
    }, [currentUser])


    return (
        <div>
            <NavbarComponent />
            <Container>
                <Row style={{ textAlign: "center" }}>
                    <Col style={{ paddingTop: '50px' }}>
                        <LastTestCard style={{ width: '100%' }} title="Last Blood Sugar" value={lastBS} color={testColorL} statement={statementL}/>
                        <AvgTestCard style={{ width: '100%' }} title="Average Blood Sugar" value={avgBS} color={testColorA} statement={statementA}/>
                        <A1cCard style={{ width: '100%' }} title="Projected A1C" value={a1C} color={testColorC} statement={statementC}/>
                    </Col>
                </Row>
            </Container>


        </div>

    )
}
