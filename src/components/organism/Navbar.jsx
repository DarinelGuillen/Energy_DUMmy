import "../../assets/styles/Navbar.css";
import SearchIcon from "../../assets/img/SearchIcon.svg";
import plus from "../../assets/img/plus.svg";
import img from "../../assets/img/lightNotBack.png"

function Navbar() {
    return (
        <>
            <div className="header">
                <div className="left">
                    <span className="logoNav">
                        <span>
                            ⯃
                            <i className="logoNav-title">WE</i>
                            <i className="logoNav-badge">DUM</i>
                        </span>
                    </span>
                    House 1</div>
                <div className="menu-right">
                    <a className="link">
                        <div className="title">
                            <img id="icon1" src={SearchIcon} alt="Search Icon" />
                        </div>
                        <div className="bar"></div>
                    </a>
                    <a className="link">
                        <div className="title">
                            <img id="icon2" src={plus} alt="Plus Icon" />
                        </div>
                        <div className="bar"></div>
                    </a>
                </div>
            </div>
            <div className="img-right">
                <img src={img} alt="light img" />
            </div>
        </>
    );
}

export default Navbar;
