import React, { useRef, useState } from 'react'
import { Line } from '@reactchartjs/react-chart.js'
import Local from "../../utils/localStorage"
// import { useAuth } from '../../contexts/AuthContext'
import { Form } from "react-bootstrap"

export default function TestMedChart() {

    const [activeChart, setActiveChart] = useState(false)
    const [dates, setDates] = useState()
    const [tests, setTests ] = useState()

    // const { currentUser } = useAuth()
    const medArr = Local.getMedsArr()
    const medNameRef = useRef()
    let dates2 = []
    let tests2 = []


    function handleAddChart() {

        
        const targetMed = medArr.filter(med => med.name === medNameRef.current.value)
        dates2 = targetMed[0].doses.map(dose => dose.date)
        tests2 = targetMed[0].doses.map(dose => parseInt(dose.amount))
        setDates(dates2)
        setTests(tests2)
        setActiveChart(true)
    }
    // useEffect(() => {

    //     targetMed
    // },[medNameRef])

    // const dates = [1,2,3,4]
    // const tests = [1,2,3,4]


    const data = {
        // dates = lables
        labels: dates,
        datasets: [
            {
                // label: [medNameRef.current.value],
                // put in the blood sugars 
                data: tests,
                fill: true,
                backgroundColor: 'rgb(52,58,64, 0.5)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    }
    
    const options = {
        scales: {
            xAxes: [{
                display: true,
                type: 'time',
                time: {
                    parser: 'YYYY/MM/DD HH:mm',
                    tooltipFormat: 'll HH:mm',
                    unit: 'hour',
                    unitStepSize: 1,
                    displayFormats: {
                        'hour': 'MM/DD HH:mm:ss'
                    }
                },
            }],
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                    backgroundColor: 'rgb(200,23,30)',
                    fill: true,
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
            {activeChart && <Line data={data} options={options} />}
        </div>
    )
}
