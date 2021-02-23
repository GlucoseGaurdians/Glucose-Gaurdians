import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Container, Row, Col } from 'react-bootstrap'
import NavbarComponent from './SharedComponents/Navbar'
import AvgTestCard from './SharedComponents/AvgTestCard'
import LastTestCard from './SharedComponents/LastTestCard'
import A1cCard from './SharedComponents/A1cCard'


import API from '../utils/API'
import Local from "../utils/localStorage"



export default function Dashboard() {

    // const [error, setError] = useState("")
    const [lastBS, setLastBS] = useState()
    const { currentUser } = useAuth()
    const [avgBS, setAvgBS] = useState()
    const [a1C, setA1c] = useState()
    const [statement, setStatement] = useState()
    const [testColor, setTestColor] = useState()

    function getLastBS() {

        const testArr = Local.getTestsArr()

        if (testArr.length > 0) {
            setLastBS(testArr[(testArr.length - 1)].glucose)
        } else {
            setLastBS("No Blood Sugars Entered Yet")
        }

    }

    function avgBloodS() {
        const testArr = Local.getTestsArr();
        let avgBSugar = 0;
        for (let i = 0; i < testArr.length; i++) {
            avgBSugar += testArr[i].glucose


        }
        setAvgBS(Math.floor(avgBSugar / testArr.length));

    }

    function a1Cfunct() {
        const testArr = Local.getTestsArr();
        let avgBSugar = 0;
        let finalAvg = 0
        for (let i = 0; i < testArr.length; i++) {
            avgBSugar += testArr[i].glucose



        }
        finalAvg = (avgBSugar / testArr.length);

        setA1c(((finalAvg + 46.7) / 28.7).toFixed(1));
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
        if (finalAvg < 80 || (121 > finalAvg && finalAvg < 161)) {

            setTestColor("cardColorWarning");
            setStatement(0);
            console.log(testColor);
            console.log("Card Warning", finalAvg)
        }
        else if (80 > finalAvg && finalAvg < 121) {
            setTestColor("cardColorGood")
            setStatement(1)
            console.log(testColor)
            console.log("Card Good", finalAvg)
        }
      
        else if (finalAvg >= 161) {
            setTestColor("cardColorDanger")
            setStatement(3)
            console.log(testColor)
            console.log("Card Danger", finalAvg)
        }
        else{
            setTestColor("cardColorGood")
            setStatement(4)
            console.log(testColor)
            console.log("Card Default", finalAvg)
        }

    }





useEffect(() => {

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
                    <LastTestCard style={{ width: '100%' }} title="Last Blood Sugar" value={lastBS} color={testColor} statement={statement} />
                    <AvgTestCard style={{ width: '100%' }} title="Average Blood Sugar" value={avgBS} color={testColor} statement={statement} />
                    <A1cCard style={{ width: '100%' }} title="Projected A1C" value={a1C} color={testColor} statement={statement} />
                </Col>
            </Row>
        </Container>


    </div>

)
}
