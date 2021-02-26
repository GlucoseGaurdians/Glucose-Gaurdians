import React, { useRef, useState } from 'react'
import { Line } from '@reactchartjs/react-chart.js'
import Local from "../../utils/localStorage"
// import { useAuth } from '../../contexts/AuthContext'
import { Form } from "react-bootstrap"

export default function TestMedChart() {

    // const [activeChart, setActiveChart] = useState(false)
    const [dates, setDates] = useState([])
    const [tests, setTests ] = useState([])

    // const { currentUser } = useAuth()
    const medArr = Local.getMedsArr()
    const medNameRef = useRef()
    console.log(medArr)
    let dates2 = []
    let tests2 = []


    function handleAddChart() {

        
        const targetMed = medArr.filter(med => med.name === medNameRef.current.value)
        console.log(targetMed[0].doses)
        dates2 = targetMed[0].doses.map(dose => dose.date)
        tests2 = targetMed[0].doses.map(dose => parseInt(dose.amount))
        console.log(tests2)
        console.log(dates2)
        setDates(dates2)
        setTests(tests2)
        // setActiveChart(true)
    }

    const data = {
        // dates = lables
        labels: dates,
        datasets: [
            {
                // label: [medNameRef.current.value],
                // put in the blood sugars 
                data: tests,
                fill: false,
                backgroundColor: 'rgb(207, 4, 47)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    }
    
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }
   
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Medication Name</Form.Label>
                    <Form.Control as="select" ref={medNameRef} onChange={handleAddChart}>
                        {medArr.map(medication => (<option>{medication.name}</option>))}
                    </Form.Control>
                </Form.Group>
            </Form>
            <Line data={data} options={options} />
        </div>
    )
}
