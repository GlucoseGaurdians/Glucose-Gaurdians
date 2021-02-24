import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
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

        if  (121 < lastBs && lastBs < 161) {

            setTestColorL("cardColorWarning");
            setStatementL("Blood sugar is a little high.  You're doing well, just make sure you test often and keep an eye on your carbs.");
             

            
        }
       else if (lastBs < 80 ) {

            setTestColorL("cardColorWarning");
            setStatementL("You tested pretty low, make sure you are eating throughout the day and test often.");
             

            
        }
        else if (80 < lastBs && lastBs < 121) {
            setTestColorL("cardColorGood")
            setStatementL("Nicely done!  This test was in range, and that's the goal!  Make sure to test often to track your progress.")
             
            
        }

        else if (lastBs >= 161) {
            setTestColorL("cardColorDanger")
            setStatementL("That test was pretty high.  Make sure you are watching what you eat, taking your meds on time and testing often.  You'll get where you need to be, just keep at it.")
             
            
        }
        else{
            setTestColorL("cardColorGood")
            setStatementL("Not enough information.  Test more often.")
             
            
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
            setStatementC("Your Projected A1C is just out of range. Try taking more blood sugar tests and keep an eye on sugar intake.");

        }
        else if (4.4 < finalA1C && finalA1C < 5.8) {
            setTestColorC("cardColorGood")
            setStatementC("Your projected A1C is in a good range.  Keep up the good work and make sure to test often to ensure accurate projections.")
             
        }

        else if (finalA1C >= 7.2) {
            setTestColorC("cardColorDanger")
            setStatementC("Your projected A1C is pretty high.  Make sure to test often and be aware of carb and sugar intake.")
             
            
        }
        else{
            setTestColorC("cardColorGood")
            setStatementC("Not enough information.  Test more often.")
             
            
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
            setStatementA("Your blood sugar is a little out of range.  Be sure to test often and track what you eat.");

        }
        else if (80 < finalAvg && finalAvg < 121) {
            setTestColorA("cardColorGood")
            setStatementA("Your blood sugar readings are looking good!  Keep up the good work and test often for the most accurate blood sugar average.")
             
        }

        else if (finalAvg >= 161) {
            setTestColorA("cardColorDanger")
            setStatementA("Your blood sugar average is a little high.  Make sure you are testing often and tracking any carbs or sugar you are eating.")
             
        }
        else{
            setTestColorA("cardColorGood")
            setStatementA("Not enough information. Test more often.")
             
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

            {/* <Container>
                <Row style={{textAlign: "center"}}>
                    <Col className="col-md-6" style= {{paddingTop: '50px'}}>
                    <div className="card">
  <h5 className="card-header">Featured</h5>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                    </Col>
                </Row>

            </Container> */}
            <Container>
                <Row style={{ textAlign: "center" }}>
                    <Col style={{ paddingTop: '50px' }}>
                        <LastTestCard style={{ width: '100%' }} title="Last Blood Sugar" value={lastBS} color={testColorL} statement={statementL}/>
                        <AvgTestCard style={{ width: '100%' }} title="Average Blood Sugar" value={avgBS} color={testColorA} statement={statementA}/>
                        <A1cCard style={{ width: '100%' }} title="Projected A1C" value={a1C} color={testColorC} statement={statementC}/>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


        </div>

    )
}
