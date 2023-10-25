import { useEffect, useContext } from 'react';
import DevicesContext from '../../contexts/DevicesContext';
import ApexCharts from 'react-apexcharts';

function Focochart() {
    const id=1
    const { Devices, setDevices } = useContext(DevicesContext);  

  useEffect(() => {
    // !start chart
    // if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
    //     const chart = new ApexCharts(document.getElementById("area-chart"), options);
    //     chart.render();
    // }
    // !end chart
        if (Array.isArray(Devices) && Devices[0].status === 1) {
            // const index = Devices.findIndex(device => device.id === 1);
            const interval = setInterval(() => {
                if (Array.isArray(Devices) && Devices[0].status === 1) {
                    const index = Devices.findIndex(device => device.id === id);
                    if (index !== -1) {
                        console.log(`Index del dispositivo con ID ${id}: ${index}`);
                        console.log("🚀 ~ file: Chartmini.jsx:19 ~ useEffect ~ Devices:", JSON.stringify(Devices[index]));
                    }
                } else {
                    console.log("🚀 ~ file: Chartmini.jsx:83 ~ useEffect ~ Devices[0].status:", Devices[0].status);
                }
            }, 10000); // 40000 milisegundos = 40 segundos

            // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
            return () => clearInterval(interval);
            // if (index !== -1) {
            //     console.log(`Index del dispositivo con ID ${id}: ${index}`);
            //     console.log("🚀 ~ file: Chartmini.jsx:19 ~ useEffect ~ Devices:",JSON.stringify( Devices[index]))
            // }
        } else {
            console.log("🚀 ~ file: Chartmini.jsx:83 ~ useEffect ~ Devices[0].status:", Devices[0].status)
        }
    }, [Devices])
    
    return ( 
        <>
            {/* <ApexCharts options={options} series={options.series} type="area" /> */}
        </>
     );
}

export default Focochart;