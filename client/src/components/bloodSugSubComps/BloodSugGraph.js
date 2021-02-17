
import React from 'react'
// import { Row, Col, Container } from 'react-bootstrap'
import Navbar from '../SharedComponents/Navbar'
import LineChart from '../SharedComponents/Chart.js'
import BottomMenuList from '../SharedComponents/BottomMenuList'


// color coded range at the top : add sugar btn : blood sug chart btn : Take meds btn : Nav?
export default function BloodSugGraph() {
    return (
        <div>
            <Navbar />
            <Container>
            <LineChart/>
            <BottomMenuList/>
            </Container>
        </div>
    )
}
