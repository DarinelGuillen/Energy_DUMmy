import { useEffect } from 'react';
import ApexCharts from 'react-apexcharts';


function Chartmini() {
    useEffect(() => {
        if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
            const chart = new ApexCharts(document.getElementById("area-chart"), options);
            chart.render();
        }
    }, []);
    let options = {
        chart: {
            type: "area",
            fontFamily: "Inter, sans-serif",
            dropShadow: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
            title: 'Device Usage',
            subtitle: 'February 2023',
            animations: {
                enabled: true,
                easing: '',
                duration: 1000
            }
        },
        dataLabels: {
            enabled: false,
        },
        grid: {
            show: false,
            strokeDashArray: 0,
        },
        series: [
            {
                name: "Device",
                data: [6500, 6418, 6456, 6526, 6356, 6456],
                fill: {
                    type: 'gradient',
                    gradient: {
                        colors: ['#00FFFF', '#0000FF']
                    }
                },
                stroke: '#000000',
                markers: {
                    size: 5,
                    color: '#000000'
                }
            }
        ],
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        legend: {
            show: true
        }
    };

    return (
        <>
            <ApexCharts options={options} series={options.series} type="area" />  
        </>
    );
}

export default Chartmini;
