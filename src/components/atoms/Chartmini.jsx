import { useEffect, useContext } from 'react';
import ApexCharts from 'react-apexcharts';
import DevicesContext from '../../contexts/DevicesContext';

function Chartmini(id) {
    const { Devices, setDevices } = useContext(DevicesContext);  

    useEffect(() => {
        if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
            const chart = new ApexCharts(document.getElementById("area-chart"), options);
            chart.render();
        }

      // console.log("🚀 ~ file: Chartmini.jsx:14 ~ useEffect ~ id:", id)

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
                name: "Device main foco",
                data: [5, 5, 5, 6, 8, 9],
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
