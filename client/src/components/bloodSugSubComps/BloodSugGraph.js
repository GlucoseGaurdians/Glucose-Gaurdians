
import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../SharedComponents/Navbar'
import LineChart from '../SharedComponents/Chart.js'



// color coded range at the top : add sugar btn : blood sug chart btn : Take meds btn : Nav?
export default function BloodSugGraph() {
    return (
        <div>
            <Navbar />
            <Container>
            <LineChart/>
            </Container>
        </div>
    )
}
