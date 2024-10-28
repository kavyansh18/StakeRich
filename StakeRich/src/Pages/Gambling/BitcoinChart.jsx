import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

// Register Chart.js modules and scales
Chart.register(...registerables);

const BitcoinChart = ({ livePriceData, currentPrice }) => {
    const data = {
        datasets: [
            {
                label: 'Live Bitcoin Price (USD)',
                data: livePriceData,
                borderColor: 'rgba(255, 99, 132, 1)', // Changed color of the graph line
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Added transparent background
                borderWidth: 2,
                fill: true, // Enable fill to show the background color
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'time', // Set the x-axis type to 'time'
                time: {
                    unit: 'minute',
                    displayFormats: {
                        minute: 'HH:mm',
                    },
                },
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Price (USD)',
                },
                beginAtZero: false,
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    };

    return (
        <div className="graph-container">
            <h2>Bitcoin Live Chart</h2>
            <div style={{ height: '400px', width: '100%' }}>
                <Line data={data} options={options} />
            </div>
            <h3>Current Price: ${currentPrice.toFixed(2)}</h3>
        </div>
    );
};

export default BitcoinChart;