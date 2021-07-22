import React from 'react';
import { Line } from 'react-chartjs-2';

import './barChart.css';


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const BarChart = () => {
    const hours = [];
    let dataCPU = [];
    let dataRAM = [];

    for (let hour = 1; hour <= 24; hour++) {
        dataCPU.push(`${getRandomInt(0, 80)}`)
        dataRAM.push(`${getRandomInt(0, 80)}`);

        (hour < 10) ? hours.push(`0${hour}:00`) : hours.push(`${hour}:00`)
    }
    return (
        <>
            <Line
                className='chart-block'
                type={'line'}
                data={{
                    labels: hours,
                    datasets: [
                        {
                            label: 'CPU',
                            data: dataCPU,
                            borderColor: 'rgb(52,151,218)',
                            tension: 0.3,

                        },
                        {
                            label: 'RAM',
                            data: dataRAM,
                            borderColor: 'rgb(253,57,122)',
                            tension: 0.3
                        }

                    ]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    layout: {
                        padding: 20,
                    },
                    scale: {
                        gridLines: {
                            backgrondColor: 'transparent'
                        },
                        angleLines: {
                            color: 'transparent'
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                // This more specific font property overrides the global property
                                font: {
                                    size: 20
                                },
                                // color: 'white'
                            }
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            },
                        },],
                    },
                }}
            />
        </>
    )
}

export default BarChart;