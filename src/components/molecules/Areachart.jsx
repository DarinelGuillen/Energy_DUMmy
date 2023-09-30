import React from 'react';
import ReactApexChart from 'react-apexcharts';

function Areachart() {
    const series = [
        {
            name: 'Network',
            data: [
                {x: 'Jan 15 2018', y: 18},
                {x: 'Jan 16 2018', y: 25},
                {x: 'Jan 17 2018', y: null},
                {x: 'Jan 18 2018', y: 29},
                {x: 'Jan 19 2018', y: 35},
                {x: 'Jan 20 2018', y: 42},
                {x: 'Jan 21 2018', y: 48},
                {x: 'Jan 22 2018', y: 51},
                {x: 'Jan 23 2018', y: 47},
                {x: 'Jan 24 2018', y: 39},
                {x: 'Jan 25 2018', y: null},
                {x: 'Jan 26 2018', y: 36},
                {x: 'Jan 27 2018', y: 29},
                {x: 'Jan 28 2018', y: null},
                {x: 'Jan 29 2018', y: 24},
                {x: 'Jan 30 2018', y: 18},
                {x: 'Jan 31 2018', y: 42},
                {x: 'Feb 01 2018', y: 31},
                {x: 'Feb 02 2018', y: 28},
                {x: 'Feb 03 2018', y: 22},
                {x: 'Feb 04 2018', y: null},
                {x: 'Feb 05 2018', y: 19},
                {x: 'Feb 06 2018', y: 15},
                {x: 'Feb 07 2018', y: null},
                {x: 'Feb 08 2018', y: 11},
                {x: 'Feb 09 2018', y: 9},
                {x: 'Feb 10 2018', y: 14},
                {x: 'Feb 11 2018', y: 18},
                {x: 'Feb 12 2018', y: null},
                {x: 'Feb 13 2018', y: 25},
                {x: 'Feb 14 2018', y: 29},
                {x: 'Feb 15 2018', y: 32},
                {x: 'Feb 16 2018', y: 28},
                {x: 'Feb 17 2018', y: null},
                {x: 'Feb 18 2018', y: 36},
                {x: 'Feb 19 2018', y: 40},
                {x: 'Feb 20 2018', y: 45},
                {x: 'Feb 21 2018', y: null},
                {x: 'Feb 22 2018', y: 39},
                {x: 'Feb 23 2018', y: 32},
                {x: 'Feb 24 2018', y: 28},
                {x: 'Feb 25 2018', y: null},
                {x: 'Feb 26 2018', y: 25},
                {x: 'Feb 27 2018', y: 22},
                {x: 'Feb 28 2018', y: 18},
                {x: 'Mar 01 2018', y: 15},
                {x: 'Mar 02 2018', y: 20},
                {x: 'Mar 03 2018', y: null},
                {x: 'Mar 04 2018', y: 24},
                {x: 'Mar 05 2018', y: 28},
                {x: 'Mar 06 2018', y: 32},
                {x: 'Mar 07 2018', y: 36},
                {x: 'Mar 08 2018', y: 40},
                {x: 'Mar 09 2018', y: null},
                {x: 'Mar 10 2018', y: 45},
                {x: 'Mar 11 2018', y: 50},
                {x: 'Mar 12 2018', y: 55},
                {x: 'Mar 13 2018', y: null},
                {x: 'Mar 14 2018', y: 60},
                {x: 'Mar 15 2018', y: 58},
                {x: 'Mar 16 2018', y: 55},
                {x: 'Mar 17 2018', y: 52},
                {x: 'Mar 18 2018', y: 48},
                {x: 'Mar 19 2018', y: null},
                {x: 'Mar 20 2018', y: 44},
                {x: 'Mar 21 2018', y: 40},
                {x: 'Mar 22 2018', y: 36},
                {x: 'Mar 23 2018', y: 32},
                {x: 'Mar 24 2018', y: 28},
                {x: 'Mar 25 2018', y: 24},
                {x: 'Mar 26 2018', y: null},
                {x: 'Mar 27 2018', y: 20},
                {x: 'Mar 28 2018', y: 18},
                {x: 'Mar 29 2018', y: 22},
                {x: 'Mar 30 2018', y: 26},
                {x: 'Mar 31 2018', y: 30},
                {x: 'Apr 01 2018', y: 34},
                {x: 'Apr 02 2018', y: 38},
                {x: 'Apr 03 2018', y: null},
                {x: 'Apr 04 2018', y: 42},
                {x: 'Apr 05 2018', y: 46},
                {x: 'Apr 06 2018', y: 50},
                {x: 'Apr 07 2018', y: null},
                {x: 'Apr 08 2018', y: 55},
                {x: 'Apr 09 2018', y: 60},
                {x: 'Apr 10 2018', y: 65},
              ] ,
        },
    ];

    const options = {
        chart: {
            type: 'area',
            height: 350,
            animations: {
                enabled: false,
            },
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'straight',
        },
        fill: {
            opacity: 0.8,
            type: 'pattern',
            pattern: {
                style: ['verticalLines', 'horizontalLines'],
                width: 5,
                height: 6,
            },
        },
        markers: {
            size: 5,
            hover: {
                size: 9,
            },
        },
        title: {
            text: 'Network Monitoring',
        },
        tooltip: {
            intersect: true,
            shared: false,
        },
        theme: {
            palette: 'palette1',
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            title: {
                text: 'Bytes Received',
            },
        },
    };

    return (
        <>
            <div id="chart" className='bg-stone-900 w-full grow'>
                <ReactApexChart options={options} series={series} type="area" height={350} />
            </div>
        </>
    );
}

export default Areachart;
