import React from 'react'
import { Line } from '@reactchartjs/react-chart.js'
import { useAuth } from '../../contexts/AuthContext.js'
// import { UseData } from '../../contexts/DataContext'
import Local from "../../utils/localStorage"



export default function LineChart() {

    const user = useAuth()
    // const userData = UseData()

    // const testsBSArry = userData.bloodSugars
    // const testsDates = userData.dateArr
    const testsArr = Local.getTestsArr()
    console.log(testsArr)

    const tests = testsArr.map(test => test.glucose )
    const dates = testsArr.map(test => test.date)
    console.log(tests)
    console.log(dates)

    const data = {
        // dates = lables
        labels: dates,
        datasets: [
            {
                label: 'Blood Sugar Level',
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
        <>
            <div className='header'>
                <h1 className='title'>{user.currentUser.displayName}'s Blood Sugar Levels</h1>
                {/* <div className='links'>
                    <a
                        className='btn btn-gh'
                        href='https://github.com/reactchartjs/react-chartjs-2/blob/react16/example/src/charts/Line.js'
                    >
                        Github Source
                    </a>
                </div> */}
            </div>
            <Line data={data} options={options} />
        </>
    )
}


