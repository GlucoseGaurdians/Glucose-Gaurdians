import React from "react";
import NavbarComponent from "../components/SharedComponents/Navbar"
import { Container, Form, Button, Card, Alert } from 'react-bootstrap'
import FooterComp from "../components/SharedComponents/Footer"

function Questions() {
    return (
        <div>
            <NavbarComponent />
            <Container className="p-5">
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">FAQ/ Questions</h2>

                        <Form >
                            <Form.Group id="email">
                                <p>

                                    Our app is designed to be a centralized location for diabetics of all types to track their blood sugar, keep track of their meds and provide trusted resources to answer questions about their questions.
<br />
                                    <br />
The goal of our process and design is to help people with diabetes get a handle on their disease and help them control the effects related to diabetes.  Whether a type 1 diabetic who relies on injected insulin to manage blood sugar levels, or a type 2 diabetic who is using oral medications to work with their body’s own processes, knowing the levels of blood sugar and the timing of medications is key to maintaining a healthy diabetic lifestyle.
<br />
                                    <br />
Our blood sugar section of the app helps by logging and showing all entered blood sugars to see how the blood sugars are being controlled over time.  The graph portion of the blood sugar section is designed to help a diabetic see their progress over time and encourage them to log blood sugars more frequently.  An average blood sugar is calculated from the blood sugars entered to give the diabetic an idea of where they stand and can give an idea of what direction their treatment can take.  A color coded display helps a user understand that certain levels of blood sugar are good, or need improvement.
<br />
                                    <br />
There are many side effects associated with having blood sugars out of range (typically between 80 and 120mg/dl) including but not limited to vision loss, limb and digit amputation, digestion issues both minor and severe, coma and death.  Preventing these conditions is nearly impossible without knowing or tracking daily blood sugar levels.  The first step to having control of this disease is knowing where a diabetic stands in relation to their average, daily and long term blood sugar levels.
<br />
                                    <br />
The Glucose Guardian also helps track and log medications used by the diabetic.  This is done so that medications can be measured for effectiveness against measured blood sugar levels.  It also helps a user track medications they have taken so that they are reminded of when and how much of a medication they have used to prevent over using medications or under utilizing the medications used to control their disease.
<br />
                                    <br />
The Glucose Guardian also provides links to resources to help the diabetic understand their disease.  Organizations throughout the world have been studying diabetes and relaying the information as best they can, and The Glucose Guardian points the diabetic in the direction of that information as best it can.
<br />
                                    <br />
While the application isn’t in it’s final form, it hopes to provide some relief and support for those who want a better understanding of their disease, a central way to track their progress, and an outlet to find resources and information that they may not have been able to find on their own.  The Glucose Guardian is a companion to already used methods by the diabetic and should not be the sole information for diabetics.  If you have urgent or serious questions please contact your doctor or medical professional.<br />
                                    <br />

                                </p>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            <br />
            <br />
            <br />
            
        </div>

    );
}

export default Questions;
