import React from 'react'
import { Line } from '@reactchartjs/react-chart.js'
import { useAuth } from '../../contexts/AuthContext.js'

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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

export default function LineChart() {
    const user = useAuth();
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


