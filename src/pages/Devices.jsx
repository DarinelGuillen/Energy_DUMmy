
import Navbar from "../components/organism/Navbar";
import ContainerTI from "../components/organism/ContainerTI";
import Cardframe from "../components/organism/CardFrame";
import Subnavbar from "../components/organism/Subnavbar";
import "../assets/styles/Devices.css"
function Devices() {
    return (
        <>
        <div className="MainDeviceContainer">
          <Navbar />
          <ContainerTI/>
          <Cardframe/>
          <Subnavbar />
        </div>
        </>
      );
}

export default Devices;