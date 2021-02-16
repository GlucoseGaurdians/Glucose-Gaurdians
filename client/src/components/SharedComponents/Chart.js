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

    const tests = testsArr.map(test => test.glucose )

    const data = {
        // dates = lables
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: '# of Votes',
                // put in the blood sugars 
                data: tests,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
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
                <h1 className='title'>{user.currentUser.email}</h1>
                <div className='links'>
                    <a
                        className='btn btn-gh'
                        href='https://github.com/reactchartjs/react-chartjs-2/blob/react16/example/src/charts/Line.js'
                    >
                        Github Source
                    </a>
                </div>
            </div>
            <Line data={data} options={options} />
        </>
    )
}


