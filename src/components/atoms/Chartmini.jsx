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
                color: "blue",
            },
        ],
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
    }

    return (
        <>
            <ApexCharts options={options} series={options.series} type="area" />  
        </>
    );
}

export default Chartmini;
